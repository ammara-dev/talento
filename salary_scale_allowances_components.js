/**
 * Talento Salary Scale Allowances Components
 * Reusable UI blocks for salary scale allowances screen.
 */
const SalaryScaleAllowancesComponents = (function() {
  'use strict';

  const Icons = {
    check: '<i class="fa-solid fa-check" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    chevronLeft: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
    chevronRight: '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>',
    close: '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function PageHeading(config) {
    return `<h1 class="ssa-page-title">${escapeHtml(config.title || '')}</h1>`;
  }

  function Stepper(config) {
    const steps = Array.isArray(config.steps) ? config.steps : [];
    const activeIndex = steps.findIndex(function(step) { return step.status === 'active'; });
    return `
      <section class="ssa-stepper" aria-label="Progress">
        ${steps.map(function(step, index) {
          const statusClass = step.status === 'completed' ? ' is-completed' : step.status === 'active' ? ' is-active' : '';
          const badge = step.status === 'completed' ? Icons.check : String(index + 1);
          const lineClass = index < activeIndex ? ' is-complete' : '';
          const line = index < steps.length - 1 ? `<span class="ssa-step-line${lineClass}" aria-hidden="true"></span>` : '';
          return `
            <div class="ssa-step${statusClass}">
              <span class="ssa-step-dot">${badge}</span>
              <span>${escapeHtml(step.label || '')}</span>
            </div>
            ${line}
          `;
        }).join('')}
      </section>
    `;
  }

  function LevelItem(item) {
    return `
      <div class="ssa-level-item${item.active ? ' is-active' : ''}">
        <span class="ssa-level-dot" aria-hidden="true"></span>
        <div>
          <p class="ssa-level-title">${escapeHtml(item.label || '')}</p>
          <p class="ssa-level-sub">${escapeHtml(item.subtitle || '')}</p>
        </div>
      </div>
    `;
  }

  function AllowanceRow(row) {
    return `
      <div class="ssa-grid-2">
        <label>
          <span class="ssa-field-label">${escapeHtml(row.typeLabel || '')}</span>
          <button type="button" class="ssa-select">
            <span>${escapeHtml(row.typeValue || '')}</span>
            <span>${Icons.chevronDown}</span>
          </button>
        </label>
        <label>
          <span class="ssa-field-label">${escapeHtml(row.valueLabel || 'Value')}</span>
          <input type="text" class="ssa-input ssa-input-value" value="${escapeHtml(row.value || '')}" />
        </label>
      </div>
    `;
  }

  function InsuranceCard(config) {
    return `
      <div class="ssa-muted-card">
        <div class="ssa-row-between">
          <p class="ssa-small-title">${escapeHtml(config.title || '')}</p>
          <span class="ssa-switch" aria-hidden="true"></span>
        </div>
        <label>
          <span class="ssa-field-label">${escapeHtml(config.commissionLabel || '')}</span>
          <button type="button" class="ssa-select">
            <span>${escapeHtml(config.commissionValue || '')}</span>
            <span>${Icons.chevronDown}</span>
          </button>
        </label>
      </div>
    `;
  }

  function OtherAllowanceCard(config) {
    return `
      <div class="ssa-muted-card">
        <p class="ssa-small-title">${escapeHtml(config.title || '')}</p>
        <div class="ssa-other-row">
          <input type="text" class="ssa-input" placeholder="${escapeHtml(config.namePlaceholder || '')}" />
          <input type="text" class="ssa-input ssa-input-value" placeholder="${escapeHtml(config.valuePlaceholder || '')}" />
          <span class="ssa-icon-x" aria-hidden="true">${Icons.close}</span>
        </div>
        <button type="button" class="ssa-add-link">${escapeHtml(config.addLabel || '')} ${Icons.plus}</button>
      </div>
    `;
  }

  function PeriodCard(period) {
    const rows = Array.isArray(period.rows) ? period.rows : [];
    return `
      <article class="ssa-period-card">
        <div class="ssa-period-head">
          <h3 class="ssa-period-title">${escapeHtml(period.title || '')}</h3>
          <span class="ssa-period-total">${escapeHtml(period.total || '')}</span>
        </div>
        ${rows.map(AllowanceRow).join('')}
        ${InsuranceCard(period.insurance || {})}
        ${OtherAllowanceCard(period.otherAllowance || {})}
      </article>
    `;
  }

  function MainPanel(config) {
    const levels = Array.isArray(config.levels) ? config.levels : [];
    const periods = Array.isArray(config.periods) ? config.periods : [];

    return `
      <section class="ssa-main-panel">
        <h2 class="ssa-main-title">${escapeHtml(config.title || '')}</h2>
        <p class="ssa-main-sub">${escapeHtml(config.subtitle || '')}</p>
        <div class="ssa-main-grid">
          <aside class="ssa-level-list">${levels.map(LevelItem).join('')}</aside>
          <div class="ssa-period-stack">${periods.map(PeriodCard).join('')}</div>
        </div>
      </section>
    `;
  }

  function FooterBar(config) {
    return `
      <footer class="ssa-footer">
        <p class="ssa-footer-step">${escapeHtml(config.stepLabel || '')}</p>
        <div class="ssa-footer-actions">
          <button type="button" class="ssa-btn">
            <span>${Icons.chevronLeft}</span>
            <span>${escapeHtml(config.backLabel || 'Back')}</span>
          </button>
          <button type="button" class="ssa-btn is-primary">
            <span>${escapeHtml(config.nextLabel || 'Next step')}</span>
            <span>${Icons.chevronRight}</span>
          </button>
        </div>
      </footer>
    `;
  }

  return {
    PageHeading,
    Stepper,
    MainPanel,
    FooterBar
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleAllowancesComponents;
}
