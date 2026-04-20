/**
 * Talento Accounting Dashboard Screen Components
 * Reusable components for accounting dashboard summary cards.
 */
const AccountingDashboardScreenComponents = (function() {
  'use strict';

  const Icons = {
    more: '<i class="fa-solid fa-ellipsis" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    external: '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>',
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

  function SetupBanner(config) {
    return `
      <section class="acd-setup-card">
        <div class="acd-setup-main">
          <div class="acd-progress-circle">
            <span>${escapeHtml(config.progress || '3/4')}</span>
          </div>
          <div class="acd-setup-copy">
            <div class="acd-setup-top">
              <h2>${escapeHtml(config.title || '')}</h2>
              <span class="acd-step-pill">${escapeHtml(config.stepLabel || '')}</span>
            </div>
            <p>${escapeHtml(config.description || '')}</p>
          </div>
        </div>
        <button type="button" class="acd-icon-btn" aria-label="Collapse">${Icons.chevronDown}</button>
      </section>
    `;
  }

  function Sparkline(line) {
    const markerY = line.markerY != null ? line.markerY : 28;
    return `
      <svg class="acd-sparkline" viewBox="0 0 320 72" preserveAspectRatio="none" aria-hidden="true">
        <path d="${escapeHtml(line.path || 'M0 40 C70 10, 130 60, 200 30 S300 48, 320 36')}" fill="none" stroke="${escapeHtml(line.color || '#C8C5CF')}" stroke-width="2" stroke-linecap="round"></path>
        ${line.markerX != null ? `<line x1="${escapeHtml(line.markerX)}" y1="${escapeHtml(markerY)}" x2="${escapeHtml(line.markerX)}" y2="72" stroke="#D9D6DE" stroke-dasharray="4 4"></line>` : ''}
        ${line.markerX != null ? `<circle cx="${escapeHtml(line.markerX)}" cy="${escapeHtml(markerY)}" r="6.5" fill="#fff" stroke="${escapeHtml(line.color || '#C8C5CF')}" stroke-width="3"></circle>` : ''}
      </svg>
    `;
  }

  function CardFooter(card) {
    if (card.singleAction) {
      return `
        <div class="acd-card-actions acd-card-actions-single">
          <button type="button" class="acd-btn acd-btn-light">${escapeHtml(card.viewLabel || 'View')} ${Icons.external}</button>
        </div>
      `;
    }
    return `
      <div class="acd-card-actions">
        <button type="button" class="acd-btn acd-btn-light">${escapeHtml(card.viewLabel || 'View')} ${Icons.external}</button>
        <button type="button" class="acd-btn acd-btn-primary">${escapeHtml(card.addLabel || 'Add new')} ${Icons.plus}</button>
      </div>
    `;
  }

  function renderBalance(card) {
    const balance = String(card.balance == null ? '' : card.balance);
    if (!card.currencyColor) {
      return escapeHtml(balance);
    }

    const suffix = ' SAR';
    if (!balance.endsWith(suffix)) {
      return escapeHtml(balance);
    }

    const amount = balance.slice(0, -suffix.length);
    return `${escapeHtml(amount)} <span class="acd-balance-currency" style="color:${escapeHtml(card.currencyColor)}">SAR</span>`;
  }

  function AccountCard(card) {
    const bankClass = card.variant === 'bank' ? ' is-bank' : '';
    return `
      <article class="acd-card${bankClass}">
        <button type="button" class="acd-icon-btn acd-card-more" aria-label="More actions">${Icons.more}</button>
        <h3 class="acd-card-title">${escapeHtml(card.title || '')}</h3>
        <p class="acd-card-sub">${escapeHtml(card.subtitle || '')}</p>
        ${card.sparkline ? Sparkline(card.sparkline) : ''}
        <p class="acd-balance-label">${escapeHtml(card.balanceLabel || '')}</p>
        <p class="acd-balance-value">${renderBalance(card)}</p>
        ${CardFooter(card)}
      </article>
    `;
  }

  function PurchaseCard(config) {
    const segments = Array.isArray(config.segments) ? config.segments : [];
    const legend = Array.isArray(config.legend) ? config.legend : [];
    return `
      <article class="acd-purchase-card">
        <button type="button" class="acd-icon-btn acd-card-more" aria-label="More actions">${Icons.more}</button>
        <h3 class="acd-card-title">${escapeHtml(config.title || '')}</h3>
        <p class="acd-card-sub">${escapeHtml(config.subtitle || '')}</p>
        <div class="acd-progress-row">
          ${segments.map(function(item) {
            return `<span class="acd-progress-segment" style="width:${escapeHtml(item.width || '25%')};background:${escapeHtml(item.color || '#E5E2EB')}"></span>`;
          }).join('')}
        </div>
        <div class="acd-legend-row">
          ${legend.map(function(item) {
            return `<span class="acd-legend-item"><span class="acd-legend-dot" style="background:${escapeHtml(item.color || '#E5E2EB')}"></span>${escapeHtml(item.label || '')} <strong>${escapeHtml(item.value || '')}</strong></span>`;
          }).join('')}
        </div>
        <div class="acd-card-actions">
          <button type="button" class="acd-btn acd-btn-light">${escapeHtml(config.viewLabel || 'View')} ${Icons.external}</button>
          <button type="button" class="acd-btn acd-btn-primary">${escapeHtml(config.addLabel || 'Add new')} ${Icons.plus}</button>
        </div>
      </article>
    `;
  }

  function DashboardGrid(config) {
    const cards = Array.isArray(config.cards) ? config.cards : [];
    return `
      <section class="acd-grid">
        ${cards.map(AccountCard).join('')}
        ${PurchaseCard(config.purchase || {})}
      </section>
    `;
  }

  return {
    SetupBanner,
    DashboardGrid
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AccountingDashboardScreenComponents;
}
