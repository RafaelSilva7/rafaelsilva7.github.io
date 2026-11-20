---
permalink: /
title: "About"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

I am a PhD student in Computer Science and Computational Mathematics at the Institute of Mathematical and Computer Sciences, University of São Paulo (ICMC-USP), advised by Diego Furtado Silva. My research focuses on machine learning for time series, particularly self-supervised representation learning and the adaptation of foundation models for electrocardiogram (ECG) analysis when labeled data are scarce.

I hold an MSc in Computer Science from the Federal University of São Carlos (UFSCar) and a bachelor's degree in Computer Science from the Federal University of Tocantins (UFT). My earlier research investigated time-series alignment and partial automation of seismic-to-well ties.

## Research interests

- Self-supervised representation learning for physiological time series
- ECG foundation models and learning with limited labeled data
- Multivariate time-series classification and multimodal learning
- Time-series similarity, alignment, and Dynamic Time Warping

[More about my research]({{ '/research/' | relative_url }})

## Selected publications

{% assign selected_publications = site.publications | where: "selected", true | sort: "year" | reverse %}
{% for publication in selected_publications %}
  {% include publication-entry.html publication=publication %}
{% endfor %}

[All publications]({{ '/publications/' | relative_url }}) · [Google Scholar]({{ site.author.googlescholar }})
