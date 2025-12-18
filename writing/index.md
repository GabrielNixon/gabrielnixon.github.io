---
title: Writing
---

<p class="muted">Essays and notes. Direct, research-first.</p>

<ul class="writing-list">
  {% for post in site.posts %}
    <li class="writing-item">
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      <div class="meta">{{ post.date | date: "%B %d, %Y" }}</div>
      {% if post.excerpt %}<p class="meta">{{ post.excerpt | strip_html | truncate: 160 }}</p>{% endif %}
    </li>
  {% endfor %}
</ul>
