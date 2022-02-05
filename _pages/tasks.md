---
layout: header_page
title: Task List
nav: true
permalink: /tasks/
description: In progress, planned, and completed goals for our projects.
importance: 4
---

[DORADO project](https://github.com/orgs/osu-mercury-robotics/projects/1)


<!-- pages/tasks.md -->
<div class="tasks">
    {% assign num = number_of_elements %}
    <div class="container">
        <h2 class="sub-category">In Progress</h2>
        <div class="row">
            <div class="col-sm-4">
                <ul class="task-list" id="Mechanical In Progress">
                </ul>
            </div>
            <div class="col-sm-4">
                <ul class="task-list" id="Electrical In Progress">
                </ul>
            </div>
            <div class="col-sm-4">
                <ul class="task-list" id="Controls In Progress">
                </ul>
            </div>
        </div>
        <h2 class="sub-category">Planned</h2>
        <div class="row">
            <div class="col-sm-4">
                <div class="category-line"></div>
                <ul class="task-list" id="Mechanical Backlog">
                </ul>
            </div>
            <div class="col-sm-4">
                <div class="category-line"></div>
                <ul class="task-list" id="Electrical Backlog">
                </ul>
            </div>
            <div class="col-sm-4">
                <div class="category-line"></div>
                <ul class="task-list" id="Controls Backlog">
                </ul>
            </div>
        </div>
        <h2 class="sub-category">Completed</h2>
        <div class="row">
            <div class="col-sm-4">
                <ul class="task-list" id="Mechanical Complete">
                </ul>
            </div>
            <div class="col-sm-4">
                <ul class="task-list" id="Electrical Complete">
                </ul>
            </div>
            <div class="col-sm-4">
                <ul class="task-list" id="Controls Complete">
                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Template for cards in list -->
<template id="itemTemplate">
    <li class="task-list-item">
        <div class="row">
            <div class="col-sm-8">
                <h1 id="title"></h1>
                <h2 id="team" class="sticky-bottom"></h2>
            </div>
            <div class="col-sm-4">
                <span class="badge shadow-none bg-danger" style="color: var(--global-text-color-opposite) !important" id="priority"></span>
                <span class="badge shadow-none bg-light" style="color: black !important;" id="phase"></span>
                <span class="badge shadow-none bg-light" style="color: black !important;" id="date"></span>
            </div>
        </div>
    </li>
</template>

<script type="text/javascript" src="{{site.baseurl}}/assets/js/taskmaker.js"></script>
<script>
window.onload = async () => {
    const listItems = await ParseTaskJSON(document.querySelector('#itemTemplate'));
    for(item of listItems["Mechanical"]) {
        console.log(item);
        document.getElementById("Mechanical " + item.status).appendChild(item.buildListElement());
    }
    for(item of listItems["Electrical"]) {
        document.getElementById("Electrical " + item.status).appendChild(item.buildListElement());
    }
    for(item of listItems["Controls"]) {
        document.getElementById("Controls " + item.status).appendChild(item.buildListElement());
    }
}
</script>