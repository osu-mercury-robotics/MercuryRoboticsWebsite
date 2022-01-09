---
layout: header_page
title: Resources
permalink: /resources/
description: a collection of various technical resources
nav: true
display_categories: [General, Electromechanical, Mechanical, Electronics, Programming, ROS, Website]
importance: 2
testVar: hello
---
<script>
var visibleCatArray = [];

function myFunction() {
  document.getElementById("demo").style.backgroundColor = "red";
  document.getElementById("title").innerHTML = test;
}
function addVisibleCats() {
  visibleCatArray.push("General");
}
function removeVisibleCats() {
  visibleCatArray.splice(visibleCatArray.indexOf("General"));
}

function filterCats() {
  var collection = document.getElementsByClassName("container");
  var cats = [];
  Array.from(collection).forEach(function(element) {
    if(element.id !== "") cats.push(element);
  });

  console.log(cats);

  cats.forEach(function(element) {
    console.log(element);
    element.style.display = "block";
    visibleCatArray.forEach(function(visibleCat) {
      if(element.id == visibleCat) {
        console.log(element);
        element.style.display = "none";
      }
    })
  });
}

function filterShownResults(element, result) {
  if(result) {
    element.style.display = "block";
  }
  else {
    element.style.display = "none";
  }

  return result;
}

$(document).ready(function() {

  $("#search_bar").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    // Find all elements of class "container"
    // If the element's ID does not contain the value string, hide it.

    $(".card").each(function() {
      var r = $(this).text().toLowerCase().indexOf(value) > -1;
      console.log(r);
      
      if(r) {
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


<div class = "row">
  <div class="col-sm-8">
    <input class="form-control" id="search_bar" type="text" placeholder="Search">
  </div>
  <div class="col-sm-2">
    <select class="selectpicker" multiple id="category_box">
      <option>Mustard</option>
      <option>Ketchup</option>
      <option>Barbecue</option>
    </select>
  </div>
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