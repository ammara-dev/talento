/**
 * Talento Apps Marketplace Components
 * Reusable components for apps-marketplace screen.
 */
const AppsMarketplaceComponents = (function() {
  'use strict';

  const Icons = {
    external: '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>',
    star: '<i class="fa-solid fa-star" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function PageHeader(config) {
    return `
      <header class="amp-head">
        <h1>${escapeHtml(config.title || 'Apps marketplace')}</h1>
        <div class="amp-head-actions">
          <button type="button" class="amp-btn amp-btn-light">${escapeHtml(config.developerLabel || 'Developer center')} ${Icons.external}</button>
          <button type="button" class="amp-btn amp-btn-primary">${escapeHtml(config.myAppsLabel || 'My apps')} ${Icons.external}</button>
        </div>
      </header>
    `;
  }

  function Search(config) {
    if (typeof ManageAppsComponents !== 'undefined' && ManageAppsComponents.SearchBar) {
      return ManageAppsComponents.SearchBar({ placeholder: config.placeholder || 'Search for an app' });
    }
    return '';
  }

  function CategoryChips(config) {
    const chips = Array.isArray(config.chips) ? config.chips : [];
    return `
      <div class="amp-chips">
        ${chips.map(function(chip) {
          return `<button type="button" class="amp-chip${chip.active ? ' is-active' : ''}">${escapeHtml(chip.label || '')} <span>${escapeHtml(chip.count || '')}</span></button>`;
        }).join('')}
      </div>
    `;
  }

  function FeaturedBanner(config) {
    return `
      <article class="amp-feature-banner">
        <h3>${escapeHtml(config.title || '')}</h3>
        <p>${escapeHtml(config.description || '')}</p>
        <button type="button" class="amp-browse-btn">${escapeHtml(config.cta || '')} ${Icons.external}</button>
        <div class="amp-odoo-mark">${escapeHtml(config.brand || 'odoo')}</div>
      </article>
    `;
  }

  function FeaturedAppCard(app) {
    return `
      <article class="amp-feature-card">
        <div class="amp-feature-logo">${app.logoSvg || ''}</div>
        <div class="amp-feature-copy">
          <h4>${escapeHtml(app.name || '')}</h4>
          <p>${escapeHtml(app.description || '')}</p>
        </div>
      </article>
    `;
  }

  function FeaturedSection(config) {
    const apps = Array.isArray(config.apps) ? config.apps : [];
    return `
      <section class="amp-section">
        <h2>${escapeHtml(config.title || '')}</h2>
        <div class="amp-feature-grid">
          ${FeaturedBanner(config.banner || {})}
          <div class="amp-feature-cards">
            ${apps.map(FeaturedAppCard).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function MarketplaceCard(app) {
    return `
      <article class="amp-market-card">
        <div class="amp-market-art ${escapeHtml(app.artClass || '')}">${escapeHtml(app.artLabel || '')}</div>
        <div class="amp-market-body">
          <h3>${escapeHtml(app.name || '')}</h3>
          <p>${escapeHtml(app.description || '')}</p>
          <div class="amp-market-rating">${escapeHtml(app.rating || '')} ${Icons.star}</div>
        </div>
      </article>
    `;
  }

  function MarketplaceSection(config) {
    const apps = Array.isArray(config.apps) ? config.apps : [];
    return `
      <section class="amp-section">
        <h2>${escapeHtml(config.title || '')}</h2>
        <div class="amp-market-grid">
          ${apps.map(MarketplaceCard).join('')}
        </div>
      </section>
    `;
  }

  return {
    PageHeader,
    Search,
    CategoryChips,
    FeaturedSection,
    MarketplaceSection
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppsMarketplaceComponents;
}
