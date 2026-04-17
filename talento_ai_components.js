/**
 * Talento AI Components
 * Reusable UI pieces for Talento AI screen.
 */
const TalentoAIComponents = (function() {
  'use strict';

  const Icons = {
    search: '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>',
    history: '<i class="fa-solid fa-message" aria-hidden="true"></i>',
    sparkles: '<i class="fa-solid fa-sparkles" aria-hidden="true"></i>',
    paperclip: '<i class="fa-solid fa-paperclip" aria-hidden="true"></i>',
    send: '<i class="fa-solid fa-paper-plane" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    arrowUpRight: '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function Sidebar(config) {
    const historyItems = config && Array.isArray(config.historyItems) ? config.historyItems : [];

    return `
      <aside class="tai-sidebar">
        <h1 class="tai-sidebar-title">${escapeHtml(config.title || 'Talento AI')}</h1>
        <div class="tai-search">
          <span class="tai-search-icon">${Icons.search}</span>
          <input type="text" placeholder="${escapeHtml(config.searchPlaceholder || 'Search')}" />
        </div>

        <button type="button" class="tai-new-chat-btn">
          <span>${Icons.plus}</span>
          <span>${escapeHtml(config.newChatLabel || 'New chat')}</span>
        </button>

        <div class="tai-history">
          <p class="tai-history-title">${escapeHtml(config.historyLabel || 'HISTORY')}</p>
          <div class="tai-history-list">
            ${historyItems.map(function(item) {
              return `
                <button type="button" class="tai-history-item">
                  <span class="tai-history-icon">${Icons.history}</span>
                  <span class="tai-history-text">${escapeHtml(item.label)}</span>
                </button>
              `;
            }).join('')}
          </div>
        </div>

        <div class="tai-credit-card">
          <p class="tai-credit-line"><span>${Icons.sparkles}</span><span>${escapeHtml(config.creditsText || '')}</span></p>
          <p class="tai-credit-sub">${escapeHtml(config.creditsSubText || '')}</p>
          <button type="button" class="tai-credit-btn">
            <span>${escapeHtml(config.addCreditsLabel || 'Add more')}</span>
            <span>${Icons.arrowUpRight}</span>
          </button>
        </div>
      </aside>
    `;
  }

  function SuggestionChip(label) {
    return `<button type="button" class="tai-chip">${escapeHtml(label)}</button>`;
  }

  function EmptyState(config) {
    const suggestions = config && Array.isArray(config.suggestions) ? config.suggestions : [];
    return `
      <section class="tai-empty-state">
        <div class="tai-empty-copy">
          <h2 class="tai-empty-title">${escapeHtml(config.title || '')}</h2>
          <p class="tai-empty-sub">${escapeHtml(config.subtitle || '')}</p>
        </div>
        <div class="tai-suggestions">
          <p class="tai-suggestions-label">${escapeHtml(config.tryLabel || 'Try this:')}</p>
          <div class="tai-chip-row">
            ${suggestions.map(SuggestionChip).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function Composer(config) {
    return `
      <footer class="tai-composer">
        <input class="tai-composer-input" type="text" placeholder="${escapeHtml(config.placeholder || '')}" />
        <div class="tai-composer-row">
          <div class="tai-composer-left">
            <button type="button" class="tai-tool-btn" aria-label="Attach">${Icons.paperclip}</button>
            <button type="button" class="tai-source-btn">
              <span>${escapeHtml(config.sourceLabel || '')}</span>
              <span>${Icons.chevronDown}</span>
            </button>
          </div>
          <button type="button" class="tai-send-btn">
            <span>${Icons.send}</span>
            <span>${escapeHtml(config.sendLabel || 'Send')}</span>
          </button>
        </div>
      </footer>
    `;
  }

  return {
    Sidebar,
    EmptyState,
    Composer
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = TalentoAIComponents;
}
