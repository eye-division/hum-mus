---
id: 109
title: Blog
date: 2016-08-18T12:19:59+01:00
author: support@eyedivision.com
layout: page
guid: http://www.hum-mus.org/?page_id=109
permalink: "/pt/blog-2/"
sidebar: "sidebar.html"
---
<ul>
  {% for post in site.posts %}
    {% if post.permalink contains "pt/" %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> <span class="date">{{ post.date | date_to_long_string }}
    </li>
    {% endif %}
  {% endfor %}
</ul>