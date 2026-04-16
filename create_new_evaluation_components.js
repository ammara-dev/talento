/**
 * Talento Create New Evaluation Components
 * Reusable UI building blocks for the Create new evaluation screen.
 */
const CreateNewEvaluationComponents = (function() {
  'use strict';

  const Icons = {
    basicInformation: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="6" width="14" height="13" rx="3"/><path d="M8 4v4"/><path d="M16 4v4"/><path d="M8.5 11h7"/><path d="M8.5 15h4"/></svg>`,
    addEmployees: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="3.2"/><path d="M3.5 18a5.5 5.5 0 0 1 11 0"/><path d="M18 8v6"/><path d="M15 11h6"/></svg>`,
    evaluatorsSetup: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="2.5"/><circle cx="16.5" cy="7.5" r="2"/><path d="M3.5 18a4.8 4.8 0 0 1 9.6 0"/><path d="M13.5 16.5a4 4 0 0 1 7 0"/><path d="M18.5 12.5v2.5"/><path d="M17.25 13.75h2.5"/></svg>`,
    reviewLaunch: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 13a7 7 0 1 1-2-4.9"/><path d="M19 5v6h-6"/></svg>`,
    info: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#8F64F7"/><path d="M12 10.2v5.1" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="7.2" r="1.1" fill="#ffffff"/></svg>`,
    calendar: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A09AAB" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/></svg>`,
    chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    chevronLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRightAccent: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
  };

  function getIcon(name) {
    return Icons[name] || '';
  }

  function PageHeader(config) {
    const title = config && config.title ? config.title : 'Create new evaluation';

    if (typeof PerformanceEvaluationComponents !== 'undefined' &&
      typeof PerformanceEvaluationComponents.PageHeader === 'function') {
      return PerformanceEvaluationComponents.PageHeader({
        title: title,
        actions: []
      });
    }

    return `
      <div class="pe-header-row">
        <h1 class="pe-title">${title}</h1>
        <div class="pe-header-actions"></div>
      </div>
    `;
  }

  function Stepper(config) {
    const steps = config && Array.isArray(config.steps) ? config.steps : [];

    return `
      <section class="ce-stepper-card">
        <div class="ce-stepper-grid">
          ${steps.map(function(step, index) {
            const status = step.status || 'upcoming';
            const isLast = index === steps.length - 1;
            const classes = [
              'ce-step-item',
              `ce-step-item--${status}`,
              isLast ? 'ce-step-item--last' : ''
            ].filter(Boolean).join(' ');

            return `
              <div class="${classes}">
                <span class="ce-step-icon">${getIcon(step.icon)}</span>
                <span class="ce-step-label">${step.label}</span>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function Field(config) {
    const type = config && config.type ? config.type : 'text';
    const label = config && config.label ? config.label : '';
    const placeholder = config && config.placeholder ? config.placeholder : '';
    const value = config && typeof config.value === 'string' ? config.value : '';
    const required = config && config.required ? ' *' : '';
    const rows = config && config.rows ? config.rows : 3;

    let control = '';

    if (type === 'textarea') {
      control = `<textarea class="ce-field-control ce-field-control--textarea" rows="${rows}" placeholder="${placeholder}">${value}</textarea>`;
    } else if (type === 'date') {
      control = `
        <button type="button" class="ce-field-control ce-field-control--button ce-field-control--muted">
          <span class="ce-field-control__lead">${Icons.calendar}</span>
          <span>${value || placeholder}</span>
        </button>
      `;
    } else if (type === 'select') {
      control = `
        <button type="button" class="ce-field-control ce-field-control--button">
          <span>${value || placeholder}</span>
          <span class="ce-field-control__tail">${Icons.chevronDown}</span>
        </button>
      `;
    } else {
      control = `<input class="ce-field-control" type="text" value="${value}" placeholder="${placeholder}" />`;
    }

    return `
      <label class="ce-field">
        <span class="ce-field-label">${label}${required}</span>
        ${control}
      </label>
    `;
  }

  function FieldRow(config) {
    const fields = config && Array.isArray(config.fields) ? config.fields : [];

    return `
      <div class="ce-field-row">
        ${fields.map(Field).join('')}
      </div>
    `;
  }

  function InfoBanner(config) {
    const title = config && config.title ? config.title : '';
    const description = config && config.description ? config.description : '';

    return `
      <div class="ce-info-banner">
        <span class="ce-info-banner__icon">${Icons.info}</span>
        <div class="ce-info-banner__copy">
          <p class="ce-info-banner__title">${title}</p>
          <p class="ce-info-banner__text">${description}</p>
        </div>
      </div>
    `;
  }

  function SetupCard(config) {
    const title = config && config.title ? config.title : 'Setup your evaluation cycle';
    const banner = config && config.banner ? config.banner : {};
    const fields = config && Array.isArray(config.fields) ? config.fields : [];

    return `
      <section class="ce-panel-card">
        <div class="ce-panel-head">
          <h2 class="ce-panel-title">${title}</h2>
          ${InfoBanner(banner)}
        </div>
        <div class="ce-panel-form">
          ${fields.map(function(field) {
            if (field.layout === 'row') {
              return FieldRow(field);
            }
            return Field(field);
          }).join('')}
        </div>
      </section>
    `;
  }

  function FooterActions(config) {
    const backLabel = config && config.backLabel ? config.backLabel : 'Back';
    const nextLabel = config && config.nextLabel ? config.nextLabel : 'Next step';

    return `
      <div class="ce-footer-bar">
        <div class="ce-footer-actions">
          <button type="button" class="ce-footer-btn ce-footer-btn--ghost">
            ${Icons.chevronLeft}
            <span>${backLabel}</span>
          </button>
          <button type="button" class="ce-footer-btn ce-footer-btn--primary">
            <span>${nextLabel}</span>
            ${Icons.chevronRightAccent}
          </button>
        </div>
      </div>
    `;
  }

  return {
    Icons,
    PageHeader,
    Stepper,
    Field,
    FieldRow,
    SetupCard,
    FooterActions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationComponents;
}
