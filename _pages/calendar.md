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

var test = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(test);

document.getElementById("mechanical-list").innerHTML = obj.name;

</script>

<!-- Write a script that dynamically generates the tags using JSON, after basic HTML is setup. Need to be able to parse a JSON first - then setup the GitHub thing. Or should I do that first? -->