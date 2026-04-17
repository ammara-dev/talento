/**
 * Talento Messages Components
 * Reusable UI building blocks for the Messages screen.
 */
const MessagesComponents = (function() {
  'use strict';

  const Icons = {
    search: '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>',
    star: '<i class="fa-solid fa-star" aria-hidden="true"></i>',
    history: '<i class="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>',
    channel: '<i class="fa-solid fa-message" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>',
    attach: '<i class="fa-solid fa-paperclip" aria-hidden="true"></i>',
    smile: '<i class="fa-regular fa-face-smile" aria-hidden="true"></i>',
    mention: '<i class="fa-solid fa-at" aria-hidden="true"></i>',
    send: '<i class="fa-solid fa-paper-plane" aria-hidden="true"></i>',
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

  function UserRow(item, rowClass) {
    const activeClass = item && item.active ? ' active' : '';
    return `
      <button type="button" class="${rowClass}${activeClass}" data-messages-user="${escapeHtml(item.id || '')}">
        <img class="msg-avatar-sm" src="${escapeHtml(item.avatar || '')}" alt="${escapeHtml(item.name || '')}" />
        <span class="msg-row-name">${escapeHtml(item.name || '')}</span>
      </button>
    `;
  }

  function Sidebar(config) {
    const channels = config && Array.isArray(config.channels) ? config.channels : [];
    const directMessages = config && Array.isArray(config.directMessages) ? config.directMessages : [];
    return `
      <aside class="msg-sidebar">
        <h1 class="msg-heading">${escapeHtml(config.title || 'Inbox')}</h1>

        <div class="msg-search">
          <span class="msg-search-icon">${Icons.search}</span>
          <input type="text" placeholder="Search" />
        </div>

        <div class="msg-quick-list">
          <button type="button" class="msg-quick-item"><span>${Icons.star}</span><span>Starred</span></button>
          <button type="button" class="msg-quick-item"><span>${Icons.history}</span><span>History</span></button>
        </div>

        <div class="msg-group">
          <div class="msg-group-head">
            <p class="msg-group-title">CHANNELS</p>
            <button type="button" class="msg-group-plus" aria-label="Add channel">${Icons.plus}</button>
          </div>
          <div class="msg-group-list">
            ${channels.map(function(item) {
              return `
                <button type="button" class="msg-channel-item">
                  <span class="msg-channel-icon">${Icons.channel}</span>
                  <span class="msg-row-name">${escapeHtml(item.name)}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="msg-group">
          <div class="msg-group-head">
            <p class="msg-group-title">DIRECT MESSAGES</p>
            <button type="button" class="msg-group-plus" aria-label="Add direct message">${Icons.plus}</button>
          </div>
          <div class="msg-group-list">
            ${directMessages.map(function(item) { return UserRow(item, 'msg-dm-item'); }).join('')}
          </div>
        </div>
      </aside>
    `;
  }

  function ChatHeader(config) {
    return `
      <header class="msg-chat-header">
        <img class="msg-avatar-sm" src="${escapeHtml(config.avatar || '')}" alt="${escapeHtml(config.name || '')}" />
        <p class="msg-chat-title">${escapeHtml(config.name || '')}</p>
      </header>
    `;
  }

  function ProfileCard(config) {
    return `
      <section class="msg-profile-card">
        <img class="msg-avatar-lg" src="${escapeHtml(config.avatar || '')}" alt="${escapeHtml(config.name || '')}" />
        <div class="msg-profile-copy">
          <h2 class="msg-profile-name">${escapeHtml(config.name || '')}</h2>
          <p class="msg-profile-role">${escapeHtml(config.role || '')}</p>
          <p class="msg-profile-text">${escapeHtml(config.description || '')}</p>
          <button type="button" class="msg-profile-btn">
            <span>View Profile</span>
            <span>${Icons.external}</span>
          </button>
        </div>
      </section>
    `;
  }

  function Composer(config) {
    return `
      <footer class="msg-composer">
        <input class="msg-composer-input" type="text" placeholder="${escapeHtml(config.placeholder || 'Enter message...')}" />
        <div class="msg-composer-row">
          <div class="msg-composer-tools">
            <button type="button" class="msg-tool-btn" aria-label="Attach file">${Icons.attach}</button>
            <button type="button" class="msg-tool-btn" aria-label="Emoji">${Icons.smile}</button>
            <button type="button" class="msg-tool-btn" aria-label="Mention">${Icons.mention}</button>
          </div>
          <button type="button" class="msg-send-btn"><span>${Icons.send}</span><span>Send</span></button>
        </div>
      </footer>
    `;
  }

  return {
    Sidebar,
    ChatHeader,
    ProfileCard,
    Composer
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MessagesComponents;
}
