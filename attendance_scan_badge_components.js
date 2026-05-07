/**
 * Attendance Scan Badge Components
 * Reusable UI pieces for the badge scan screen.
 */
const AttendanceScanBadgeComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function ScanCard(config) {
    const manualHref = config.manualHref ? String(config.manualHref) : '';
    const manualButton = manualHref
      ? `
        <a class="scan-manual-btn" href="${escapeHtml(manualHref)}">
          <i class="fa-solid fa-key" aria-hidden="true"></i>
          <span>${escapeHtml(config.manualLabel || 'Manual authentication')}</span>
        </a>
      `
      : `
        <button type="button" class="scan-manual-btn">
          <i class="fa-solid fa-key" aria-hidden="true"></i>
          <span>${escapeHtml(config.manualLabel || 'Manual authentication')}</span>
        </button>
      `;

    return `
      <section class="scan-card">
        <p class="scan-title-top">${escapeHtml(config.topText || '')}</p>
        <h2 class="scan-title-main">${escapeHtml(config.title || '')}</h2>
        <div class="scan-barcode" aria-hidden="true"></div>
        <div class="scan-divider">${escapeHtml(config.dividerText || '')}</div>
        ${manualButton}
      </section>
    `;
  }

  return {
    ScanCard
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AttendanceScanBadgeComponents;
}
