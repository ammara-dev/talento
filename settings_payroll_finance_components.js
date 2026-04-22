/**
 * Talento Settings Payroll & Finance Components
 * Reusable UI pieces for payroll settings configuration screens.
 */
const SettingsPayrollFinanceComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function PayrollTabItem(tab) {
    const className = `payroll-tab-btn${tab.active ? ' is-active' : ''}`;
    return `<button type="button" class="${className}">${escapeHtml(tab.label || '')}</button>`;
  }

  function PayrollTabs(config) {
    const tabs = Array.isArray(config.tabs) ? config.tabs : [];
    return `<div class="payroll-tabs-wrap">${tabs.map(PayrollTabItem).join('')}</div>`;
  }

  function WarningNotice(config) {
    return `
      <div class="payroll-warning">
        <i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i>
        <div>
          <p class="payroll-warning-title">${escapeHtml(config.title || '')}</p>
          <p class="payroll-warning-text">${escapeHtml(config.text || '')}</p>
        </div>
      </div>
    `;
  }

  function SettingControl(field) {
    if (field.control === 'toggle') {
      return `<button type="button" class="payroll-toggle${field.enabled ? ' is-on' : ''}" aria-pressed="${field.enabled ? 'true' : 'false'}"><span></span></button>`;
    }

    return `
      <button type="button" class="payroll-select-btn">
        ${escapeHtml(field.value || '')}
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </button>
    `;
  }

  function SettingRow(field) {
    return `
      <div class="payroll-setting-row">
        <div>
          <p class="payroll-setting-title">${escapeHtml(field.title || '')}</p>
          <p class="payroll-setting-desc">${escapeHtml(field.description || '')}</p>
        </div>
        ${SettingControl(field)}
      </div>
    `;
  }

  function PayrollSettingsCard(config) {
    const fields = Array.isArray(config.fields) ? config.fields : [];
    return `
      <section class="payroll-card">
        <header>
          <h2 class="payroll-card-title">${escapeHtml(config.title || '')}</h2>
          <p class="payroll-card-subtitle">${escapeHtml(config.description || '')}</p>
        </header>
        ${WarningNotice(config.notice || {})}
        <div class="payroll-settings-list">
          ${fields.map(SettingRow).join('')}
        </div>
      </section>
    `;
  }

  function FooterActions(config) {
    const discardText = escapeHtml(config.discardText || 'Discard');
    const saveText = escapeHtml(config.saveText || 'Save changes');
    return `
      <div class="payroll-footer-actions">
        <button type="button" class="payroll-discard-btn">${discardText} <i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
        <button type="button" class="payroll-save-btn">${saveText} <i class="fa-solid fa-check" aria-hidden="true"></i></button>
      </div>
    `;
  }

  return {
    PayrollTabs,
    PayrollSettingsCard,
    FooterActions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsPayrollFinanceComponents;
}
