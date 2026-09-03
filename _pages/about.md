---
permalink: /
title: "Malte Willmes"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<style>
:root {
  --home-primary: #2c3e50;
  --home-text: #3b3b3b;
  --home-muted: #64748b;
  --home-bg: #fdfdfd;
  --home-border: #eaeaea;
  --home-accent: #3172b4;
}

.masthead,
.masthead__inner-wrap,
.masthead__menu,
.masthead__menu ul,
.greedy-nav {
  background: #fff !important;
}

.masthead {
  border-bottom: 1px solid var(--home-border) !important;
}

.masthead a,
.masthead__menu-item,
.masthead__menu-item a,
.greedy-nav a,
.greedy-nav .visible-links,
.greedy-nav .visible-links li,
.greedy-nav .visible-links a {
  background: transparent !important;
  color: var(--home-text) !important;
}

.masthead a:hover,
.greedy-nav a:hover,
.greedy-nav .visible-links a:hover,
.greedy-nav .visible-links li.masthead__menu-item--current a,
.greedy-nav .visible-links li.masthead__menu-item--current a:hover {
  background: transparent !important;
  color: var(--home-primary) !important;
}

h1.page__title,
.page__title {
  color: var(--home-primary) !important;
  font-weight: 700 !important;
}

.section-title {
  margin: 45px 0 18px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--home-border);
  color: var(--home-primary) !important;
  font-size: 1.15em !important;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.content-text {
  margin-bottom: 20px;
  color: var(--home-text);
  font-size: 0.95em;
  line-height: 1.7;
  text-align: justify;
  text-justify: inter-word;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin: 20px 0 35px;
}

.tool-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 145px;
  padding: 18px 20px;
  border: 1px solid var(--home-border);
  border-radius: 6px;
  background: var(--home-bg);
  transition: border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease;
}

.tool-card:hover {
  border-color: #cbd5e1;
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
}

.tool-title {
  margin-bottom: 6px;
  color: var(--home-primary);
  font-size: 1em;
  font-weight: 700;
}

.tool-description {
  margin: 0 0 14px;
  color: var(--home-text);
  font-size: 0.86em;
  line-height: 1.5;
}

.tool-links {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.tool-link {
  display: inline-block;
  padding: 3px 8px;
  border: 1px solid #d0e3f7;
  border-radius: 3px;
  background: #f0f7ff;
  color: var(--home-accent) !important;
  font-size: 0.7em;
  font-weight: 600;
  text-decoration: none !important;
  transition: all 0.15s ease;
}

.tool-link:hover {
  border-color: var(--home-accent);
  background: var(--home-accent);
  color: #fff !important;
}

@media (max-width: 650px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }

  .tool-card {
    min-height: auto;
  }
}
</style>

<div class="content-text">
  I am a researcher in ecology, geochemistry, and archaeology at the
  <a href="https://www.nina.no/" target="_blank" rel="noopener noreferrer">
    Norwegian Institute for Nature Research
  </a>
  and affiliated with the
  <a href="https://ims.ucsc.edu/" target="_blank" rel="noopener noreferrer">
    Institute of Marine Sciences at UC Santa Cruz
  </a>.
</div>

<div class="content-text">
  At the core of my research is the development and application of
  geochemical tracers to reconstruct wildlife migrations, life histories,
  and population connectivity. My current work focuses on otoliths and
  scales to study Atlantic and Pacific salmonids, Delta and Longfin smelt,
  and sturgeon. By integrating fieldwork, laboratory analyses, and
  statistical modeling, I aim to advance wildlife management and
  conservation.
</div>

<div class="content-text">
  I collaborate with research groups at UC Santa Cruz (IMS, NOAA),
  UC Davis (WFCB, CWS, EPS), and ANU (RSES). In addition, I work
  directly with many state and federal agencies to translate our
  scientific findings into management actions.
</div>

<h2 class="section-title">Data &amp; Tools</h2>

<div class="tools-grid">
  <div class="tool-card">
    <div>
      <div class="tool-title">IRHUM Database</div>
      <p class="tool-description">
        Baseline strontium isotope data for archaeological
        and ecological provenance studies.
      </p>
    </div>
    <div class="tool-links">
      <a href="{{ '/irhum/' | relative_url }}" class="tool-link">Database</a>
    </div>
  </div>

  <div class="tool-card">
    <div>
      <div class="tool-title">IsoFishR</div>
      <p class="tool-description">
        Data reduction and analysis of laser-ablation
        <sup>87</sup>Sr/<sup>86</sup>Sr isotope profiles in R.
      </p>
    </div>
    <div class="tool-links">
      <a href="https://github.com/MalteWillmes/IsoFishR" target="_blank" rel="noopener noreferrer" class="tool-link">GitHub</a>
      <a href="https://doi.org/10.1371/journal.pone.0204519" target="_blank" rel="noopener noreferrer" class="tool-link">Paper</a>
    </div>
  </div>

  <div class="tool-card">
    <div>
      <div class="tool-title">OGFLtools</div>
      <p class="tool-description">
        R package by Christian Denney containing utility
        functions used in the Otolith Geochemistry and Fish
        Ecology Laboratory at UC Davis.
      </p>
    </div>
    <div class="tool-links">
      <a href="https://github.com/ctdenney/OGFLtools" target="_blank" rel="noopener noreferrer" class="tool-link">GitHub</a>
    </div>
  </div>

  <div class="tool-card">
    <div>
      <div class="tool-title">SFEcol</div>
      <p class="tool-description">
        R color palettes derived from landscapes and wildlife
        of the San Francisco Estuary.
      </p>
    </div>
    <div class="tool-links">
      <a href="https://maltewillmes.github.io/sfecol/" target="_blank" rel="noopener noreferrer" class="tool-link">Package</a>
    </div>
  </div>

  <div class="tool-card">
    <div>
      <div class="tool-title">BandTracer</div>
      <p class="tool-description">
        Fiji plugin for tracing and measuring growth bands
        in otoliths, scales, and fin spines.
      </p>
    </div>
    <div class="tool-links">
      <a href="https://github.com/MalteWillmes/BandTracer" target="_blank" rel="noopener noreferrer" class="tool-link">GitHub</a>
    </div>
  </div>
</div>
