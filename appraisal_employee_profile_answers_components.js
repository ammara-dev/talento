/**
 * Talento Appraisal Employee Profile Answers Components
 * Reusable accordion and answer blocks for the Answers tab screen.
 */
const AppraisalEmployeeProfileAnswersComponents = (function() {
  'use strict';

  const Icons = {
    manager: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="3.4" fill="#7F768F"/><path d="M4.6 19a7.4 7.4 0 0 1 14.8 0" fill="#7F768F"/></svg>`,
    peers: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8.2" r="2.2" fill="#7F768F"/><circle cx="15.8" cy="8.9" r="2" fill="#7F768F"/><circle cx="6.2" cy="11.2" r="1.8" fill="#7F768F"/><path d="M3.7 17.8a3.9 3.9 0 0 1 5.8-2.7 5.2 5.2 0 0 1 6.9.4 4.3 4.3 0 0 1 3.8 2.3H3.7Z" fill="#7F768F"/></svg>`,
    selfReview: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#7F768F"/><path d="M12 8.6v4" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="15.6" r=".9" fill="#ffffff"/></svg>`,
    chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    chevronUp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getIcon(name) {
    return Icons[name] || '';
  }

  function SourceRow(config) {
    const icon = getIcon(config && config.icon ? config.icon : 'manager');
    const label = config && config.label ? config.label : '';
    const meta = config && config.meta ? config.meta : '';
    const badge = config && config.badge ? config.badge : '';
    const avatar = config && config.avatar ? config.avatar : '';

    return `
      <div class="aepa-source-row">
        ${avatar
          ? `<img class="aepa-source-avatar" src="${escapeHtml(avatar)}" alt="${escapeHtml(label)}" />`
          : `<span class="aepa-source-icon">${icon}</span>`}
        <span class="aepa-source-label">${escapeHtml(label)}</span>
        ${meta ? `<span class="aepa-source-meta">&#8226; ${escapeHtml(meta)}</span>` : ''}
        ${badge ? `<span class="aepa-source-badge">${escapeHtml(badge)}</span>` : ''}
      </div>
    `;
  }

  function AnswerEntry(config) {
    const text = config && config.text ? config.text : '';

    return `
      <article class="aepa-answer-entry">
        ${SourceRow(config)}
        <p class="aepa-answer-text">${escapeHtml(text)}</p>
      </article>
    `;
  }

  function QuestionCard(config) {
    const id = config && config.id ? config.id : '';
    const title = config && config.title ? config.title : '';
    const expanded = !!(config && config.expanded);
    const entries = config && Array.isArray(config.entries) ? config.entries : [];

    return `
      <section class="aepa-question-card${expanded ? ' expanded' : ''}">
        <button
          type="button"
          class="aepa-question-head"
          data-aepa-toggle="${escapeHtml(id)}"
          aria-expanded="${expanded ? 'true' : 'false'}"
        >
          <span class="aepa-question-title">${escapeHtml(title)}</span>
          <span class="aepa-head-chevron">${expanded ? getIcon('chevronUp') : getIcon('chevronDown')}</span>
        </button>
        ${expanded ? `
          <div class="aepa-question-body">
            <div class="aepa-answers-stack">
              ${entries.map(AnswerEntry).join('')}
            </div>
          </div>
        ` : ''}
      </section>
    `;
  }

  function AnswersList(config) {
    const questions = config && Array.isArray(config.questions) ? config.questions : [];

    return `
      <div class="aepa-questions">
        ${questions.map(QuestionCard).join('')}
      </div>
    `;
  }

  return {
    AnswersList,
    QuestionCard,
    AnswerEntry
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppraisalEmployeeProfileAnswersComponents;
}
