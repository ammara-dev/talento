/**
 * Talento Create New Evaluation From Scratch Components
 * Reusable UI building blocks for the from-scratch step.
 */
const CreateNewEvaluationFromScratchComponents = (function() {
  'use strict';

  const Icons = {
    back: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    drag: `<svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><circle cx="6" cy="5" r="1.3"/><circle cx="6" cy="10" r="1.3"/><circle cx="6" cy="15" r="1.3"/><circle cx="12" cy="5" r="1.3"/><circle cx="12" cy="10" r="1.3"/><circle cx="12" cy="15" r="1.3"/></svg>`,
    check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    radio: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A59FAD" stroke-width="2.1"><circle cx="12" cy="12" r="8"/></svg>`,
    short: `<svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4h14v2H3V4Zm0 5h14v2H3V9Zm0 5h9v2H3v-2Z"/></svg>`,
    paragraph: `<svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4h14v2H3V4Zm0 4h14v2H3V8Zm0 4h14v2H3v-2Zm0 4h10v2H3v-2Z"/></svg>`,
    multiple: `<svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="4.5" cy="5" r="2.2"/><line x1="8" y1="5" x2="17" y2="5"/><circle cx="4.5" cy="10" r="2.2"/><line x1="8" y1="10" x2="17" y2="10"/><circle cx="4.5" cy="15" r="2.2"/><line x1="8" y1="15" x2="17" y2="15"/></svg>`,
    chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`,
    duplicate: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="11" height="11" rx="2"/><rect x="4" y="4" width="11" height="11" rx="2"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    refresh: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 15.3-3.3L23 10M1 14l4.2 4.3A9 9 0 0 0 20.5 15"/></svg>`,
    chevronRightAccent: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
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
      <button type="button" class="fs-back-link">
        ${Icons.back}
        <span>${escapeHtml(config.label || 'Start new evaluation from scratch')}</span>
      </button>
    `;
  }

  function ProgressSummary(config) {
    const stepPrimary = escapeHtml(config.stepPrimary || 'Step 01');
    const stepMuted = escapeHtml(config.stepMuted || 'of 02');
    const ratio = Math.max(0, Math.min(100, Number(config.progress || 50)));
    const title = escapeHtml(config.title || 'What do we evaluate?');
    const line1 = escapeHtml(config.descriptionLine1 || '');
    const line2 = escapeHtml(config.descriptionLine2 || '');
    const total = escapeHtml(config.total || '62');

    return `
      <section class="fs-summary-card">
        <div class="fs-summary-progress">
          <p><span>${stepPrimary}</span> <span class="fs-step-muted">${stepMuted}</span></p>
          <div class="fs-progress-track"><span style="width:${ratio}%"></span></div>
        </div>
        <div class="fs-intro-card">
          <div class="fs-intro-copy">
            <h2>${title}</h2>
            <p>${line1}</p>
            <p>${line2}</p>
          </div>
          <div class="fs-donut">
            <div class="fs-donut-ring"><span>Total<br /><strong>${total}%</strong></span></div>
          </div>
        </div>
        <div class="fs-summary-fields">
          <label class="fs-field">
            <span>Evaluation name*</span>
            <input type="text" value="${escapeHtml(config.nameValue || 'Annual Evaluation')}" />
          </label>
          <label class="fs-field">
            <span>Description (Optional)</span>
            <textarea rows="3" placeholder="${escapeHtml(config.descriptionPlaceholder || 'Add a short overview of what this evaluation covers')}"></textarea>
          </label>
        </div>
      </section>
    `;
  }

  function TypeIcon(type) {
    if (type === 'Paragraph') return Icons.paragraph;
    if (type === 'Multiple choice') return Icons.multiple;
    return Icons.short;
  }

  function Options(config) {
    const options = Array.isArray(config.options) ? config.options : [];
    if (!options.length) return '';
    return `
      <div class="fs-options-wrap">
        <p class="fs-options-title">Options</p>
        <div class="fs-options-list">
          ${options.map(function(option) {
            return `
              <div class="fs-option-row">
                <span class="fs-option-dot">${Icons.radio}</span>
                <input type="text" value="${escapeHtml(option)}" />
                <button type="button" class="fs-option-remove" aria-label="Remove option">×</button>
              </div>
            `;
          }).join('')}
        </div>
        <p class="fs-option-add">Add option <span>+</span> or <span>add 'Other'</span></p>
      </div>
    `;
  }

  function QuestionCard(config, index) {
    const questionNo = index + 1;
    const type = config.type || 'Short answer';
    return `
      <article class="fs-question-card">
        <div class="fs-question-top">
          <span class="fs-drag">${Icons.drag}</span>
          <div class="fs-question-tags">
            <span class="fs-tag">Question ${questionNo}</span>
            <span class="fs-tag">${escapeHtml(type)}</span>
          </div>
        </div>
        <div class="fs-question-content">
          <div class="fs-row">
            <label class="fs-field">
              <span>Question</span>
              <input type="text" placeholder="Enter your question" />
            </label>
            <label class="fs-field fs-field--importance">
              <span>Question importance %</span>
              <input type="text" value="${escapeHtml(config.importance || '')}" />
            </label>
          </div>
          <label class="fs-field">
            <span>Description (optional)</span>
            <input type="text" placeholder="Add description" />
          </label>
          ${Options(config)}
          <div class="fs-question-footer">
            <label class="fs-required">
              <span class="fs-required-box">${Icons.check}</span>
              <span>Required question</span>
            </label>
            <div class="fs-footer-actions">
              <button type="button" class="fs-type-btn">${TypeIcon(type)}<span>${escapeHtml(type)}</span>${Icons.chevronDown}</button>
              <button type="button" class="fs-icon-btn" aria-label="Duplicate question">${Icons.duplicate}</button>
              <button type="button" class="fs-icon-btn" aria-label="Delete question">${Icons.trash}</button>
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function QuestionBuilder(config) {
    const questions = Array.isArray(config.questions) ? config.questions : [];
    return `
      <section class="fs-builder-card">
        ${questions.map(QuestionCard).join('')}
        <button type="button" class="fs-add-question">Add new question ${Icons.plus}</button>
      </section>
    `;
  }

  function FooterBar(config) {
    return `
      <div class="fs-footer-bar">
        <button type="button" class="fs-btn fs-btn--ghost">${escapeHtml(config.clearLabel || 'Clear form')} ${Icons.refresh}</button>
        <button type="button" class="fs-btn fs-btn--primary">${escapeHtml(config.nextLabel || 'Next step')} ${Icons.chevronRightAccent}</button>
      </div>
    `;
  }

  return {
    BackLabel,
    ProgressSummary,
    QuestionBuilder,
    FooterBar
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationFromScratchComponents;
}
