/**
 * Talento Salary Scale Table Components
 * Reusable UI blocks for salary scale table/list screen.
 */
const SalaryScaleTableComponents = (function() {
  'use strict';

  const Icons = {
    wallet: '<i class="fa-solid fa-wallet" aria-hidden="true"></i>',
    overview: '<i class="fa-solid fa-arrows-down-to-people" aria-hidden="true"></i>',
    matrix: '<i class="fa-solid fa-sliders" aria-hidden="true"></i>',
    gear: '<i class="fa-solid fa-gear" aria-hidden="true"></i>',
    sort: '<svg class="sst-sort-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="8 10 12 6 16 10"></polyline><polyline points="8 14 12 18 16 14"></polyline></svg>',
    arrow: '<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>',
    check: '<i class="fa-solid fa-circle-check" aria-hidden="true"></i>',
    x: '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i>',
    ellipsis: '<i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>'
  };

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function TopControls(config) {
    const tabs = Array.isArray(config.tabs) ? config.tabs : [];
    return `
      <section class="sst-head-row">
        <div class="sst-tabs">
          ${tabs.map(function(tab) {
            const activeClass = tab.active ? ' active' : '';
            const icon = tab.id === 'salary' ? Icons.wallet : tab.id === 'overview' ? Icons.overview : Icons.matrix;
            return `<button type="button" class="sst-tab${activeClass}">${icon}<span>${escapeHtml(tab.label || '')}</span></button>`;
          }).join('')}
        </div>
        <button type="button" class="sst-config-btn">
          <span>${escapeHtml(config.configLabel || 'Configuration')}</span>
          <span>${Icons.gear}</span>
        </button>
      </section>
    `;
  }

  function headerCell(column) {
    return `<th class="sst-th"><span class="sst-th-sort">${escapeHtml(column)} ${Icons.sort}</span></th>`;
  }

  function allowancesCell(row) {
    return `
      <div class="sst-allowances">
        <span class="sst-chip${row.allowanceTrialGray ? ' gray' : ''}">${escapeHtml(row.allowanceTrial || '')}</span>
        <span class="sst-arrow">${Icons.arrow}</span>
        <span class="sst-chip${row.allowanceAfterGray ? ' gray' : ''}">${escapeHtml(row.allowanceAfter || '')}</span>
      </div>
    `;
  }

  function medicalCell(row) {
    const included = row.medicalIncluded;
    return `
      <span class="sst-medical ${included ? 'included' : 'not-included'}">
        <span>${included ? Icons.check : Icons.x}</span>
        <span>${escapeHtml(included ? 'Included' : 'Not included')}</span>
      </span>
    `;
  }

  function tableRow(row) {
    return `
      <tr>
        <td class="sst-td">
          <div class="sst-level-cell">
            <span class="sst-level-dot" aria-hidden="true"></span>
            <div>
              <p class="sst-level-name">${escapeHtml(row.levelName || '')}</p>
              <p class="sst-level-code">${escapeHtml(row.levelCode || '')}</p>
            </div>
          </div>
        </td>
        <td class="sst-td sst-scale-col"><span class="sst-scale-text">${escapeHtml(row.scale || '')}</span></td>
        <td class="sst-td"><span class="sst-salary">${escapeHtml(row.minSalary || '')}</span></td>
        <td class="sst-td"><span class="sst-salary max">${escapeHtml(row.maxSalary || '')}</span></td>
        <td class="sst-td">${allowancesCell(row)}</td>
        <td class="sst-td">${medicalCell(row)}</td>
        <td class="sst-td"><span class="sst-status">${escapeHtml(row.status || 'Active')}</span></td>
        <td class="sst-td"><button type="button" class="sst-more-btn" aria-label="Row actions">${Icons.ellipsis}</button></td>
      </tr>
    `;
  }

  function SalaryTable(config) {
    const rows = Array.isArray(config.rows) ? config.rows : [];
    const columns = Array.isArray(config.columns) ? config.columns : [];
    return `
      <section class="sst-table-wrap">
        <div class="sst-table-scroll">
          <table class="sst-table">
            <thead>
              <tr>${columns.map(headerCell).join('')}<th class="sst-th"></th></tr>
            </thead>
            <tbody>
              ${rows.map(tableRow).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  return {
    TopControls,
    SalaryTable
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleTableComponents;
}
