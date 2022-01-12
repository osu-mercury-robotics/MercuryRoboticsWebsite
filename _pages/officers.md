---
layout: header_page
title: Officers
nav: true
permalink: /officers/
importance: 3
display_categories: [Current Officers, Positions]
description: Our current officer team and their responsibilities
---


<div class="officers-page">
    <h2 class="category">Current Officers</h2>
    {%- assign sorted_officers = site.officers | sort: "importance" %}
    {% for officer in sorted_officers %}
        {% if officer.name and officer.type == "officer" %}
            <div class="container card officer-post">
                <div class="row">
                    <div class="col-sm-3 my-auto">
                        <img src="{{site.baseurl}}/{{officer.img}}" class="img-fluid officer-headshot shadow-lg " alt="Responsive image">
                    </div>
                    <div class="col-sm-9 my-auto">
                        <h4 class="officer-name">{{officer.name}}</h4>
                        <h5 class="officer-position">{{officer.position}}</h5>
                        <p class="officer-info">{{officer.major}}</p>
                        <p class="officer-info">{{officer.email}}</p>
                    </div>
                </div>
            </div>
        {% endif %}
    {% endfor %}
    <h2 class="category">Technical Leads</h2>
    <div>
        {% for officer in sorted_officers %}
            {% if officer.name and officer.type == "lead" %}
            <div class="container card officer-post">
                <div class="row">
                    <div class="col-sm-3 my-auto">
                        <img src="{{site.baseurl}}/{{officer.img}}" class="img-fluid officer-headshot shadow-lg " alt="Responsive image">
                    </div>
                    <div class="col-sm-9 my-auto">
                        <h4 class="officer-name">{{officer.name}}</h4>
                        <h5 class="officer-position">{{officer.position}}</h5>
                        <p class="officer-info">{{officer.major}}</p>
                        <p class="officer-info">{{officer.email}}</p>
                    </div>
                </div>
            </div>
            {% endif %}
        {% endfor %}
    </div>
    <h2 class="category">Position Responsibilities</h2>
    <div>
        {% for officer in sorted_officers %}
            <div class="row">
                <div class="col">
                    <h4 class="officer-position">{{officer.position}}</h4>
                    <p class="officer-info">{{officer.content}}</p>
                </div>
            </div>
        {% endfor %}
    </div>
</div>