/**
 * Talento Leave Module Components
 * File: leave_components.js
 * Reusable UI components for the Leave (Time Off) module
 */
const LeaveComponents = (function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // ICONS - SVG icon library
  // ═══════════════════════════════════════════════════════════════════════════
  const Icons = {
    sparkle: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"/></svg>`,
    calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    return: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/></svg>`,
    document: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    gear: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    chevronLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    filter: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
    grid: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
    list: `<svg width="13" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
    download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    edit: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    sort: `<svg class="sort-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 12 6 16 10"/><polyline points="8 14 12 18 16 14"/></svg>`,
    moreVertical: `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2.5"/><circle cx="12" cy="12" r="2.5"/><circle cx="12" cy="19" r="2.5"/></svg>`,
    search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    table: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/></svg>`,
    chart: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
    chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE HEADER with TABS
  // Renders: Title + Main navigation tabs + Configuration button
  // ═══════════════════════════════════════════════════════════════════════════
  function PageHeader(config) {
    const { title, tabs, activeTab, showConfig = true, onTabChange } = config;

    const tabIcons = {
      'summary': Icons.sparkle,
      'leave-reconciliations': Icons.calendar,
      'return-from-leave': Icons.return,
      'reports': Icons.document
    };

    const tabsHTML = tabs.map(tab => {
      const isActive = tab.id === activeTab;
      const icon = tabIcons[tab.id] || '';
      return `
        <button class="leave-tab${isActive ? ' active' : ''}" 
                data-tab-id="${tab.id}"
                onclick="LeaveComponents.handleTabClick(this, '${onTabChange || ''}')"
                ${isActive ? 'aria-current="true"' : ''}>
          ${icon}
          ${tab.label}
        </button>
      `;
    }).join('');

    const configBtn = showConfig ? `
      <button class="toolbar-btn" style="gap:6px;border-radius:8px;">
        Configuration
        ${Icons.gear}
      </button>
    ` : '';

    return `
      <div class="page-header-row" style="margin-bottom:12px;">
        <h1 style="color:#1e1033;font-size:22px;font-weight:400;letter-spacing:-0.22px;line-height:1.4;flex-shrink:0;">${title}</h1>
        <div class="tabs-config-wrap">
          <div style="display:flex;align-items:center;background:#f6f5f7;border:1.5px solid rgba(30,16,51,0.1);border-radius:8px;padding:2px;gap:0;flex-wrap:wrap;justify-content:flex-start;max-width:100%;">
            ${tabsHTML}
          </div>
          ${configBtn}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SUB-TABS (Secondary navigation)
  // Used for: Analysis View / Monthly Summary / Visual Analytics
  // ═══════════════════════════════════════════════════════════════════════════
  function SubTabs(config) {
    const { tabs, activeTab, onTabChange } = config;

    const subTabIcons = {
      'analysis-view': Icons.table,
      'monthly-summary': Icons.calendar,
      'visual-analytics': Icons.chart
    };

    const tabsHTML = tabs.map(tab => {
      const isActive = tab.id === activeTab;
      const icon = subTabIcons[tab.id] || '';
      return `
        <button class="sub-tab${isActive ? ' active' : ''}" 
                data-subtab-id="${tab.id}"
                onclick="LeaveComponents.handleSubTabClick(this, '${onTabChange || ''}')">
          ${icon}
          ${tab.label}
        </button>
      `;
    }).join('');

    return `
      <div class="sub-tabs-wrap" style="display:flex;align-items:center;gap:4px;margin-bottom:16px;">
        ${tabsHTML}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // TOOLBAR
  // Renders: Search, Date picker, Filters, View toggle, Export, Create new
  // ═══════════════════════════════════════════════════════════════════════════
  function Toolbar(config) {
    const {
      showSearch = false,
      searchPlaceholder = 'Search',
      showDateNav = false,
      dateText = 'Today',
      dateSubText = '',
      showDateRange = false,
      dateRangeStart = '',
      dateRangeEnd = '',
      dateRangeSeparator = '-',
      showFilters = true,
      filterCount = 0,
      showViewToggle = true,
      activeView = 'list',
      viewToggleType = 'full', // 'full' (3 buttons) or 'simple' (2 buttons)
      showExport = true,
      exportText = 'Export all',
      showEditColumns = false,
      showCreateNew = false,
      createNewText = 'Create new'
    } = config;

    // Search input
    const searchHTML = showSearch ? `
      <div class="search-input-wrap" style="display:flex;align-items:center;gap:8px;background:#f6f5f7;border:1px solid #e8e7eb;border-radius:8px;padding:0 12px;height:36px;min-width:200px;">
        ${Icons.search}
        <input type="text" placeholder="${searchPlaceholder}" style="border:none;background:transparent;outline:none;font-size:13px;color:#4b405c;width:100%;" />
      </div>
    ` : '';

    // Date navigator (single date)
    const dateNavHTML = showDateNav ? `
      <div class="date-nav-pill">
        <button aria-label="Previous">${Icons.chevronLeft}</button>
        <span style="font-size:13px;color:#4b405c;letter-spacing:-0.07px;">${dateText}</span>
        ${dateSubText ? `<span class="dot"></span><span style="font-size:13px;color:#4b405c;letter-spacing:-0.07px;">${dateSubText}</span>` : ''}
        <button aria-label="Next">${Icons.chevronRight}</button>
      </div>
    ` : '';

    // Date range picker
    const dateRangeHTML = showDateRange ? `
      <div class="date-nav-pill">
        <button aria-label="Previous">${Icons.chevronLeft}</button>
        <span style="font-size:13px;color:#4b405c;letter-spacing:-0.07px;">${dateRangeStart} ${dateRangeSeparator || '-'} ${dateRangeEnd}</span>
        <button aria-label="Next">${Icons.chevronRight}</button>
      </div>
    ` : '';

    // Filters button
    const filtersHTML = showFilters ? `
      <button class="filter-btn">
        ${Icons.filter}
        Filters
        ${filterCount > 0 ? `<span style="color:#787085;">${filterCount}</span>` : ''}
      </button>
    ` : '';

    // View toggle - simple (2 buttons) or full (3 buttons)
    let viewToggleHTML = '';
    if (showViewToggle) {
      if (viewToggleType === 'simple') {
        viewToggleHTML = `
          <div class="view-wrap">
            <button class="view-btn${activeView === 'grid' ? ' active' : ''}" onclick="LeaveComponents.switchView(this, 'grid')" title="Grid view">
              ${Icons.grid}
            </button>
            <button class="view-btn${activeView === 'list' ? ' active' : ''}" onclick="LeaveComponents.switchView(this, 'list')" title="List view">
              ${Icons.list}
            </button>
          </div>
        `;
      } else {
        viewToggleHTML = `
          <div class="view-wrap">
            <button class="view-btn${activeView === 'grid' ? ' active' : ''}" onclick="LeaveComponents.switchView(this, 'grid')" title="Grid view">
              ${Icons.grid}
            </button>
            <button class="view-btn${activeView === 'list' ? ' active' : ''}" onclick="LeaveComponents.switchView(this, 'list')" title="List view">
              ${Icons.list}
            </button>
            <button class="view-btn${activeView === 'calendar' ? ' active' : ''}" onclick="LeaveComponents.switchView(this, 'calendar')" title="Calendar view">
              ${Icons.calendar}
            </button>
          </div>
        `;
      }
    }

    // Export button
    const exportHTML = showExport ? `
      <button class="toolbar-btn">
        ${exportText}
        ${Icons.download}
      </button>
    ` : '';

    // Edit columns button
    const editColumnsHTML = showEditColumns ? `
      <button class="toolbar-btn">
        Edit columns
        ${Icons.edit}
      </button>
    ` : '';

    // Create new button
    const createNewHTML = showCreateNew ? `
      <button class="create-new-btn">
        ${createNewText}
        ${Icons.plus}
      </button>
    ` : '';

    return `
      <div class="toolbar-row" style="margin-bottom:16px;">
        <div style="display:flex;align-items:center;gap:12px;">
          ${searchHTML}
          ${dateNavHTML}
          ${dateRangeHTML}
        </div>
        <div class="toolbar-right">
          ${filtersHTML}
          ${viewToggleHTML}
          ${exportHTML}
          ${editColumnsHTML}
          ${createNewHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DATA TABLE
  // Renders: Table with sortable headers, rows, checkboxes, avatars, badges
  // ═══════════════════════════════════════════════════════════════════════════
  function DataTable(config) {
    const { columns, rows, showCheckbox = true, showActions = true } = config;

    // Header row
    const headerCells = columns.map((col, idx) => {
      const checkboxHTML = (idx === 0 && showCheckbox) ? 
        `<input type="checkbox" class="table-checkbox" onclick="LeaveComponents.toggleAllCheckboxes(this)" />` : '';
      
      return `
        <th${col.width ? ` style="width:${col.width}"` : ''}>
          <div style="display:flex;align-items:center;gap:8px;">
            ${checkboxHTML}
            ${col.label}
            ${col.sortable !== false ? Icons.sort : ''}
          </div>
        </th>
      `;
    }).join('');

    const actionsHeader = showActions ? '<th class="col-actions"></th>' : '';

    // Body rows
    const bodyRows = rows.map(row => {
      const cells = columns.map((col, idx) => {
        const value = row[col.key];
        let cellContent = '';

        // First column with checkbox
        if (idx === 0 && showCheckbox) {
          if (col.type === 'avatar') {
            cellContent = `
              <div style="display:flex;align-items:center;gap:10px;">
                <input type="checkbox" class="table-checkbox" />
                ${Avatar({ src: row.avatar, name: value, subtitle: row.jobTitle || row.subtitle || '' })}
              </div>
            `;
          } else {
            cellContent = `
              <div style="display:flex;align-items:center;gap:10px;">
                <input type="checkbox" class="table-checkbox" />
                ${value}
              </div>
            `;
          }
        } else if (col.type === 'avatar') {
          cellContent = Avatar({ src: row.avatar, name: value, subtitle: row.jobTitle || row.subtitle || '' });
        } else if (col.type === 'badge') {
          cellContent = Badge({ text: value, variant: row.statusVariant || row[col.variantKey] || 'default' });
        } else if (col.type === 'plain-badge') {
          // Plain badges use variant prefix "plain-"
          const plainVariant = 'plain-' + (row.statusVariant || row[col.variantKey] || 'pending');
          cellContent = Badge({ text: value, variant: plainVariant });
        } else if (col.type === 'status-text') {
          // Status with proper badge styling based on variant
          cellContent = Badge({ text: value, variant: row.statusVariant || 'default' });
        } else if (col.type === 'reconciliation-type') {
          cellContent = Badge({ text: value, variant: 'reconciliation-type' });
        } else if (col.type === 'duration') {
          cellContent = `<span class="duration-pill">${value}</span>`;
        } else if (col.type === 'currency') {
          const color = value === '0.00' ? '#a09aab' : '#1e1033';
          cellContent = `<span style="color:${color}">${value}</span>`;
        } else if (col.type === 'tag') {
          cellContent = `<span class="tag-badge">${value}</span>`;
        } else {
          cellContent = value || '';
        }

        // Handle special styling for certain cells
        let cellStyle = col.style || '';
        if (col.key === 'remainingBalance' && row.remainingBalanceColor) {
          cellStyle += `color:${row.remainingBalanceColor};`;
        } else if (col.key === 'leaveType') {
          cellStyle += 'color:#1e1033;';
        } else if (col.key === 'startDate' || col.key === 'endDate') {
          cellStyle += 'color:#4b405c;';
        }

        return `<td${cellStyle ? ` style="${cellStyle}"` : ''}>${cellContent}</td>`;
      }).join('');

      const actionsCell = showActions ? `
        <td class="col-actions">
          <button style="color:#787085;padding:6px;" aria-label="More actions">
            ${Icons.moreVertical}
          </button>
        </td>
      ` : '';

      return `<tr>${cells}${actionsCell}</tr>`;
    }).join('');

    return `
      <div class="table-scroll-wrap" style="border: 1px solid #f0eef6; border-radius: 12px; overflow-x: auto; overflow-y: hidden;">
        <table class="leave-table">
          <thead>
            <tr>${headerCells}${actionsHeader}</tr>
          </thead>
          <tbody>
            ${bodyRows}
          </tbody>
        </table>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGINATION
  // Renders: < Back | 01 02 03 ... 30 | Next >
  // ═══════════════════════════════════════════════════════════════════════════
  function Pagination(config) {
    const { currentPage = 1, totalPages = 30, visiblePages = 6 } = config;

    let pagesHTML = '';
    for (let i = 1; i <= Math.min(visiblePages, totalPages); i++) {
      const isActive = i === currentPage;
      const pageNum = String(i).padStart(2, '0');
      pagesHTML += `
        <button class="pg-page-btn${isActive ? ' pg-active' : ''}" 
                onclick="LeaveComponents.selectPage(this, ${i})">${pageNum}</button>
      `;
    }

    if (totalPages > visiblePages) {
      pagesHTML += `<span class="pg-dots">...</span>`;
      pagesHTML += `
        <button class="pg-page-btn" onclick="LeaveComponents.selectPage(this, ${totalPages})">${totalPages}</button>
      `;
    }

    return `
      <div class="pg-wrap" style="margin-top:16px; padding:10px 0; border-radius:10px;">
        <button class="pg-nav-btn" onclick="LeaveComponents.prevPage()">
          ${Icons.chevronLeft}
          Back
        </button>
        <div class="pg-pages-wrap">
          ${pagesHTML}
        </div>
        <button class="pg-nav-btn" onclick="LeaveComponents.nextPage()">
          Next
          ${Icons.chevronRight}
        </button>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // AVATAR (User cell with image, name, subtitle)
  // ═══════════════════════════════════════════════════════════════════════════
  function Avatar(config) {
    const { src, name, subtitle = '', size = 32 } = config;
    
    const imgHTML = src ? 
      `<img src="${src}" alt="${name}" style="width:${size}px;height:${size}px;border-radius:50%;object-fit:cover;flex-shrink:0;" />` :
      `<div style="width:${size}px;height:${size}px;border-radius:50%;background:#e8e7eb;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span style="font-size:${size * 0.4}px;color:#787085;font-weight:500;">${name.charAt(0).toUpperCase()}</span>
      </div>`;

    return `
      <div style="display:flex;align-items:center;gap:10px;">
        ${imgHTML}
        <div>
          <p style="font-size:13px;font-weight:500;color:#1e1033;line-height:1.3;">${name}</p>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // BADGE (Status badges: Approved, On review, etc.)
  // ═══════════════════════════════════════════════════════════════════════════
  function Badge(config) {
    const { text, variant = 'default' } = config;

    const variants = {
      approved: 'badge-approved',
      review: 'badge-review',
      pending: 'badge-pending',
      rejected: 'badge-rejected',
      'plain-approved': 'badge-plain-approved',
      'plain-review': 'badge-plain-review',
      'plain-pending': 'badge-plain-pending',
      'plain-rejected': 'badge-plain-rejected',
      type: 'badge-type',
      'reconciliation-type': 'badge-type',
      default: 'badge-default'
    };

    const className = variants[variant] || variants.default;
    return `<span class="${className}">${text}</span>`;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION HEADER
  // Renders: Section title (left) + Search + Action buttons (right)
  // ═══════════════════════════════════════════════════════════════════════════
  function SectionHeader(config) {
    const {
      title = '',
      showSearch = false,
      searchPlaceholder = 'Search',
      showExport = false,
      exportText = 'Export all',
      showCreateNew = false,
      createNewText = 'Create new',
      onCreateNew = ''
    } = config;

    const titleHTML = title ? `<h2 class="section-title">${title}</h2>` : '';

    const searchHTML = showSearch ? `
      <div class="search-box">
        ${Icons.search}
        <input type="text" placeholder="${searchPlaceholder}" />
      </div>
    ` : '';

    const exportHTML = showExport ? `
      <button class="toolbar-btn">
        ${exportText}
        ${Icons.download}
      </button>
    ` : '';

    const createNewHTML = showCreateNew ? `
      <button class="create-new-btn" ${onCreateNew ? `onclick="${onCreateNew}"` : ''}>
        ${createNewText}
        ${Icons.plus}
      </button>
    ` : '';

    return `
      <div class="section-header">
        <div class="section-header-left">
          ${titleHTML}
          ${searchHTML}
        </div>
        <div class="section-header-right">
          ${exportHTML}
          ${createNewHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // BREADCRUMB
  // Renders: Reports list / Report name
  // ═══════════════════════════════════════════════════════════════════════════
  function Breadcrumb(config) {
    const { items } = config;

    const crumbs = items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      if (item.href && !isLast) {
        return `<a href="${item.href}" style="color:#787085;text-decoration:none;font-size:13px;">${item.label}</a>`;
      }
      return `<span style="color:${isLast ? '#1e1033' : '#787085'};font-size:13px;">${item.label}</span>`;
    }).join('<span style="color:#787085;margin:0 4px;">/</span>');

    return `
      <div class="breadcrumb" style="display:flex;align-items:center;margin-bottom:8px;">
        ${crumbs}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // REPORT HEADER (Detail view header with back/next navigation)
  // ═══════════════════════════════════════════════════════════════════════════
  function ReportHeader(config) {
    const { 
      title, 
      dateRange, 
      totalDays, 
      note = '', 
      createdBy = null,
      currentIndex = 1,
      totalItems = 1 
    } = config;

    const createdByHTML = createdBy ? `
      <span style="display:flex;align-items:center;gap:6px;">
        Created by
        ${Avatar({ src: createdBy.avatar, name: createdBy.name, size: 24 })}
      </span>
    ` : '';

    return `
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px;">
        <div>
          <h2 style="font-size:20px;font-weight:500;color:#1e1033;margin-bottom:8px;">${title}</h2>
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:13px;color:#787085;">
            <span>${dateRange}</span>
            <span>•</span>
            <span>Total number of days <strong style="color:#1e1033;">${totalDays}</strong></span>
          </div>
          ${note ? `
            <div style="display:flex;align-items:center;gap:8px;margin-top:8px;font-size:13px;color:#787085;">
              <span>Note: <strong style="color:#4b405c;">${note}</strong></span>
              <span>•</span>
              ${createdByHTML}
            </div>
          ` : ''}
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <button class="pg-nav-btn">${Icons.chevronLeft} Back</button>
          <span style="font-size:13px;color:#787085;">${currentIndex} of ${totalItems}</span>
          <button class="pg-nav-btn">Next ${Icons.chevronRight}</button>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // DATE RANGE PICKER
  // Renders: < January 2025 - December 2025 >
  // ═══════════════════════════════════════════════════════════════════════════
  function DateRangePicker(config) {
    const { startDate, endDate } = config;

    return `
      <div class="date-nav-pill">
        <button aria-label="Previous">${Icons.chevronLeft}</button>
        <span style="font-size:13px;color:#4b405c;letter-spacing:-0.07px;">${startDate}</span>
        <span style="color:#787085;margin:0 4px;">•</span>
        <span style="font-size:13px;color:#4b405c;letter-spacing:-0.07px;">${endDate}</span>
        <button aria-label="Next">${Icons.chevronRight}</button>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SEARCH INPUT
  // ═══════════════════════════════════════════════════════════════════════════
  function SearchInput(config) {
    const { placeholder = 'Search', value = '', width = '200px' } = config;

    return `
      <div class="search-input-wrap" style="display:flex;align-items:center;gap:8px;background:#fff;border:1px solid #e8e7eb;border-radius:8px;padding:0 12px;height:36px;width:${width};">
        ${Icons.search}
        <input type="text" placeholder="${placeholder}" value="${value}" 
               style="border:none;background:transparent;outline:none;font-size:13px;color:#4b405c;width:100%;" />
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // EMPTY STATE
  // ═══════════════════════════════════════════════════════════════════════════
  function EmptyState(config) {
    const { title = 'No data found', description = '', icon = null, action = null } = config;

    const iconHTML = icon || `
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c4c0cc" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    `;

    const actionHTML = action ? `
      <button class="create-new-btn" style="margin-top:16px;" onclick="${action.onClick || ''}">
        ${action.label}
      </button>
    ` : '';

    return `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center;">
        ${iconHTML}
        <h3 style="font-size:16px;font-weight:500;color:#1e1033;margin:16px 0 8px;">${title}</h3>
        ${description ? `<p style="font-size:13px;color:#787085;max-width:320px;">${description}</p>` : ''}
        ${actionHTML}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // VISUAL ANALYTICS - Legend Component
  // ═══════════════════════════════════════════════════════════════════════════
  const LeaveTypeColors = {
    'annual': { gradient: ['#E4D4FF', '#D3BCF8'], dot: '#D3BCF8' },
    'unpaid': { gradient: ['#FFDD75', '#FECC36'], dot: '#FECC36' },
    'sick': { gradient: ['#E0DDE5', '#D2CFD6'], dot: '#D2CFD6' },
    'other': { gradient: ['#C3E2F9', '#BBDEF7'], dot: '#BBDEF7' }
  };

  function LeaveLegend(config) {
    const { items = ['annual', 'unpaid', 'sick', 'other'] } = config;
    
    const labels = {
      'annual': 'Annual leave',
      'unpaid': 'Unpaid leave',
      'sick': 'Sick leave',
      'other': 'Other'
    };

    const legendItems = items.map(type => {
      const color = LeaveTypeColors[type]?.dot || '#ccc';
      return `
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="width:8px;height:8px;border-radius:50%;background:${color};flex-shrink:0;"></span>
          <span style="font-size:12px;color:#4b405c;">${labels[type] || type}</span>
        </div>
      `;
    }).join('');

    return `
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:16px;">
        ${legendItems}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // VISUAL ANALYTICS - Gantt Chart Component
  // ═══════════════════════════════════════════════════════════════════════════
  function LeaveGanttChart(config) {
    const { 
      employees = [], 
      totalPeople = 123, 
      totalInOrg = 1402,
      scaleMax = 200 
    } = config;

    // Generate scale markers
    const scaleMarkers = [];
    for (let i = 0; i <= scaleMax; i += 20) {
      scaleMarkers.push(i === 0 ? '00' : i.toFixed(2));
    }

    const scaleHTML = scaleMarkers.map((marker, idx) => `
      <span style="font-size:10px;color:#a09aab;white-space:nowrap;">${marker}</span>
    `).join('');

    // Generate employee rows
    const rowsHTML = employees.map(emp => {
      // Generate leave bars
      const barsHTML = (emp.leaves || []).map(leave => {
        const colors = LeaveTypeColors[leave.type] || LeaveTypeColors.other;
        const leftPercent = (leave.start / scaleMax) * 100;
        const widthPercent = ((leave.end - leave.start) / scaleMax) * 100;
        
        return `
          <div style="
            position:absolute;
            left:${leftPercent}%;
            width:${widthPercent}%;
            height:20px;
            border-radius:8px;
            background:linear-gradient(90deg, ${colors.gradient[0]} 0%, ${colors.gradient[1]} 100%);
            top:50%;
            transform:translateY(-50%);
          "></div>
        `;
      }).join('');

      return `
        <div style="display:flex;align-items:center;border-bottom:1px solid #f0eef6;min-height:52px;">
          <!-- Employee info -->
          <div style="width:180px;flex-shrink:0;padding:8px 12px;display:flex;align-items:center;gap:10px;">
            <img src="${emp.avatar}" alt="${emp.name}" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;" />
            <div style="min-width:0;">
              <div style="font-size:13px;color:#1e1033;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${emp.name}</div>
              <div style="font-size:11px;color:#787085;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${emp.role}</div>
            </div>
          </div>
          <!-- Timeline bars -->
          <div style="flex:1;position:relative;height:40px;min-width:0;">
            ${barsHTML}
          </div>
        </div>
      `;
    }).join('');

    return `
      <div style="border:1px solid #e8e7eb;border-radius:12px;overflow:hidden;background:#fff;">
        <!-- Header with scale -->
        <div style="display:flex;align-items:stretch;border-bottom:1px solid #e8e7eb;background:#faf9fc;">
          <!-- People count header -->
          <div style="width:180px;flex-shrink:0;padding:12px;border-right:1px solid #e8e7eb;">
            <div style="font-size:13px;font-weight:500;color:#1e1033;">${totalPeople} people</div>
            <div style="font-size:11px;color:#787085;">out of ${totalInOrg} in your org</div>
          </div>
          <!-- Scale -->
          <div style="flex:1;display:flex;align-items:center;justify-content:space-between;padding:12px 16px;min-width:0;">
            ${scaleHTML}
          </div>
        </div>
        <!-- Employee rows -->
        <div style="max-height:480px;overflow-y:auto;">
          ${rowsHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // VISUAL ANALYTICS - Combined Toolbar with Legend
  // ═══════════════════════════════════════════════════════════════════════════
  function VisualAnalyticsToolbar(config) {
    const { 
      legendItems = ['annual', 'unpaid', 'sick', 'other'],
      showFilters = true,
      filterCount = 2,
      showExport = true,
      exportText = 'Export all'
    } = config;

    const legendHTML = LeaveLegend({ items: legendItems });

    const filtersHTML = showFilters ? `
      <button class="filter-btn">
        ${Icons.filter}
        Filters
        ${filterCount > 0 ? `<span style="color:#787085;">${filterCount}</span>` : ''}
      </button>
    ` : '';

    const exportHTML = showExport ? `
      <button class="toolbar-btn">
        ${exportText}
        ${Icons.download}
      </button>
    ` : '';

    return `
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-bottom:16px;">
        ${legendHTML}
        <div style="display:flex;align-items:center;gap:8px;">
          ${filtersHTML}
          ${exportHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // VISUAL ANALYTICS - Full Component
  // ═══════════════════════════════════════════════════════════════════════════
  function VisualAnalytics(config) {
    const { 
      employees = [],
      totalPeople = 123,
      totalInOrg = 1402,
      scaleMax = 200,
      legendItems = ['annual', 'unpaid', 'sick', 'other'],
      showFilters = true,
      filterCount = 2,
      showExport = true,
      exportText = 'Export all'
    } = config;

    const toolbarHTML = VisualAnalyticsToolbar({
      legendItems,
      showFilters,
      filterCount,
      showExport,
      exportText
    });

    const chartHTML = LeaveGanttChart({
      employees,
      totalPeople,
      totalInOrg,
      scaleMax
    });

    return toolbarHTML + chartHTML;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // EVENT HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════
  
  // Tab click handler
  function handleTabClick(el, callbackName) {
    const parent = el.closest('.page-header-row') || el.parentElement;
    parent.querySelectorAll('.leave-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    el.setAttribute('aria-current', 'true');
    
    const tabId = el.dataset.tabId;
    if (callbackName && typeof window[callbackName] === 'function') {
      window[callbackName](tabId);
    }
    
    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('talentoTabChange', { detail: { tabId } }));
  }

  // Sub-tab click handler
  function handleSubTabClick(el, callbackName) {
    const parent = el.closest('.sub-tabs-wrap') || el.parentElement;
    parent.querySelectorAll('.sub-tab').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
    
    const subtabId = el.dataset.subtabId;
    if (callbackName && typeof window[callbackName] === 'function') {
      window[callbackName](subtabId);
    }
    
    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('talentoSubTabChange', { detail: { subtabId } }));
  }

  // View toggle handler
  function switchView(el, viewType) {
    const parent = el.closest('.view-wrap');
    parent.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
    
    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('talentoViewChange', { detail: { viewType } }));
  }

  // Pagination handlers
  let _currentPage = 1;
  let _totalPages = 30;

  function selectPage(el, page) {
    _currentPage = page;
    const wrap = el.closest('.pg-wrap');
    wrap.querySelectorAll('.pg-page-btn').forEach(b => b.classList.remove('pg-active'));
    el.classList.add('pg-active');
    
    // Dispatch custom event
    document.dispatchEvent(new CustomEvent('talentoPageChange', { detail: { page } }));
  }

  function prevPage() {
    if (_currentPage > 1) {
      _currentPage--;
      document.dispatchEvent(new CustomEvent('talentoPageChange', { detail: { page: _currentPage } }));
    }
  }

  function nextPage() {
    if (_currentPage < _totalPages) {
      _currentPage++;
      document.dispatchEvent(new CustomEvent('talentoPageChange', { detail: { page: _currentPage } }));
    }
  }

  // Checkbox toggle all
  function toggleAllCheckboxes(el) {
    const table = el.closest('table');
    const checkboxes = table.querySelectorAll('tbody .table-checkbox');
    checkboxes.forEach(cb => cb.checked = el.checked);
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // TAB CONTENT MANAGER
  // Manages dynamic content switching for tab-based navigation
  // ═══════════════════════════════════════════════════════════════════════════
  const TabConfigs = {
    'summary': {
      sectionHeader: null, // Summary has its own unique layout
      toolbar: {
        showSearch: false,
        showDateNav: true,
        dateText: 'Today',
        dateSubText: 'Tuesday, 16 Dec',
        showFilters: true,
        filterCount: 2,
        showViewToggle: true,
        activeView: 'list',
        showExport: true,
        exportText: 'Export all',
        showEditColumns: true,
        showCreateNew: false
      },
      showPagination: true,
      showCheckbox: true,
      columns: [
        { key: 'employee', label: 'Employee name', type: 'avatar', sortable: true },
        { key: 'leaveType', label: 'Leave type', sortable: true },
        { key: 'status', label: 'Status', type: 'badge', sortable: true },
        { key: 'startDate', label: 'Start date', sortable: true },
        { key: 'endDate', label: 'End date', sortable: true },
        { key: 'durations', label: 'Durations', type: 'duration', sortable: true },
        { key: 'remainingBalance', label: 'Remaining leave bala...', sortable: true }
      ],
      sampleData: [
        {
          employee: 'Fahad AlShahrani',
          jobTitle: 'Marketing lead',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          leaveType: 'Annual leave',
          status: 'Approved',
          statusVariant: 'approved',
          startDate: '12 Dec 2025',
          endDate: '15 Dec 2025',
          durations: '3 days',
          remainingBalance: '0 days',
          remainingBalanceColor: '#A59FAD'
        },
        {
          employee: 'Khalid AlAnazi',
          jobTitle: 'People & culture lead',
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          leaveType: 'Unpaid leave',
          status: 'On review',
          statusVariant: 'review',
          startDate: '7 Dec 2025',
          endDate: '13 Dec 2025',
          durations: '6 days',
          remainingBalance: '12 days',
          remainingBalanceColor: '#4b405c'
        },
        {
          employee: 'Khalid AlAnazi',
          jobTitle: 'People & culture lead',
          avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
          leaveType: 'Sick leave',
          status: 'On review',
          statusVariant: 'review',
          startDate: '7 Dec 2025',
          endDate: '13 Dec 2025',
          durations: '6 days',
          remainingBalance: '12 days',
          remainingBalanceColor: '#4b405c'
        }
      ]
    },
    'leave-reconciliations': {
      sectionHeader: {
        title: 'Leave reconciliations',
        showSearch: true,
        searchPlaceholder: 'Search',
        showExport: true,
        exportText: 'Export all',
        showCreateNew: true,
        createNewText: 'Create new'
      },
      toolbar: null,
      showPagination: true,
      columns: [
        { key: 'code', label: 'Code', sortable: true, width: '100px' },
        { key: 'employee', label: 'Employee', type: 'avatar', sortable: true },
        { key: 'type', label: 'Type', type: 'reconciliation-type', sortable: true },
        { key: 'createdDate', label: 'Created date', sortable: true },
        { key: 'totalGross', label: 'Total gross (SAR)', type: 'currency', sortable: true },
        { key: 'liquidationAmount', label: 'Liquidation amount', type: 'currency', sortable: true },
        { key: 'airTicketsValue', label: 'Air tickets value', type: 'currency', sortable: true },
        { key: 'totalNet', label: 'Total net', type: 'currency', sortable: true }
      ],
      sampleData: [
        {
          code: 'LR00080',
          employee: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          type: 'Balance Liquidation',
          typeVariant: 'reconciliation-type',
          createdDate: '12 Dec 2025',
          createdTime: '00:33:41',
          totalGross: '18,000.00',
          liquidationAmount: '4,210.00',
          airTicketsValue: '2,000.00',
          totalNet: '2,000.00'
        },
        {
          code: 'LR00080',
          employee: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          type: 'Request reconciliation',
          typeVariant: 'reconciliation-type',
          createdDate: '10 Dec 2025',
          createdTime: '00:33:41',
          totalGross: '10,000.00',
          liquidationAmount: '14,000.00',
          airTicketsValue: '3,000.00',
          totalNet: '3,000.00'
        },
        {
          code: 'LR00080',
          employee: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          type: 'Both',
          typeVariant: 'reconciliation-type',
          createdDate: '10 Dec 2025',
          createdTime: '00:33:41',
          totalGross: '0.00',
          liquidationAmount: '0.00',
          airTicketsValue: '3,000.00',
          totalNet: '0.00'
        }
      ]
    },
    'return-from-leave': {
      sectionHeader: {
        title: 'Return from leave',
        showSearch: true,
        searchPlaceholder: 'Search',
        showExport: true,
        showCreateNew: true
      },
      toolbar: null,
      showPagination: true,
      showCheckbox: true,
      columns: [
        { key: 'code', label: 'Code', sortable: true, width: '120px' },
        { key: 'employee', label: 'Employee', type: 'avatar-no-subtitle', sortable: true, width: '200px' },
        { key: 'jobTitle', label: 'Job title', sortable: true, width: '180px' },
        { key: 'department', label: 'Department', type: 'department-badge', sortable: true, width: '180px' },
        { key: 'startingWorkAt', label: 'Starting work at', sortable: true, width: '140px' },
        { key: 'effectiveNoticeType', label: 'Effective notice type', sortable: true, width: '180px' },
        { key: 'createdBy', label: 'Created by', type: 'avatar-no-subtitle', sortable: true, width: '200px' },
        { key: 'status', label: 'Status', type: 'status-text', sortable: true, width: '120px' }
      ],
      sampleData: [
        {
          code: 'LR00080',
          employee: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          jobTitle: 'Sale Support',
          department: 'Top management / T...',
          startingWorkAt: '12 Dec 2025',
          effectiveNoticeType: 'Return From Leave',
          createdBy: 'Mishari AlSubaie',
          createdByRole: 'Sale Support',
          createdByAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          status: 'Approved',
          statusVariant: 'approved'
        },
        {
          code: 'LR00080',
          employee: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          jobTitle: 'Western Area Sales Manager',
          department: 'Top management / T...',
          startingWorkAt: '10 Dec 2025',
          effectiveNoticeType: 'New Employee',
          createdBy: 'Mishari AlSubaie',
          createdByRole: 'Western Area Sales Manager',
          createdByAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          status: 'On review',
          statusVariant: 'review'
        },
        {
          code: 'LR00080',
          employee: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          jobTitle: 'Sale Support',
          department: 'Human Resources',
          startingWorkAt: '10 Dec 2025',
          effectiveNoticeType: 'Return From Leave',
          createdBy: 'Mishari AlSubaie',
          createdByRole: 'Sale Support',
          createdByAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          status: 'Need to pay',
          statusVariant: 'pending'
        }
      ]
    },
    'reports': {
      sectionHeader: null,
      subTabs: [
        { id: 'analysis-view', label: 'Analysis View' },
        { id: 'monthly-summary', label: 'Monthly Summary' },
        { id: 'visual-analytics', label: 'Visual Analytics' }
      ],
      activeSubTab: 'analysis-view',
      // Sub-tab specific configurations
      subTabConfigs: {
        'analysis-view': {
          toolbar: {
            showSearch: false,
            showDateNav: false,
            showDateRange: true,
            dateRangeStart: '25 June 2025',
            dateRangeEnd: '10 July 2025',
            showFilters: true,
            filterCount: 2,
            showViewToggle: true,
            activeView: 'list',
            viewToggleType: 'simple',
            showExport: true,
            exportText: 'Export all',
            showEditColumns: false,
            showCreateNew: false
          },
          showPagination: false,
          showCheckbox: true,
          columns: [
            { key: 'reportName', label: 'Report name', sortable: true, width: '200px' },
            { key: 'type', label: 'Type', type: 'reconciliation-type', sortable: true, width: '120px' },
            { key: 'createdDate', label: 'Created date', sortable: true, width: '140px' },
            { key: 'lastEdited', label: 'Last edited', sortable: true, width: '140px' },
            { key: 'createdBy', label: 'Created by', type: 'avatar', sortable: true, width: '180px' },
            { key: 'totalDays', label: 'Total number of days', sortable: true, width: '160px' }
          ],
          sampleData: [
            {
              reportName: 'Report Name',
              type: 'Type',
              typeVariant: 'reconciliation-type',
              createdDate: '12 Dec 2025',
              lastEdited: '3 hrs ago',
              createdBy: 'Mishari AlSubaie',
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              totalDays: '-3,047.41 days'
            },
            {
              reportName: 'Report Name',
              type: 'Type',
              typeVariant: 'reconciliation-type',
              createdDate: '10 Dec 2025',
              lastEdited: '12 Dec 2025',
              createdBy: 'Mishari AlSubaie',
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              totalDays: '1,047.41 days'
            },
            {
              reportName: 'Report Name',
              type: 'Type',
              typeVariant: 'reconciliation-type',
              createdDate: '10 Dec 2025',
              lastEdited: '12 Dec 2025',
              createdBy: 'Mishari AlSubaie',
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              totalDays: '-14 days'
            }
          ]
        },
        'monthly-summary': {
          toolbar: {
            showSearch: false,
            showDateNav: false,
            showDateRange: true,
            dateRangeStart: 'January 2025',
            dateRangeEnd: 'December 2025',
            dateRangeSeparator: '•',
            showFilters: true,
            filterCount: 2,
            showViewToggle: false,
            showExport: true,
            exportText: 'Export all',
            showEditColumns: false,
            showCreateNew: false
          },
          showPagination: false,
          showCheckbox: true,
          columns: [
            { key: 'employee', label: 'Employee name', sortable: true, width: '200px' },
            { key: 'leaveType', label: 'Leave type', type: 'tag', sortable: true, width: '120px' },
            { key: 'month', label: 'Month', sortable: true, width: '120px' },
            { key: 'year', label: 'Year', sortable: true, width: '100px' },
            { key: 'status', label: 'Status', type: 'badge', sortable: true, width: '120px' },
            { key: 'totalDays', label: 'Total number of days', sortable: true, width: '160px' }
          ],
          sampleData: [
            {
              employee: 'Fahad AlShahrani',
              leaveType: 'Type',
              month: 'December',
              year: '2025',
              status: 'Approved',
              statusVariant: 'approved',
              totalDays: '-3,047.41 days'
            },
            {
              employee: 'Khalid AlAnazi',
              leaveType: 'Type',
              month: 'November',
              year: '2025',
              status: 'Approved',
              statusVariant: 'approved',
              totalDays: '1,047.41 days'
            },
            {
              employee: 'Fahad AlShahrani',
              leaveType: 'Type',
              month: 'October',
              year: '2025',
              status: 'Approved',
              statusVariant: 'approved',
              totalDays: '-14 days'
            }
          ]
        },
        'visual-analytics': {
          toolbar: null, // Uses custom VisualAnalyticsToolbar
          showPagination: false,
          showCheckbox: false,
          columns: [],
          sampleData: [],
          // Visual Analytics specific config
          visualAnalytics: {
            legendItems: ['annual', 'unpaid', 'sick', 'other'],
            showFilters: true,
            filterCount: 2,
            showExport: true,
            exportText: 'Export all',
            totalPeople: 123,
            totalInOrg: 1402,
            scaleMax: 200,
            employees: [
              {
                name: 'Fahad AlShahrani',
                role: 'Marketing lead',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                leaves: [
                  { type: 'annual', start: 20, end: 50 },
                  { type: 'unpaid', start: 55, end: 80 },
                  { type: 'sick', start: 85, end: 120 }
                ]
              },
              {
                name: 'Khalid AlAnazi',
                role: 'People & culture lead',
                avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
                leaves: [
                  { type: 'annual', start: 15, end: 35 },
                  { type: 'unpaid', start: 45, end: 70 },
                  { type: 'sick', start: 90, end: 130 }
                ]
              },
              {
                name: 'Fahad AlShahrani',
                role: 'Marketing lead',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                leaves: [
                  { type: 'annual', start: 10, end: 30 },
                  { type: 'other', start: 140, end: 180 }
                ]
              },
              {
                name: 'Khalid AlAnazi',
                role: 'People & culture lead',
                avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
                leaves: [
                  { type: 'sick', start: 60, end: 90 }
                ]
              },
              {
                name: 'Fahad AlShahrani',
                role: 'Marketing lead',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                leaves: [
                  { type: 'unpaid', start: 30, end: 45 },
                  { type: 'annual', start: 100, end: 140 }
                ]
              },
              {
                name: 'Khalid AlAnazi',
                role: 'People & culture lead',
                avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
                leaves: [
                  { type: 'annual', start: 40, end: 70 },
                  { type: 'unpaid', start: 80, end: 110 },
                  { type: 'other', start: 150, end: 185 }
                ]
              },
              {
                name: 'Fahad AlShahrani',
                role: 'Marketing lead',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                leaves: [
                  { type: 'sick', start: 50, end: 80 },
                  { type: 'annual', start: 120, end: 160 }
                ]
              },
              {
                name: 'Fahad AlShahrani',
                role: 'Marketing lead',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                leaves: [
                  { type: 'unpaid', start: 70, end: 100 },
                  { type: 'other', start: 160, end: 190 }
                ]
              },
              {
                name: 'Fahad AlShahrani',
                role: 'Marketing lead',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                leaves: [
                  { type: 'annual', start: 25, end: 55 },
                  { type: 'unpaid', start: 90, end: 130 }
                ]
              },
              {
                name: 'Fahad AlShahrani',
                role: 'Marketing lead',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                leaves: [
                  { type: 'sick', start: 40, end: 65 },
                  { type: 'other', start: 130, end: 165 }
                ]
              }
            ]
          }
        }
      },
      // Default toolbar (fallback)
      toolbar: {
        showSearch: false,
        showDateNav: false,
        showDateRange: true,
        dateRangeStart: '25 June 2025',
        dateRangeEnd: '10 July 2025',
        showFilters: true,
        filterCount: 2,
        showViewToggle: true,
        activeView: 'list',
        viewToggleType: 'simple',
        showExport: true,
        exportText: 'Export all',
        showEditColumns: false,
        showCreateNew: false
      },
      showPagination: false,
      showCheckbox: true,
      columns: [
        { key: 'reportName', label: 'Report name', sortable: true, width: '200px' },
        { key: 'type', label: 'Type', type: 'reconciliation-type', sortable: true, width: '120px' },
        { key: 'createdDate', label: 'Created date', sortable: true, width: '140px' },
        { key: 'lastEdited', label: 'Last edited', sortable: true, width: '140px' },
        { key: 'createdBy', label: 'Created by', type: 'avatar', sortable: true, width: '180px' },
        { key: 'totalDays', label: 'Total number of days', sortable: true, width: '160px' }
      ],
      sampleData: [
        {
          reportName: 'Report Name',
          type: 'Type',
          typeVariant: 'reconciliation-type',
          createdDate: '12 Dec 2025',
          lastEdited: '3 hrs ago',
          createdBy: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          totalDays: '-3,047.41 days'
        },
        {
          reportName: 'Report Name',
          type: 'Type',
          typeVariant: 'reconciliation-type',
          createdDate: '10 Dec 2025',
          lastEdited: '12 Dec 2025',
          createdBy: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          totalDays: '1,047.41 days'
        },
        {
          reportName: 'Report Name',
          type: 'Type',
          typeVariant: 'reconciliation-type',
          createdDate: '10 Dec 2025',
          lastEdited: '12 Dec 2025',
          createdBy: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          totalDays: '-14 days'
        },
        {
          reportName: 'Report Name',
          type: 'Type',
          typeVariant: 'reconciliation-type',
          createdDate: '10 Dec 2025',
          lastEdited: '12 Dec 2025',
          createdBy: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          totalDays: '12 Dec 2025'
        },
        {
          reportName: 'Report Name',
          type: 'Type',
          typeVariant: 'reconciliation-type',
          createdDate: '10 Dec 2025',
          lastEdited: '12 Dec 2025',
          createdBy: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
          totalDays: '12 Dec 2025'
        }
      ]
    }
  };

  // Render tab content dynamically
  function renderTabContent(tabId, containerSelector) {
    const config = TabConfigs[tabId];
    if (!config) return '';

    const container = document.querySelector(containerSelector);
    if (!container) return;

    let html = '';

    // Section header (if configured)
    if (config.sectionHeader) {
      html += SectionHeader(config.sectionHeader);
    }

    // Toolbar (if configured)
    if (config.toolbar) {
      html += Toolbar(config.toolbar);
    }

    // Data table (if columns configured)
    if (config.columns && config.columns.length > 0) {
      html += renderReconciliationTable(config);
    }

    // Pagination (conditional)
    if (config.showPagination !== false) {
      html += Pagination({ currentPage: 1, totalPages: 30 });
    }

    container.innerHTML = html;
  }

  // Specialized table renderer for Leave Reconciliations
  function renderReconciliationTable(config) {
    const { columns, sampleData, showCheckbox = true } = config;

    // Header row
    const headerCells = columns.map((col, idx) => {
      const checkboxHTML = (idx === 0 && showCheckbox) ? 
        `<input type="checkbox" class="table-checkbox" onclick="LeaveComponents.toggleAllCheckboxes(this)" />` : '';
      
      return `
        <th${col.width ? ` style="width:${col.width}"` : ''}>
          <div style="display:flex;align-items:center;gap:8px;">
            ${checkboxHTML}
            ${col.label}
            ${col.sortable !== false ? Icons.sort : ''}
          </div>
        </th>
      `;
    }).join('');

    // Body rows
    const bodyRows = sampleData.map(row => {
      const cells = columns.map((col, idx) => {
        let cellContent = '';
        const value = row[col.key];

        // First column with checkbox
        if (idx === 0 && showCheckbox) {
          if (col.type === 'avatar' || col.type === 'avatar-no-subtitle') {
            const subtitle = col.type === 'avatar-no-subtitle' ? '' : (row.jobTitle || row.subtitle || '');
            cellContent = `
              <div style="display:flex;align-items:center;gap:10px;">
                <input type="checkbox" class="table-checkbox" />
                ${Avatar({ src: row.avatar, name: value, subtitle: subtitle })}
              </div>
            `;
          } else {
            cellContent = `
              <div style="display:flex;align-items:center;gap:10px;">
                <input type="checkbox" class="table-checkbox" />
                <span style="color:#1e1033;">${value}</span>
              </div>
            `;
          }
        } else if (col.type === 'avatar-no-subtitle') {
          // Avatar without subtitle - use correct avatar source based on column
          const avatarSrc = col.key === 'createdBy' ? (row.createdByAvatar || row.avatar) : row.avatar;
          cellContent = Avatar({ src: avatarSrc, name: value, subtitle: '' });
        } else if (col.type === 'avatar') {
          cellContent = Avatar({ src: row.avatar, name: value, subtitle: row.jobTitle || row.subtitle || '' });
        } else if (col.type === 'avatar-with-role') {
          // For "Created by" column with role subtitle
          cellContent = Avatar({ 
            src: row.createdByAvatar || row.avatar, 
            name: value, 
            subtitle: row.createdByRole || '' 
          });
        } else if (col.type === 'department-badge') {
          // Department as a badge/pill
          cellContent = `<span class="badge-type">${value}</span>`;
        } else if (col.type === 'reconciliation-type') {
          cellContent = Badge({ text: row.type, variant: 'reconciliation-type' });
        } else if (col.type === 'badge') {
          cellContent = Badge({ text: value, variant: row.statusVariant || row[col.variantKey] || 'default' });
        } else if (col.type === 'tag') {
          cellContent = `<span class="tag-badge">${value}</span>`;
        } else if (col.type === 'status-text') {
          // Status with proper badge styling based on variant
          cellContent = Badge({ text: value, variant: row.statusVariant || 'default' });
        } else if (col.type === 'duration') {
          cellContent = `<span class="duration-pill">${value}</span>`;
        } else if (col.type === 'currency') {
          const displayValue = value || '0.00';
          const color = displayValue === '0.00' ? '#a09aab' : '#1e1033';
          cellContent = `<span style="color:${color}">${displayValue}</span>`;
        } else if (col.key === 'createdDate' && row.createdTime) {
          const time = `<span style="color:#a09aab;margin-left:4px;">${row.createdTime}</span>`;
          cellContent = `<span style="color:#4b405c;">${value}</span>${time}`;
        } else {
          cellContent = value || '';
        }

        // Handle special styling for certain cells
        let cellStyle = '';
        if (col.key === 'remainingBalance' && row.remainingBalanceColor) {
          cellStyle += `color:${row.remainingBalanceColor};`;
        } else if (col.key === 'leaveType') {
          cellStyle += 'color:#1e1033;';
        } else if (col.key === 'startDate' || col.key === 'endDate') {
          cellStyle += 'color:#4b405c;';
        }

        return `<td${cellStyle ? ` style="${cellStyle}"` : ''}>${cellContent}</td>`;
      }).join('');

      return `<tr>${cells}<td class="col-actions">
        <button style="color:#787085;padding:6px;" aria-label="More actions">
          ${Icons.moreVertical}
        </button>
      </td></tr>`;
    }).join('');

    return `
      <div class="table-scroll-wrap" style="border: 1px solid #f0eef6; border-radius: 12px; overflow-x: auto; overflow-y: hidden;">
        <table class="leave-table">
          <thead>
            <tr>${headerCells}<th class="col-actions"></th></tr>
          </thead>
          <tbody>
            ${bodyRows}
          </tbody>
        </table>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PUBLIC API
  // ═══════════════════════════════════════════════════════════════════════════
  return {
    // Components
    PageHeader,
    SubTabs,
    Toolbar,
    DataTable,
    Pagination,
    Avatar,
    Badge,
    SectionHeader,
    Breadcrumb,
    ReportHeader,
    DateRangePicker,
    SearchInput,
    EmptyState,

    // Visual Analytics Components
    LeaveLegend,
    LeaveGanttChart,
    VisualAnalyticsToolbar,
    VisualAnalytics,
    LeaveTypeColors,

    // Tab Management
    TabConfigs,
    renderTabContent,
    renderReconciliationTable,

    // Icons
    Icons,

    // Event handlers (must be public for onclick)
    handleTabClick,
    handleSubTabClick,
    switchView,
    selectPage,
    prevPage,
    nextPage,
    toggleAllCheckboxes,

    // Utility: Render component into element
    render(selector, html) {
      const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if (el) el.innerHTML = html;
      return el;
    },

    // Utility: Append component to element
    append(selector, html) {
      const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
      if (el) el.insertAdjacentHTML('beforeend', html);
      return el;
    }
  };

})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LeaveComponents;
}
