/**
 * Talento Settings Payroll Deductions Components
 * Reusable UI pieces for the payroll deductions settings screen.
 */
const SettingsPayrollDeductionsComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * DeductionControl — renders the right-side control for a deduction row.
   * Supports: 'toggle' | 'input-unit'
   */
  function DeductionControl(item) {
    if (item.control === 'toggle') {
      return `
        <button type="button"
          class="deduction-toggle${item.enabled ? ' is-on' : ''}"
          aria-pressed="${item.enabled ? 'true' : 'false'}">
          <span></span>
        </button>
      `;
    }

    if (item.control === 'input-unit') {
      return `
        <div class="deduction-input-group">
          <input
            type="number"
            class="deduction-input"
            value="${escapeHtml(String(item.value != null ? item.value : ''))}"
            min="0"
            aria-label="${escapeHtml(item.title || '')}"
          />
          <span class="deduction-input-unit">${escapeHtml(item.unit || '')}</span>
        </div>
      `;
    }

    return '';
  }

  /**
   * DeductionRow — one row inside a DeductionsCard.
   * Repeatable pattern: title + description on left, control on right.
   */
  function DeductionRow(item) {
    return `
      <div class="deduction-row">
        <div class="deduction-row-text">
          <p class="deduction-row-title">${escapeHtml(item.title || '')}</p>
          <p class="deduction-row-desc">${escapeHtml(item.description || '')}</p>
        </div>
        ${DeductionControl(item)}
      </div>
    `;
  }

  /**
   * DeductionsCard — a card with header (title, description, action button)
   * and a list of DeductionRow items.
   * config: { title, description, actionText, rows: [...] }
   */
  function DeductionsCard(config) {
    const rows = Array.isArray(config.rows) ? config.rows : [];
    return `
      <section class="deduction-card">
        <div class="deduction-card-head">
          <div>
            <h2 class="deduction-card-title">${escapeHtml(config.title || '')}</h2>
            <p class="deduction-card-subtitle">${escapeHtml(config.description || '')}</p>
          </div>
          <button type="button" class="deduction-manage-btn">
            ${escapeHtml(config.actionText || 'Manage')}
            <i class="fa-solid fa-key" aria-hidden="true"></i>
          </button>
        </div>
        <div class="deduction-rows">
          ${rows.map(DeductionRow).join('')}
        </div>
      </section>
    `;
  }

  return {
    DeductionsCard
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsPayrollDeductionsComponents;
}
