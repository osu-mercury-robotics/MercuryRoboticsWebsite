---
layout: header_page
title: resources
permalink: /resources/
description: a collection of various technical resources
nav: true
display_categories: [ROS, EDA]
---

<!-- pages/resources.md -->
<div class="resources">

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