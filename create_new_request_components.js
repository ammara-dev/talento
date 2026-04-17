/**
 * Talento Create New Request Components
 * Reusable UI blocks for create-new-request screen.
 */
const CreateNewRequestComponents = (function() {
  'use strict';

  const Icons = {
    dot: '<i class="fa-solid fa-circle" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    clip: '<i class="fa-solid fa-paperclip" aria-hidden="true"></i>',
    close: '<i class="fa-solid fa-xmark" aria-hidden="true"></i>',
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

  function StepsList(config) {
    const steps = config && Array.isArray(config.steps) ? config.steps : [];
    return `
      <nav class="cnr-steps" aria-label="Request creation steps">
        ${steps.map(function(step) {
          const activeClass = step.active ? ' active' : '';
          return `<button type="button" class="cnr-step-item${activeClass}">${escapeHtml(step.label)}</button>`;
        }).join('')}
      </nav>
    `;
  }

  function SelectField(config) {
    const label = config && config.label ? config.label : '';
    const value = config && config.value ? config.value : '';
    const helper = config && config.helper ? config.helper : '';
    const avatar = config && config.avatar ? config.avatar : '';
    const dot = config && config.showDot ? Icons.dot : '';
    const required = config && config.required ? ' *' : '';
    return `
      <label class="cnr-field">
        <span class="cnr-field-label">${escapeHtml(label)}${required}</span>
        ${helper ? `<span class="cnr-field-helper">${escapeHtml(helper)}</span>` : ''}
        <button type="button" class="cnr-input cnr-input-select">
          <span class="cnr-input-content">
            ${avatar ? `<img class="cnr-avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(value)}" />` : ''}
            ${dot ? `<span class="cnr-dot">${dot}</span>` : ''}
            <span class="cnr-input-value">${escapeHtml(value)}</span>
          </span>
          <span class="cnr-input-tail">${Icons.chevronDown}</span>
        </button>
      </label>
    `;
  }

  function TextInputField(config) {
    const label = config && config.label ? config.label : '';
    const placeholder = config && config.placeholder ? config.placeholder : '';
    const value = config && config.value ? config.value : '';
    const required = config && config.required ? ' *' : '';
    return `
      <label class="cnr-field">
        <span class="cnr-field-label">${escapeHtml(label)}${required}</span>
        <input class="cnr-input" type="text" placeholder="${escapeHtml(placeholder)}" value="${escapeHtml(value)}" />
      </label>
    `;
  }

  function TextareaField(config) {
    const label = config && config.label ? config.label : '';
    const placeholder = config && config.placeholder ? config.placeholder : '';
    const value = config && config.value ? config.value : '';
    const required = config && config.required ? ' *' : '';
    return `
      <label class="cnr-field">
        <span class="cnr-field-label">${escapeHtml(label)}${required}</span>
        <textarea class="cnr-input cnr-input-textarea" placeholder="${escapeHtml(placeholder)}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }

  function AttachmentField(config) {
    const label = config && config.label ? config.label : '';
    const value = config && config.value ? config.value : '';
    return `
      <label class="cnr-field">
        <span class="cnr-field-label">${escapeHtml(label)}</span>
        <button type="button" class="cnr-input cnr-input-attachment">
          <span class="cnr-input-value cnr-input-value-muted">${escapeHtml(value)}</span>
          <span class="cnr-input-tail">${Icons.clip}</span>
        </button>
      </label>
    `;
  }

  function FormSection(config) {
    const title = config && config.title ? config.title : '';
    const fields = config && Array.isArray(config.fields) ? config.fields : [];
    return `
      <section class="cnr-section">
        <h2 class="cnr-section-title">${escapeHtml(title)}</h2>
        <div class="cnr-section-body">
          ${fields.map(function(field) {
            if (field.type === 'select') return SelectField(field);
            if (field.type === 'text') return TextInputField(field);
            if (field.type === 'textarea') return TextareaField(field);
            if (field.type === 'attachment') return AttachmentField(field);
            return '';
          }).join('')}
        </div>
      </section>
    `;
  }

  function TipCard(config) {
    const title = config && config.title ? config.title : '';
    const text = config && config.text ? config.text : '';
    return `
      <aside class="cnr-tip-card">
        <h3 class="cnr-tip-title">${escapeHtml(title)}</h3>
        <p class="cnr-tip-text">${escapeHtml(text)}</p>
      </aside>
    `;
  }

  function FooterActions(config) {
    const discard = config && config.discardLabel ? config.discardLabel : 'Discard';
    const submit = config && config.submitLabel ? config.submitLabel : 'Submit request';
    return `
      <div class="cnr-footer">
        <button type="button" class="cnr-btn cnr-btn-ghost">${escapeHtml(discard)} <span>${Icons.close}</span></button>
        <button type="button" class="cnr-btn cnr-btn-primary">${escapeHtml(submit)} <span>${Icons.check}</span></button>
      </div>
    `;
  }

  return {
    StepsList,
    FormSection,
    TipCard,
    FooterActions
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewRequestComponents;
}
