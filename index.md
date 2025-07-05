---
layout: default
title: Welcome to My GitHub Pages Site
description: A Jekyll site with a beautiful sidebar navigation
---

# Welcome to My Siteeee

This is the homepage of my GitHub Pages site using the Midnight theme.

<div class="card-container">
{%- assign sorted_cards = site.cards | sort: 'date' | reverse -%}
{%- for card in sorted_cards -%}
    <a href="{{ card.url | relative_url }}" class="card">
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
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
