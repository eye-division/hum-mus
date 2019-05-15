---
id: 107
title: Blog
titleen: Blog
date: 2016-08-18T12:19:48+01:00
author: support@eyedivision.com
layout: page
guid: http://www.hum-mus.org/?page_id=107
permalink: "/en/blog/"
sidebar: "sidebar.html"
---
<ul>
  {% for post in site.posts %}
    {% if post.permalink contains "en/" %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
    {% endif %}
  {% endfor %}
</ul>