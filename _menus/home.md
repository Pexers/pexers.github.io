---
layout: default
title: HOME
icon: "fas fa-home"
order: 1
permalink: /
---

# Welcome to My Site

This is the homepage of my GitHub Pages site using the Midnight theme.

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

## About

Add some information about yourself or your project here.

## Features

- Built with Jekyll
- Using the Midnight theme
- Hosted on GitHub Pages

## Contact

You can reach me at [your-email@example.com](mailto:your-email@example.com)
