/**
 * Talento Salary Scale Add Levels Components
 * Reusable UI blocks for add-levels step screen.
 */
const SalaryScaleAddLevelsComponents = (function() {
  'use strict';

  const Icons = {
    close: '<i class="fa-solid fa-xmark" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>',
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

  function LevelItem(item) {
    return `
      <article class="ssal-level-item${item.active ? ' is-active' : ''}">
        <span class="ssal-level-dot" style="background:${escapeHtml(item.color || '#2f6ea4')}" aria-hidden="true"></span>
        <div>
          <p class="ssal-level-title">${escapeHtml(item.name || '')}</p>
          <p class="ssal-level-sub">${escapeHtml(item.salaryText || '')}</p>
        </div>
        <button type="button" class="ssal-icon-btn" aria-label="Remove level">${Icons.close}</button>
      </article>
    `;
  }

  function LevelsSidebar(config) {
    const levels = Array.isArray(config.levels) ? config.levels : [];
    return `
      <aside class="ssal-level-list">
        ${levels.map(LevelItem).join('')}
        <button type="button" class="ssal-add-level-btn">
          <span>${escapeHtml(config.addLabel || 'Add another level')}</span>
          <span>${Icons.plus}</span>
        </button>
      </aside>
    `;
  }

  function ColorSwatch(swatch) {
    return `<button type="button" class="ssal-swatch${swatch.active ? ' is-active' : ''}" style="background:${escapeHtml(swatch.color || '#2f6ea4')}" aria-label="${escapeHtml(swatch.label || 'Color')}"></button>`;
  }

  function FormField(field) {
    const inputClass = field && field.inputClass ? ` ${escapeHtml(field.inputClass)}` : '';
    if (field.type === 'select') {
      return `
        <label class="ssal-field">
          <span class="ssal-label">${escapeHtml(field.label || '')}${field.required ? '*' : ''}</span>
          <button type="button" class="ssal-input ssal-select${inputClass}">
            <span>${escapeHtml(field.value || '')}</span>
            <span>${Icons.chevronDown}</span>
          </button>
        </label>
      `;
    }

    return `
      <label class="ssal-field">
        <span class="ssal-label">${escapeHtml(field.label || '')}${field.required ? '*' : ''}</span>
        <input type="text" class="ssal-input${inputClass}" value="${escapeHtml(field.value || '')}" placeholder="${escapeHtml(field.placeholder || '')}" />
      </label>
    `;
  }

  function SalaryBar(item) {
    return `
      <div class="ssal-bar-col">
        <div class="ssal-bar" style="height:${escapeHtml(item.height || '24px')};background:${escapeHtml(item.color || '#CBB8EA')}"></div>
        <span class="ssal-bar-label">${escapeHtml(item.label || '')}</span>
      </div>
    `;
  }

  function SalaryPreview(config) {
    const bars = Array.isArray(config.bars) ? config.bars : [];
    return `
      <section class="ssal-preview-wrap">
        <p class="ssal-preview-title">${escapeHtml(config.title || 'Salary preview')}</p>
        <div class="ssal-preview-card">
          <div class="ssal-preview-head">
            <p>${escapeHtml(config.minLabel || '')}</p>
            <p>${escapeHtml(config.maxLabel || '')}</p>
          </div>
          <div class="ssal-bars">${bars.map(SalaryBar).join('')}</div>
        </div>
      </section>
    `;
  }

  function EditorCard(config) {
    const swatches = Array.isArray(config.swatches) ? config.swatches : [];
    const rowFields = Array.isArray(config.rowFields) ? config.rowFields : [];
    return `
      <section class="ssal-editor-card">
        <div class="ssal-swatches">${swatches.map(ColorSwatch).join('')}</div>
        ${FormField(config.nameField || {})}
        <div class="ssal-row-fields">${rowFields.map(FormField).join('')}</div>
        ${SalaryPreview(config.preview || {})}
      </section>
    `;
  }

  function MainPanel(config) {
    return `
      <section class="ssal-main-panel">
        <h2 class="ssal-main-title">${escapeHtml(config.title || '')}</h2>
        <p class="ssal-main-sub">${escapeHtml(config.subtitle || '')}</p>
        <div class="ssal-main-grid">
          ${LevelsSidebar(config.sidebar || {})}
          ${EditorCard(config.editor || {})}
        </div>
      </section>
    `;
  }

  return {
    MainPanel
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleAddLevelsComponents;
}
