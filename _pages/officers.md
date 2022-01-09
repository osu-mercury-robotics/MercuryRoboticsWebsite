---
layout: header_page
title: Officers
nav: true
permalink: /officers/
importance: 3
display_categories: [Current Officers, Positions]
description: fix formatting later lol - content is roughly this
---

<div class="officer-list">
{%- assign sorted_officers = site.officers | sort: "importance" %}
{% for officer in sorted_officers %}
    {% if officer.name %}
        <div class="officer" id="{{officer.position}}" style="padding-bottom:1rem;">
            <h3>{{ officer.name }} - {{ officer.position }}</h3>
            <h3>{{officer.major}}</h3>
            <h3>{{officer.email}}</h3>
            <p>{{ officer.content | markdownify }}</p>
        </div>
    {% endif %}
{% endfor %}
</div>