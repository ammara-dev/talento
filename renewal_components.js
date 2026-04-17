/**
 * Talento Renewal Components
 * Reusable UI blocks for the renewal screen.
 */
const RenewalComponents = (function() {
  'use strict';

  const Icons = {
    contracts: '<i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>',
    iqama: '<i class="fa-solid fa-id-card" aria-hidden="true"></i>',
    plus: '<i class="fa-solid fa-plus" aria-hidden="true"></i>',
    filter: '<i class="fa-solid fa-sliders" aria-hidden="true"></i>',
    wrench: '<i class="fa-solid fa-wrench" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    sort: `
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M2.2 4 5 1.8 7.8 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.2 6 5 8.2 7.8 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    ok: '<i class="fa-solid fa-circle-check" aria-hidden="true"></i>',
    issue: '<i class="fa-solid fa-circle-exclamation" aria-hidden="true"></i>',
    expiry: '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>'
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
      <header class="rn-head">
        <h1>${escapeHtml(config.title || 'Renewal')}</h1>
        <button type="button" class="rn-primary-btn">
          ${escapeHtml(config.actionLabel || 'Create new')}
          ${Icons.plus}
        </button>
      </header>
    `;
  }

  function ModuleTabs(config) {
    const tabs = Array.isArray(config.tabs) ? config.tabs : [];
    return `
      <div class="rn-tabs">
        ${tabs.map(function(tab) {
          return `
            <button type="button" class="rn-tab${tab.active ? ' is-active' : ''}" data-tab="${escapeHtml(tab.key || '')}">
              <span class="rn-tab-icon">${tab.icon || ''}</span>
              <span>${escapeHtml(tab.label || '')}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  function Toolbar(config) {
    const search = (typeof LeaveComponents !== 'undefined' && LeaveComponents.SearchInput)
      ? LeaveComponents.SearchInput({
          placeholder: config.searchPlaceholder || 'Search',
          width: '100%'
        })
      : `
        <div class="rn-search-fallback">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input type="text" placeholder="${escapeHtml(config.searchPlaceholder || 'Search')}" />
        </div>
      `;

    return `
      <div class="rn-toolbar">
        <div class="rn-toolbar-search">${search}</div>
        <div class="rn-toolbar-actions">
          <button type="button" class="rn-pill-btn rn-pill-btn--tight">${Icons.filter} Filters <span class="rn-count">${escapeHtml(config.filterCount || '0')}</span></button>
          <button type="button" class="rn-pill-btn">Sort by <strong>${escapeHtml(config.sortLabel || 'Name')}</strong> ${Icons.chevronDown}</button>
          <button type="button" class="rn-pill-btn rn-pill-btn--icon-right">Edit columns ${Icons.wrench}</button>
        </div>
      </div>
    `;
  }

  function StatusBadge(status) {
    const map = {
      approved: 'rn-badge rn-badge--approved',
      review: 'rn-badge rn-badge--review',
      cancelled: 'rn-badge rn-badge--cancelled'
    };
    const className = map[status.key] || 'rn-badge';
    return `<span class="${className}">${escapeHtml(status.label || '')}</span>`;
  }

  function EmployeeCell(employee) {
    const avatar = (typeof LeaveComponents !== 'undefined' && LeaveComponents.Avatar)
      ? LeaveComponents.Avatar({ src: employee.avatar, name: employee.name, size: 26 })
      : `<span>${escapeHtml(employee.name || '')}</span>`;
    return `<div class="rn-employee">${avatar}</div>`;
  }

  function ConfirmationCell(confirmation) {
    const isOk = !!confirmation.ok;
    return `
      <span class="rn-confirm${isOk ? ' is-ok' : ' is-issue'}">
        ${isOk ? Icons.ok : Icons.issue}
        <span>${escapeHtml(confirmation.label || '')}</span>
      </span>
    `;
  }

  function rowCell(label, sortable) {
    return `<th>${escapeHtml(label)} ${sortable ? `<span class="rn-sort">${Icons.sort}</span>` : ''}</th>`;
  }

  function ExpiryCell(value) {
    return `<span class="rn-expiry">${Icons.expiry} ${escapeHtml(value || '')}</span>`;
  }

  function DataRow(item, variant) {
    if (variant === 'iqama') {
      return `
        <tr>
          <td><input type="checkbox" class="table-checkbox" /></td>
          <td>${escapeHtml(item.iqamaNumber || '')}</td>
          <td>${EmployeeCell(item.employee || {})}</td>
          <td>${StatusBadge(item.status || {})}</td>
          <td>${escapeHtml(item.jobPosition || '')}</td>
          <td>${escapeHtml(item.department || '')}</td>
          <td>${ExpiryCell(item.expiryDate || '')}</td>
          <td>${escapeHtml(item.renewalCost || '')}</td>
          <td class="rn-actions-cell"><button type="button" class="rn-more-btn" aria-label="More actions"><i class="fa-solid fa-ellipsis-vertical"></i></button></td>
        </tr>
      `;
    }

    return `
      <tr>
        <td><input type="checkbox" class="table-checkbox" /></td>
        <td>${escapeHtml(item.contractCode || '')}</td>
        <td>${EmployeeCell(item.employee || {})}</td>
        <td>${StatusBadge(item.status || {})}</td>
        <td>${escapeHtml(item.jobPosition || '')}</td>
        <td>${escapeHtml(item.department || '')}</td>
        <td>${ConfirmationCell(item.confirmation || {})}</td>
        <td>${escapeHtml(item.newContractCost || '')}</td>
        <td class="rn-actions-cell"><button type="button" class="rn-more-btn" aria-label="More actions"><i class="fa-solid fa-ellipsis-vertical"></i></button></td>
      </tr>
    `;
  }

  function RenewalTable(config) {
    const rows = Array.isArray(config.rows) ? config.rows : [];
    const variant = config.variant || 'contracts';
    const headers = variant === 'iqama'
      ? `
        ${rowCell('Igama Number', true)}
        ${rowCell('Employee name', true)}
        ${rowCell('Status', true)}
        ${rowCell('Job position', true)}
        ${rowCell('Department', true)}
        ${rowCell('Expiry Date', true)}
        ${rowCell('Renewal cost', true)}
      `
      : `
        ${rowCell('Code', true)}
        ${rowCell('Employee name', true)}
        ${rowCell('Status', true)}
        ${rowCell('Job position', true)}
        ${rowCell('Department', true)}
        ${rowCell('Received confirmation', true)}
        ${rowCell('New contract cost', true)}
      `;

    return `
      <section class="rn-table-wrap">
        <div class="table-scroll-wrap">
          <table class="rn-table">
            <thead>
              <tr>
                <th><input type="checkbox" class="table-checkbox" /></th>
                ${headers}
                <th></th>
              </tr>
            </thead>
            <tbody>${rows.map(function(row) { return DataRow(row, variant); }).join('')}</tbody>
          </table>
        </div>
      </section>
    `;
  }

  return {
    Icons,
    Header,
    ModuleTabs,
    Toolbar,
    RenewalTable
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RenewalComponents;
}
