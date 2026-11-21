---
layout: academic-home
permalink: /
title: "Biomedical AI for clinical time series"
redirect_from:
  - /about/
  - /about.html
---
<section id="home" class="home-intro">
<h1>Biomedical AI for clinical time series</h1>
<p>I am a PhD student in Computer Science and Computational Mathematics at the Institute of Mathematical and Computer Sciences, University of São Paulo (ICMC-USP), advised by Diego Furtado Silva. My research focuses on machine learning for time series, particularly self-supervised representation learning and the adaptation of foundation models for electrocardiogram (ECG) analysis when labeled data are scarce.</p>
<p>I hold an MSc in Computer Science from the Federal University of São Carlos (UFSCar) and a bachelor's degree in Computer Science from the Federal University of Tocantins (UFT). My earlier research investigated time-series alignment and partial automation of seismic-to-well ties.</p>
</section>
<section id="research">
<h2>Research Interests</h2>
<ul class="research-labels"><li><i class="fa-solid fa-heart-pulse" aria-hidden="true"></i> Clinical Machine Learning</li><li><i class="fa-solid fa-layer-group" aria-hidden="true"></i> ECG Modeling</li><li><i class="fa-solid fa-diagram-project" aria-hidden="true"></i> Representation Learning</li><li><i class="fa-solid fa-microchip" aria-hidden="true"></i> Foundation Models</li></ul>
<h3>Research topics</h3>
<ul><li>Self-supervised representation learning for physiological time series</li><li>ECG foundation models and learning with limited labeled data</li><li>Multivariate time-series classification and multimodal learning</li><li>Time-series similarity, alignment, and Dynamic Time Warping</li></ul>
<a href="{{ '/research/' | relative_url }}">More about my research →</a>

</section>
<section id="publications">
<div class="section-heading"><h2>Selected Publications</h2><a href="{{ '/publications/' | relative_url }}">View all publications →</a></div>
{% assign selected_publications = site.publications | where: "selected", true | sort: "year" | reverse %}
{% for publication in selected_publications %}
{% include publication-entry.html publication=publication %}
{% endfor %}
<a class="small-link" href="{{ site.author.googlescholar }}">Google Scholar →</a>
</section>
<section id="projects">
<h2>Research Projects</h2>
<ul class="project-list">
<li><h3>Self-supervised learning for ECG classification</h3><p>Learning from ECG signals with limited annotations, including cross-dataset learning and data-oriented training strategies.</p><a href="https://github.com/{{ site.author.github }}/tackling-low-ecg">Low-resource ECG code</a> · <a href="https://github.com/adilsonmedronha/data-driven-ecg-ssl">Data-oriented ECG code</a></li>
<li><h3>Multivariate and multimodal time-series learning</h3><p>Combining multiple signal channels and contextual data, including contextual language-informed cardiac pathology classification (CLIC).</p><a href="{{ '/publication/clic/' | relative_url }}">CLIC preprint</a> · <a href="{{ '/publication/multimodal-fusion-time-series/' | relative_url }}">Multimodal fusion paper</a></li>
<li><h3>Time-series alignment for seismic-to-well ties</h3><p>Partial automation using matching-region estimation, Dynamic Time Warping, and segmented global optimization.</p><a href="{{ '/publication/autotie/' | relative_url }}">Autotie</a> · <a href="{{ '/publication/masters-dissertation/' | relative_url }}">Master’s dissertation</a></li>
</ul>
</section>
<section id="news"><h2>Recent News</h2><p class="placeholder">Research updates will be added here.</p><!-- Replace with verified dated announcements when supplied. --></section>
<section id="cv"><h2>Curriculum Vitae</h2><p>My academic record includes doctoral research at ICMC-USP and an MSc from UFSCar.</p><p><a href="{{ site.author.lattes }}">View Lattes CV →</a> · <a href="{{ '/cv/' | relative_url }}">Education, experience and academic service →</a></p><!-- Add a PDF download when a personal CV PDF is supplied. --></section>
