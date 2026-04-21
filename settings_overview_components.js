/**
 * Talento Settings Overview Components
 * Reusable components for settings sidebar and cards.
 */
const SettingsOverviewComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function SidebarItem(item) {
    return `
      <button type="button" class="set-side-item${item.active ? ' is-active' : ''}">
        <span class="set-side-item-main">
          <i class="${escapeHtml(item.icon || 'fa-solid fa-circle')}" aria-hidden="true"></i>
          <span>${escapeHtml(item.label || '')}</span>
        </span>
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
      </button>
    `;
  }

  function SidebarGroup(group) {
    const items = Array.isArray(group.items) ? group.items : [];
    return `
      <section class="set-side-group">
        <p class="set-side-group-title">${escapeHtml(group.title || '')}</p>
        <div class="set-side-group-list">
          ${items.map(SidebarItem).join('')}
        </div>
      </section>
    `;
  }

  function SettingsSidebar(config) {
    const groups = Array.isArray(config.groups) ? config.groups : [];
    return `
      <div class="set-side-wrap">
        <div class="set-side-head">
          <h2>Settings</h2>
          ${window.LeaveComponents && typeof LeaveComponents.SearchInput === 'function'
            ? LeaveComponents.SearchInput({ placeholder: 'Search', width: '100%' })
            : '<input class="set-side-search-fallback" placeholder="Search" />'}
        </div>
        <div class="set-side-scroll">
          ${groups.map(SidebarGroup).join('')}
        </div>
      </div>
    `;
  }

  function SectionIntro(config) {
    return `
      <div class="set-section-intro">
        <h2>${escapeHtml(config.title || '')}</h2>
        <p>${escapeHtml(config.description || '')}</p>
      </div>
    `;
  }

  function SettingsCard(card) {
    const items = Array.isArray(card.items) ? card.items : [];
    return `
      <article class="set-card">
        <div class="set-card-top">
          <div class="set-card-icon"><i class="${escapeHtml(card.icon || 'fa-solid fa-gear')}" aria-hidden="true"></i></div>
          <div>
            <h3>${escapeHtml(card.title || '')}</h3>
            <p>${escapeHtml(card.description || '')}</p>
          </div>
        </div>
        <div class="set-card-list">
          ${items.map(function(item) { return `<p>• ${escapeHtml(item)}</p>`; }).join('')}
        </div>
        <button type="button" class="set-card-action">
          Manage settings
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </article>
    `;
  }

  function SettingsGrid(config) {
    const cards = Array.isArray(config.cards) ? config.cards : [];
    return `<div class="set-card-grid">${cards.map(SettingsCard).join('')}</div>`;
  }

  return {
    SettingsSidebar,
    SectionIntro,
    SettingsGrid
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsOverviewComponents;
}

