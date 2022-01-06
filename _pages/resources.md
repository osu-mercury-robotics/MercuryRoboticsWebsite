---
layout: default
title: resources
permalink: /resources/
description: Resources...
nav: true
display_categories: [ROS, EDA]
---

<!-- pages/resources.md -->
<div class="resources">
  <div class="header-bar">
    <h1>{{ page.title }}</h1>
    <h2>{{ page.description }}</h2>
  </div>
  <!-- Loop through categories -->
  {%- for category in page.display_categories %}
  <div class = "container">
    <!-- For each category, add header -->
    <h2 class="category">{{ category }}</h2>
    {%- assign categorized_resources = site.resources | where: "category", category -%}
    {%- assign sorted_resources = categorized_resources | sort: "importance" %}
    <ul class="post-list">
      {% for resource in sorted_resources %}
          {% include resource.html %}
      {% endfor %}
    </ul>
  </div>
  {% endfor %}
</div>