/**
 * Talento Salary Scale Details Degrees Components
 * Reusable UI blocks for salary/degree preview and table.
 */
const SalaryScaleDetailsDegreesComponents = (function() {
  'use strict';

  const Icons = {
    sort: '<svg class="ssd2-sort-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="8 10 12 6 16 10"></polyline><polyline points="8 14 12 18 16 14"></polyline></svg>',
    menu: '<i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function DegreeBar(item) {
    return `
      <div class="ssd2-bar-col">
        <div class="ssd2-bar" style="height:${escapeHtml(item.height || '30px')};background:${escapeHtml(item.color || '#DCCEF2')}"></div>
        <span class="ssd2-bar-label">${escapeHtml(item.label || '')}</span>
      </div>
    `;
  }

  function chartBlock(chart) {
    const bars = Array.isArray(chart.bars) ? chart.bars : [];
    return `
      <section class="ssd2-chart-wrap">
        <div class="ssd2-bars-grid">${bars.map(DegreeBar).join('')}</div>
      </section>
    `;
  }

  function tableHeadCell(column) {
    return `<th class="ssd2-th"><span class="ssd2-th-sort">${escapeHtml(column)} ${Icons.sort}</span></th>`;
  }

  function DegreeRow(row) {
    return `
      <tr>
        <td class="ssd2-td">
          <div class="ssd2-degree-cell">
            <span class="ssd2-check" aria-hidden="true"></span>
            <span>${escapeHtml(row.degree || '')}</span>
          </div>
        </td>
        <td class="ssd2-td ssd2-code">${escapeHtml(row.code || '')}</td>
        <td class="ssd2-td ssd2-salary"><strong>${escapeHtml(row.salary || '')}</strong> <span>SAR</span></td>
        <td class="ssd2-td"><span class="ssd2-status">${escapeHtml(row.status || 'Active')}</span></td>
        <td class="ssd2-td ssd2-actions">${Icons.menu}</td>
      </tr>
    `;
  }

  function tableBlock(table) {
    const rows = Array.isArray(table.rows) ? table.rows : [];
    const columns = Array.isArray(table.columns) ? table.columns : [];
    return `
      <section class="ssd2-table-wrap">
        <div class="ssd2-table-scroll">
          <table class="ssd2-table">
            <thead>
              <tr>${columns.map(tableHeadCell).join('')}<th class="ssd2-th"></th></tr>
            </thead>
            <tbody>
              ${rows.map(DegreeRow).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  function DegreeSalarySection(config) {
    const toggles = Array.isArray(config.toggles) ? config.toggles : [];
    return `
      <section class="ssd2-section">
        <div class="ssd2-section-head">
          <h2 class="ssd2-section-title">${escapeHtml(config.title || '')}</h2>
          <div class="ssd2-toggle-group" role="tablist" aria-label="Degree section view">
            ${toggles.map(function(toggle) {
              return `<button type="button" role="tab" class="ssd2-toggle-btn${toggle.active ? ' active' : ''}" aria-selected="${toggle.active ? 'true' : 'false'}">${escapeHtml(toggle.label || '')}</button>`;
            }).join('')}
          </div>
        </div>
        ${chartBlock(config.chart || {})}
        ${tableBlock(config.table || {})}
      </section>
    `;
  }

  return {
    DegreeSalarySection
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleDetailsDegreesComponents;
}
