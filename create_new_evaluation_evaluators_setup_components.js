/**
 * Talento Create New Evaluation Evaluators Setup Components
 * Reusable UI building blocks for the evaluators & setup step.
 */
const CreateNewEvaluationEvaluatorsSetupComponents = (function() {
  'use strict';

  const Icons = {
    directManager: `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 2.8a2.6 2.6 0 1 1 0 5.2 2.6 2.6 0 0 1 0-5.2Zm0 6.5a4.9 4.9 0 0 1 4.9 4.9.7.7 0 0 1-.7.7H5.8a.7.7 0 0 1-.7-.7A4.9 4.9 0 0 1 10 9.3ZM4.1 5.5h2.1v1.2H4.1V8.8H2.9V6.7H.8V5.5h2.1V3.4h1.2v2.1Z"/></svg>`,
    departmentManager: `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7.1 3.3a1 1 0 0 1 .9-.5h4a1 1 0 0 1 .9.5l.7 1.4h2a1.5 1.5 0 0 1 1.5 1.5v6.4a1.5 1.5 0 0 1-1.5 1.5H4.4a1.5 1.5 0 0 1-1.5-1.5V6.2a1.5 1.5 0 0 1 1.5-1.5h2l.7-1.4Zm1.4.7-.4.7h3.8l-.4-.7H8.5ZM4.4 6.1v1.6h11.2V6.1H4.4Zm0 3v3.5h11.2V9.1H4.4Z"/></svg>`,
    upwardFeedback: `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M8.2 3.1a2.4 2.4 0 1 1 0 4.8 2.4 2.4 0 0 1 0-4.8ZM3.4 13.6a4.8 4.8 0 0 1 9.6 0 .7.7 0 0 1-.7.7H4.1a.7.7 0 0 1-.7-.7Zm8-8.8h4.8v1.3h-2.5V10h-1.3V6.1h-1V4.8Zm3.5 5.2-1.8 1.8-1.8-1.8h1.1V7.4h1.3V10h1.2Z"/></svg>`,
    hrCollaborators: `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M7.1 3.3a1 1 0 0 1 .9-.5h4a1 1 0 0 1 .9.5l.7 1.4h2a1.5 1.5 0 0 1 1.5 1.5v6.4a1.5 1.5 0 0 1-1.5 1.5H4.4a1.5 1.5 0 0 1-1.5-1.5V6.2a1.5 1.5 0 0 1 1.5-1.5h2l.7-1.4Zm1.4.7-.4.7h3.8l-.4-.7H8.5Zm2.2 4.1v1.2h1.2v1.2h-1.2v1.2H9.5v-1.2H8.3V9.3h1.2V8.1h1.2Z"/></svg>`,
    peers: `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 5a1.9 1.9 0 1 1 0 3.8A1.9 1.9 0 0 1 6 5Zm8 0a1.9 1.9 0 1 1 0 3.8A1.9 1.9 0 0 1 14 5Zm-4-1.1a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM2.8 14a3 3 0 0 1 4.8-1 .7.7 0 0 1-.5 1.1H3.5a.7.7 0 0 1-.7-.1Zm9.6 0a3 3 0 0 1 4.8-1 .7.7 0 0 1-.5 1.1h-3.6a.7.7 0 0 1-.7-.1Zm-6 .5a3.6 3.6 0 0 1 7.2 0 .7.7 0 0 1-.7.7H7.1a.7.7 0 0 1-.7-.7Z"/></svg>`,
    selfEvaluation: `<svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10 2.4a7.6 7.6 0 1 1 0 15.2 7.6 7.6 0 0 1 0-15.2Zm0 4.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-.8 3.1v4.2h1.6V10H9.2Z"/></svg>`,
    check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E1033" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    minus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.1" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.1" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function TemplateField(config) {
    const label = escapeHtml(config.label || 'Select template for this evaluators*');
    const placeholder = escapeHtml(config.placeholder || 'Select template');
    return `
      <div class="es-template-card">
        <p class="es-template-label">${label}</p>
        <button type="button" class="es-template-select">
          <span>${placeholder}</span>
          <span class="es-template-tail">${Icons.chevronDown}</span>
        </button>
      </div>
    `;
  }

  function ToggleRow(config) {
    const enabled = !!config.enabled;
    const title = escapeHtml(config.title || '');
    const description = escapeHtml(config.description || '');
    return `
      <div class="es-inline-row">
        <button type="button" class="es-toggle${enabled ? ' is-on' : ''}" aria-pressed="${enabled}">
          <span class="es-toggle-thumb"></span>
        </button>
        <div class="es-inline-copy">
          <p class="es-inline-title">${title}</p>
          <p class="es-inline-text">${description}</p>
        </div>
      </div>
    `;
  }

  function CounterRow(config) {
    const title = escapeHtml(config.title || 'Number of peers per employee*');
    const description = escapeHtml(config.description || 'Choose between 1 and 10 peers');
    const value = escapeHtml(config.value || '03');
    return `
      <div class="es-counter-row">
        <div class="es-inline-copy">
          <p class="es-inline-title">${title}</p>
          <p class="es-inline-text">${description}</p>
        </div>
        <div class="es-counter-controls">
          <button type="button" class="es-counter-btn" aria-label="Decrease">${Icons.minus}</button>
          <span class="es-counter-value">${value}</span>
          <button type="button" class="es-counter-btn" aria-label="Increase">${Icons.plus}</button>
        </div>
      </div>
    `;
  }

  function EvaluatorItem(config) {
    const checked = !!config.checked;
    const hasTemplate = !!config.template;
    const hasToggle = !!config.toggle;
    const hasCounter = !!config.counter;
    const icon = Icons[config.icon] || '';
    const title = escapeHtml(config.title || '');
    const description = escapeHtml(config.description || '');

    return `
      <article class="es-item${checked ? ' is-active' : ''}">
        <div class="es-item-head">
          <div class="es-item-copy">
            <span class="es-item-icon">${icon}</span>
            <div class="es-item-text">
              <p class="es-item-title">${title}</p>
              <p class="es-item-description">${description}</p>
            </div>
          </div>
          <button type="button" class="es-check${checked ? ' is-on' : ''}" aria-pressed="${checked}">
            ${checked ? Icons.check : ''}
          </button>
        </div>
        ${checked && hasTemplate ? TemplateField(config.template) : ''}
        ${checked && hasCounter ? CounterRow(config.counter) : ''}
        ${checked && hasToggle ? ToggleRow(config.toggle) : ''}
      </article>
    `;
  }

  function EvaluatorsPanel(config) {
    const title = escapeHtml(config.title || 'Select evaluators');
    const description = escapeHtml(config.description || '');
    const items = Array.isArray(config.items) ? config.items : [];

    return `
      <section class="es-panel-card">
        <header class="es-panel-head">
          <h2 class="es-panel-title">${title}</h2>
          <p class="es-panel-description">${description}</p>
        </header>
        <div class="es-panel-body">
          ${items.map(EvaluatorItem).join('')}
        </div>
      </section>
    `;
  }

  return {
    Icons,
    TemplateField,
    ToggleRow,
    CounterRow,
    EvaluatorItem,
    EvaluatorsPanel
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationEvaluatorsSetupComponents;
}
