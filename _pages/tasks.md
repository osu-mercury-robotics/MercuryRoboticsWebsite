---
layout: header_page
title: Task List
nav: true
permalink: /tasks/
description:
importance: 4
---

[Github project](https://github.com/orgs/osu-mercury-robotics/projects/1)


<!-- pages/tasks.md -->
<div class="tasks">

    {% assign num = number_of_elements %}
    <div class="container">
        <div class="row">
            <div class="col-sm-4">
                <h2 class="category">Mechanical</h2>
                <ul class="task-list" id="Mechanical">

                </ul>
            </div>
            <div class="col-sm-4">
                <h2 class="category">Electrical</h2>
                <ul class="task-list" id="Electrical">

                </ul>
            </div>
            <div class="col-sm-4">
                <h2 class="category">Controls</h2>
                <ul class="task-list" id="Controls">

                </ul>
            </div>
        </div>
    </div>
</div>

<!-- Template for cards in list -->
<template id="itemTemplate">
    <li class="task-list-item">
        <div class="row">
            <h1 class="col-sm-8 my-auto" id="title"></h1>
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
        document.getElementById("Mechanical").appendChild(item);
    }
    for(item of listItems["Electrical"]) {
        document.getElementById("Electrical").appendChild(item);
    }
    for(item of listItems["Controls"]) {
        document.getElementById("Controls").appendChild(item);
    }
}
</script>