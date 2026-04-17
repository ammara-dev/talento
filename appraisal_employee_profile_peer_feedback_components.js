/**
 * Talento Appraisal Employee Profile Peer Feedback Components
 * Reusable cards for the Peer feedback screen.
 */
const AppraisalEmployeeProfilePeerFeedbackComponents = (function() {
  'use strict';

  const Icons = {
    peerFeedback: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="2.3"/><circle cx="16.4" cy="8" r="1.9"/><path d="M3.8 17a4.2 4.2 0 0 1 8.4 0"/><path d="M14 16.3a3.4 3.4 0 0 1 5.8 0"/></svg>`,
    alert: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" fill="#C98316"/><path d="M10 5.8v5.4" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13.9" r="1" fill="#ffffff"/></svg>`
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function FeedbackCard(config) {
    const title = config && config.title ? config.title : 'Received peer feedback';
    const badge = config && config.badge ? config.badge : '';
    const body = config && config.body ? config.body : '';

    return `
      <article class="aeppf-feedback-card">
        <div class="aeppf-feedback-head">
          <span class="aeppf-feedback-icon">${Icons.peerFeedback}</span>
          <h2 class="aeppf-feedback-title">${escapeHtml(title)}</h2>
          ${badge ? `<span class="aeppf-feedback-badge">${escapeHtml(badge)}</span>` : ''}
        </div>
        <p class="aeppf-feedback-text">${escapeHtml(body)}</p>
      </article>
    `;
  }

  function FeedbackList(config) {
    const items = config && Array.isArray(config.items) ? config.items : [];
    return `
      <div class="aeppf-feedback-list">
        ${items.map(FeedbackCard).join('')}
      </div>
    `;
  }

  function PendingNotice(config) {
    const title = config && config.title ? config.title : 'One peer evaluation is still pending';
    const text = config && config.text ? config.text : '';

    return `
      <article class="aeppf-pending-card">
        <div class="aeppf-pending-head">
          <span class="aeppf-pending-icon">${Icons.alert}</span>
          <h3 class="aeppf-pending-title">${escapeHtml(title)}</h3>
        </div>
        <p class="aeppf-pending-text">${escapeHtml(text)}</p>
      </article>
    `;
  }

  return {
    FeedbackCard,
    FeedbackList,
    PendingNotice
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppraisalEmployeeProfilePeerFeedbackComponents;
}
