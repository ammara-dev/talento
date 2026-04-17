/**
 * Talento AI Conversation Components
 * Reusable thread blocks for Talento AI conversation screen.
 */
const TalentoAIConversationComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatMultilineText(text) {
    return escapeHtml(text || '').replace(/\n/g, '<br>');
  }

  function MessageBubble(item) {
    const roleClass = item.role === 'user' ? 'tai-msg-user' : 'tai-msg-ai';
    const alignClass = item.role === 'user' ? 'tai-msg-wrap-user' : 'tai-msg-wrap-ai';
    return `
      <div class="tai-msg-wrap ${alignClass}">
        <div class="tai-msg-bubble ${roleClass}">
          <p class="tai-msg-text">${formatMultilineText(item.text)}</p>
        </div>
        <p class="tai-msg-meta">${escapeHtml(item.meta || '')}</p>
      </div>
    `;
  }

  function Conversation(config) {
    const items = config && Array.isArray(config.items) ? config.items : [];
    return `
      <section class="tai-conversation">
        ${items.map(MessageBubble).join('')}
      </section>
    `;
  }

  return {
    MessageBubble,
    Conversation
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TalentoAIConversationComponents;
}
