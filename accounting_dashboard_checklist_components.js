/**
 * Talento Accounting Dashboard Checklist Components
 * Reusable setup checklist components for accounting dashboard variant.
 */
const AccountingDashboardChecklistComponents = (function() {
  'use strict';

  const Icons = {
    check: '<i class="fa-solid fa-check" aria-hidden="true"></i>',
    chevronUp: '<i class="fa-solid fa-chevron-up" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function StepCard(step) {
    const activeClass = step.active ? ' is-active' : '';
    const doneIcon = step.done
      ? `<span class="acdc-step-status is-done">${Icons.check}</span>`
      : '<span class="acdc-step-status"></span>';
    const buttonClass = step.active ? 'acdc-step-action is-light' : 'acdc-step-action is-primary';
    const buttonIcon = step.active ? ' ' + Icons.check : ' <i class="fa-solid fa-plus" aria-hidden="true"></i>';

    return `
      <article class="acdc-step-card${activeClass}">
        <div class="acdc-step-head">
          <h3>${escapeHtml(step.title || '')}</h3>
          ${doneIcon}
        </div>
        <p>${escapeHtml(step.description || '')}</p>
        <button type="button" class="${buttonClass}">${escapeHtml(step.actionLabel || '')}${buttonIcon}</button>
      </article>
    `;
  }

  function SetupPanel(config) {
    const steps = Array.isArray(config.steps) ? config.steps : [];
    return `
      <section class="acdc-setup-panel">
        <div class="acdc-setup-top">
          <div class="acdc-setup-main">
            <div class="acdc-progress-circle">
              <span>${escapeHtml(config.progress || '3/4')}</span>
            </div>
            <div class="acdc-setup-copy">
              <div class="acdc-setup-title-row">
                <h2>${escapeHtml(config.title || '')}</h2>
                <span class="acdc-step-pill">${escapeHtml(config.stepLabel || '')}</span>
              </div>
              <p>${escapeHtml(config.description || '')}</p>
            </div>
          </div>
          <button type="button" class="acdc-toggle-btn" aria-label="Collapse checklist">${Icons.chevronUp}</button>
        </div>
        <div class="acdc-steps-grid">
          ${steps.map(StepCard).join('')}
        </div>
      </section>
    `;
  }

  return {
    SetupPanel
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AccountingDashboardChecklistComponents;
}
