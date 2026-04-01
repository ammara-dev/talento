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
    chart: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
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
      showDateNav = true,
      dateText = 'Today',
      dateSubText = '',
      showFilters = true,
      filterCount = 0,
      showViewToggle = true,
      activeView = 'list',
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

    // Date navigator
    const dateNavHTML = showDateNav ? `
      <div class="date-nav-pill">
        <button aria-label="Previous">${Icons.chevronLeft}</button>
        <span style="font-size:13px;color:#4b405c;letter-spacing:-0.07px;">${dateText}</span>
        ${dateSubText ? `<span class="dot"></span><span style="font-size:13px;color:#4b405c;letter-spacing:-0.07px;">${dateSubText}</span>` : ''}
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

    // View toggle
    const viewToggleHTML = showViewToggle ? `
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
    ` : '';

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
                ${Avatar({ src: row.avatar, name: value, subtitle: row.subtitle })}
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
          cellContent = Avatar({ src: row.avatar, name: value, subtitle: row.subtitle });
        } else if (col.type === 'badge') {
          cellContent = Badge({ text: value, variant: row[col.variantKey] || 'default' });
        } else if (col.type === 'duration') {
          cellContent = `<span class="duration-pill">${value}</span>`;
        } else if (col.type === 'tag') {
          cellContent = `<span class="tag-badge">${value}</span>`;
        } else {
          cellContent = value || '';
        }

        const style = col.style || '';
        return `<td${style ? ` style="${style}"` : ''}>${cellContent}</td>`;
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

    const subtitleHTML = subtitle ? `<p style="font-size:11px;color:#787085;line-height:1.3;">${subtitle}</p>` : '';

    return `
      <div style="display:flex;align-items:center;gap:10px;">
        ${imgHTML}
        <div>
          <p style="font-size:13px;font-weight:500;color:#1e1033;line-height:1.3;">${name}</p>
          ${subtitleHTML}
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
      type: 'tag-badge',
      default: 'badge-default'
    };

    const className = variants[variant] || variants.default;
    return `<span class="${className}">${text}</span>`;
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
    Breadcrumb,
    ReportHeader,
    DateRangePicker,
    SearchInput,
    EmptyState,

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
