---
layout: default
title: resources
permalink: /resources/
description: Resources...
nav: true
display_categories: [ROS, EDA]
---

<!-- pages/projects.md -->
<div class="resources">
  <div class="header-bar">
    <h1>{{ page.title }}</h1>
    <h2>{{ page.description }}</h2>
  </div>

  <ul class="post-list">
    {% for project in site.resources %}
        {% include resource.html %}
    {% endfor %}
  </ul>
</div>

