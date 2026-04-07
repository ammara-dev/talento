/**
 * Talento Payroll Module Components
 * File: payroll_components.js
 * Reusable UI components for the Payroll module
 */
const PayrollComponents = (function() {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // ICONS - SVG icon library
  // ═══════════════════════════════════════════════════════════════════════════
  const Icons = {
    download: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    externalLink: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    search: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    filter: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>`,
    calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    warning: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    checkCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16A34A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    xCircle: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC2626" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    file: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // STATUS BADGE CONFIG
  // ═══════════════════════════════════════════════════════════════════════════
  const StatusConfig = {
    draft: { bg: '#F6F5F7', text: '#6B7280', label: 'Draft' },
    done: { bg: '#EDF8F3', text: '#15803D', label: 'Done' },
    unpaid: { bg: '#F9F1F3', text: '#DC2626', label: 'Unpaid' },
    pending: { bg: '#FEF3C7', text: '#B45309', label: 'Pending' }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE HEADER
  // Renders: Title + Action buttons (Generate bank report, Export all, Create new payroll)
  // ═══════════════════════════════════════════════════════════════════════════
  function PageHeader(config) {
    const { 
      title = 'Payroll',
      showGenerateReport = true,
      showExport = true,
      showCreateNew = true,
      createNewText = 'Create new payroll'
    } = config;

    const generateReportHTML = showGenerateReport ? `
      <button class="payroll-toolbar-btn" style="gap:8px;">
        Generate bank report
        ${Icons.file}
      </button>
    ` : '';

    const exportHTML = showExport ? `
      <button class="payroll-toolbar-btn" style="gap:6px;">
        Export all
        ${Icons.download}
      </button>
    ` : '';

    const createNewHTML = showCreateNew ? `
      <button class="create-new-btn">
        ${createNewText}
        ${Icons.plus}
      </button>
    ` : '';

    return `
      <div class="payroll-page-header">
        <h1 class="payroll-page-title">${title}</h1>
        <div class="payroll-header-actions">
          ${generateReportHTML}
          ${exportHTML}
          ${createNewHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // SEARCH & FILTER BAR
  // Renders: Search input + Filters button
  // ═══════════════════════════════════════════════════════════════════════════
  function SearchFilterBar(config) {
    const {
      searchPlaceholder = 'Search',
      showFilters = true,
      filterCount = 0
    } = config;

    const filtersHTML = showFilters ? `
      <button class="payroll-filter-btn">
        ${Icons.filter}
        Filters
        ${filterCount > 0 ? `<span style="color:#787085;">${filterCount}</span>` : ''}
      </button>
    ` : '';

    return `
      <div class="payroll-search-filter-bar">
        <div class="payroll-search-box">
          ${Icons.search}
          <input type="text" placeholder="${searchPlaceholder}" />
        </div>
        ${filtersHTML}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // AVATAR GROUP
  // Renders: Overlapping avatar stack for employees
  // ═══════════════════════════════════════════════════════════════════════════
  function AvatarGroup(config) {
    const { avatars = [], maxShow = 3, size = 28 } = config;

    const visibleAvatars = avatars.slice(0, maxShow);
    
    const avatarsHTML = visibleAvatars.map((avatar, idx) => {
      const offset = idx * (size * 0.65);
      return `
        <img src="${avatar}" 
             alt="Employee" 
             style="width:${size}px;height:${size}px;border-radius:50%;border:2px solid #fff;object-fit:cover;position:absolute;left:${offset}px;z-index:${maxShow - idx};" />
      `;
    }).join('');

    const totalWidth = visibleAvatars.length > 0 ? (visibleAvatars.length - 1) * (size * 0.65) + size : 0;

    return `
      <div style="position:relative;height:${size}px;width:${totalWidth}px;">
        ${avatarsHTML}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYMENT PROGRESS BAR
  // Renders: Multi-segment progress bar (Paid, Pending, Unpaid) as columns
  // ═══════════════════════════════════════════════════════════════════════════
  function PaymentProgressBar(config) {
    const { 
      paid = 0, 
      pending = 0, 
      unpaid = 0
    } = config;

    const total = paid + pending + unpaid;
    const paidPercent = total > 0 ? (paid / total) * 100 : 0;
    const pendingPercent = total > 0 ? (pending / total) * 100 : 0;
    const unpaidPercent = total > 0 ? (unpaid / total) * 100 : 0;

    // Build columns array based on what values exist
    const columns = [];
    
    if (paid > 0) {
      columns.push({
        value: paid.toLocaleString(),
        label: 'Paid',
        percent: paidPercent,
        colorClass: 'progress-paid'
      });
    }
    
    if (pending > 0) {
      columns.push({
        value: pending.toLocaleString(),
        label: 'Pending',
        percent: pendingPercent,
        colorClass: 'progress-pending'
      });
    }
    
    if (unpaid > 0) {
      columns.push({
        value: unpaid.toLocaleString(),
        label: 'Unpaid',
        percent: unpaidPercent,
        colorClass: 'progress-unpaid'
      });
    }

    // Generate column HTML with value, label, and progress segment
    const columnsHTML = columns.map((col, idx) => {
      const isFirst = idx === 0;
      const isLast = idx === columns.length - 1;
      const borderRadius = columns.length === 1 ? '100px' : 
        isFirst ? '100px 0 0 100px' : 
        isLast ? '0 100px 100px 0' : '0';
      
      return `
        <div class="payment-column" style="flex:${col.percent}; min-width: 70px;">
          <div class="payment-stat">
            <span class="payment-stat-value">${col.value}</span>
            <span class="payment-stat-label">${col.label}</span>
          </div>
          <div class="progress-segment ${col.colorClass}" style="border-radius:${borderRadius};"></div>
        </div>
      `;
    }).join('');

    return `
      <div class="payment-progress-container">
        <div class="payment-columns">
          ${columnsHTML}
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYROLL CARD
  // Main reusable component for displaying payroll information
  // Supports dynamic data: name, status, dates, employees, amounts, payment breakdown
  // ═══════════════════════════════════════════════════════════════════════════
  function PayrollCard(config) {
    const {
      name = 'Payroll name',
      status = 'draft', // 'draft', 'done', 'unpaid', 'pending'
      dateRange = { start: '01 June 2025', end: '25 June 2025' },
      cutoffDate = '27 June 2025',
      cutoffStatus = 'warning', // 'warning', 'success', 'error'
      employeesPaid = { current: 54, total: 60 },
      employeeAvatars = [],
      totalGross = 'SAR 24,226.00',
      paymentBreakdown = { paid: 20000, pending: 3000, unpaid: 1226 },
      showDownload = true,
      showViewPayroll = true,
      headerBg = '#f6f5f7' // Default header background color
    } = config;

    // Status badge
    const statusConf = StatusConfig[status] || StatusConfig.draft;
    const statusBadgeHTML = `
      <span class="payroll-status-badge" style="background:${statusConf.bg};color:${statusConf.text};">
        ${statusConf.label}
      </span>
    `;

    // Cutoff icon based on status
    const cutoffIcons = {
      warning: Icons.warning,
      success: Icons.checkCircle,
      error: Icons.xCircle
    };
    const cutoffIcon = cutoffIcons[cutoffStatus] || cutoffIcons.warning;

    // Download button
    const downloadHTML = showDownload ? `
      <button class="payroll-download-btn">
        Download
        ${Icons.download}
      </button>
    ` : '';

    // View payroll button
    const viewPayrollHTML = showViewPayroll ? `
      <button class="payroll-view-btn">
        View payroll
        ${Icons.externalLink}
      </button>
    ` : '';

    return `
      <div class="payroll-card">
        <!-- Card Header -->
        <div class="payroll-card-header" style="background:${headerBg};">
          <div class="payroll-card-header-left">
            <div class="payroll-card-title-row">
              <h3 class="payroll-card-title">${name}</h3>
              ${statusBadgeHTML}
            </div>
            <p class="payroll-card-date-range">${dateRange.start} • ${dateRange.end}</p>
          </div>
          <div class="payroll-card-header-right">
            ${downloadHTML}
            ${viewPayrollHTML}
          </div>
        </div>

        <!-- Card Body -->
        <div class="payroll-card-body">
          <!-- Cut off day to pay -->
          <div class="payroll-info-column payroll-info-cutoff">
            <span class="payroll-info-label">Cut off day to pay</span>
            <div class="payroll-info-value-row">
              ${cutoffIcon}
              <span class="payroll-cutoff-date">${cutoffDate}</span>
            </div>
          </div>

          <!-- Employees paid -->
          <div class="payroll-info-column payroll-info-employees">
            <span class="payroll-info-label">Employees paid</span>
            <div class="payroll-info-value-row">
              <span class="payroll-employees-count">
                <span class="employees-current">${employeesPaid.current}</span>/<span class="employees-total">${employeesPaid.total}</span>
              </span>
              ${AvatarGroup({ avatars: employeeAvatars, maxShow: 3, size: 28 })}
            </div>
          </div>

          <!-- Total gross to pay -->
          <div class="payroll-info-column payroll-info-gross">
            <span class="payroll-info-label">Total gross to pay</span>
            <div class="payroll-info-value-row">
              <span class="payroll-gross-amount">${totalGross}</span>
            </div>
          </div>

          <!-- Payment Progress -->
          <div class="payroll-info-column payroll-info-progress">
            ${PaymentProgressBar({
              paid: paymentBreakdown.paid,
              pending: paymentBreakdown.pending,
              unpaid: paymentBreakdown.unpaid
            })}
          </div>
        </div>
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // PAYROLL LIST
  // Renders a list of payroll cards
  // ═══════════════════════════════════════════════════════════════════════════
  // Header background colors for alternating cards
  const HeaderBgColors = ['#f6f5f7', '#F1F7F4', '#F8F3F6', '#F1F7F4'];

  function PayrollList(config) {
    const { payrolls = [] } = config;

    const cardsHTML = payrolls.map((payroll, index) => {
      // Assign header background color based on index
      const headerBg = HeaderBgColors[index % HeaderBgColors.length];
      return PayrollCard({ ...payroll, headerBg });
    }).join('');

    return `
      <div class="payroll-list">
        ${cardsHTML}
      </div>
    `;
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // EMPTY STATE
  // ═══════════════════════════════════════════════════════════════════════════
  function EmptyState(config) {
    const { 
      title = 'No payrolls found', 
      description = 'Create your first payroll to get started.',
      showAction = true,
      actionText = 'Create new payroll'
    } = config;

    const actionHTML = showAction ? `
      <button class="create-new-btn" style="margin-top:16px;">
        ${actionText}
        ${Icons.plus}
      </button>
    ` : '';

    return `
      <div class="payroll-empty-state">
        <div class="payroll-empty-icon">
          ${Icons.calendar}
        </div>
        <h3 class="payroll-empty-title">${title}</h3>
        <p class="payroll-empty-description">${description}</p>
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
    PageHeader,
    SearchFilterBar,
    AvatarGroup,
    PaymentProgressBar,
    PayrollCard,
    PayrollList,
    EmptyState
  };

})();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PayrollComponents;
}
