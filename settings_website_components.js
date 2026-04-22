/**
 * Talento Settings Website Components
 * Reusable UI pieces for the website settings screen.
 */
const SettingsWebsiteComponents = (function() {
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
   * WebsitePageIntro — page header with icon, title, description,
   * and an optional action button (e.g. Preview) on the right.
   */
  function WebsitePageIntro(config) {
    return `
      <header class="website-page-intro">
        <div class="website-page-intro-left">
          <div class="org-page-icon">
            <i class="${escapeHtml(config.icon || 'fa-solid fa-window-maximize')}" aria-hidden="true"></i>
          </div>
          <div>
            <h1 class="org-page-title">${escapeHtml(config.title || '')}</h1>
            <p class="org-page-subtitle">${escapeHtml(config.description || '')}</p>
          </div>
        </div>
        ${config.previewText ? `
          <button type="button" class="website-preview-btn">
            ${escapeHtml(config.previewText)}
            <i class="fa-solid fa-eye" aria-hidden="true"></i>
          </button>
        ` : ''}
      </header>
    `;
  }

  /**
   * WebsiteControl — right-side control for a setting row.
   * Supports: 'toggle' | 'upload' | 'color' | 'select'
   */
  function WebsiteControl(item) {
    switch (item.control) {
      case 'toggle':
        return `
          <button type="button"
            class="website-toggle${item.enabled ? ' is-on' : ''}"
            aria-pressed="${item.enabled ? 'true' : 'false'}">
            <span></span>
          </button>
        `;

      case 'upload':
        return `
          <button type="button" class="website-upload-btn">
            ${escapeHtml(item.uploadText || 'Upload')}
            <i class="fa-solid fa-arrow-up-from-bracket" aria-hidden="true"></i>
          </button>
        `;

      case 'color':
        return `
          <div class="website-color-control">
            <input
              type="text"
              class="website-color-input"
              value="${escapeHtml(item.value || '')}"
              aria-label="${escapeHtml(item.title || 'Color value')}"
            />
            <span class="website-color-swatch" style="background:${escapeHtml(item.value || '#fff')};"></span>
          </div>
        `;

      case 'select':
        return `
          <button type="button" class="website-select-btn">
            ${escapeHtml(item.value || 'Select')}
            <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
          </button>
        `;

      default:
        return '';
    }
  }

  /**
   * WebsiteSettingRow — repeated pattern: title + description on left, control on right.
   * Used inside every WebsiteSettingsCard.
   */
  function WebsiteSettingRow(item) {
    return `
      <div class="website-setting-row">
        <div class="website-setting-text">
          <p class="website-setting-title">${escapeHtml(item.title || '')}</p>
          <p class="website-setting-desc">${escapeHtml(item.description || '')}</p>
        </div>
        ${WebsiteControl(item)}
      </div>
    `;
  }

  /**
   * WebsiteSettingsCard — card with heading block (title + subtitle)
   * and a list of WebsiteSettingRow items. Supports dynamic data.
   * config: { title, description, rows: [...] }
   */
  function WebsiteSettingsCard(config) {
    const rows = Array.isArray(config.rows) ? config.rows : [];
    return `
      <section class="website-card">
        <div class="website-card-head">
          <h2 class="website-card-title">${escapeHtml(config.title || '')}</h2>
          <p class="website-card-subtitle">${escapeHtml(config.description || '')}</p>
        </div>
        <div class="website-setting-rows">
          ${rows.map(WebsiteSettingRow).join('')}
        </div>
      </section>
    `;
  }

  return {
    WebsitePageIntro,
    WebsiteSettingsCard
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsWebsiteComponents;
}
