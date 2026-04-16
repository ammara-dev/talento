/**
 * Talento Performance Evaluation Detail Components
 * Reusable UI building blocks for the performance evaluation detail screen.
 */
const PerformanceEvaluationDetailComponents = (function() {
  'use strict';

  const CustomIcons = {
    breadcrumbDivider: `<span aria-hidden="true">/</span>`,
    chevronLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`,
    sliders: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="8" x2="14" y2="8"/><circle cx="17" cy="8" r="2"/><line x1="10" y1="16" x2="20" y2="16"/><circle cx="7" cy="16" r="2"/></svg>`,
    employees: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    evaluators: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8l1.2 2.4 2.8.4-2 2 .47 2.82L19 14.3l-2.47 1.3.47-2.82-2-2 2.8-.4L19 8Z"/></svg>`,
    warning: `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3.4 16.7 15H3.3L10 3.4Z" stroke="#7F768F" stroke-width="1.7" stroke-linejoin="round"/><path d="M10 7.2v3.6" stroke="#7F768F" stroke-width="1.7" stroke-linecap="round"/><circle cx="10" cy="13.15" r=".9" fill="#7F768F"/></svg>`,
    bellAccent: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5"/><path d="M9.5 20a2.5 2.5 0 0 0 5 0"/></svg>`,
    dangerProgress: `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="#D92D20"/><path d="M10 5.9v4.35" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round"/><circle cx="10" cy="13.3" r="1.05" fill="#ffffff"/></svg>`,
    successProgress: `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="8" fill="#34C38F"/><path d="m6.7 10.2 2.1 2.1 4.45-4.55" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    sort: `<svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 8 10 5 13 8"/><polyline points="7 12 10 15 13 12"/></svg>`
  };

  function getSharedIcon(name) {
    if (typeof PerformanceEvaluationComponents !== 'undefined' &&
        PerformanceEvaluationComponents.Icons &&
        PerformanceEvaluationComponents.Icons[name]) {
      return PerformanceEvaluationComponents.Icons[name];
    }

    return '';
  }

  function getIcon(name) {
    return CustomIcons[name] || getSharedIcon(name) || '';
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getInitials(name) {
    return String(name || '')
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function(part) {
        return part.charAt(0).toUpperCase();
      })
      .join('') || 'PE';
  }

  function Avatar(config) {
    const name = config && config.name ? config.name : '';
    const src = config && config.avatar ? config.avatar : '';
    const compactClass = config && config.compact ? ' ped-avatar--sm' : '';

    if (src) {
      return `<img class="ped-avatar${compactClass}" src="${escapeHtml(src)}" alt="${escapeHtml(name)}" />`;
    }

    return `<span class="ped-avatar${compactClass} ped-avatar--fallback">${escapeHtml(getInitials(name))}</span>`;
  }

  function Breadcrumb(config) {
    const items = config && Array.isArray(config.items) ? config.items : [];

    return `
      <div class="ped-breadcrumb" aria-label="Breadcrumb">
        ${items.map(function(item, index) {
          const isLast = index === items.length - 1;

          return `
            <span class="ped-breadcrumb-item${isLast ? ' ped-breadcrumb-item--current' : ''}">
              ${escapeHtml(item)}
            </span>
            ${isLast ? '' : `<span class="ped-breadcrumb-divider">${getIcon('breadcrumbDivider')}</span>`}
          `;
        }).join('')}
      </div>
    `;
  }

  function Pager(config) {
    const backLabel = config && config.backLabel ? config.backLabel : 'Back';
    const nextLabel = config && config.nextLabel ? config.nextLabel : 'Next';
    const progressLabel = config && config.progressLabel ? config.progressLabel : '';

    return `
      <div class="ped-pager">
        <button type="button" class="ped-pager-btn" data-detail-nav="back">
          ${getIcon('chevronLeft')}
          <span>${escapeHtml(backLabel)}</span>
        </button>
        <span class="ped-pager-progress">${escapeHtml(progressLabel)}</span>
        <button type="button" class="ped-pager-btn" data-detail-nav="next">
          <span>${escapeHtml(nextLabel)}</span>
          ${getIcon('chevronRight')}
        </button>
      </div>
    `;
  }

  function ActionButton(config) {
    const label = config && config.label ? config.label : '';
    const icon = config && config.icon ? getIcon(config.icon) : '';
    const action = config && config.action ? config.action : '';
    const iconPosition = config && config.iconPosition ? config.iconPosition : 'trailing';
    const variant = config && config.variant ? config.variant : 'default';
    const iconOnly = !!(config && config.iconOnly);
    const classes = [
      'ped-action-btn',
      `ped-action-btn--${variant}`,
      iconOnly ? 'ped-action-btn--icon-only' : ''
    ].filter(Boolean).join(' ');
    const ariaLabel = label || (config && config.ariaLabel ? config.ariaLabel : 'Action');

    return `
      <button type="button" class="${classes}"${action ? ` data-detail-action="${escapeHtml(action)}"` : ''} aria-label="${escapeHtml(ariaLabel)}">
        ${icon && iconPosition === 'leading' ? icon : ''}
        ${iconOnly ? '' : `<span>${escapeHtml(label)}</span>`}
        ${icon && iconPosition !== 'leading' && !iconOnly ? icon : ''}
        ${iconOnly ? icon : ''}
      </button>
    `;
  }

  function MetaBadge(config) {
    const text = config && config.text ? config.text : '';
    const tone = config && config.tone ? config.tone : 'neutral';

    return `<span class="ped-meta-badge ped-meta-badge--${escapeHtml(tone)}">${escapeHtml(text)}</span>`;
  }

  function renderSummaryItem(item) {
    if (!item) return '';

    if (item.badge) {
      return MetaBadge({ text: item.badge, tone: item.tone });
    }

    if (item.label && item.value) {
      return `
        <span class="ped-summary-copy">
          <span class="ped-summary-label">${escapeHtml(item.label)}</span>
          <span class="ped-summary-value">${escapeHtml(item.value)}</span>
        </span>
      `;
    }

    return `<span class="ped-summary-text">${escapeHtml(item.text || '')}</span>`;
  }

  function SummaryLine(items) {
    const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];

    return `
      <div class="ped-summary-line">
        ${safeItems.map(function(item, index) {
          return `
            ${index ? '<span class="ped-summary-separator">&#8226;</span>' : ''}
            ${renderSummaryItem(item)}
          `;
        }).join('')}
      </div>
    `;
  }

  function DetailHeader(config) {
    const breadcrumb = config && Array.isArray(config.breadcrumb) ? config.breadcrumb : [];
    const navigation = config && config.navigation ? config.navigation : {};
    const title = config && config.title ? config.title : 'Performance evaluation name';
    const summaryLines = config && Array.isArray(config.summaryLines) ? config.summaryLines : [];
    const actions = config && Array.isArray(config.actions) ? config.actions : [];

    return `
      <section class="ped-header-card">
        <div class="ped-header-top">
          ${Breadcrumb({ items: breadcrumb })}
          ${Pager(navigation)}
        </div>
        <div class="ped-header-main">
          <div class="ped-title-group">
            <h1 class="ped-title">${escapeHtml(title)}</h1>
            ${summaryLines.map(SummaryLine).join('')}
          </div>
          <div class="ped-actions">
            ${actions.map(ActionButton).join('')}
          </div>
        </div>
      </section>
    `;
  }

  function DetailTabs(config) {
    const tabs = config && Array.isArray(config.tabs) ? config.tabs : [];
    const activeTab = config && config.activeTab ? config.activeTab : '';

    return `
      <div class="ped-tabs" role="tablist" aria-label="Evaluation sections">
        ${tabs.map(function(tab) {
          const isActive = tab.id === activeTab;

          return `
            <button
              type="button"
              class="ped-tab${isActive ? ' active' : ''}"
              data-detail-tab="${escapeHtml(tab.id)}"
              role="tab"
              aria-selected="${isActive ? 'true' : 'false'}"
            >
              <span class="ped-tab-icon">${getIcon(tab.icon)}</span>
              <span>${escapeHtml(tab.label)}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  function MemberCell(config) {
    const compactClass = config && config.compact ? ' ped-member-cell--compact' : '';
    const role = config && config.role ? config.role : '';

    return `
      <div class="ped-member-cell${compactClass}">
        ${Avatar(config)}
        <div class="ped-member-copy">
          <span class="ped-member-name">${escapeHtml(config && config.name ? config.name : '')}</span>
          ${role ? `<span class="ped-member-role">${escapeHtml(role)}</span>` : ''}
        </div>
      </div>
    `;
  }

  function EvaluationBadge(status) {
    const normalized = String(status || 'in-progress').toLowerCase();
    const label = normalized === 'completed' ? 'Completed' : 'In progress';

    return `<span class="ped-status-badge ped-status-badge--${normalized === 'completed' ? 'completed' : 'progress'}">${escapeHtml(label)}</span>`;
  }

  function FeedbackStatus(config) {
    const type = config && config.type ? config.type : 'pending';
    const label = config && config.label ? config.label : '';

    if (type === 'completed') {
      return `
        <span class="ped-feedback-status ped-feedback-status--positive">
          ${getIcon('successProgress')}
          <span>${escapeHtml(label)}</span>
        </span>
      `;
    }

    if (type === 'partial') {
      return `
        <span class="ped-feedback-status ped-feedback-status--negative">
          ${getIcon('dangerProgress')}
          <span>${escapeHtml(label)}</span>
        </span>
      `;
    }

    return `
      <span class="ped-feedback-status ped-feedback-status--pending">
        ${getIcon('warning')}
        <span>${escapeHtml(label || 'Pending evaluation')}</span>
      </span>
    `;
  }

  function EmptyState(config) {
    const title = config && config.title ? config.title : 'No records found';
    const description = config && config.description ? config.description : 'Try another search or adjust the current filters.';

    return `
      <div class="ped-empty-state">
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(description)}</p>
      </div>
    `;
  }

  function TableHeadCell(config) {
    const label = config && config.label ? config.label : '';
    const width = config && config.width ? ` style="width:${config.width};"` : '';
    const checkbox = config && config.type === 'checkbox';
    const sortable = !checkbox && config && config.sortable !== false;
    const extraClass = config && config.className ? ` ${config.className}` : '';

    if (checkbox) {
      const checked = !!(config && config.selectAll && config.selectAll.checked);
      const checkedAttr = checked ? ' checked="checked"' : '';

      return `
        <th${width} class="ped-checkbox-head${extraClass}">
          <input type="checkbox" class="ped-table-checkbox" data-detail-select-all aria-label="Select all visible rows"${checkedAttr} />
        </th>
      `;
    }

    return `
      <th${width} class="${extraClass.trim()}">
        <span class="ped-head-label">
          <span>${escapeHtml(label)}</span>
          ${sortable ? getIcon('sort') : ''}
        </span>
      </th>
    `;
  }

  function TableMoreButton(label) {
    return `
      <button type="button" class="ped-more-btn" aria-label="${escapeHtml(label || 'More actions')}">
        ${getIcon('moreVertical')}
      </button>
    `;
  }

  function EmployeesRow(row) {
    const checkedAttr = row && row.checked ? ' checked="checked"' : '';

    return `
      <tr>
        <td class="ped-checkbox-cell">
          <input type="checkbox" class="ped-table-checkbox" data-detail-row-check="${escapeHtml(row.id)}" aria-label="Select ${escapeHtml(row.name)}"${checkedAttr} />
        </td>
        <td>${MemberCell(row)}</td>
        <td>${EvaluationBadge(row.status)}</td>
        <td>${FeedbackStatus(row.managerEvaluation)}</td>
        <td>${FeedbackStatus(row.upwardFeedback)}</td>
        <td>${FeedbackStatus(row.peerFeedback)}</td>
        <td>${FeedbackStatus(row.selfReview)}</td>
        <td class="ped-more-cell">${TableMoreButton(`More actions for ${row.name}`)}</td>
      </tr>
    `;
  }

  function EvaluatorsRow(row) {
    const checkedAttr = row && row.checked ? ' checked="checked"' : '';

    return `
      <tr>
        <td class="ped-checkbox-cell">
          <input type="checkbox" class="ped-table-checkbox" data-detail-row-check="${escapeHtml(row.id)}" aria-label="Select ${escapeHtml(row.name)}"${checkedAttr} />
        </td>
        <td>${MemberCell(row)}</td>
        <td><span class="ped-inline-text">${escapeHtml(row.assignedEmployees)}</span></td>
        <td><span class="ped-inline-text">${escapeHtml(row.evaluationType)}</span></td>
        <td>${FeedbackStatus(row.progress)}</td>
        <td>${EvaluationBadge(row.status)}</td>
        <td class="ped-more-cell">${TableMoreButton(`More actions for ${row.name}`)}</td>
      </tr>
    `;
  }

  function EmployeesTable(config) {
    const rows = config && Array.isArray(config.rows) ? config.rows : [];
    const selectAll = config && config.selectAll ? config.selectAll : {};

    if (!rows.length) {
      return EmptyState({
        title: 'No employees found',
        description: 'There are no employees that match the current search.'
      });
    }

    return `
      <div class="table-container ped-table-wrap">
        <div class="table-scroll-wrap">
          <table class="data-table ped-data-table">
            <thead>
              <tr>
                ${[
                  { type: 'checkbox', width: '44px', selectAll: selectAll },
                  { label: 'Employee name', width: '260px' },
                  { label: 'Status', width: '140px' },
                  { label: 'Direct manager evaluation', width: '220px' },
                  { label: 'Upward feedback', width: '180px' },
                  { label: 'Received peer feedback', width: '190px' },
                  { label: 'Self-review evaluation', width: '200px' },
                  { label: '', width: '56px', sortable: false }
                ].map(TableHeadCell).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(EmployeesRow).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function EvaluatorsTable(config) {
    const rows = config && Array.isArray(config.rows) ? config.rows : [];
    const selectAll = config && config.selectAll ? config.selectAll : {};

    if (!rows.length) {
      return EmptyState({
        title: 'No evaluators found',
        description: 'There are no evaluators that match the current search.'
      });
    }

    return `
      <div class="table-container ped-table-wrap">
        <div class="table-scroll-wrap">
          <table class="data-table ped-data-table">
            <thead>
              <tr>
                ${[
                  { type: 'checkbox', width: '44px', selectAll: selectAll },
                  { label: 'Evaluator name', width: '260px' },
                  { label: 'Assigned employees', width: '180px' },
                  { label: 'Evaluation type', width: '180px' },
                  { label: 'Progress', width: '180px' },
                  { label: 'Status', width: '140px' },
                  { label: '', width: '56px', sortable: false }
                ].map(TableHeadCell).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(EvaluatorsRow).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function AppraisalStatusBadge(config) {
    const type = config && config.type ? config.type : 'pending';
    const label = config && config.label ? config.label : (type === 'completed' ? 'Completed' : 'Pending evaluation');

    return `<span class="ped-status-badge ped-status-badge--${type === 'completed' ? 'completed' : 'progress'}">${escapeHtml(label)}</span>`;
  }

  function RowActionButton(config) {
    const label = config && config.label ? config.label : '';
    const variant = config && config.variant ? config.variant : 'view';
    const icon = variant === 'reminder' ? getIcon('bellAccent') : getSharedIcon('arrowUpRight');

    return `
      <button type="button" class="ped-inline-action ped-inline-action--${variant}">
        <span>${escapeHtml(label)}</span>
        ${icon || ''}
      </button>
    `;
  }

  function AppraisalEvaluatorsRow(row) {
    const checkedAttr = row && row.checked ? ' checked="checked"' : '';

    return `
      <tr>
        <td class="ped-checkbox-cell">
          <input type="checkbox" class="ped-table-checkbox" data-detail-row-check="${escapeHtml(row.id)}" aria-label="Select ${escapeHtml(row.name)}"${checkedAttr} />
        </td>
        <td>${MemberCell({ name: row.name, role: row.role, avatar: row.avatar, compact: true })}</td>
        <td>${AppraisalStatusBadge(row.status)}</td>
        <td><span class="ped-inline-text">${escapeHtml(row.employeeRole || '')}</span></td>
        <td><span class="ped-inline-text">${escapeHtml(row.deadline || '')}</span></td>
        <td>${MemberCell({ name: row.evaluatesWhom && row.evaluatesWhom.name, avatar: row.evaluatesWhom && row.evaluatesWhom.avatar, compact: true })}</td>
        <td>
          <div class="ped-row-action-group">
            ${RowActionButton(row.action)}
            ${TableMoreButton(`More actions for ${row.name}`)}
          </div>
        </td>
      </tr>
    `;
  }

  function AppraisalEvaluatorsTable(config) {
    const rows = config && Array.isArray(config.rows) ? config.rows : [];
    const selectAll = config && config.selectAll ? config.selectAll : {};

    if (!rows.length) {
      return EmptyState({
        title: 'No evaluator assignments found',
        description: 'There are no evaluator assignments that match the current search.'
      });
    }

    return `
      <div class="table-container ped-table-wrap">
        <div class="table-scroll-wrap">
          <table class="data-table ped-data-table ped-data-table--appraisal-evaluators">
            <thead>
              <tr>
                ${[
                  { type: 'checkbox', width: '44px', selectAll: selectAll },
                  { label: 'Employee name', width: '260px' },
                  { label: 'Status', width: '190px' },
                  { label: 'Employee role', width: '180px' },
                  { label: 'Deadline', width: '150px' },
                  { label: 'Evaluates whom', width: '230px' },
                  { label: 'Actions', width: '220px', sortable: false, className: 'ped-actions-head' }
                ].map(TableHeadCell).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(AppraisalEvaluatorsRow).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  return {
    Icons: CustomIcons,
    DetailHeader,
    DetailTabs,
    EmployeesTable,
    EvaluatorsTable,
    AppraisalEvaluatorsTable,
    FeedbackStatus,
    EvaluationBadge
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceEvaluationDetailComponents;
}
