/**
 * Talento Notifications Components
 * Reusable UI blocks for notifications screen.
 */
const NotificationsComponents = (function() {
  'use strict';

  const Icons = {
    settings: '<i class="fa-solid fa-gear" aria-hidden="true"></i>',
    system: '<i class="fa-solid fa-gear" aria-hidden="true"></i>',
    reminder: '<i class="fa-solid fa-bell" aria-hidden="true"></i>',
    celebration: '<i class="fa-solid fa-cake-candles" aria-hidden="true"></i>'
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
      <header class="ntf-header">
        <h1 class="ntf-title">${escapeHtml(config.title || 'Notifications')}</h1>
        <button type="button" class="ntf-config-btn">
          <span>${escapeHtml(config.configLabel || 'Configuration')}</span>
          <span class="ntf-config-icon">${Icons.settings}</span>
        </button>
      </header>
    `;
  }

  function NotificationItem(item) {
    const icon = Icons[item.type] || Icons.system;
    const showBadge = !!item.isNew;

    return `
      <article class="ntf-item">
        <div class="ntf-item-left">
          <span class="ntf-item-icon">${icon}</span>
          <div class="ntf-item-copy">
            <div class="ntf-item-meta-row">
              <h2 class="ntf-item-title">${escapeHtml(item.title)}</h2>
              <p class="ntf-item-subtitle">${escapeHtml(item.subtitle)}</p>
            </div>
            <p class="ntf-item-text">${escapeHtml(item.message)}</p>
          </div>
        </div>
        <div class="ntf-item-right">
          <span class="ntf-item-time">${escapeHtml(item.time)}</span>
          ${showBadge ? '<span class="ntf-item-badge">New</span>' : ''}
        </div>
      </article>
    `;
  }

  function NotificationList(config) {
    const items = config && Array.isArray(config.items) ? config.items : [];
    return `
      <section class="ntf-list">
        ${items.map(NotificationItem).join('')}
      </section>
    `;
  }

  return {
    Header,
    NotificationItem,
    NotificationList
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = NotificationsComponents;
}
