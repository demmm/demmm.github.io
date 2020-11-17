---
layout: default
title: News
permalink: /news/
---

<section id="archive" class="News-nav">
  {% assign postsByYear =
    site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
  <h2>{{ year.name }}</h2>
    <ul>
      {% for post in year.items %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        <!--<br>{{ post.excerpt }} -->
      {% endfor %}
    </ul>
{% endfor %}
</section>
<script>
        (function () {
                // Index of default active menus on document.ready
                var defaultActives = [ 1 ];

                var acc = document.querySelectorAll(".News-nav h2");
                var i;

                for (i = 0; i < acc.length; i++) {
                        if (defaultActives.includes(i)) {
                                acc[i].classList.add('active');
                        }
                        acc[i].addEventListener('click', function() {
                                this.classList.toggle('active');
                        });
                }
        })();
</script>
