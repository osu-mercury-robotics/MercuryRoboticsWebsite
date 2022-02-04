---
layout: header_page
title: Task List
nav: true
permalink: /tasks/
description:
importance: 4
---




<!-- pages/tasks.md -->
<div class="tasks">

    {% assign num = number_of_elements %}
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <h2>Mechanical</h2>
                <ul class="task-list" id="Mechanical">

                </ul>
            </div>
            <div class="col-sm-4">
                <h2>Electrical</h2>
                <ul class="task-list" id="Electrical">

                </ul>
            </div>
            <div class="col-sm-4">
                <h2>Controls</h2>
                <ul class="task-list" id="Controls">

                </ul>
            </div>
        </div>
    </div>
</div>

<template id="itemTemplate">
    <li class="task-list-item">
        <div class="row">
            <h1 class="col-sm-8 my-auto" id="title"></h1>
            <div class="col-sm-4">
                <span class="badge shadow-none bg-danger mx-auto" style="color: var(--global-text-color-opposite) !important" id="priority"></span>
                <span class="badge shadow-none bg-light mx-auto" style="color: black !important;" id="phase"></span>
                <span class="badge shadow-none bg-light mx-auto" style="color: black !important;" id="date"></span>
            </div>
        </div>
        
    </li>
</template>

<script>
window.onload = function() {
// Populate dictionary with key-value pairs of teamid/team name
var teamDict = {};
var priorityDict = {};
var statusDict = {};
var phaseDict = {};

// Parse project fields to determine unique IDs for teams, priorities, and status of items
fetch("{{site.baseurl}}/assets/project_fields.json")
.then(response => {
    return response.json();
})
.then(data => {
    var arr = data.data.organization.projectNext.fields.nodes;
    for(node of arr) {
        if(node.name == "Team") {
            var settings = JSON.parse(node.settings);
            console.log(settings);
            for (item of settings.options) {
                teamDict[item.id] = item.name;
            }
            console.log(teamDict);
        }
        if(node.name == "Priority") {
            var settings = JSON.parse(node.settings);
            console.log(settings);
            for (item of settings.options) {
                priorityDict[item.id] = item.name;
            }
            console.log(priorityDict);
        }
        if(node.name == "Status") {
            var settings = JSON.parse(node.settings);
            console.log(settings);
            for (item of settings.options) {
                statusDict[item.id] = item.name;
            }
            console.log(statusDict);
        }
        if(node.name == "Phase") {
            var settings = JSON.parse(node.settings);
            console.log(settings);
            for (item of settings.options) {
                phaseDict[item.id] = item.name;
            }
            console.log(phaseDict);
        }
    }
})


fetch("{{site.baseurl}}/assets/project_data.json")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    var newTaskItems;
    var arr = data.data.organization.projectNext.items.nodes;
    for(i = 0; i < arr.length; i++) {
        var fieldsArr = arr[i].fieldValues.nodes;
        var team;
        var priority;
        var status;
        var date;
        var phase;

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

        var temp = document.querySelector('#itemTemplate');
        
        temp.content.querySelector('#title').innerHTML = arr[i].title;
        if (priority) temp.content.querySelector('#priority').innerHTML = priorityDict[priority];
        if (phase) temp.content.querySelector('#phase').innerHTML = phaseDict[phase];
        if(date) temp.content.querySelector('#date').innerHTML = date.toLocaleString().split(',')[0];

        var element = temp.content.querySelector('#priority');
        element.classList.remove("bg-danger");
        element.classList.remove("bg-warning");
        element.classList.remove("bg-success");

        
        if(priorityDict[priority] == "High") {
            element.classList.add("bg-danger");
        } else if(priorityDict[priority] == "Medium") {
            element.classList.add("bg-warning");
        } else {
            element.classList.add("bg-success");
        }

        console.log(teamDict[team]);
        var clone = document.importNode(temp.content, true);
        if(team) {
            var e = document.getElementById(teamDict[team]);
            if(e != null) {
                e.appendChild(clone);
            }
        }
        

    }

    // sort new elements and add them

});
}
</script>