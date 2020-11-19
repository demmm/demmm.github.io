---
layout: post
title: 
permalink: /news/
---

{% assign post = site.posts.first %}
{% assign content = post.content %}
<h1 class="entry-title">
{% if post.title %}
    {{ post.title }}
{% endif %}
</h1>
{{ content }}
