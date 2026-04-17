/**
 * Talento Messages Chat Components
 * Reusable thread components for chat timeline screen.
 */
const MessagesChatComponents = (function() {
  'use strict';

  const Icons = {
    file: '<span class="msgc-file-pill">PDF</span>',
    download: '<i class="fa-solid fa-arrow-down" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function DayDivider(config) {
    return `
      <div class="msgc-day-divider">
        <span class="msgc-day-text">${escapeHtml(config.label || '')}</span>
      </div>
    `;
  }

  function FileAttachment(config) {
    return `
      <div class="msgc-file-card">
        <div class="msgc-file-left">
          ${Icons.file}
          <div class="msgc-file-copy">
            <p class="msgc-file-name">${escapeHtml(config.name || '')}</p>
            <p class="msgc-file-meta">${escapeHtml(config.meta || '')}</p>
          </div>
        </div>
        <button type="button" class="msgc-file-download" aria-label="Download file">${Icons.download}</button>
      </div>
    `;
  }

  function MessageItem(config) {
    const attachment = config.attachment ? FileAttachment(config.attachment) : '';
    const roleClass = config.sender === 'you' ? ' msgc-message-you' : '';

    return `
      <article class="msgc-message${roleClass}">
        <img class="msgc-avatar" src="${escapeHtml(config.avatar || '')}" alt="${escapeHtml(config.senderLabel || '')}" />
        <div class="msgc-content">
          <div class="msgc-head">
            <span class="msgc-sender">${escapeHtml(config.senderLabel || '')}</span>
            <span class="msgc-time">${escapeHtml(config.time || '')}</span>
          </div>
          <p class="msgc-text">${escapeHtml(config.text || '')}</p>
          ${attachment}
        </div>
      </article>
    `;
  }

  function MessageList(config) {
    const items = config && Array.isArray(config.items) ? config.items : [];
    return `
      <section class="msgc-list">
        ${items.map(function(item) {
          if (item.type === 'divider') return DayDivider(item);
          return MessageItem(item);
        }).join('')}
      </section>
    `;
  }

  return {
    DayDivider,
    FileAttachment,
    MessageItem,
    MessageList
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MessagesChatComponents;
}
