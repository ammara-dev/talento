/**
 * Talento Appraisal Employee Profile Evaluators Components
 * Reusable table blocks for the evaluators screen.
 */
const AppraisalEmployeeProfileEvaluatorsComponents = (function() {
  'use strict';

  function getSharedIcon(name) {
    if (typeof PerformanceEvaluationDetailComponents !== 'undefined' &&
      PerformanceEvaluationDetailComponents.Icons &&
      PerformanceEvaluationDetailComponents.Icons[name]) {
      return PerformanceEvaluationDetailComponents.Icons[name];
    }

    if (typeof PerformanceEvaluationComponents !== 'undefined' &&
      PerformanceEvaluationComponents.Icons &&
      PerformanceEvaluationComponents.Icons[name]) {
      return PerformanceEvaluationComponents.Icons[name];
    }

    return '';
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function StatusBadge(status) {
    const normalized = String(status || '').toLowerCase();
    const completed = normalized === 'completed';

    return `
      <span class="aepe-status-badge${completed ? ' aepe-status-badge--completed' : ' aepe-status-badge--pending'}">
        ${escapeHtml(completed ? 'Completed' : 'Pending evaluation')}
      </span>
    `;
  }

  function MemberCell(row) {
    return `
      <div class="aepe-member-cell">
        <img class="aepe-avatar" src="${escapeHtml(row.avatar)}" alt="${escapeHtml(row.name)}" />
        <span class="aepe-member-name">${escapeHtml(row.name)}</span>
      </div>
    `;
  }

  function RowAction(action) {
    const variant = action && action.variant ? action.variant : 'view';
    const label = action && action.label ? action.label : 'View evaluation';
    const isReminder = variant === 'reminder';
    const icon = isReminder ? getSharedIcon('bellAccent') : getSharedIcon('arrowUpRight');

    return `
      <button type="button" class="aepe-action-btn${isReminder ? ' aepe-action-btn--reminder' : ' aepe-action-btn--view'}">
        <span>${escapeHtml(label)}</span>
        ${icon}
      </button>
    `;
  }

  function TableHead(columns, selectAll) {
    return `
      <thead>
        <tr>
          ${columns.map(function(column) {
            const width = column.width ? ` style="width:${column.width};"` : '';
            if (column.type === 'checkbox') {
              const checked = selectAll && selectAll.checked ? ' checked="checked"' : '';
              return `
                <th${width} class="aepe-checkbox-head">
                  <input type="checkbox" class="aepe-table-checkbox" data-aepe-select-all${checked} aria-label="Select all rows" />
                </th>
              `;
            }
            return `<th${width}>${escapeHtml(column.label || '')}</th>`;
          }).join('')}
        </tr>
      </thead>
    `;
  }

  function TableRow(row) {
    const checked = row && row.checked ? ' checked="checked"' : '';

    return `
      <tr>
        <td class="aepe-checkbox-cell">
          <input type="checkbox" class="aepe-table-checkbox" data-aepe-row-check="${escapeHtml(row.id)}"${checked} aria-label="Select ${escapeHtml(row.name)}" />
        </td>
        <td>${MemberCell(row)}</td>
        <td>${StatusBadge(row.status)}</td>
        <td><span class="aepe-inline">${escapeHtml(row.role)}</span></td>
        <td><span class="aepe-inline">${escapeHtml(row.deadline)}</span></td>
        <td class="aepe-actions-cell">
          <div class="aepe-row-actions">
            ${RowAction(row.action)}
            <button type="button" class="aepe-more-btn" aria-label="More actions for ${escapeHtml(row.name)}">
              ${getSharedIcon('moreVertical')}
            </button>
          </div>
        </td>
      </tr>
    `;
  }

  function EmptyState() {
    return `
      <div class="aepe-empty">
        No evaluators found.
      </div>
    `;
  }

  function EvaluatorsTable(config) {
    const columns = config && Array.isArray(config.columns) ? config.columns : [];
    const rows = config && Array.isArray(config.rows) ? config.rows : [];
    const selectAll = config && config.selectAll ? config.selectAll : {};

    if (!rows.length) {
      return EmptyState();
    }

    return `
      <div class="table-container aepe-table-wrap">
        <div class="table-scroll-wrap">
          <table class="data-table aepe-table">
            ${TableHead(columns, selectAll)}
            <tbody>
              ${rows.map(TableRow).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  return {
    EvaluatorsTable,
    StatusBadge,
    RowAction
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AppraisalEmployeeProfileEvaluatorsComponents;
}
