/**
 * Talento Salary Scale Review Launch Components
 * Reusable UI blocks for salary scale review and launch screen.
 */
const SalaryScaleReviewLaunchComponents = (function() {
  'use strict';

  const Icons = {
    chevronUp: '<i class="fa-solid fa-chevron-up" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function HeroMetric(metric) {
    return `
      <article class="ssr-metric">
        <p class="ssr-metric-value">${escapeHtml(metric.value || '')}</p>
        <p class="ssr-metric-label">${escapeHtml(metric.label || '')}</p>
      </article>
    `;
  }

  function HeroSummary(config) {
    const metrics = Array.isArray(config.metrics) ? config.metrics : [];
    return `
      <section class="ssr-hero">
        <h3 class="ssr-hero-name">${escapeHtml(config.name || '')}</h3>
        <p class="ssr-hero-sub">${escapeHtml(config.subtitle || '')}</p>
        <div class="ssr-metrics">${metrics.map(HeroMetric).join('')}</div>
      </section>
    `;
  }

  function Pill(value) {
    return `<span class="ssr-pill">${escapeHtml(value)}</span>`;
  }

  function DetailRow(row) {
    const values = Array.isArray(row.values) ? row.values : [];
    return `
      <div class="ssr-row">
        <span class="ssr-row-label">${escapeHtml(row.label || '')}</span>
        <div class="ssr-row-values">${values.map(Pill).join('')}</div>
      </div>
    `;
  }

  function LevelCard(level) {
    const chips = Array.isArray(level.chips) ? level.chips : [];
    const detailRows = Array.isArray(level.detailRows) ? level.detailRows : [];
    return `
      <article class="ssr-level-card">
        <div class="ssr-level-head">
          <div class="ssr-level-main">
            <span class="ssr-level-dot" aria-hidden="true"></span>
            <div>
              <h4 class="ssr-level-title">${escapeHtml(level.name || '')}</h4>
              <div class="ssr-chips">${chips.map(function(chip) { return `<span class="ssr-chip">${escapeHtml(chip)}</span>`; }).join('')}</div>
            </div>
          </div>
          <button type="button" class="ssr-toggle" aria-label="Toggle level details">
            ${level.expanded ? Icons.chevronUp : Icons.chevronDown}
          </button>
        </div>
        ${level.expanded ? `<div class="ssr-level-body">${detailRows.map(DetailRow).join('')}</div>` : ''}
      </article>
    `;
  }

  function LevelSummaryList(config) {
    const levels = Array.isArray(config.levels) ? config.levels : [];
    return `<section class="ssr-level-list">${levels.map(LevelCard).join('')}</section>`;
  }

  function MainPanel(config) {
    return `
      <section class="ssr-main-panel">
        <h2 class="ssr-title">${escapeHtml(config.title || '')}</h2>
        ${HeroSummary(config.hero || {})}
        ${LevelSummaryList(config.levelSummary || {})}
      </section>
    `;
  }

  return {
    MainPanel
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleReviewLaunchComponents;
}
