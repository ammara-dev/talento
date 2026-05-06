/**
 * Attendance Authentication Components
 * Reusable UI pieces for the attendance authentication screen.
 */
const AttendanceAuthenticationComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function ActionButton(item) {
    const icon = item.icon ? `<i class="${escapeHtml(item.icon)}" aria-hidden="true"></i>` : '';
    const activeClass = item.active ? ' is-active' : '';

    return `
      <button type="button" class="ac-chip${activeClass}" aria-pressed="${item.active ? 'true' : 'false'}">
        ${icon}
        <span>${escapeHtml(item.label || '')}</span>
      </button>
    `;
  }

  function ActionRow(config) {
    const items = Array.isArray(config.items) ? config.items : [];
    const configLabel = config.configurationLabel || 'Configuration';
    const configIcon = config.configurationIcon || 'fa-solid fa-gear';

    return `
      <div class="ac-chip-group">
        ${items.map(ActionButton).join('')}
      </div>
      <button type="button" class="ac-config-btn">
        <span>${escapeHtml(configLabel)}</span>
        <i class="${escapeHtml(configIcon)}" aria-hidden="true"></i>
      </button>
    `;
  }

  function OtpInputs(config) {
    const length = Number.isInteger(config.length) ? config.length : 5;
    const placeholder = config.placeholder != null ? String(config.placeholder) : '';
    const inputs = Array.from({ length }, function(_, index) {
      return `
        <input
          class="att-otp-input"
          type="text"
          inputmode="numeric"
          autocomplete="one-time-code"
          maxlength="1"
          placeholder="${escapeHtml(placeholder)}"
          aria-label="Digit ${index + 1}"
        />
      `;
    });

    return `
      <div class="att-otp-group" role="group" aria-label="Authentication code">
        ${inputs.join('')}
      </div>
    `;
  }

  function AuthCard(config) {
    return `
      <section class="att-auth-card">
        <button type="button" class="att-back-btn">
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
          <span>${escapeHtml(config.backText || 'Back')}</span>
        </button>
        <div class="att-card-body">
          <p class="att-greeting">${escapeHtml(config.greeting || '')}</p>
          <h2 class="att-card-title">${escapeHtml(config.title || '')}</h2>
          <p class="att-card-subtitle">${escapeHtml(config.subtitle || '')}</p>
        </div>
        ${OtpInputs({ length: config.codeLength, placeholder: config.placeholder })}
        <button type="button" class="att-continue-btn">
          ${escapeHtml(config.buttonText || 'Continue')}
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </section>
    `;
  }

  return {
    ActionRow,
    AuthCard,
    OtpInputs
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AttendanceAuthenticationComponents;
}
