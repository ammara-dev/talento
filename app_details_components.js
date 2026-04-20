/**
 * Talento App Details Components
 * Reusable components for app-details screen.
 */
const AppDetailsComponents = (function() {
  'use strict';

  const Icons = {
    chevronLeft: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
    chevronRight: '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    download: '<i class="fa-solid fa-download" aria-hidden="true"></i>',
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

  function AppBadge(app) {
    return `
      <div class="ad-app-head">
        <div class="ad-app-logo-wrap" aria-hidden="true">
          <span class="ad-app-logo-svg">${app.logoSvg || ''}</span>
        </div>
        <div class="ad-app-copy">
          <h1>${escapeHtml(app.name || '')}</h1>
          <p>${escapeHtml(app.subtitle || '')}</p>
          <div class="ad-rating-row">
            <span>${escapeHtml(app.rating || '')}</span>
            <span class="ad-rating-star">${Icons.star}</span>
            <span>${escapeHtml(app.reviews || '')}</span>
          </div>
        </div>
      </div>
    `;
  }

  function AppHeader(config) {
    return `
      <header class="ad-header">
        <div class="ad-breadcrumb">${escapeHtml(config.breadcrumb || '')}</div>
        <div class="ad-pager">
          <button type="button" class="ad-nav-btn">${Icons.chevronLeft} Back</button>
          <span>${escapeHtml(config.page || '')}</span>
          <button type="button" class="ad-nav-btn">Next ${Icons.chevronRight}</button>
        </div>
      </header>
    `;
  }

  function Hero(config) {
    return `
      <section class="ad-hero">
        ${AppBadge(config.app || {})}
        <button type="button" class="ad-install-btn">${escapeHtml(config.installLabel || 'Install app')} ${Icons.download}</button>
      </section>
    `;
  }

  function WorkflowCard(config) {
    return `
      <section class="ad-workflow-card">
        <img src="${escapeHtml(config.imageSrc || '')}" alt="${escapeHtml(config.alt || 'Automation of order workflow')}" />
      </section>
    `;
  }

  function Overview(config) {
    const paragraphs = Array.isArray(config.paragraphs) ? config.paragraphs : [];
    const bullets = Array.isArray(config.bullets) ? config.bullets : [];
    return `
      <section class="ad-overview">
        <h2>${escapeHtml(config.title || 'Overview')}</h2>
        <div class="ad-overview-body">
          ${paragraphs.map(function(line) { return `<p>${escapeHtml(line)}</p>`; }).join('')}
          ${bullets.length ? `<ul>${bullets.map(function(item) { return `<li>${escapeHtml(item)}</li>`; }).join('')}</ul>` : ''}
        </div>
      </section>
    `;
  }

  return {
    AppHeader,
    Hero,
    WorkflowCard,
    Overview
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppDetailsComponents;
}
