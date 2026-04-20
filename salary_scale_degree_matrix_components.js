/**
 * Talento Salary Scale Degree Matrix Components
 * Reusable blocks for degree matrix table rendering.
 */
const SalaryScaleDegreeMatrixComponents = (function() {
  'use strict';

  const SortIcon = '<svg class="ssdm-sort-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="8 10 12 6 16 10"></polyline><polyline points="8 14 12 18 16 14"></polyline></svg>';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeHexColor(value) {
    return /^#[0-9A-Fa-f]{6,8}$/.test(value || '') ? value : '';
  }

  function matrixHeaderCell(label) {
    return `<th class="ssdm-th"><span class="ssdm-th-sort">${escapeHtml(label)} ${SortIcon}</span></th>`;
  }

  function levelCell(row) {
    const levelDotColor = normalizeHexColor(row.levelDotColor);
    const dotStyle = levelDotColor ? ` style="background:${levelDotColor};"` : '';
    return `
      <td class="ssdm-td ssdm-level-col">
        <div class="ssdm-level-wrap">
          <span class="ssdm-level-dot" aria-hidden="true"${dotStyle}></span>
          <div>
            <p class="ssdm-level-name">${escapeHtml(row.levelName || '')}</p>
            <p class="ssdm-level-code">${escapeHtml(row.levelCode || '')}</p>
          </div>
        </div>
      </td>
    `;
  }

  function degreeCell(cell) {
    const bgColor = normalizeHexColor(cell && cell.bgColor);
    const toneClass = cell && cell.tone ? ` ssdm-tone-${escapeHtml(cell.tone)}` : '';
    const styleAttr = bgColor ? ` style="background:${bgColor};"` : '';
    return `<td class="ssdm-td ssdm-degree-cell${toneClass}"${styleAttr}>${escapeHtml(cell && cell.value ? cell.value : '')}</td>`;
  }

  function matrixRow(row, degreeHeaders) {
    const values = Array.isArray(row.values) ? row.values : [];
    const normalizedValues = degreeHeaders.map(function(_, index) {
      return values[index] || { value: '' };
    });
    return `<tr>${levelCell(row)}${normalizedValues.map(degreeCell).join('')}</tr>`;
  }

  function MatrixTable(config) {
    const headers = Array.isArray(config.degreeHeaders) ? config.degreeHeaders : [];
    const rows = Array.isArray(config.rows) ? config.rows : [];
    return `
      <section class="ssdm-table-wrap">
        <div class="ssdm-table-scroll">
          <table class="ssdm-table">
            <thead>
              <tr>
                <th class="ssdm-th ssdm-level-head">Level/ Degree</th>
                ${headers.map(matrixHeaderCell).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(function(row) { return matrixRow(row, headers); }).join('')}
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  return {
    MatrixTable
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SalaryScaleDegreeMatrixComponents;
}
