---
title: "Lab"
layout: gridlay
sitemap: false
permalink: /lab/
---

## Text-as-Data (TaDa) Research Group
#### *Interested in Joining the Lab?*

I welcome inquiries from prospective Ph.D. students, current OU students, and external research collaborators. Please read my **[Mentorship & Advising]({{ '/lab/mentorship/' | relative_url }})** page before reaching out.

## Upcoming Events

Explore TaDa's events and activities page for invited talks and other research activities. Dates and participation details will be posted as they are confirmed.

**[View all TaDa events]({{ '/lab/events/' | relative_url }})**

## PI

<div class="section-card">
<div class="pi-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}" class="pi-photo" alt="{{ site.name }}" loading="lazy">
<div>
<h3 class="pi-name">{{ site.name }}</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ site.title }}, University of Oklahoma</p>
<div class="pi-links">
{% if site.email %}<a href="mailto:{{ site.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if site.links.google_scholar and site.links.google_scholar != "" %}<a href="{{ site.links.google_scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if site.links.cv and site.links.cv != "" %}<a href="{{ site.url }}{{ site.baseurl }}/{{ site.links.cv }}" class="icon-link" title="CV"><i class="ai ai-cv"></i></a>{% endif %}
{% if site.links.github and site.links.github != "" %}<a href="{{ site.links.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
{% if site.links.researchgate and site.links.researchgate != "" %}<a href="{{ site.links.researchgate }}" class="icon-link" title="ResearchGate"><i class="ai ai-researchgate"></i></a>{% endif %}
</div>

</div>
</div>
</div>

{% if site.data.team_members.size > 0 %}
## Current Members 

<div class="team-grid">
{% for member in site.data.team_members %}
<div class="team-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ member.photo }}" class="team-photo" alt="{{ member.name }}" loading="lazy">
<h4 class="team-name">{{ member.name }}</h4>
<p class="team-info">{{ member.info }}</p>
<p class="team-year">{{ member.year }}</p>
<div class="team-links">
{% if member.email %}<a href="mailto:{{ member.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if member.website %}<a href="{{ member.website }}" class="icon-link" title="Website"><i class="fa-solid fa-house"></i></a>{% endif %}
{% if member.scholar %}<a href="{{ member.scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if member.github %}<a href="{{ member.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
</div>
</div>
{% endfor %}
</div>
{% endif %}

{% if site.data.collab and site.data.collab.size > 0 %}
## External Student Collaborators

<div class="team-grid">
{% for member in site.data.collab %}
<div class="team-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ member.photo }}" class="team-photo" alt="{{ member.name }}" loading="lazy">
<h4 class="team-name">{{ member.name }}</h4>
<p class="team-info">{{ member.info }}</p>
<p class="team-year">{{ member.year }}</p>
<div class="team-links">
{% if member.email %}<a href="mailto:{{ member.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if member.website %}<a href="{{ member.website }}" class="icon-link" title="Website"><i class="fa-solid fa-house"></i></a>{% endif %}
{% if member.scholar %}<a href="{{ member.scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if member.github %}<a href="{{ member.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
</div>
</div>
{% endfor %}
</div>
{% endif %}

{% if site.data.alumni.size > 0 %}
## Past Members

<div class="section-card">
<table class="alumni-table">
<thead>
<tr><th>Name</th><th>Duration</th><th>Current Position</th></tr>
</thead>
<tbody>
{% for member in site.data.alumni %}
<tr>
<td>{{ member.name }}</td>
<td>{{ member.duration }}</td>
<td>{{ member.info }}</td>
</tr>
{% endfor %}
</tbody>
</table>
</div>
{% endif %}

## How we Work

**Our Attitude: Interests-Driven Consistency**

Research does not thrive on logging endless hours - it thrives on genuine interest, curiosity, and passion. The best researchers do not just do tasks; they carry their projects with them because the questions truly matter to them. When you are deeply interested in a problem, it becomes natural to keep thinking, exploring, and pushing forward. Interest fuels persistence, and joy in the process makes progress sustainable.

**Our Focus: Information and Knowledge Systems**

Tools for analyzing text and data can reveal valuable patterns, but their results depend on how information was collected, described, and organized. Our group studies those underlying choices while developing methods and tools that researchers and information professionals can use in practice. Our work spans knowledge organization, digital libraries, text mining, and responsible AI. Across these areas, we adapt existing methods and build new approaches around the needs of the people using them. Our goal is research that is methodologically rigorous, transparent about its limits, and useful beyond the lab.

**Lab Culture**

- Shared Success — A student’s success is my success. I am committed to investing in your growth and supporting your journey toward becoming an independent researcher. Early on, I provide close guidance, including technical and implementation details when needed. As you grow in confidence and independence, I step back so you can take the lead.
- Excellence in Every Dimension — Success is not only about technical skills. It depends on the rigor of our methods, the depth of our analysis, the clarity of our communication, and the kindness we show one another. We aim for excellence across all these dimensions.


## Tools We Use

Our lab use **Google Colab and Python** for most computational work, with **R** for projects where it is a better fit. We take collaborative notes in **HackMD**, manage references in **Zotero**, and write papers in **Overleaf**. **Discord** is our space for day-to-day conversations. We use **Dropbox** for shared project files and **GitHub** for code and version history.

You do not need to know every tool before joining. New members receive access to the tools their project needs and an introduction to our shared notes, files, and code repositories.
