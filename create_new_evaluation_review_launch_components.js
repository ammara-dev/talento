/**
 * Talento Create New Evaluation Review & Launch Components
 * Reusable UI building blocks for the review step.
 */
const CreateNewEvaluationReviewLaunchComponents = (function() {
  'use strict';

  const Icons = {
    edit: `<i class="fa-solid fa-pen" aria-hidden="true"></i>`,
    status: `<i class="fa-solid fa-circle-check" aria-hidden="true"></i>`,
    duration: `<i class="fa-solid fa-clock" aria-hidden="true"></i>`,
    manager: `<i class="fa-solid fa-user-tie" aria-hidden="true"></i>`,
    upward: `<i class="fa-solid fa-user-check" aria-hidden="true"></i>`,
    users: `<i class="fa-solid fa-users" aria-hidden="true"></i>`,
    chevronDown: `<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>`,
    chevronUp: `<i class="fa-solid fa-chevron-up" aria-hidden="true"></i>`,
    checkAccent: `<i class="fa-solid fa-check" aria-hidden="true"></i>`,
    file: `<i class="fa-solid fa-file-lines" aria-hidden="true"></i>`,
    close: `<i class="fa-solid fa-xmark" aria-hidden="true"></i>`,
    responses: `<i class="fa-solid fa-message" aria-hidden="true"></i>`,
    layout: `<i class="fa-solid fa-grip" aria-hidden="true"></i>`,
    link: `<i class="fa-solid fa-link" aria-hidden="true"></i>`
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function chip(text, className, icon) {
    return `<span class="${className}">${icon ? `<span class="rl-chip-icon">${icon}</span>` : ''}${escapeHtml(text)}</span>`;
  }

  function SummaryHero(config) {
    const stats = Array.isArray(config.stats) ? config.stats : [];
    return `
      <section class="rl-summary-hero">
        <div class="rl-summary-top">
          <div class="rl-summary-badges">
            ${chip(config.status || 'Ready to launch', 'rl-badge rl-badge--status', Icons.status)}
            ${chip(config.duration || '12 days', 'rl-badge rl-badge--duration', Icons.duration)}
          </div>
          <button type="button" class="rl-icon-edit" aria-label="Edit summary">${Icons.edit}</button>
        </div>
        <h3 class="rl-summary-title">${escapeHtml(config.title || '')}</h3>
        <p class="rl-summary-text">${escapeHtml(config.description || '')}</p>
        <div class="rl-summary-stats">
          ${stats.map(function(item) {
            return `
              <article class="rl-summary-stat">
                <p>${escapeHtml(item.value || '')}</p>
                <span>${escapeHtml(item.label || '')}</span>
              </article>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function SectionHeader(config) {
    return `
      <header class="rl-section-head">
        <h3>${escapeHtml(config.title || '')}</h3>
        ${config.editable ? `<button type="button" class="rl-edit-btn">Edit ${Icons.edit}</button>` : ''}
      </header>
    `;
  }

  function SectionBlock(config) {
    return `
      <div class="rl-panel-section">
        ${SectionHeader(config.header || {})}
        ${config.body || ''}
      </div>
    `;
  }

  function KeyValueRows(rows) {
    const list = Array.isArray(rows) ? rows : [];
    return `
      <div class="rl-kv-list">
        ${list.map(function(row) {
          return `
            <div class="rl-kv-row">
              <span>${escapeHtml(row.label || '')}</span>
              <strong>${escapeHtml(row.value || '')}</strong>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  function EmployeeRow(employee) {
    return `
      <div class="rl-employee-row">
        <span class="rl-avatar">${escapeHtml(employee.avatar || 'A')}</span>
        <div>
          <p>${escapeHtml(employee.name || '')}</p>
          <span>${escapeHtml(employee.role || '')}</span>
        </div>
      </div>
    `;
  }

  function QuestionCard(question) {
    const tags = Array.isArray(question.tags) ? question.tags : [];
    const chips = Array.isArray(question.chips) ? question.chips : [];
    return `
      <article class="rl-question-card">
        <div class="rl-question-tags">${tags.map(function(tag) { return chip(tag, 'rl-mini-badge'); }).join('')}</div>
        <p class="rl-question-text">${escapeHtml(question.text || '')}</p>
        ${chips.length ? `<div class="rl-chip-row">${chips.map(function(text) { return chip(text, 'rl-chip'); }).join('')}</div>` : ''}
      </article>
    `;
  }

  function ScaleLegend(items) {
    const list = Array.isArray(items) ? items : [];
    if (!list.length) return '';
    return `
      <div class="rl-scale-legend">
        ${list.map(function(item) {
          return `
            <span class="rl-scale-item">
              <span class="rl-scale-dot" style="background:${escapeHtml(item.color || '#EF4444')}"></span>
              <span>${escapeHtml(item.label || '')}</span>
            </span>
          `;
        }).join('')}
      </div>
    `;
  }

  function EvaluatorBlock(evaluator) {
    const questions = Array.isArray(evaluator.questions) ? evaluator.questions : [];
    const open = !!evaluator.open;
    const evaluatorIcon = evaluator.type === 'peers'
      ? Icons.users
      : (evaluator.type === 'upward' ? Icons.upward : Icons.manager);
    return `
      <article class="rl-evaluator-block${open ? ' is-open' : ''}">
        <button type="button" class="rl-evaluator-head" aria-expanded="${open}">
          <span class="rl-evaluator-title-wrap">
            <span class="rl-evaluator-icon">${evaluatorIcon}</span>
            <span class="rl-evaluator-title">${escapeHtml(evaluator.title || '')}</span>
            ${evaluator.anonymous ? chip('Anonymous', 'rl-mini-badge rl-mini-badge--muted') : ''}
          </span>
          <span class="rl-evaluator-arrow-btn">${open ? Icons.chevronUp : Icons.chevronDown}</span>
        </button>
        ${open ? `
          <div class="rl-evaluator-body">
            <p class="rl-subheading">Evaluation form</p>
            <div class="rl-question-list">${questions.map(QuestionCard).join('')}</div>
            ${ScaleLegend(evaluator.scaleLegend)}
          </div>
        ` : ''}
      </article>
    `;
  }

  function ReviewCard(config) {
    return `
      <section class="rl-card">
        ${SectionHeader({ title: config.title || 'Review & launch evaluation' })}
        <p class="rl-body-text">${escapeHtml(config.description || '')}</p>
        ${SummaryHero(config.summary || {})}
      </section>
    `;
  }

  function ReviewDetailsPanel(config) {
    const additional = config.additional || {};
    const employeesConfig = config.employees || {};
    const evaluatorsConfig = config.evaluators || {};
    const employees = Array.isArray(employeesConfig.employees) ? employeesConfig.employees : [];
    const evaluators = Array.isArray(evaluatorsConfig.evaluators) ? evaluatorsConfig.evaluators : [];

    return `
      <section class="rl-card rl-card--stack">
        ${SectionBlock({
          header: { title: additional.title || 'Additional information', editable: true },
          body: KeyValueRows(additional.rows || [])
        })}
        ${SectionBlock({
          header: { title: employeesConfig.title || 'Employees to be evaluated', editable: true },
          body: `
            <div class="rl-employee-list">
              ${employees.map(EmployeeRow).join('')}
            </div>
            <button type="button" class="rl-view-all-btn">View all employees ${Icons.chevronDown}</button>
          `
        })}
        ${SectionBlock({
          header: { title: evaluatorsConfig.title || 'Evaluators', editable: true },
          body: `
            <div class="rl-evaluator-list">
              ${evaluators.map(EvaluatorBlock).join('')}
            </div>
          `
        })}
      </section>
    `;
  }

  function LaunchCard(config) {
    const launchCta = config.launchLabel || 'Launch evaluation';
    return `
      <section class="rl-launch-card">
        <h3>${escapeHtml(config.title || 'Ready to launch?')}</h3>
        <p>${escapeHtml(config.description || '')}</p>
        <div class="rl-launch-actions">
          <button type="button" class="rl-btn rl-btn--ghost">${escapeHtml(config.draftLabel || 'Save as draft')} ${Icons.file}</button>
          <button type="button" class="rl-btn rl-btn--primary js-open-launch-modal">${escapeHtml(launchCta)} ${Icons.checkAccent}</button>
        </div>
        <div class="rl-launch-divider" role="presentation"></div>
        <span class="rl-launch-note">${escapeHtml(config.note || '')}</span>
      </section>
    `;
  }

  function ModalSection(config) {
    return `
      <section class="rl-modal-section">
        <header class="rl-modal-section-head">
          <h3>${config.icon || ''} <span>${escapeHtml(config.title || '')}</span></h3>
          ${config.trailing || ''}
        </header>
        ${config.body || ''}
      </section>
    `;
  }

  function SegmentedToggle(config) {
    const options = Array.isArray(config.options) ? config.options : [];
    return `
      <div class="rl-segmented" role="group" data-toggle-group="${escapeHtml(config.name || '')}">
        ${options.map(function(option) {
          const active = option.value === config.value;
          return `<button type="button" class="rl-segmented-btn${active ? ' is-active' : ''}" data-toggle-value="${escapeHtml(option.value || '')}">${escapeHtml(option.label || '')}</button>`;
        }).join('')}
      </div>
    `;
  }

  function LayoutOption(config, selectedValue) {
    const isSelected = config.value === selectedValue;
    return `
      <button type="button" class="rl-layout-option${isSelected ? ' is-selected' : ''}" data-layout-value="${escapeHtml(config.value || '')}">
        <span class="rl-layout-radio" aria-hidden="true"></span>
        <span>${escapeHtml(config.label || '')}</span>
      </button>
    `;
  }

  function LayoutOptions(config) {
    const options = Array.isArray(config.options) ? config.options : [];
    return `
      <div class="rl-layout-row">
        ${options.map(function(option) { return LayoutOption(option, config.value); }).join('')}
      </div>
    `;
  }

  function SaveLaunchModal(config) {
    const acceptingResponsesControl = SegmentedToggle({
      name: 'accepting-responses',
      value: config.acceptingResponses,
      options: [
        { value: 'no', label: 'No' },
        { value: 'yes', label: 'Yes' }
      ]
    });

    return `
      <div class="rl-modal-backdrop" id="save-launch-modal" aria-hidden="true">
        <div class="rl-modal-card" role="dialog" aria-modal="true" aria-labelledby="save-launch-modal-title">
          <header class="rl-modal-header">
            <h2 id="save-launch-modal-title">${escapeHtml(config.title || 'Save and launch evaluation')}</h2>
            <button type="button" class="rl-modal-close js-close-launch-modal" aria-label="Close">${Icons.close}</button>
          </header>
          ${ModalSection({
            title: 'Accepting responses',
            icon: Icons.responses,
            trailing: acceptingResponsesControl
          })}
          ${ModalSection({
            title: 'Layout',
            icon: Icons.layout,
            body: LayoutOptions({
              value: config.layout,
              options: config.layoutOptions || []
            })
          })}
          <div class="rl-modal-content-spacer" aria-hidden="true"></div>
          <footer class="rl-modal-footer">
            <button type="button" class="rl-modal-copy-btn">${escapeHtml(config.copyLabel || 'Copy responder link')} ${Icons.link}</button>
            <div class="rl-modal-actions">
              <button type="button" class="rl-modal-btn rl-modal-btn--ghost js-close-launch-modal">${escapeHtml(config.cancelLabel || 'Cancel')} ${Icons.close}</button>
              <a href="${escapeHtml(config.publishHref || 'create-new-evaluation-launched.html')}" class="rl-modal-btn rl-modal-btn--primary">${escapeHtml(config.publishLabel || 'Save & publish')} ${Icons.checkAccent}</a>
            </div>
          </footer>
        </div>
      </div>
    `;
  }

  return {
    ReviewCard,
    ReviewDetailsPanel,
    LaunchCard,
    SaveLaunchModal
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationReviewLaunchComponents;
}
