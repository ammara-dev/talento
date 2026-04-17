/**
 * Talento Salary Scale 2 Components
 * Reusable UI blocks for second salary scale screen.
 */
const SalaryScale2Components = (function() {
  'use strict';

  const Icons = {
    info: '<i class="fa-solid fa-circle-info" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    chevronLeft: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
    chevronRight: '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'
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
    return `<h1 class="ss2-page-title">${escapeHtml(config.title || '')}</h1>`;
  }

  function Stepper(config) {
    const steps = config && Array.isArray(config.steps) ? config.steps : [];
    return `
      <section class="ss2-stepper" aria-label="Progress">
        ${steps.map(function(step, index) {
          const activeClass = step.active ? ' active' : '';
          const line = index < steps.length - 1 ? '<span class="ss2-step-line" aria-hidden="true"></span>' : '';
          return `
            <div class="ss2-step${activeClass}">
              <span class="ss2-step-index">${index + 1}</span>
              <span class="ss2-step-label">${escapeHtml(step.label)}</span>
            </div>
            ${line}
          `;
        }).join('')}
      </section>
    `;
  }

  function TextField(field) {
    return `
      <label class="ss2-field">
        <span class="ss2-field-label">${escapeHtml(field.label || '')}${field.required ? '*' : ''}</span>
        <input type="text" class="ss2-input" value="${escapeHtml(field.value || '')}" placeholder="${escapeHtml(field.placeholder || '')}" />
      </label>
    `;
  }

  function SelectField(field) {
    return `
      <label class="ss2-field">
        <span class="ss2-field-label">${escapeHtml(field.label || '')}${field.required ? '*' : ''}</span>
        <button type="button" class="ss2-input ss2-select">
          <span>${escapeHtml(field.value || field.placeholder || '')}</span>
          <span class="ss2-select-icon">${Icons.chevronDown}</span>
        </button>
      </label>
    `;
  }

  function FormField(field) {
    if (field.type === 'select') return SelectField(field);
    return TextField(field);
  }

  function FormCard(config) {
    const fields = config && Array.isArray(config.fields) ? config.fields : [];
    return `
      <section class="ss2-form-card">
        <h3 class="ss2-form-title">${escapeHtml(config.title || '')}</h3>
        <div class="ss2-fields">
          ${fields.map(FormField).join('')}
        </div>
        <div class="ss2-note">
          <span class="ss2-note-icon">${Icons.info}</span>
          <div class="ss2-note-copy">
            <p class="ss2-note-title">${escapeHtml(config.noteTitle || '')}</p>
            <p class="ss2-note-text">${escapeHtml(config.noteText || '')}</p>
          </div>
        </div>
      </section>
    `;
  }

  function MainPanel(config) {
    return `
      <section class="ss2-main-panel">
        <h2 class="ss2-main-title">${escapeHtml(config.title || '')}</h2>
        <p class="ss2-main-sub">${escapeHtml(config.subtitle || '')}</p>
        ${FormCard(config.form || {})}
      </section>
    `;
  }

  function FooterBar(config) {
    const backDisabled = config && config.backDisabled ? ' disabled' : '';
    return `
      <footer class="ss2-footer">
        <p class="ss2-footer-step">${escapeHtml(config.stepLabel || '')}</p>
        <div class="ss2-footer-actions">
          <button type="button" class="ss2-btn ss2-btn-back"${backDisabled}>
            <span class="ss2-btn-icon" aria-hidden="true">${Icons.chevronLeft}</span>
            <span>${escapeHtml(config.backLabel || 'Back')}</span>
          </button>
          <button type="button" class="ss2-btn ss2-btn-next">
            <span>${escapeHtml(config.nextLabel || 'Next step')}</span>
            <span class="ss2-btn-icon" aria-hidden="true">${Icons.chevronRight}</span>
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
  module.exports = SalaryScale2Components;
}
