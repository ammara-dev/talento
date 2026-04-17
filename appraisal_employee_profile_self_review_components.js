/**
 * Talento Appraisal Employee Profile Self Review Components
 * Reusable question/answer cards for the Self review screen.
 */
const AppraisalEmployeeProfileSelfReviewComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function SectionHead(config) {
    const title = config && config.title ? config.title : 'Self-evaluation review';
    const subtitle = config && config.subtitle ? config.subtitle : '';

    return `
      <header class="aepr-self-head">
        <h2 class="aepr-self-title">${escapeHtml(title)}</h2>
        ${subtitle ? `<p class="aepr-self-subtitle">${escapeHtml(subtitle)}</p>` : ''}
      </header>
    `;
  }

  function QuestionCard(config) {
    const question = config && config.question ? config.question : '';
    const answer = config && config.answer ? config.answer : '';

    return `
      <article class="aepr-question-card">
        <h3 class="aepr-question-title">${escapeHtml(question)}</h3>
        <p class="aepr-question-answer">${escapeHtml(answer)}</p>
      </article>
    `;
  }

  function QuestionList(config) {
    const items = config && Array.isArray(config.items) ? config.items : [];

    if (!items.length) {
      return '<div class="aepr-empty">No self-review answers yet.</div>';
    }

    return `
      <div class="aepr-question-list">
        ${items.map(QuestionCard).join('')}
      </div>
    `;
  }

  function SelfReviewView(config) {
    const head = config && config.head ? config.head : {};
    const items = config && Array.isArray(config.items) ? config.items : [];

    return `
      ${SectionHead(head)}
      ${QuestionList({ items: items })}
    `;
  }

  return {
    SectionHead,
    QuestionCard,
    QuestionList,
    SelfReviewView
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppraisalEmployeeProfileSelfReviewComponents;
}

