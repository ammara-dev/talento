/**
 * Talento Rescheduled Loans Module Components
 * File: rescheduled_loans_components.js
 * Reusable UI components for the Rescheduled Loans screen
 */
const RescheduledLoansComponents = (function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // ICONS - SVG icon library
  // ═══════════════════════════════════════════════════════════════════════════
  const Icons = {
    search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    filter: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
    download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    chevronLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    moreVertical: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`,
    sort: `<svg class="sort-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 12 6 16 10"/><polyline points="8 14 12 18 16 14"/></svg>`,
    arrowRight: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STATUS BADGE CONFIG
  // ═══════════════════════════════════════════════════════════════════════════
  const StatusConfig = {
    'in-review': { bg: '#fef3c7', text: '#b45309', label: 'In review' },
    'approved': { bg: '#D7FFE7', text: '#15803d', label: 'Approved' },
    'rejected': { bg: '#fee2e2', text: '#dc2626', label: 'Rejected' },
    'pending': { bg: '#f3f4f6', text: '#6b7280', label: 'Pending' }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STATUS BADGE
  // Renders a status badge with dynamic styling based on status type
  // ═══════════════════════════════════════════════════════════════════════════
  function StatusBadge(status) {
    const config = StatusConfig[status] || StatusConfig['pending'];
    return `
      <span class="status-badge" style="
        display: inline-flex;
        align-items: center;
        height: 22px;
        padding: 0 10px;
        border-radius: 100px;
        font-size: 12px;
        font-weight: 400;
        color: ${config.text};
        background: ${config.bg};
      ">${config.label}</span>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // EMPLOYEE CELL
  // Renders employee avatar, name, and role
  // ═══════════════════════════════════════════════════════════════════════════
  function EmployeeCell(config) {
    const { 
      name = 'Employee Name', 
      role = 'Role', 
      avatar = 'https://i.pravatar.cc/150?img=1' 
    } = config;

    return `
      <div class="employee-cell">
        <img src="${avatar}" alt="${name}" class="employee-avatar" />
        <div class="employee-info">
          <span class="employee-name">${name}</span>
          <span class="employee-role">${role}</span>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DATE RANGE CELL
  // Renders "from [date] → to [date]" format
  // ═══════════════════════════════════════════════════════════════════════════
  function DateRangeCell(config) {
    const { from = '', to = '' } = config;

    return `
      <div class="date-range-cell">
        <span>from ${from}</span>
        <span class="arrow">→</span>
        <span>to ${to}</span>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ACTION MENU BUTTON
  // Renders vertical dots menu button
  // ═══════════════════════════════════════════════════════════════════════════
  function ActionMenuButton(id) {
    return `
      <button class="action-menu-btn" onclick="showActionMenu(${id})" aria-label="Actions">
        ${Icons.moreVertical}
      </button>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // TABLE ROW
  // Main reusable component for rendering a single loan row
  // Supports dynamic data: employee info, loan details, status, dates, amount
  // ═══════════════════════════════════════════════════════════════════════════
  function TableRow(data) {
    const {
      id = 0,
      employeeName = 'Employee Name',
      employeeRole = 'Role',
      employeeAvatar = 'https://i.pravatar.cc/150?img=1',
      loanRequest = '#LAR00000',
      status = 'pending',
      reason = '',
      changedFrom = '',
      changedTo = '',
      installmentAmount = 'SAR 0'
    } = data;

    return `
      <tr>
        <td style="padding-left: 14px;">
          <input type="checkbox" class="table-checkbox" aria-label="Select row" />
        </td>
        <td>
          ${EmployeeCell({ name: employeeName, role: employeeRole, avatar: employeeAvatar })}
        </td>
        <td style="color: #1E1033; font-weight: 400;">${loanRequest}</td>
        <td>${StatusBadge(status)}</td>
        <td style="color: #4B405C; max-width: 180px; overflow: hidden; text-overflow: ellipsis;">${reason}</td>
        <td>${DateRangeCell({ from: changedFrom, to: changedTo })}</td>
        <td style="color: #1E1033; font-weight: 400;">${installmentAmount}</td>
        <td>${ActionMenuButton(id)}</td>
      </tr>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // BREADCRUMB
  // Renders breadcrumb navigation
  // ═══════════════════════════════════════════════════════════════════════════
  function Breadcrumb(config) {
    const { items = [] } = config;
    
    const itemsHTML = items.map((item, index) => {
      const isLast = index === items.length - 1;
      if (isLast) {
        return `<span>${item.label}</span>`;
      }
      return `<a href="${item.href || '#'}">${item.label}</a><span>/</span>`;
    }).join('');

    return `
      <nav class="breadcrumb" aria-label="Breadcrumb">
        ${itemsHTML}
      </nav>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGINATION NAV
  // Renders "Back X of Y Next" navigation
  // ═══════════════════════════════════════════════════════════════════════════
  function PaginationNav(config) {
    const { 
      current = 1, 
      total = 1, 
      onPrev = 'prevRecord()', 
      onNext = 'nextRecord()' 
    } = config;

    return `
      <div class="pagination-nav">
        <button onclick="${onPrev}" aria-label="Previous record">
          ${Icons.chevronLeft}
          Back
        </button>
        <span id="pagination-info">${current} of ${total}</span>
        <button onclick="${onNext}" aria-label="Next record">
          Next
          ${Icons.chevronRight}
        </button>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SEARCH BOX
  // Renders search input with icon
  // ═══════════════════════════════════════════════════════════════════════════
  function SearchBox(config) {
    const { placeholder = 'Search' } = config;

    return `
      <div class="search-box-pill">
        ${Icons.search}
        <input type="text" placeholder="${placeholder}" />
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // FILTER BUTTON
  // Renders filter button with optional count
  // ═══════════════════════════════════════════════════════════════════════════
  function FilterButton(config) {
    const { count = 0 } = config;
    const countHTML = count > 0 ? `<span class="filter-count">${count}</span>` : '';

    return `
      <button class="filter-btn">
        ${Icons.filter}
        Filters
        ${countHTML}
      </button>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // EXPORT BUTTON
  // Renders export all button
  // ═══════════════════════════════════════════════════════════════════════════
  function ExportButton(config) {
    const { text = 'Export all' } = config;

    return `
      <button class="export-btn">
        ${text}
        ${Icons.download}
      </button>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // CREATE NEW BUTTON
  // Renders primary action button
  // ═══════════════════════════════════════════════════════════════

  function CreateNewButton(config) {
    const { text = 'Create new', onClick = 'createNew()' } = config;

    return `
      <button class="create-new-btn" onclick="${onClick}">
        ${text}
        ${Icons.plus}
      </button>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // TABLE HEADER
  // Renders table header row with sortable columns
  // ═══════════════════════════════════════════════════════════════════════════
  function TableHeader(config) {
    const { columns = [] } = config;

    const columnsHTML = columns.map(col => {
      const sortIcon = col.sortable ? Icons.sort : '';
      const width = col.width ? `width: ${col.width};` : '';
      const paddingLeft = col.isFirst ? 'padding-left: 14px;' : '';
      
      return `
        <th style="${width}${paddingLeft}">
          ${col.label}
          ${sortIcon}
        </th>
      `;
    }).join('');

    return `
      <thead>
        <tr>
          ${columnsHTML}
        </tr>
      </thead>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // EMPTY STATE
  // Renders empty state when no data is available
  // ═══════════════════════════════════════════════════════════════════════════
  function EmptyState(config) {
    const { 
      title = 'No rescheduled loans found', 
      description = 'There are no rescheduled loan requests at the moment.',
      showAction = false,
      actionText = 'Create new'
    } = config;

    const actionHTML = showAction ? `
      <button class="create-new-btn" style="margin-top: 16px;">
        ${actionText}
        ${Icons.plus}
      </button>
    ` : '';

    return `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 60px 20px; text-align: center;">
        <div style="width: 64px; height: 64px; background: #f6f5f7; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <h3 style="font-size: 16px; font-weight: 500; color: #1E1033; margin-bottom: 8px;">${title}</h3>
        <p style="font-size: 14px; color: #787085; max-width: 300px;">${description}</p>
        ${actionHTML}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════════════════════════
  return {
    Icons,
    StatusConfig,
    StatusBadge,
    EmployeeCell,
    DateRangeCell,
    ActionMenuButton,
    TableRow,
    Breadcrumb,
    PaginationNav,
    SearchBox,
    FilterButton,
    ExportButton,
    CreateNewButton,
    TableHeader,
    EmptyState
  };

})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RescheduledLoansComponents;
}
