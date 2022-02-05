
class TaskItem {
    constructor(title, team) {
        this.title = title;
        this.team = team;
    }

    setPriority(priority) {
        this.priority = priority;
    }
    setStatus(status) {
        this.status = status;
    }
    setPhase(phase) {
        this.phase = phase;
    }
    setDate(date) {
        this.date = date;
    }
    setTemplate(template) {
        this.template = template;
    }

    buildListElement() {

        var clone = document.importNode(this.template.content, true);
        clone.querySelector('#title').innerHTML = this.title;
        if (this.priority) clone.querySelector('#priority').innerHTML = this.priority;
        if (this.phase) clone.querySelector('#phase').innerHTML = this.phase;
        if (this.date) clone.querySelector('#date').innerHTML = this.date;
        clone.querySelector('#team').innerHTML = this.team;
        
        var classList = clone.querySelector("#priority").classList;
        switch(this.priority) {
            case "High":    classList.add("bg--danger"); break;
            case "Medium":  classList.add("bg-warning"); break;
            case "Low":     classList.add("bg-success"); break;
            default:        classList.add("bg-success");
        }

        var item = clone.querySelector('.task-list-item');
        switch(this.status) {
            case "Backlog":     item.style.backgroundColor = 'CornflowerBlue'; break;
            case "In Progress": item.style.backgroundColor = 'Salmon'; break;
            case "Complete":    item.style.backgroundColor = 'SeaGreen'; break;
            default:            item.style.backgroundColor = 'CornflowerBlue'
        }
        
        return clone;
    }
}

async function ParseTaskJSON(listItemTemplate) {

    // Populate dictionary with key-value pairs of teamid/team name
    var teamDict = {};
    var priorityDict = {};
    var statusDict = {};
    var phaseDict = {};
    var newTaskItems = {};

    // Parse project fields to determine unique IDs for teams, priorities, and status of items
    const fieldsResponse = await fetch("/assets/project_fields.json")
    const fieldsJson = await fieldsResponse.json();

    var arr = fieldsJson.data.organization.projectNext.fields.nodes;
    for(node of arr) {
        if(node.name == "Team") {
            var settings = JSON.parse(node.settings);
            for (item of settings.options) {
                teamDict[item.id] = item.name;
            }
        }
        if(node.name == "Priority") {
            var settings = JSON.parse(node.settings);
            for (item of settings.options) {
                priorityDict[item.id] = item.name;
            }
        }
        if(node.name == "Status") {
            var settings = JSON.parse(node.settings);
            for (item of settings.options) {
                statusDict[item.id] = item.name;
            }
        }
        if(node.name == "Phase") {
            var settings = JSON.parse(node.settings);
            for (item of settings.options) {
                phaseDict[item.id] = item.name;
            }
        }
    }

    const itemsResponse = await fetch("/assets/project_data.json");
    const itemsJson = await itemsResponse.json();
    
    // Split new items into teams
    var mechItems = [];
    var controlItems = [];
    var elecItems = [];
    var noTeamItems = [];

    arr = itemsJson.data.organization.projectNext.items.nodes;
    for(i = 0; i < arr.length; i++) {
        var fieldsArr = arr[i].fieldValues.nodes;
        var team,  priority, status, date, phase;

        for(j = 0; j < fieldsArr.length; j++) {
            if(fieldsArr[j].projectField.name == "Team") {
                team = fieldsArr[j].value;
            }
            else if(fieldsArr[j].projectField.name == "Priority") {
                priority = fieldsArr[j].value;
            }
            else if(fieldsArr[j].projectField.name == "Status") {
                status = fieldsArr[j].value;
            }
            else if(fieldsArr[j].projectField.name == "Completion Date") {
                date = new Date(fieldsArr[j].value);
            }
            else if(fieldsArr[j].projectField.name == "Phase") {
                phase = fieldsArr[j].value;
            }
        }
        
        // Build new item using parsed data
        if(team) {
            var item = new TaskItem(arr[i].title, teamDict[team]);
            if(date)        item.setDate(date.toLocaleString().split(',')[0]);
            if(priority)    item.setPriority(priorityDict[priority]);
            if(status)      item.setStatus(statusDict[status]);
            if(phase)       item.setPhase(phaseDict[phase]);

            item.setTemplate(listItemTemplate);
            if(teamDict[team] == "Mechanical") {
                mechItems.push(item);
            } else if (teamDict[team] == "Electrical") {
                elecItems.push(item);
            }
            else if(teamDict[team] == "Controls") {
                controlItems.push(item);
            } else {
                noTeamItems.push(item);
            }
        }
    }
    newTaskItems["Mechanical"] = mechItems;
    newTaskItems["Electrical"] = elecItems;
    newTaskItems["Controls"] = controlItems;
    newTaskItems["No Team"] = noTeamItems;
    return newTaskItems;
}