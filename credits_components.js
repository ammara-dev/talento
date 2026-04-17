/**
 * Talento Credits Components
 * Reusable UI blocks for credits/plans page.
 */
const CreditsComponents = (function() {
  'use strict';

  const Icons = {
    core: '<i class="fa-solid fa-seedling" aria-hidden="true"></i>',
    pro: '<i class="fa-regular fa-circle-dot" aria-hidden="true"></i>',
    enterprise: '<i class="fa-solid fa-globe" aria-hidden="true"></i>',
    check: '<i class="fa-solid fa-check" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function Header(config) {
    return `
      <header class="cr-header">
        <p class="cr-breadcrumb">${escapeHtml(config.breadcrumb || '')}</p>
        <h1 class="cr-title">${escapeHtml(config.title || '')}</h1>
      </header>
    `;
  }

  function Tabs(config) {
    const tabs = config && Array.isArray(config.tabs) ? config.tabs : [];
    const activeTab = config && config.activeTab ? config.activeTab : '';
    return `
      <div class="cr-tabs">
        ${tabs.map(function(tab) {
          const activeClass = tab.id === activeTab ? ' active' : '';
          return `<button type="button" class="cr-tab${activeClass}" data-cr-tab="${escapeHtml(tab.id)}">${escapeHtml(tab.label)}</button>`;
        }).join('')}
      </div>
    `;
  }

  function FeatureItem(text) {
    return `
      <li class="cr-feature-item">
        <span class="cr-feature-icon">${Icons.check}</span>
        <span>${escapeHtml(text)}</span>
      </li>
    `;
  }

  function PlanCard(plan) {
    const icon = plan.type === 'pro' ? Icons.pro : plan.type === 'enterprise' ? Icons.enterprise : Icons.core;
    const btnClass = plan.isCurrent ? 'cr-plan-btn current' : 'cr-plan-btn upgrade';
    const btnLabel = plan.isCurrent ? 'Current plan' : 'Upgrade plan';

    return `
      <article class="cr-plan-card ${plan.type}">
        <div class="cr-plan-head">
          <h2 class="cr-plan-title"><span class="cr-plan-title-icon">${icon}</span>${escapeHtml(plan.name)}</h2>
          <p class="cr-plan-desc">${escapeHtml(plan.description)}</p>
          <button type="button" class="${btnClass}">
            <span>${btnLabel}</span>
            <span>${plan.isCurrent ? Icons.check : Icons.plus}</span>
          </button>
        </div>
        <ul class="cr-feature-list">
          ${(plan.features || []).map(FeatureItem).join('')}
        </ul>
      </article>
    `;
  }

  function PlansGrid(config) {
    const plans = config && Array.isArray(config.plans) ? config.plans : [];
    return `
      <section class="cr-grid">
        ${plans.map(PlanCard).join('')}
      </section>
    `;
  }

  return {
    Header,
    Tabs,
    PlanCard,
    PlansGrid
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CreditsComponents;
}
