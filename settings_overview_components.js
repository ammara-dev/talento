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

  function SidebarChildItem(item) {
    if (!item.href) {
      return `<span class="set-side-child${item.active ? ' is-active' : ''}">${escapeHtml(item.label || '')}</span>`;
    }
    return `<a class="set-side-child${item.active ? ' is-active' : ''}" href="${escapeHtml(item.href)}">${escapeHtml(item.label || '')}</a>`;
  }

  function SidebarItem(item) {
    const children = Array.isArray(item.children) ? item.children : [];
    const hasChildren = children.length > 0;
    const chevronMarkup = hasChildren
      ? `<i class="fa-solid fa-chevron-down${item.expanded ? ' is-open' : ''}" aria-hidden="true"></i>`
      : '';
    const itemContent = `
      <span class="set-side-item-main">
        <i class="${escapeHtml(item.icon || 'fa-solid fa-circle')}" aria-hidden="true"></i>
        <span>${escapeHtml(item.label || '')}</span>
      </span>
      ${chevronMarkup}
    `;

    const itemMarkup = hasChildren
      ? `<button type="button" class="set-side-item${item.active ? ' is-active' : ''}">${itemContent}</button>`
      : (item.href
        ? `<a class="set-side-item${item.active ? ' is-active' : ''}" href="${escapeHtml(item.href)}">${itemContent}</a>`
        : `<button type="button" class="set-side-item${item.active ? ' is-active' : ''}">${itemContent}</button>`);

    if (!hasChildren) {
      return itemMarkup;
    }

    return `
      <div class="set-side-item-block">
        ${itemMarkup}
        <div class="set-side-children${item.expanded ? ' is-open' : ''}">
          ${children.map(SidebarChildItem).join('')}
        </div>
      </div>
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
          <h2><a href="settings-overview.html" style="color:inherit;text-decoration:none;">Settings</a></h2>
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
        <div class="set-section-title-row">
          <h2>${escapeHtml(config.title || '')}</h2>
          ${config.badge ? `<span class="set-section-badge">${escapeHtml(config.badge)}</span>` : ''}
        </div>
        <p>${escapeHtml(config.description || '')}</p>
      </div>
    `;
  }

  function SettingsCard(card, variantClass) {
    const items = Array.isArray(card.items) ? card.items : [];
    const actionText = escapeHtml(card.actionText || 'Manage settings');
    const actionIcon = '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>';
    const actionMarkup = card.actionHref
      ? `<a class="set-card-action" href="${escapeHtml(card.actionHref)}">${actionText}${actionIcon}</a>`
      : `<button type="button" class="set-card-action">${actionText}${actionIcon}</button>`;
    return `
      <article class="set-card${variantClass ? ` ${variantClass}` : ''}">
        <div class="set-card-top">
          <div class="set-card-icon"><i class="${escapeHtml(card.icon || 'fa-solid fa-gear')}" aria-hidden="true"></i></div>
          <div>
            <h3>${escapeHtml(card.title || '')}</h3>
            <p>${escapeHtml(card.description || '')}</p>
          </div>
        </div>
        <ul class="set-card-list">
          ${items.map(function(item) { return `<li>${escapeHtml(item)}</li>`; }).join('')}
        </ul>
        ${actionMarkup}
      </article>
    `;
  }

  function SettingsGrid(config) {
    const cards = Array.isArray(config.cards) ? config.cards : [];
    const variantClass = config.variant === 'advanced-muted' ? 'set-card-muted' : '';
    return `<div class="set-card-grid">${cards.map(function(card) { return SettingsCard(card, variantClass); }).join('')}</div>`;
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

