---
layout: page
title: Home
id: home
permalink: /
---

<script src="{{ '/assets/js/search-script.js' | relative_url }}"></script>
<input type="text" id="search-box" placeholder="Знайти..." style="width: 100%; box-sizing: border-box;" />
<ul id="search-results"></ul>

# Ласкаво просимо!

Вся інформація, яка розміщена на цьому порталі **обовʼязково** має посилання на **джерела**.   
Кожна сторінка - це окрема **нотатка**.  
Нотатки поєднані між собою, відповідно можуть посилатись одна на одну.  
[Граф](#граф) - візуально відображає сукупність об'єктів(нотаток) із зв'язками між ними.  

<p style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px;">
  Зазирніть на [[філософія|першу сторінку]] та відкривайте для себе світ філософії.
</p>

### Нещодавно оновлені нотатки

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

## Граф

<p>Тут зібрані всі сторінки та їхні зв'язки, візуалізовані у вигляді графа</p>

{% include notes_graph.html %}

## Нотатки

<table style="text-align: left;">
  <thead>
    <tr>
      <th>Назва</th>
      <th>Ключові слова</th>
    </tr>
  </thead>
  <tbody>
    {% assign sorted_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
    {% for note in sorted_notes %}
      <tr>
        <td>
          <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
        </td>
        <td>
          {% if note.tags %}
            {% for tag in note.tags %}
              #{{ tag }}{% unless forloop.last %} {% endunless %}
            {% endfor %}
          {% else %}
            —
          {% endif %}
        </td>
      </tr>
    {% endfor %}
  </tbody>
</table>

