---
layout: header_page
title: Robot Wiki
permalink: /resources/
description: A collection of various technical resources
nav: true
display_categories: [General, Electromechanical, Mechanical, Electronics, Programming, ROS, Website]
importance: 2
testVar: hello
---
<script>
// Logic behind search functionality
$(document).ready(function() {

  $("#search_bar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    // For each card, check if any of its innerHTML contains the input string (includes title, description, tags, categories)
    $(".card").each(function() {
      var r = $(this).text().toLowerCase().indexOf(value) > -1;
      if(r) { //If a card is becoming visible, ensure its parent is visible
        $(this).closest(".card-parent").toggle(true);
      }
      $(this).toggle(r);
    });

    $(".card-parent").each(function() {
      $(this).toggle($(this).find(".card:visible").length > 0);
    });
    $(".card:visible").each(function() {
      console.log($(this)[0]);
    });
  });
});
</script>


<div style="padding-left: 15px; padding-right: 15px;">
  <input class="form-control searchbar shadow-sm" id="search_bar" type="text" placeholder="Search for resource">
</div>

<!-- pages/resources.md -->
<div class="resources">
  <!-- Loop through categories -->
  {%- for category in page.display_categories %}
  <div class = "container card-parent" id="{{category}}">
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