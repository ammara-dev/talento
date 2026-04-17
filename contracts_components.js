/**
 * Talento Contracts Components
 * Reusable UI blocks for the contracts screen.
 */
const ContractsComponents = (function() {
  'use strict';

  const Icons = {
    active: '<i class="fa-regular fa-file-lines" aria-hidden="true"></i>',
    expiring: '<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i>',
    drafts: '<i class="fa-solid fa-file-pen" aria-hidden="true"></i>',
    expired: `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="M14 3v5h5" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
        <path d="m10.2 11.2 4.6 4.6M14.8 11.2l-4.6 4.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
      </svg>
    `,
    external: '<i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>',
    filter: '<i class="fa-solid fa-sliders" aria-hidden="true"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down" aria-hidden="true"></i>',
    sort: `
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M2.2 4 5 1.8 7.8 4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.2 6 5 8.2 7.8 6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
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

  function TopHeader(config) {
    return `
      <header class="ct-head">
        <h1>${escapeHtml(config.title || 'Contracts')}</h1>
        <button type="button" class="ct-primary-btn">
          ${escapeHtml(config.actionLabel || 'Create new contract')}
          ${Icons.plus}
        </button>
      </header>
    `;
  }

  function SummaryCard(item) {
    return `
      <article class="ct-summary-card">
        <div class="ct-summary-top">
          <span class="ct-summary-label">${item.icon || ''} ${escapeHtml(item.label || '')}</span>
          <span class="ct-summary-arrow">${Icons.external}</span>
        </div>
        <p class="ct-summary-value${item.tone ? ` ct-summary-value--${escapeHtml(item.tone)}` : ''}">${escapeHtml(item.value || '')}</p>
      </article>
    `;
  }

  function SummarySection(config) {
    const list = Array.isArray(config.items) ? config.items : [];
    return `<section class="ct-summary-grid">${list.map(SummaryCard).join('')}</section>`;
  }

  function Toolbar(config) {
    const search = (typeof LeaveComponents !== 'undefined' && LeaveComponents.SearchInput)
      ? LeaveComponents.SearchInput({
          placeholder: config.searchPlaceholder || 'Search',
          width: '100%'
        })
      : `
        <div class="ct-search-fallback">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input type="text" placeholder="${escapeHtml(config.searchPlaceholder || 'Search')}" />
        </div>
      `;

    return `
      <div class="ct-toolbar">
        <div class="ct-toolbar-search">${search}</div>
        <div class="ct-toolbar-actions">
          <button type="button" class="ct-pill-btn">${Icons.filter} Filters <span class="ct-count">${escapeHtml(config.filterCount || '0')}</span></button>
          <button type="button" class="ct-pill-btn">Sort by <strong>${escapeHtml(config.sortLabel || 'Name')}</strong> ${Icons.chevronDown}</button>
        </div>
      </div>
    `;
  }

  function StatusBadge(status) {
    const map = {
      active: 'ct-badge ct-badge--active',
      expiring: 'ct-badge ct-badge--expiring',
      expired: 'ct-badge ct-badge--expired'
    };
    const className = map[status.key] || 'ct-badge';
    return `<span class="${className}">${escapeHtml(status.label || '')}</span>`;
  }

  function DurationCell(duration) {
    const colorMap = {
      active: '#10b981',
      expiring: '#f59e0b',
      expired: '#ef4444'
    };
    const color = colorMap[duration.state] || '#10b981';
    return `
      <div class="ct-duration">
        <div class="ct-duration-top">
          <strong>${escapeHtml(duration.term || '')}</strong>
          <span>${escapeHtml(duration.range || '')}</span>
        </div>
        <span class="ct-duration-bar"><span style="width:${escapeHtml(duration.progress || '60%')};background:${color};"></span></span>
      </div>
    `;
  }

  function EmployeeCell(employee) {
    const avatar = (typeof LeaveComponents !== 'undefined' && LeaveComponents.Avatar)
      ? LeaveComponents.Avatar({ src: employee.avatar, name: employee.name, size: 26 })
      : `<span>${escapeHtml(employee.name || '')}</span>`;
    return `<div class="ct-employee">${avatar}</div>`;
  }

  function DataRow(item) {
    return `
      <tr>
        <td><input type="checkbox" class="table-checkbox" /></td>
        <td>${escapeHtml(item.code || '')}</td>
        <td>${EmployeeCell(item.employee || {})}</td>
        <td>${escapeHtml(item.hiringDate || '')}</td>
        <td>${StatusBadge(item.status || {})}</td>
        <td>${DurationCell(item.duration || {})}</td>
        <td>${escapeHtml(item.salary || '')}</td>
        <td>${escapeHtml(item.totalCost || '')}</td>
        <td class="ct-actions-cell"><button type="button" class="ct-more-btn" aria-label="More actions"><i class="fa-solid fa-ellipsis-vertical"></i></button></td>
      </tr>
    `;
  }

  function headerCell(label, sortable) {
    return `<th>${escapeHtml(label)} ${sortable ? `<span class="ct-sort">${Icons.sort}</span>` : ''}</th>`;
  }

  function ContractsTable(config) {
    const rows = Array.isArray(config.rows) ? config.rows : [];
    return `
      <section class="ct-table-wrap">
        <div class="table-scroll-wrap">
          <table class="ct-table">
            <thead>
              <tr>
                <th><input type="checkbox" class="table-checkbox" /></th>
                ${headerCell('Code', true)}
                ${headerCell('Employee name', true)}
                ${headerCell('Hiring date', true)}
                ${headerCell('Status', true)}
                ${headerCell('Contract duration', true)}
                ${headerCell('Basic Salary', true)}
                ${headerCell('Total contract cost', true)}
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${rows.map(DataRow).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  return {
    Icons,
    TopHeader,
    SummarySection,
    Toolbar,
    ContractsTable
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ContractsComponents;
}
