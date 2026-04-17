/**
 * Talento Credits Packs Components
 * Reusable card blocks for credits packs screen.
 */
const CreditsPacksComponents = (function() {
  'use strict';

  const Icons = {
    sparkles: `
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <path d="M28.8 10.2 30.6 14l3.8 1.8-3.8 1.8-1.8 3.8-1.8-3.8-3.8-1.8 3.8-1.8 1.8-3.8Z" fill="currentColor"/>
        <path d="M16 17.4 17.4 20.2l2.8 1.4-2.8 1.4L16 25.8l-1.4-2.8-2.8-1.4 2.8-1.4 1.4-2.8Z" fill="currentColor"/>
        <path d="M22.2 22.8 23.6 25.6l2.8 1.4-2.8 1.4-1.4 2.8-1.4-2.8-2.8-1.4 2.8-1.4 1.4-2.8Z" fill="currentColor"/>
      </svg>
    `,
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function CreditsPackCard(pack) {
    return `
      <article class="crp-pack-card">
        <div class="crp-pack-top">
          <div>
            <p class="crp-pack-label">${escapeHtml(pack.label || 'Credits/Month')}</p>
            <p class="crp-pack-value">
              <span>${escapeHtml(pack.value || '')}</span>
              ${pack.bonus ? `<span class="crp-pack-bonus">${escapeHtml(pack.bonus)}</span>` : ''}
            </p>
          </div>
          <span class="crp-pack-deco">${Icons.sparkles}</span>
        </div>
        <div class="crp-pack-bottom">
          <p class="crp-pack-price">${escapeHtml(pack.price || '')}</p>
          <button type="button" class="crp-pack-btn">
            <span>${escapeHtml(pack.buttonLabel || 'Purchase')}</span>
            <span>${Icons.plus}</span>
          </button>
        </div>
      </article>
    `;
  }

  function CreditsPackGrid(config) {
    const packs = config && Array.isArray(config.packs) ? config.packs : [];
    return `
      <section class="crp-grid">
        ${packs.map(CreditsPackCard).join('')}
      </section>
    `;
  }

  return {
    CreditsPackCard,
    CreditsPackGrid
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreditsPacksComponents;
}
