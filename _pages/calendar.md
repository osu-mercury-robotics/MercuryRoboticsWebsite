---
layout: header_page
title: Calendar
nav: true
permalink: /calendar/
description: "potential calendar?"
importance: 4
---




<!-- pages/calendar.md -->
<div class="calendar">

    {% assign num = number_of_elements %}
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <h2>Mechanical</h2>
                <ul class="post-list" id="mechanical-list">

                </ul>
            </div>
            <div class="col-sm-4">
                <h2>Electrical</h2>
                <ul class="post-list" id="electrical-list">

                </ul>
            </div>
            <div class="col-sm-4">
                <h2>Controls</h2>
                <ul class="post-list" id="controls-list">

                </ul>
            </div>
        </div>
    </div>
</div>

<script>
var number_of_elements = 5;

var divTag = document.createElement("li");
divTag.id = "test";
divTag.innerHTML="Testing here";
document.getElementById("controls-list").appendChild(divTag);

console.log("Fetching!");

fetch("{{site.baseurl}}/assets/project_data.json")
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    var arr = data.data.organization.projectNext.items.nodes;
    for(i = 0; i < arr.length; i++) {
        console.log(arr[i].title);
        var fieldsArr = arr[i].fieldValues.nodes;
        var team;
        for(j = 0; j < fieldsArr.length; j++) {
            if(fieldsArr[j].projectField.name == "Team") {
                team = fieldsArr[j].value;
            }
        }
        console.log(team);
        var divTag = document.createElement("li");
        divTag.id = "test"+i;
        divTag.innerHTML=arr[i].title;

        if(team == "8eecd64f") {
            document.getElementById("electrical-list").appendChild(divTag);
        } else if(team == "a2f71cb4") {
            document.getElementById("mechanical-list").appendChild(divTag);
        } else if (team == "e5d6ed6d") {
            document.getElementById("controls-list").appendChild(divTag);
        }
        
    }
});


// var jsonObj = JSON.parse(obj);
// console.log(jsonObj);

// var test = '{"name":"John", "age":30, "city":"New York"}';

// for (item in obj.data.node.items.nodes) {}

// document.getElementById("mechanical-list").innerHTML = jsonObj.data.node.items.nodes[0].id;

</script>

<!-- Write a script that dynamically generates the tags using JSON, after basic HTML is setup. Need to be able to parse a JSON first - then setup the GitHub thing. Or should I do that first? -->