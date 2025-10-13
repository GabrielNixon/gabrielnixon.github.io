---
title: Resources
layout: default
---

<h2>Resources</h2>
<p class="sub">
Notes, guides, and posts. Subscribe via <a href="{{ '/feed.xml' | relative_url }}">RSS</a>.
</p>

{%- comment -%}
If you want ONLY posts categorized as "resources", keep the first line.
If you want ALL posts, replace "res_posts" with "site.posts" below.
{%- endcomment -%}
{%- assign res_posts = site.posts | where_exp: "p", "p.categories contains 'resources'" -%}
{%- if res_posts.size == 0 -%}
  {%- assign res_posts = site.posts -%}
{%- endif -%}

{%- assign groups = res_posts | group_by_exp: "p", "p.date | date: '%Y'" -%}
{%- assign groups = groups | sort: "name" | reverse -%}

{%- for g in groups -%}
  <h3 style="margin-top:1.5rem">{{ g.name }}</h3>
  <div class="section">
    {%- for post in g.items -%}
      <div class="card">
        <a href="{{ post.url | relative_url }}" style="text-decoration:none">
          <div style="display:flex;justify-content:space-between;gap:.8rem;flex-wrap:wrap">
            <div class="post-title" style="font-weight:600">{{ post.title }}</div>
            <div class="post-meta">{{ post.date | date: "%-d %b %Y" }}</div>
          </div>
          {%- if post.abstract -%}
            <div class="post-abstract" style="margin-top:.35rem">{{ post.abstract }}</div>
          {%- elsif post.excerpt -%}
            <div class="post-abstract" style="margin-top:.35rem">{{ post.excerpt | strip_html | truncate: 160 }}</div>
          {%- endif -%}
          {%- if post.tags and post.tags.size > 0 -%}
            <div style="margin-top:.4rem">
              {%- for t in post.tags -%}
                <span class="tag">#{{ t }}</span>
              {%- endfor -%}
            </div>
          {%- endif -%}
        </a>
      </div>
    {%- endfor -%}
  </div>
{%- endfor -%}
