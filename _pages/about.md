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
</section>
<section id="research">
<h2>Research Interests</h2>
<ul class="research-labels"><li><i class="fa-solid fa-heart-pulse" aria-hidden="true"></i> Clinical Machine Learning</li><li><i class="fa-solid fa-layer-group" aria-hidden="true"></i> Time Series</li><li><i class="fa-solid fa-diagram-project" aria-hidden="true"></i> Representation Learning</li><li><i class="fa-solid fa-microchip" aria-hidden="true"></i> Foundation Models</li></ul>
<h3>Research topics</h3>
<ul><li>Self-supervised representation learning for physiological time series</li><li>ECG foundation models and learning with limited labeled data</li><li>Multivariate time-series classification and multimodal learning</li><li>Time-series similarity, alignment, and Dynamic Time Warping</li></ul>
<a href="#projects">More about my research →</a>

</section>
<section id="education">
<h2>Education</h2>
<ul class="education-list">
<li><h3>PhD in Computer Science and Computational Mathematics</h3><p>University of São Paulo (ICMC-USP) · 2023–present</p><p>Advisor: Diego Furtado Silva. Doctoral research includes a visit to Peking University under the supervision of Shenda Hong.</p></li>
<li><h3>MSc in Computer Science</h3><p>Federal University of São Carlos (UFSCar) · 2021–2023</p><p>Advisor: Diego Furtado Silva. Dissertation: <em>Partial automation of the seismic to well tie with the matching region estimation and segmented global optimization</em>. <a href="https://repositorio.ufscar.br/handle/20.500.14289/18513">Dissertation record →</a></p></li>
<li><h3>Bachelor’s degree in Computer Science</h3><p>Federal University of Tocantins (UFT) · 2017–2021</p><p>Advisor: Glenda Michele Botelho.</p></li>
</ul>
</section>
<section id="publications">
<h2>Selected Publications</h2>
<p class="publication-intro">Articles, conference papers, preprints, and other research outputs. Publication types are labeled below; years follow the published version where verified. The full publication list can be found on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
{% assign selected_publications = site.publications | where: "selected", true | sort: "year" | reverse %}
{% assign selected_journals = selected_publications | where: "publication_type", "Journal article" %}
{% assign selected_conferences = selected_publications | where: "publication_type", "Conference paper" %}
<h3 class="publication-group-title">Journal Articles</h3>
{% for publication in selected_journals %}
{% include publication-entry.html publication=publication %}
{% else %}
<p class="placeholder">Selected journal articles will be added here.</p>
{% endfor %}
<h3 class="publication-group-title">Conference Papers</h3>
{% for publication in selected_conferences %}
{% include publication-entry.html publication=publication %}
{% endfor %}
</section>
<section id="projects">
<h2>Research Projects</h2>
<p>My research concerns machine learning for time series, with a particular focus on learning useful representations from physiological signals when annotations are limited.</p>
<ul class="project-list">
<li><h3>Self-supervised learning and ECG foundation models</h3><p>I study self-supervised learning for ECG classification, including cross-dataset learning, data-oriented training strategies, and adapting pretrained models to tasks with limited labeled data. This is the focus of my doctoral research at ICMC-USP, supervised by Diego Furtado Silva and supported by FAPESP.</p><p>Related work includes <em>Tackling Low-Resource ECG Classification with Self-supervised Learning</em>, <em>Exploring Data-Oriented Strategies for Training ECG Self-supervised Models</em>, and collaborative work on Chagas disease detection.</p><a href="https://github.com/{{ site.author.github }}/tackling-low-ecg">Low-resource ECG code</a> · <a href="https://github.com/adilsonmedronha/data-driven-ecg-ssl">Data-oriented ECG code</a></li>
<li><h3>Multivariate and multimodal time-series learning</h3><p>My collaborative work explores how to combine information from multiple signal channels and contextual data. Examples include multimodal fusion for multivariate time-series classification and contextual language-informed cardiac pathology classification (CLIC).</p><a href="{{ '/publication/clic/' | relative_url }}">CLIC preprint</a> · <a href="{{ '/publication/multimodal-fusion-time-series/' | relative_url }}">Multimodal fusion paper</a></li>
<li><h3>Time-series alignment and geophysical applications</h3><p>During my master's research at UFSCar, I investigated partial automation of seismic-to-well ties using matching-region estimation, Dynamic Time Warping, and segmented global optimization. This work connects time-series alignment methods with geophysical interpretation.</p><a href="{{ '/publication/autotie/' | relative_url }}">Autotie</a> · <a href="{{ '/publication/masters-dissertation/' | relative_url }}">Master’s dissertation</a></li>
</ul>
</section>
<section id="grants">
<h2>Grants</h2>
<ul class="grant-list">
<li><h3>FAPESP doctoral fellowship</h3><p>ICMC-USP · From 2024</p><p>Support for doctoral research on self-supervised machine learning for time series in mHealth.</p></li>
<li><h3>Petrobras master’s fellowship</h3><p>UFSCar · 2021–2023</p><p>Support for research on time-series alignment for seismic-to-well ties.</p></li>
</ul>
</section>
<section id="news"><h2>Recent News</h2><p class="placeholder">Research updates will be added here.</p><!-- Replace with verified dated announcements when supplied. --></section>
<section id="cv"><h2>Curriculum Vitae</h2><p>My academic record includes doctoral research at ICMC-USP and an MSc from UFSCar.</p><p><a href="{{ site.author.lattes }}">View Lattes CV →</a> · <a href="{{ '/cv/' | relative_url }}">Education, experience and academic service →</a></p><!-- Add a PDF download when a personal CV PDF is supplied. --></section>
