/**
 * Talento Air Ticket Data Template Components
 * Reusable UI blocks for the standalone air-ticket data screen.
 */
const AirTicketDataTemplateComponents = (function() {
  'use strict';

  const Icons = {
    back: '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
    next: '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>',
    close: '<i class="fa-solid fa-xmark" aria-hidden="true"></i>',
    check: '<i class="fa-solid fa-check" aria-hidden="true"></i>',
    more: '<i class="fa-solid fa-ellipsis" aria-hidden="true"></i>',
    nodes: '<i class="fa-solid fa-circle-nodes" aria-hidden="true"></i>',
    menu: '<i class="fa-solid fa-bars" aria-hidden="true"></i>',
    ticket: '<i class="fa-solid fa-ticket" aria-hidden="true"></i>',
    balance: '<i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function FieldCell(field) {
    return `
      <div class="atdt-field-cell">
        <p class="atdt-field-label">${escapeHtml(field.label)}</p>
        <p class="atdt-field-value">${escapeHtml(field.value)}</p>
      </div>
    `;
  }

  function Header(config) {
    return `
      <div class="atdt-top-row">
        <p class="atdt-breadcrumb">${escapeHtml(config.breadcrumb)}</p>
        <div class="atdt-pager">
          <button type="button" class="atdt-link-btn">${Icons.back} Back</button>
          <span>${escapeHtml(config.progress)}</span>
          <button type="button" class="atdt-link-btn">Next ${Icons.next}</button>
        </div>
      </div>

      <div class="atdt-top-row atdt-title-row">
        <div>
          <h1 class="atdt-title">${escapeHtml(config.title)}</h1>
          <div class="atdt-meta-row">
            <span>
              Created by
              <img class="atdt-meta-avatar" src="${escapeHtml(config.createdBy.avatar)}" alt="${escapeHtml(config.createdBy.name)}" />
              ${escapeHtml(config.createdBy.name)}
            </span>
            <span>&#8226;</span>
            <span>Created date ${escapeHtml(config.createdDate)}</span>
            <span>&#8226;</span>
            <span class="atdt-state-pill">${escapeHtml(config.state)}</span>
          </div>
        </div>
        <div class="atdt-title-actions">
          <button type="button" class="atdt-btn atdt-btn-ghost">Edit <span>${Icons.check}</span></button>
          <button type="button" class="atdt-btn-icon" aria-label="More actions">${Icons.more}</button>
        </div>
      </div>
    `;
  }

  function ActionStrip(config) {
    return `
      <div class="atdt-action-strip">
        <div class="atdt-action-group">
          <button type="button" class="atdt-btn atdt-btn-ghost">${escapeHtml(config.rejectLabel)} <span>${Icons.close}</span></button>
          <button type="button" class="atdt-btn atdt-btn-primary">${escapeHtml(config.approveLabel)} <span>${Icons.check}</span></button>
        </div>
        <div class="atdt-action-group">
          <button type="button" class="atdt-btn atdt-btn-ghost">${escapeHtml(config.activitiesLabel)} <span>${Icons.nodes}</span></button>
        </div>
      </div>
    `;
  }

  function ProgressSteps(config) {
    const steps = config && Array.isArray(config.steps) ? config.steps : [];
    return `
      <div class="atdt-steps-wrap">
        <div class="atdt-steps-track">
          ${steps.map(function(step, index) {
            const state = step.state || 'upcoming';
            return `
              <div class="atdt-step atdt-step-${state}">
                <span class="atdt-step-dot">${state === 'done' ? Icons.check : String(index + 1)}</span>
                <span class="atdt-step-label">${escapeHtml(step.label)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  function DataSection(config) {
    const icon = config.icon === 'ticket' ? Icons.ticket : config.icon === 'balance' ? Icons.balance : Icons.menu;
    return `
      <section class="atdt-section-card">
        <header class="atdt-section-head">
          <span class="atdt-section-icon">${icon}</span>
          <h2 class="atdt-section-title">${escapeHtml(config.title)}</h2>
        </header>
        <div class="atdt-section-grid">
          ${(config.fields || []).map(FieldCell).join('')}
        </div>
      </section>
    `;
  }

  function BalanceTabs(config) {
    const tabs = config && Array.isArray(config.tabs) ? config.tabs : [];
    const activeTabId = config && config.activeTabId ? config.activeTabId : '';
    const active = tabs.find(function(tab) { return tab.id === activeTabId; }) || tabs[0] || { fields: [] };

    return `
      <div class="atdt-tabs-row">
        ${tabs.map(function(tab) {
          const activeClass = tab.id === activeTabId ? ' active' : '';
          return `<button type="button" class="atdt-tab-btn${activeClass}" data-atdt-tab="${escapeHtml(tab.id)}">${escapeHtml(tab.label)}</button>`;
        }).join('')}
      </div>
      <div class="atdt-tab-panel">
        ${(active.fields || []).map(FieldCell).join('')}
      </div>
    `;
  }

  return {
    Header,
    ActionStrip,
    ProgressSteps,
    DataSection,
    BalanceTabs
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AirTicketDataTemplateComponents;
}
