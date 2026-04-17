/**
 * Talento Create New Survey Start Components
 * Reusable building blocks for the empty-state survey start screen.
 */
const CreateNewSurveyStartComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function StartBuildingCard(config) {
    const title = escapeHtml(config.title || 'Start building your survey');
    const description = escapeHtml(config.description || '');
    const ctaLabel = escapeHtml(config.ctaLabel || 'Add first question');
    const plusIcon = (typeof SurveyComponents !== 'undefined' && SurveyComponents.Icons)
      ? SurveyComponents.Icons.plus
      : '+';

    return `
      <section class="sv-card sv-start-builder-card">
        <h2 class="sv-start-builder-title">${title}</h2>
        <p class="sv-start-builder-text">${description}</p>
        <button class="sv-start-builder-btn" type="button">
          <span>${ctaLabel}</span>
          <span class="sv-start-builder-btn-icon">${plusIcon}</span>
        </button>
      </section>
    `;
  }

  function StartPageStack(config) {
    return `
      <div class="sv-page-stack">
        ${SurveyComponents.SurveyMetaCard(config.meta || {})}
        ${StartBuildingCard(config.startCard || {})}
      </div>
    `;
  }

  return {
    StartBuildingCard,
    StartPageStack
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewSurveyStartComponents;
}
