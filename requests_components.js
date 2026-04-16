/**
 * Talento Requests Module Components
 * File: requests_components.js
 * Reusable UI composition helpers for the Requests screen
 */
const RequestsComponents = (function() {
  'use strict';

  const Shared = window.LeaveComponents || {};
  const Icons = Shared.Icons || {};

  const STATUS_ICON_MAP = {
    all: '<i class="fa-solid fa-sliders requests-status-icon" aria-hidden="true"></i>',
    pending: '<i class="fa-regular fa-circle requests-status-icon" aria-hidden="true"></i>',
    approved: '<i class="fa-regular fa-square-check requests-status-icon" aria-hidden="true"></i>',
    rejected: '<i class="fa-regular fa-rectangle-xmark requests-status-icon" aria-hidden="true"></i>',
    expired: '<i class="fa-regular fa-clock requests-status-icon" aria-hidden="true"></i>'
  };

  const REQUEST_TYPE_ICON_MAP = {
    vacation: '<i class="fa-solid fa-person-walking-luggage" aria-hidden="true"></i>',
    'time-off': '<i class="fa-solid fa-clock" aria-hidden="true"></i>',
    salary: '<i class="fa-solid fa-wallet" aria-hidden="true"></i>',
    'air-tickets': '<i class="fa-solid fa-ticket" aria-hidden="true"></i>',
    default: '<i class="fa-regular fa-file-lines" aria-hidden="true"></i>'
  };

  const STATUS_VARIANT_MAP = {
    pending: 'pending',
    approved: 'approved',
    done: 'approved',
    rejected: 'rejected',
    expired: 'default'
  };

  const VIEW_ARROW_ICON = `
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 11L11 3"></path>
      <path d="M6.5 3H11V7.5"></path>
    </svg>
  `;

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildInitials(name) {
    return String(name || 'U')
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(function(part) { return part.charAt(0).toUpperCase(); })
      .join('') || 'U';
  }

  function CounterBadge(count) {
    if (!count) {
      return '';
    }

    return `<span class="requests-count-badge">${escapeHtml(count)}</span>`;
  }

  function SearchToolbar(config) {
    const safePlaceholder = escapeHtml(config.searchPlaceholder || 'Search');
    const safeSearchValue = escapeHtml(config.searchValue || '');
    const searchMarkup = Shared.SearchInput
      ? Shared.SearchInput({
          placeholder: safePlaceholder,
          value: safeSearchValue,
          width: '100%'
        })
      : `
        <div class="search-input-wrap requests-search-fallback">
          ${Icons.search || '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>'}
          <input type="text" placeholder="${safePlaceholder}" value="${safeSearchValue}" />
        </div>
      `;

    return `
      <div class="requests-toolbar">
        <div class="requests-search">
          ${searchMarkup}
        </div>
        <button class="filter-btn requests-filter-btn" type="button">
          ${Icons.filter || '<i class="fa-solid fa-sliders" aria-hidden="true"></i>'}
          <span>Filters</span>
          ${config.filterCount ? `<span class="requests-filter-count">${escapeHtml(config.filterCount)}</span>` : ''}
        </button>
      </div>
    `;
  }

  function ScopeToggle(config) {
    const buttons = (config.options || []).map(function(option) {
      const isActive = option.value === config.activeValue;
      return `
        <button
          class="requests-scope-btn${isActive ? ' active' : ''}"
          type="button"
          data-scope-value="${escapeHtml(option.value)}"
        >
          <span>${escapeHtml(option.label)}</span>
          ${CounterBadge(option.count)}
        </button>
      `;
    }).join('');

    return `
      <div class="requests-scope-toggle" role="tablist" aria-label="Request ownership">
        ${buttons}
      </div>
    `;
  }

  function StatusTabs(config) {
    const tabs = (config.tabs || []).map(function(tab) {
      const isActive = tab.value === config.activeValue;
      const iconMarkup = STATUS_ICON_MAP[tab.icon || tab.value] || STATUS_ICON_MAP.all;
      const countMarkup = tab.showCount ? CounterBadge(tab.count) : '';

      return `
        <button
          class="requests-status-tab${isActive ? ' active' : ''}"
          type="button"
          data-status-value="${escapeHtml(tab.value)}"
        >
          ${iconMarkup}
          <span>${escapeHtml(tab.label)}</span>
          ${countMarkup}
        </button>
      `;
    }).join('');

    return `
      <div class="requests-status-tabs" role="tablist" aria-label="Request status filters">
        ${tabs}
      </div>
    `;
  }

  function renderAvatar(config) {
    if (config.src) {
      return `<img class="requests-avatar" src="${escapeHtml(config.src)}" alt="${escapeHtml(config.name)}" />`;
    }

    return `
      <div class="requests-avatar requests-avatar-fallback" aria-hidden="true">
        ${escapeHtml(buildInitials(config.name))}
      </div>
    `;
  }

  function EmployeeCell(row) {
    return `
      <div class="requests-employee-cell">
        <input class="table-checkbox" type="checkbox" aria-label="Select ${escapeHtml(row.employeeName)}" />
        ${renderAvatar({ src: row.avatar, name: row.employeeName })}
        <div class="requests-person-meta">
          <p class="requests-person-name">${escapeHtml(row.employeeName)}</p>
          <p class="requests-person-role">${escapeHtml(row.employeeRole)}</p>
        </div>
      </div>
    `;
  }

  function ApproverCell(row) {
    return `
      <div class="requests-approver-cell">
        ${renderAvatar({ src: row.approverAvatar, name: row.approver })}
        <span class="requests-approver-name">${escapeHtml(row.approver)}</span>
      </div>
    `;
  }

  function StatusCell(row) {
    const badgeVariant = STATUS_VARIANT_MAP[row.statusKey] || row.statusVariant || 'default';
    if (Shared.Badge) {
      return Shared.Badge({
        text: row.statusLabel,
        variant: badgeVariant
      });
    }

    return `<span class="badge-default">${escapeHtml(row.statusLabel)}</span>`;
  }

  function DatesCell(row) {
    return `
      <div class="requests-dates-cell">
        <span class="duration-pill">${escapeHtml(row.dateLabel)}</span>
        ${row.duration ? `<span class="duration-pill">${escapeHtml(row.duration)}</span>` : ''}
      </div>
    `;
  }

  function RequestTypeCell(row) {
    const typeIcon = REQUEST_TYPE_ICON_MAP[row.typeKey] || REQUEST_TYPE_ICON_MAP.default;
    return `
      <div class="requests-type-cell">
        <span class="requests-type-icon">${typeIcon}</span>
        <span>${escapeHtml(row.requestType)}</span>
      </div>
    `;
  }

  function ActionsCell(row) {
    const viewElement = row.href
      ? `
        <a class="requests-view-btn" href="${escapeHtml(row.href)}">
          <span>View</span>
          <span class="requests-view-arrow">${VIEW_ARROW_ICON}</span>
        </a>
      `
      : `
        <button class="requests-view-btn" type="button">
          <span>View</span>
          <span class="requests-view-arrow">${VIEW_ARROW_ICON}</span>
        </button>
      `;

    return `
      <div class="requests-actions">
        ${viewElement}
        <button class="requests-more-btn" type="button" aria-label="More actions for ${escapeHtml(row.employeeName)}">
          ${Icons.moreVertical || '<i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>'}
        </button>
      </div>
    `;
  }

  function HeaderLabel(label, isSortable) {
    return `
      <div class="requests-header-label">
        <span>${escapeHtml(label)}</span>
        ${isSortable === false ? '' : (Icons.sort || '')}
      </div>
    `;
  }

  function RequestRow(row) {
    return `
      <tr>
        <td>${EmployeeCell(row)}</td>
        <td>${StatusCell(row)}</td>
        <td>${DatesCell(row)}</td>
        <td>${RequestTypeCell(row)}</td>
        <td>${ApproverCell(row)}</td>
        <td>${ActionsCell(row)}</td>
      </tr>
    `;
  }

  function RequestTable(config) {
    const rowsMarkup = (config.rows || []).map(function(row) {
      return RequestRow(row);
    }).join('');

    return `
      <div class="table-container requests-table-container">
        <div class="table-scroll-wrap">
          <table class="data-table requests-table">
            <thead>
              <tr>
                <th>
                  <div class="requests-header-label">
                    <input class="table-checkbox" type="checkbox" aria-label="Select all requests" onclick="LeaveComponents.toggleAllCheckboxes(this)" />
                    <span>Employee Name</span>
                    ${Icons.sort || ''}
                  </div>
                </th>
                <th>${HeaderLabel('Status')}</th>
                <th>${HeaderLabel('Dates')}</th>
                <th>${HeaderLabel('Request type')}</th>
                <th>${HeaderLabel('Approver')}</th>
                <th class="requests-actions-header">Actions</th>
              </tr>
            </thead>
            <tbody>
              ${rowsMarkup}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function EmptyResults(config) {
    if (Shared.EmptyState) {
      return `
        <div class="requests-empty-wrap">
          ${Shared.EmptyState({
            title: config.title || 'No requests found',
            description: config.description || 'Try adjusting the search or status filter to find a request.'
          })}
        </div>
      `;
    }

    return `
      <div class="requests-empty-wrap">
        <div class="requests-empty-fallback">
          <h3>${escapeHtml(config.title || 'No requests found')}</h3>
          <p>${escapeHtml(config.description || 'Try adjusting the search or status filter to find a request.')}</p>
        </div>
      </div>
    `;
  }

  function Page(config) {
    const tableOrEmpty = (config.rows || []).length
      ? RequestTable({ rows: config.rows })
      : EmptyResults(config.emptyState || {});

    return `
      <div class="requests-shell">
        <div class="requests-header">
          <div>
            <h1 class="requests-title">${escapeHtml(config.title || 'Requests')}</h1>
          </div>
          ${ScopeToggle({
            options: config.scopeOptions || [],
            activeValue: config.activeScope || ''
          })}
        </div>
        ${SearchToolbar({
          searchValue: config.searchValue || '',
          searchPlaceholder: config.searchPlaceholder || 'Search',
          filterCount: config.filterCount || 0
        })}
        <div class="requests-status-row">
          ${StatusTabs({
            tabs: config.statusTabs || [],
            activeValue: config.activeStatus || 'all'
          })}
        </div>
        ${tableOrEmpty}
      </div>
    `;
  }

  return {
    Page,
    ScopeToggle,
    StatusTabs,
    RequestTable,
    RequestRow
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RequestsComponents;
}
