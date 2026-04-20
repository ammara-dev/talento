/**
 * Talento Salary Scale Details Components
 * Reusable UI blocks for salary scale details screen.
 */
const SalaryScaleDetailsComponents = (function() {
  'use strict';

  const Icons = {
    back: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
    next: '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    edit: '<i class="fa-solid fa-pen" aria-hidden="true"></i>',
    menu: '<i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>',
    period: '<i class="fa-solid fa-bars" aria-hidden="true"></i>',
    check: '<i class="fa-solid fa-check" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function HeaderMeta(config) {
    const items = Array.isArray(config.items) ? config.items : [];
    return `
      <div class="ssd-meta">
        ${items.map(function(item, index) {
          const sep = index < items.length - 1 ? '<span class="ssd-meta-sep" aria-hidden="true">&bull;</span>' : '';
          return `<span>${escapeHtml(item)}</span>${sep}`;
        }).join('')}
        ${config.status ? `<span class="ssd-status">${escapeHtml(config.status)}</span>` : ''}
      </div>
    `;
  }

  function Header(config) {
    return `
      <section>
        <div class="ssd-header-top">
          <p class="ssd-breadcrumb">${escapeHtml(config.breadcrumb || '')}</p>
          <div class="ssd-pager" aria-label="Pager">
            <button type="button" class="ssd-icon-btn" aria-label="Previous">${Icons.back}</button>
            <span>${escapeHtml((config.pager || {}).position || '')}</span>
            <button type="button" class="ssd-icon-btn" aria-label="Next">${Icons.next}</button>
          </div>
        </div>

        <div class="ssd-title-row">
          <div>
            <h1 class="ssd-title">${escapeHtml(config.title || '')}</h1>
            ${HeaderMeta(config.meta || {})}
          </div>
          <div class="ssd-title-actions">
            <button type="button" class="ssd-action-btn">
              <span>${escapeHtml((config.actions || {}).editLabel || 'Edit')}</span>
              <span aria-hidden="true">${Icons.edit}</span>
            </button>
            <button type="button" class="ssd-icon-btn" aria-label="More actions">${Icons.menu}</button>
          </div>
        </div>

        <div class="ssd-level-tabs" role="tablist" aria-label="Salary levels">
          ${((config.levelTabs || {}).tabs || []).map(function(tab) {
            return `
              <button type="button" role="tab" class="ssd-level-tab${tab.active ? ' active' : ''}" aria-selected="${tab.active ? 'true' : 'false'}">
                ${escapeHtml(tab.label || '')}
              </button>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function AllowanceItem(item) {
    return `
      <div>
        <p class="ssd-allowance-label">${escapeHtml(item.label || '')}</p>
        <p class="ssd-allowance-value">
          ${item.state === 'covered' ? `<span class="ssd-covered-icon" aria-hidden="true">${Icons.check}</span>` : ''}
          <span>${escapeHtml(item.value || '')}</span>
        </p>
      </div>
    `;
  }

  function AllowancePeriodCard(period) {
    const leftItems = Array.isArray(period.leftItems) ? period.leftItems : [];
    const rightItems = Array.isArray(period.rightItems) ? period.rightItems : [];

    return `
      <article class="ssd-period-card">
        <h3 class="ssd-period-header">
          <span class="ssd-period-icon" aria-hidden="true">${Icons.period}</span>
          <span>${escapeHtml(period.title || '')}</span>
        </h3>

        <div class="ssd-period-grid">
          <div class="ssd-period-col ssd-period-col-left">
            ${leftItems.map(AllowanceItem).join('')}
          </div>
          <div class="ssd-period-col">
            ${rightItems.map(AllowanceItem).join('')}
          </div>
        </div>
      </article>
    `;
  }

  function AllowancesSection(config) {
    const toggles = Array.isArray(config.toggles) ? config.toggles : [];
    const periods = Array.isArray(config.periods) ? config.periods : [];

    return `
      <section>
        <div class="ssd-section-head">
          <h2 class="ssd-section-title">${escapeHtml(config.title || '')}</h2>
          <div class="ssd-toggle-group" role="tablist" aria-label="Allowance view">
            ${toggles.map(function(toggle) {
              return `
                <button type="button" role="tab" class="ssd-toggle-btn${toggle.active ? ' active' : ''}" aria-selected="${toggle.active ? 'true' : 'false'}">
                  ${escapeHtml(toggle.label || '')}
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="ssd-period-list">
          ${periods.map(AllowancePeriodCard).join('')}
        </div>
      </section>
    `;
  }

  return {
    Header,
    AllowancesSection
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleDetailsComponents;
}
