---
layout: full_text
permalink: /archives/

title: Skatepark Archives
---
<div class="col six">
  <strong>Cities</strong><hr>
  <ul>
    {% for post in site.categories.city %}
      <li><a href="{{ post.permalink }}">{{ post.title }}, {{ post.province }}</a></li>
    {% endfor %}
  </ul>
</div>
<div class="col six">
  <strong>Parks</strong><hr>
  <ul>
    {% for post in site.categories.park %}
      <li><a href="{{ post.permalink }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>