/**
 * Talento Create New Evaluation Scoring Components
 * Reusable UI building blocks for the scoring step.
 */
const CreateNewEvaluationScoringComponents = (function() {
  'use strict';

  const Icons = {
    back: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    warning: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#C68B17"/><path d="M12 7v6.4" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="16.7" r="1.2" fill="#fff"/></svg>`,
    radioOff: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="#A59FAD" stroke-width="1.9"/></svg>`,
    radioOn: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8.5" stroke="#8F64F7" stroke-width="1.9"/><circle cx="12" cy="12" r="4.2" fill="#B58AF8"/></svg>`,
    duplicate: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="11" height="11" rx="2"/><rect x="4" y="4" width="11" height="11" rx="2"/></svg>`,
    trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    refresh: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 15.3-3.3L23 10M1 14l4.2 4.3A9 9 0 0 0 20.5 15"/></svg>`,
    chevronLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRightAccent: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function BackLabel(config) {
    return `
      <button type="button" class="sc-back-link">
        ${Icons.back}
        <span>${escapeHtml(config.label || 'Start new evaluation from scratch')}</span>
      </button>
    `;
  }

  function ScoringOption(option) {
    const selected = !!option.selected;
    return `
      <button type="button" class="sc-choice${selected ? ' is-active' : ''}" aria-pressed="${selected}">
        <span class="sc-choice-radio">${selected ? Icons.radioOn : Icons.radioOff}</span>
        <span class="sc-choice-copy">
          <span class="sc-choice-title">${escapeHtml(option.title || '')}</span>
          <span class="sc-choice-text">${escapeHtml(option.description || '')}</span>
        </span>
      </button>
    `;
  }

  function ScoringSection(config) {
    const options = Array.isArray(config.options) ? config.options : [];
    return `
      <section class="sc-section">
        <h2 class="sc-section-title">${escapeHtml(config.title || 'Scoring')}</h2>
        <p class="sc-section-text">${escapeHtml(config.description || '')}</p>
        <div class="sc-choices-grid">
          ${options.map(ScoringOption).join('')}
        </div>
      </section>
    `;
  }

  function LevelItem(level) {
    return `
      <article class="sc-level-item">
        <span class="sc-level-color" style="background:${escapeHtml(level.color || '#EF4444')}"></span>
        <div class="sc-level-main">
          <div class="sc-level-field">
            <p class="sc-field-label">Level name</p>
            <input type="text" value="${escapeHtml(level.name || '')}" />
          </div>
          <div class="sc-range-grid">
            <label class="sc-level-field">
              <span class="sc-field-label">From</span>
              <input class="sc-range-input" type="text" value="${escapeHtml(level.from || '')}" />
            </label>
            <label class="sc-level-field">
              <span class="sc-field-label">To</span>
              <input class="sc-range-input" type="text" value="${escapeHtml(level.to || '')}" />
            </label>
          </div>
          <div class="sc-level-actions">
            <button type="button" class="sc-icon-btn" aria-label="Duplicate level">${Icons.duplicate}</button>
            <button type="button" class="sc-action-btn">Delete ${Icons.trash}</button>
          </div>
        </div>
      </article>
    `;
  }

  function PerformanceLevelsSection(config) {
    const levels = Array.isArray(config.levels) ? config.levels : [];
    const noticeTitle = escapeHtml(config.noticeTitle || '');
    const noticeText = escapeHtml(config.noticeText || '');
    return `
      <section class="sc-section sc-section--levels">
        <h2 class="sc-section-title">${escapeHtml(config.title || 'Performance levels')}</h2>
        <p class="sc-section-text">${escapeHtml(config.description || '')}</p>
        <div class="sc-warning">
          <span class="sc-warning-icon">${Icons.warning}</span>
          <span>
            <strong>${noticeTitle}</strong>
            <span>${noticeText}</span>
          </span>
        </div>
        <div class="sc-levels-list">
          ${levels.map(LevelItem).join('')}
        </div>
      </section>
    `;
  }

  function ScoringCard(config) {
    const progress = Math.max(0, Math.min(100, Number(config.progress || 100)));
    return `
      <section class="sc-card">
        <div class="sc-progress-row">
          <p><span>${escapeHtml(config.stepPrimary || 'Step 02')}</span> <span class="sc-step-muted">${escapeHtml(config.stepMuted || 'of 02')}</span></p>
          <div class="sc-progress-track"><span style="width:${progress}%"></span></div>
        </div>
        ${ScoringSection(config.scoring || {})}
        ${PerformanceLevelsSection(config.performanceLevels || {})}
        <button type="button" class="sc-add-level">${escapeHtml(config.addLevelLabel || 'Add another level')} ${Icons.plus}</button>
      </section>
    `;
  }

  function FooterBar(config) {
    const clearHref = config.clearHref || '';
    const backHref = config.backHref || '';
    const nextHref = config.nextHref || '';
    const clearControl = clearHref
      ? `<a class="sc-btn sc-btn--ghost" href="${escapeHtml(clearHref)}">${escapeHtml(config.clearLabel || 'Clear form')} ${Icons.refresh}</a>`
      : `<button type="button" class="sc-btn sc-btn--ghost">${escapeHtml(config.clearLabel || 'Clear form')} ${Icons.refresh}</button>`;
    const backControl = backHref
      ? `<a class="sc-btn sc-btn--soft" href="${escapeHtml(backHref)}">${Icons.chevronLeft}<span>${escapeHtml(config.backLabel || 'Back')}</span></a>`
      : `<button type="button" class="sc-btn sc-btn--soft">${Icons.chevronLeft}<span>${escapeHtml(config.backLabel || 'Back')}</span></button>`;
    const nextControl = nextHref
      ? `<a class="sc-btn sc-btn--primary" href="${escapeHtml(nextHref)}"><span>${escapeHtml(config.nextLabel || 'Next step')}</span>${Icons.chevronRightAccent}</a>`
      : `<button type="button" class="sc-btn sc-btn--primary"><span>${escapeHtml(config.nextLabel || 'Next step')}</span>${Icons.chevronRightAccent}</button>`;

    return `
      <div class="sc-footer">
        <div>${clearControl}</div>
        <div class="sc-footer-actions">
          ${backControl}
          ${nextControl}
        </div>
      </div>
    `;
  }

  return {
    BackLabel,
    ScoringCard,
    FooterBar
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationScoringComponents;
}
