---
layout: page
title: Home
id: home
permalink: /
---

# Ласкаво просимо!

<p style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px;">
  Зазирніть на [[філософія|першу сторінку]] та відкривайте для себе світ філософії.
</p>

<strong>Нещодавно оновлені нотатки</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>

<p>Тут зібрані всі сторінки та їхні зв'язки, візуалізовані у вигляді графа</p>

{% include notes_graph.html %}