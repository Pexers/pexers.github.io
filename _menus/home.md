---
layout: default
title: HOME
icon: "fas fa-home"
order: 1
permalink: /
---

# Welcome to my GitHub Pages website

Here you'll find guides, hands-on electronics projects, and practical tips for repairing and upgrading devices. Explore the latest cards below, or browse the menu for more resources and information.

<div class="card-container">
{%- assign sorted_cards = site.cards | sort: 'date' | reverse -%}
{%- for card in sorted_cards -%}
    <a href="{{ card.url }}" class="card">
    <div class="card-content">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
        <small><i class="fa-regular fa-calendar"></i> {{ card.date | date: "%b %-d, %Y" }}</small>
    </div>
    <img src="{{ card.image }}" alt="Card image" class="card-image">
</a>
{%- endfor -%}
</div>
