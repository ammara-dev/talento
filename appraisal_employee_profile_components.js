/**
 * Talento Appraisal Employee Profile Components
 * Reusable UI blocks for the appraisal employee profile screen.
 */
const AppraisalEmployeeProfileComponents = (function() {
  'use strict';

  const Icons = {
    breadcrumbDivider: `<span aria-hidden="true">/</span>`,
    back: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    next: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    summary: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/><path d="M9 4v4"/><path d="M15 10v4"/><path d="M11 16v4"/></svg>`,
    answers: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8.5 12 11 14.5 15.5 9.5"/></svg>`,
    peerFeedback: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="9" r="2.3"/><circle cx="16.4" cy="8" r="1.9"/><path d="M3.8 17a4.2 4.2 0 0 1 8.4 0"/><path d="M14 16.3a3.4 3.4 0 0 1 5.8 0"/></svg>`,
    selfReview: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><path d="M12 9.2v3.1"/><circle cx="12" cy="15.6" r=".9" fill="currentColor" stroke="none"/></svg>`,
    evaluators: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="8.2" cy="9" r="2.2"/><circle cx="15.8" cy="9" r="2.2"/><path d="M3.8 17a4.4 4.4 0 0 1 8.8 0"/><path d="M11.4 17a4.4 4.4 0 0 1 8.8 0"/></svg>`,
    level: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#34C38F"/><path d="M12 5.8 13.9 9.6l4.2.6-3.1 3 .7 4.2L12 15.5l-3.7 1.9.7-4.2-3.1-3 4.2-.6L12 5.8Z" fill="#ffffff"/></svg>`,
    statusCompleted: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="#34C38F"/><path d="m6.7 10.2 2.1 2.1 4.45-4.55" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    statusPending: `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.5 17 15H3L10 3.5Z" fill="#7F768F"/><path d="M10 7.2v4.25" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13.35" r=".9" fill="#ffffff"/></svg>`,
    strength: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#B892FF"/><path d="m6.4 10.1 2.2 2.2 4.8-4.9" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    improvement: `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="#C98316"/><path d="M10 5.8v5.4" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round"/><circle cx="10" cy="13.9" r="1" fill="#ffffff"/></svg>`,
    line: `<svg width="3" height="44" viewBox="0 0 3 44" fill="none"><rect x=".5" y=".5" width="2" height="43" rx="1" fill="#B892FF"/></svg>`
  };

  function getSharedIcon(name) {
    if (typeof PerformanceEvaluationDetailComponents !== 'undefined' &&
      PerformanceEvaluationDetailComponents.Icons &&
      PerformanceEvaluationDetailComponents.Icons[name]) {
      return PerformanceEvaluationDetailComponents.Icons[name];
    }

    if (typeof PerformanceEvaluationComponents !== 'undefined' &&
      PerformanceEvaluationComponents.Icons &&
      PerformanceEvaluationComponents.Icons[name]) {
      return PerformanceEvaluationComponents.Icons[name];
    }

    return '';
  }

  function getIcon(name) {
    return Icons[name] || getSharedIcon(name) || '';
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function Header(config) {
    const breadcrumb = config && Array.isArray(config.breadcrumb) ? config.breadcrumb : [];
    const pager = config && config.pager ? config.pager : {};
    const employee = config && config.employee ? config.employee : {};
    const actions = config && config.actions ? config.actions : {};

    return `
      <section class="aep-header">
        <div class="aep-header-top">
          <div class="aep-breadcrumb" aria-label="Breadcrumb">
            ${breadcrumb.map(function(item, index) {
              const isLast = index === breadcrumb.length - 1;
              return `
                <span class="aep-breadcrumb-item${isLast ? ' aep-breadcrumb-item--current' : ''}">${escapeHtml(item)}</span>
                ${isLast ? '' : `<span class="aep-breadcrumb-divider">${getIcon('breadcrumbDivider')}</span>`}
              `;
            }).join('')}
          </div>

          <div class="aep-pager">
            <button type="button" class="aep-pager-btn" data-aep-nav="back">
              ${getIcon('back')}
              <span>${escapeHtml(pager.backLabel || 'Back')}</span>
            </button>
            <span class="aep-pager-progress">${escapeHtml(pager.progress || '')}</span>
            <button type="button" class="aep-pager-btn" data-aep-nav="next">
              <span>${escapeHtml(pager.nextLabel || 'Next')}</span>
              ${getIcon('next')}
            </button>
          </div>
        </div>

        <div class="aep-profile-row">
          <div class="aep-profile-main">
            <img class="aep-profile-avatar" src="${escapeHtml(employee.avatar || '')}" alt="${escapeHtml(employee.name || 'Employee')}" />
            <div class="aep-profile-copy">
              <h1 class="aep-profile-name">${escapeHtml(employee.name || '')}</h1>
              <div class="aep-profile-meta">
                <span>${escapeHtml(employee.role || '')}</span>
                <span class="aep-meta-sep">&#8226;</span>
                <span>${escapeHtml(employee.review || '')}</span>
                <span class="aep-meta-sep">&#8226;</span>
                <span>${escapeHtml(employee.period || '')}</span>
                <span class="aep-meta-sep">&#8226;</span>
                <span class="aep-state-pill">${escapeHtml(employee.state || '')}</span>
              </div>
            </div>
          </div>

          <div class="aep-header-actions">
            <button type="button" class="aep-edit-btn" data-aep-action="edit">
              <span>${escapeHtml(actions.primaryLabel || 'Edit evaluation')}</span>
              ${getSharedIcon('pencil') || ''}
            </button>
            <button type="button" class="aep-more-btn" data-aep-action="more" aria-label="More actions">
              ${getSharedIcon('moreVertical') || ''}
            </button>
          </div>
        </div>
      </section>
    `;
  }

  function Tabs(config) {
    const tabs = config && Array.isArray(config.tabs) ? config.tabs : [];
    const activeTab = config && config.activeTab ? config.activeTab : '';

    return `
      <div class="aep-tabs" role="tablist" aria-label="Employee profile sections">
        ${tabs.map(function(tab) {
          const isActive = tab.id === activeTab;
          return `
            <button
              type="button"
              class="aep-tab${isActive ? ' active' : ''}"
              data-aep-tab="${escapeHtml(tab.id)}"
              role="tab"
              aria-selected="${isActive ? 'true' : 'false'}"
            >
              <span class="aep-tab-icon">${getIcon(tab.icon)}</span>
              <span>${escapeHtml(tab.label)}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  function PerformanceLevelCard(config) {
    return `
      <article class="aep-card aep-card--level">
        <div class="aep-level-icon">${getIcon('level')}</div>
        <div class="aep-level-copy">
          <p class="aep-level-label">${escapeHtml(config && config.label ? config.label : 'Performance level')}</p>
          <p class="aep-level-value">
            <span>${escapeHtml(config && config.value ? config.value : '')}</span>
            <span class="aep-level-percent">${escapeHtml(config && config.percent ? config.percent : '')}</span>
          </p>
        </div>
      </article>
    `;
  }

  function ListCard(config) {
    const items = config && Array.isArray(config.items) ? config.items : [];
    const tone = config && config.tone === 'improvement' ? 'improvement' : 'strength';
    const icon = tone === 'improvement' ? getIcon('improvement') : getIcon('strength');

    return `
      <article class="aep-card aep-card--list">
        <h2 class="aep-card-title">${escapeHtml(config && config.title ? config.title : '')}</h2>
        <ul class="aep-bullet-list">
          ${items.map(function(item) {
            return `
              <li class="aep-bullet-row">
                <span class="aep-bullet-icon">${icon}</span>
                <span>${escapeHtml(item)}</span>
              </li>
            `;
          }).join('')}
        </ul>
      </article>
    `;
  }

  function ConclusionCard(config) {
    return `
      <article class="aep-card aep-card--conclusion">
        <h2 class="aep-card-title">${escapeHtml(config && config.title ? config.title : '')}</h2>
        <div class="aep-conclusion-copy">
          <span class="aep-conclusion-line">${getIcon('line')}</span>
          <p class="aep-conclusion-text">${escapeHtml(config && config.text ? config.text : '')}</p>
        </div>
      </article>
    `;
  }

  function AvatarStack(config) {
    const avatars = config && Array.isArray(config.avatars) ? config.avatars : [];
    const count = config && config.count ? config.count : '';

    return `
      <div class="aep-peer-stack">
        <span class="aep-peer-count">${escapeHtml(count)}</span>
        <span class="aep-peer-avatars">
          ${avatars.map(function(avatar, index) {
            return `<img src="${escapeHtml(avatar)}" alt="Peer ${index + 1}" />`;
          }).join('')}
        </span>
      </div>
    `;
  }

  function StatusCard(config) {
    const title = config && config.title ? config.title : '';
    const icon = config && config.icon ? getIcon(config.icon) : '';
    const peerMode = !!(config && config.type === 'peer');
    const statusType = config && config.statusType ? config.statusType : 'pending';
    const statusLabel = config && config.statusLabel ? config.statusLabel : '';
    const summary = config && config.summary ? config.summary : {};

    const statusMarkup = peerMode
      ? AvatarStack(summary)
      : `
        <span class="aep-eval-state aep-eval-state--${statusType === 'completed' ? 'completed' : 'pending'}">
          <span class="aep-eval-state-icon">
            ${statusType === 'completed' ? getIcon('statusCompleted') : getIcon('statusPending')}
          </span>
          <span>${escapeHtml(statusLabel)}</span>
        </span>
      `;

    return `
      <article class="aep-card aep-card--status">
        <div class="aep-status-head">
          <span class="aep-status-title">
            <span class="aep-status-icon">${icon}</span>
            <span>${escapeHtml(title)}</span>
          </span>
          <button type="button" class="aep-open-btn" aria-label="Open ${escapeHtml(title)}">
            ${getSharedIcon('arrowUpRight') || ''}
          </button>
        </div>
        <div class="aep-status-body">${statusMarkup}</div>
      </article>
    `;
  }

  return {
    Header,
    Tabs,
    PerformanceLevelCard,
    ListCard,
    ConclusionCard,
    StatusCard
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppraisalEmployeeProfileComponents;
}
