/**
 * Talento Manage Apps Components
 * Reusable components for manage-your-apps screen.
 */
const ManageAppsComponents = (function() {
  'use strict';

  const Icons = {
    search: '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>',
    external: '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function Header(config) {
    return `
      <header class="ma-header">
        <p class="ma-breadcrumb">${escapeHtml(config.breadcrumb || '')}</p>
        <h1 class="ma-title">${escapeHtml(config.title || '')}</h1>
      </header>
    `;
  }

  function SearchBar(config) {
    return `
      <div class="ma-search">
        <span class="ma-search-icon">${Icons.search}</span>
        <input type="text" placeholder="${escapeHtml(config.placeholder || 'Search')}" />
      </div>
    `;
  }

  function ToggleSwitch(isOn) {
    return `
      <button type="button" class="ma-switch${isOn ? ' on' : ''}" aria-label="Toggle app">
        <span class="ma-switch-thumb"></span>
      </button>
    `;
  }

  function AppCard(app) {
    return `
      <article class="ma-card">
        <div class="ma-card-top">
          <div class="ma-app-logo-wrap" aria-hidden="true">
            ${app.logoSvg
              ? `<span class="ma-app-logo-svg">${app.logoSvg}</span>`
              : `<img class="ma-app-logo" src="${escapeHtml(app.logo || '')}" alt="${escapeHtml(app.name || '')}" />`}
          </div>
          <div class="ma-app-copy">
            <h2 class="ma-app-name">${escapeHtml(app.name || '')}</h2>
            <p class="ma-app-desc">${escapeHtml(app.description || '')}</p>
          </div>
        </div>
        <div class="ma-card-bottom">
          <div class="ma-actions">
            <button type="button" class="ma-btn detail">Details <span>${Icons.external}</span></button>
            <button type="button" class="ma-btn remove">Remove <span>${Icons.external}</span></button>
          </div>
          ${ToggleSwitch(!!app.enabled)}
        </div>
      </article>
    `;
  }

  function AppGrid(config) {
    const apps = config && Array.isArray(config.apps) ? config.apps : [];
    return `
      <section class="ma-grid">
        ${apps.map(AppCard).join('')}
      </section>
    `;
  }

  return {
    Header,
    SearchBar,
    AppCard,
    AppGrid
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ManageAppsComponents;
}
