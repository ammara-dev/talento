/**
 * Talento Create New Evaluation Review & Launch Components
 * Reusable UI building blocks for the review step.
 */
const CreateNewEvaluationReviewLaunchComponents = (function() {
  'use strict';

  const Icons = {
    edit: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
    user: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>`,
    users: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a3 3 0 0 1 0 5.74"/></svg>`,
    chevronDown: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    checkAccent: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    file: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function chip(text, className) {
    return `<span class="${className}">${escapeHtml(text)}</span>`;
  }

  function SummaryHero(config) {
    const stats = Array.isArray(config.stats) ? config.stats : [];
    return `
      <section class="rl-summary-hero">
        <div class="rl-summary-top">
          <div class="rl-summary-badges">
            ${chip(config.status || 'Ready to launch', 'rl-badge rl-badge--status')}
            ${chip(config.duration || '12 days', 'rl-badge rl-badge--duration')}
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

  function EmployeesSection(config) {
    const employees = Array.isArray(config.employees) ? config.employees : [];
    return `
      <section class="rl-card">
        ${SectionHeader({ title: config.title || 'Employees to be evaluated', editable: true })}
        <div class="rl-employee-list">
          ${employees.map(EmployeeRow).join('')}
        </div>
        <button type="button" class="rl-view-all-btn">View all employees ${Icons.chevronDown}</button>
      </section>
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
    return `
      <article class="rl-evaluator-block${open ? ' is-open' : ''}">
        <button type="button" class="rl-evaluator-head" aria-expanded="${open}">
          <span class="rl-evaluator-title-wrap">
            <span class="rl-evaluator-icon">${evaluator.type === 'peers' ? Icons.users : Icons.user}</span>
            <span class="rl-evaluator-title">${escapeHtml(evaluator.title || '')}</span>
            ${evaluator.anonymous ? chip('Anonymous', 'rl-mini-badge rl-mini-badge--muted') : ''}
          </span>
          <span class="rl-evaluator-arrow">${Icons.chevronDown}</span>
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

  function EvaluatorsSection(config) {
    const evaluators = Array.isArray(config.evaluators) ? config.evaluators : [];
    return `
      <section class="rl-card">
        ${SectionHeader({ title: config.title || 'Evaluators', editable: true })}
        <div class="rl-evaluator-list">
          ${evaluators.map(EvaluatorBlock).join('')}
        </div>
      </section>
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

  function AdditionalInfoCard(config) {
    return `
      <section class="rl-card">
        ${SectionHeader({ title: config.title || 'Additional information', editable: true })}
        ${KeyValueRows(config.rows || [])}
      </section>
    `;
  }

  function LaunchCard(config) {
    return `
      <section class="rl-launch-card">
        <h3>${escapeHtml(config.title || 'Ready to launch?')}</h3>
        <p>${escapeHtml(config.description || '')}</p>
        <div class="rl-launch-actions">
          <button type="button" class="rl-btn rl-btn--ghost">${escapeHtml(config.draftLabel || 'Save as draft')} ${Icons.file}</button>
          <button type="button" class="rl-btn rl-btn--primary">${escapeHtml(config.launchLabel || 'Launch evaluation')} ${Icons.checkAccent}</button>
        </div>
        <span class="rl-launch-note">${escapeHtml(config.note || '')}</span>
      </section>
    `;
  }

  return {
    ReviewCard,
    AdditionalInfoCard,
    EmployeesSection,
    EvaluatorsSection,
    LaunchCard
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreateNewEvaluationReviewLaunchComponents;
}
