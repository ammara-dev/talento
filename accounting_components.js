/**
 * Talento Accounting Dashboard Components
 * Reusable UI blocks for the accounting dashboard screen.
 */
const AccountingComponents = (function() {
  'use strict';

  const Icons = {
    summary: '<i class="fa-solid fa-square-poll-vertical" aria-hidden="true"></i>',
    customers: '<i class="fa-solid fa-users" aria-hidden="true"></i>',
    vendors: '<i class="fa-solid fa-receipt" aria-hidden="true"></i>',
    journals: '<i class="fa-solid fa-folder" aria-hidden="true"></i>',
    reporting: '<i class="fa-solid fa-file-lines" aria-hidden="true"></i>',
    configuration: '<i class="fa-solid fa-gear" aria-hidden="true"></i>',
    invoices: '<i class="fa-solid fa-file-pen" aria-hidden="true"></i>',
    creditNotes: '<i class="fa-solid fa-note-sticky" aria-hidden="true"></i>',
    receipts: '<i class="fa-solid fa-receipt" aria-hidden="true"></i>',
    payments: '<i class="fa-solid fa-building-columns" aria-hidden="true"></i>',
    followUp: '<i class="fa-solid fa-file-circle-exclamation" aria-hidden="true"></i>',
    products: '<i class="fa-solid fa-tag" aria-hidden="true"></i>',
    customersTab: '<i class="fa-solid fa-briefcase" aria-hidden="true"></i>',
    filter: '<i class="fa-solid fa-sliders" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    wrench: '<i class="fa-solid fa-wrench" aria-hidden="true"></i>',
    export: '<i class="fa-solid fa-download" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>',
    collapse: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    sort: `
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M2.2 4 5 1.8 7.8 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.2 6 5 8.2 7.8 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `
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
    const chips = Array.isArray(config.chips) ? config.chips : [];
    return `
      <header class="ac-head">
        <h1>${escapeHtml(config.title || 'Accounting dashboard')}</h1>
        <div class="ac-head-actions">
          <div class="ac-chip-group">
            ${chips.map(function(chip) {
              return `<button type="button" class="ac-chip${chip.active ? ' is-active' : ''}">${chip.icon || ''} ${escapeHtml(chip.label || '')}</button>`;
            }).join('')}
          </div>
          <button type="button" class="ac-config-btn">${escapeHtml(config.configurationLabel || 'Configuration')} ${Icons.configuration}</button>
        </div>
      </header>
    `;
  }

  function ModuleTabs(config) {
    const tabs = Array.isArray(config.tabs) ? config.tabs : [];
    return `
      <div class="ac-tabs">
        ${tabs.map(function(tab) {
          return `
            <button type="button" class="ac-tab${tab.active ? ' is-active' : ''}">
              <span class="ac-tab-icon">${tab.icon || ''}</span>
              <span>${escapeHtml(tab.label || '')}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  function SetupCard(config) {
    return `
      <section class="ac-setup-card">
        <div class="ac-setup-main">
          <div class="ac-progress-circle">
            <span>${escapeHtml(config.progress || '2/3')}</span>
          </div>
          <div class="ac-setup-content">
            <div class="ac-setup-top">
              <h2>${escapeHtml(config.title || 'Set up your invoices')}</h2>
              <span class="ac-step-pill">${escapeHtml(config.stepLabel || '1 step left')}</span>
            </div>
            <p>${escapeHtml(config.description || 'One last thing — create your first invoice')}</p>
          </div>
        </div>
        <button type="button" class="ac-setup-toggle" aria-label="Collapse setup card">${Icons.collapse}</button>
      </section>
    `;
  }

  function Toolbar(config) {
    const search = (typeof LeaveComponents !== 'undefined' && LeaveComponents.SearchInput)
      ? LeaveComponents.SearchInput({
          placeholder: config.searchPlaceholder || 'Search',
          width: '100%'
        })
      : `
        <div class="ac-search-fallback">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input type="text" placeholder="${escapeHtml(config.searchPlaceholder || 'Search')}" />
        </div>
      `;

    return `
      <div class="ac-toolbar">
        <div class="ac-toolbar-search">${search}</div>
        <div class="ac-toolbar-actions">
          <button type="button" class="ac-pill-btn">${Icons.filter} Filters <span class="ac-count">${escapeHtml(config.filterCount || '0')}</span></button>
          <button type="button" class="ac-pill-btn">Sort by <strong>${escapeHtml(config.sortLabel || 'Name')}</strong> ${Icons.chevronDown}</button>
          <button type="button" class="ac-pill-btn">Edit columns ${Icons.wrench}</button>
          <button type="button" class="ac-pill-btn">Export all ${Icons.export}</button>
          <button type="button" class="ac-primary-btn">${escapeHtml(config.createLabel || 'Create new')} ${Icons.plus}</button>
        </div>
      </div>
    `;
  }

  function StatusBadge(status) {
    const map = {
      paid: 'ac-badge ac-badge--paid',
      review: 'ac-badge ac-badge--review',
      unpaid: 'ac-badge ac-badge--unpaid'
    };
    const className = map[status.key] || 'ac-badge';
    return `<span class="${className}">${escapeHtml(status.label || '')}</span>`;
  }

  function headerCell(label, sortable) {
    return `<th>${escapeHtml(label)} ${sortable ? `<span class="ac-sort">${Icons.sort}</span>` : ''}</th>`;
  }

  function DataRow(item) {
    return `
      <tr>
        <td><input type="checkbox" class="table-checkbox" /></td>
        <td>${escapeHtml(item.number || '')}</td>
        <td>${escapeHtml(item.customer || '')}</td>
        <td>${StatusBadge(item.paymentStatus || {})}</td>
        <td>${escapeHtml(item.invoiceDate || '')}</td>
        <td>${escapeHtml(item.dueDate || '')}</td>
        <td>${escapeHtml(item.taxExcluded || '')}</td>
        <td>${escapeHtml(item.totalCost || '')}</td>
        <td class="ac-actions-cell"><button type="button" class="ac-more-btn" aria-label="More actions"><i class="fa-solid fa-ellipsis-vertical"></i></button></td>
      </tr>
    `;
  }

  function AccountingTable(config) {
    const rows = Array.isArray(config.rows) ? config.rows : [];
    return `
      <section class="ac-table-wrap">
        <div class="table-scroll-wrap">
          <table class="ac-table">
            <thead>
              <tr>
                <th><input type="checkbox" class="table-checkbox" /></th>
                ${headerCell('Number', true)}
                ${headerCell('Customer', true)}
                ${headerCell('Payment Status', true)}
                ${headerCell('Invoice Date', true)}
                ${headerCell('Due Date', true)}
                ${headerCell('Tax Excluded', true)}
                ${headerCell('Total cost', true)}
                <th></th>
              </tr>
            </thead>
            <tbody>${rows.map(DataRow).join('')}</tbody>
          </table>
        </div>
      </section>
    `;
  }

  return {
    Icons,
    Header,
    ModuleTabs,
    SetupCard,
    Toolbar,
    AccountingTable
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AccountingComponents;
}
