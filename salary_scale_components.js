/**
 * Talento Salary Scale Components
 * Reusable UI blocks for Salary Scale screen.
 */
const SalaryScaleComponents = (function() {
  'use strict';

  const Icons = {
    search: '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>',
    external: '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>',
    tabsSalary: '<i class="fa-solid fa-wallet" aria-hidden="true"></i>',
    tabsOverview: '<i class="fa-solid fa-chart-simple" aria-hidden="true"></i>',
    tabsMatrix: '<i class="fa-solid fa-bolt" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function Header(config) {
    return `<h1 class="ss-title">${escapeHtml(config.title || 'Salary scale')}</h1>`;
  }

  function TopTabs(config) {
    const tabs = config && Array.isArray(config.tabs) ? config.tabs : [];
    const activeTab = config && config.activeTab ? config.activeTab : '';
    return `
      <div class="ss-top-row">
        <div class="ss-search">
          <span class="ss-search-icon">${Icons.search}</span>
          <input type="text" placeholder="${escapeHtml(config.searchPlaceholder || 'Search')}" />
        </div>
        <div class="ss-actions">
          <div class="ss-tabs">
            ${tabs.map(function(tab) {
              const icon = tab.id === 'salary-scale' ? Icons.tabsSalary : tab.id === 'level-overview' ? Icons.tabsOverview : Icons.tabsMatrix;
              const activeClass = tab.id === activeTab ? ' active' : '';
              return `<button type="button" class="ss-tab${activeClass}" data-ss-tab="${escapeHtml(tab.id)}"><span>${icon}</span><span>${escapeHtml(tab.label)}</span></button>`;
            }).join('')}
          </div>
          <button type="button" class="ss-config-btn">Configuration <span>${Icons.tabsSalary}</span></button>
          <button type="button" class="ss-create-btn">Create new <span>${Icons.plus}</span></button>
        </div>
      </div>
    `;
  }

  function MetricCell(cell) {
    return `
      <div class="ss-metric">
        <p class="ss-metric-label">${escapeHtml(cell.label || '')}</p>
        <p class="ss-metric-value">${escapeHtml(cell.value || '')}</p>
      </div>
    `;
  }

  function ScaleCard(scale) {
    const statusClass = scale.status === 'Active' ? ' active' : 'draft';
    return `
      <article class="ss-card">
        <div class="ss-card-head">
          <p class="ss-card-code">${escapeHtml(scale.code || '')}</p>
          <span class="ss-status ${statusClass}">${escapeHtml(scale.status || '')}</span>
        </div>
        <h2 class="ss-card-title">${escapeHtml(scale.name || '')}</h2>
        <div class="ss-metrics-grid">
          ${(scale.metrics || []).map(MetricCell).join('')}
        </div>
        <button type="button" class="ss-open-btn">
          <span>Open builder</span>
          <span>${Icons.external}</span>
        </button>
      </article>
    `;
  }

  function CreateCard(config) {
    return `
      <button type="button" class="ss-create-card">
        <span class="ss-create-icon">${Icons.plus}</span>
        <span class="ss-create-label">${escapeHtml(config.label || 'Create new scale')}</span>
      </button>
    `;
  }

  function ScaleGrid(config) {
    const scales = config && Array.isArray(config.scales) ? config.scales : [];
    return `
      <section class="ss-grid">
        ${scales.map(ScaleCard).join('')}
        ${CreateCard({ label: 'Create new scale' })}
      </section>
    `;
  }

  return {
    Header,
    TopTabs,
    ScaleGrid
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleComponents;
}
