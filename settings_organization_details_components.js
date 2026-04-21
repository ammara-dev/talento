/**
 * Talento Settings Organization Details Components
 * Reusable components for organization details settings screen.
 */
const SettingsOrganizationDetailsComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function Breadcrumb(config) {
    const items = Array.isArray(config.items) ? config.items : [];
    return `<p class="org-breadcrumb">${items.map(escapeHtml).join(' / ')}</p>`;
  }

  function PageIntro(config) {
    return `
      <header class="org-page-intro">
        <div class="org-page-icon"><i class="${escapeHtml(config.icon || 'fa-solid fa-building')}" aria-hidden="true"></i></div>
        <div>
          <h1 class="org-page-title">${escapeHtml(config.title || '')}</h1>
          <p class="org-page-subtitle">${escapeHtml(config.description || '')}</p>
        </div>
      </header>
    `;
  }

  function ActionButton(config) {
    return `
      <button type="button" class="org-card-action-btn">
        ${escapeHtml(config.label || 'Edit')}
        <i class="${escapeHtml(config.icon || 'fa-solid fa-pen')}" aria-hidden="true"></i>
      </button>
    `;
  }

  function InfoRowsCard(config) {
    const rows = Array.isArray(config.rows) ? config.rows : [];
    return `
      <section class="org-card">
        <div class="org-card-head">
          <h2>${escapeHtml(config.title || '')}</h2>
          ${ActionButton({ label: config.actionText || 'Edit', icon: config.actionIcon || 'fa-solid fa-pen' })}
        </div>
        <div class="org-info-rows">
          ${rows.map(function(row) {
            return `
              <div class="org-info-row">
                <span>${escapeHtml(row.label || '')}</span>
                <strong>${escapeHtml(row.value || '')}</strong>
              </div>
            `;
          }).join('')}
        </div>
      </section>
    `;
  }

  function InvitePanel(config) {
    const pending = Array.isArray(config.pendingInvitations) ? config.pendingInvitations : [];
    return `
      <div class="org-invite-panel">
        <p class="org-invite-title">${escapeHtml(config.title || 'Invite new users')}</p>
        <div class="org-invite-row">
          <input type="text" class="org-invite-input" placeholder="${escapeHtml(config.placeholder || 'Enter email addresses')}" />
          <button type="button" class="org-invite-send-btn">
            ${escapeHtml(config.sendText || 'Sent')}
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </button>
        </div>
        <p class="org-pending-label">${escapeHtml(config.pendingLabel || 'Pending invitations:')}</p>
        <div class="org-pending-wrap">
          ${pending.map(function(item) { return `<span class="org-chip">${escapeHtml(item)}</span>`; }).join('')}
        </div>
      </div>
    `;
  }

  function ToggleOptionRow(option) {
    const control = option.type === 'select'
      ? `<button type="button" class="org-select-btn">${escapeHtml(option.value || 'Select form')} <i class="fa-solid fa-chevron-down" aria-hidden="true"></i></button>`
      : `<button type="button" class="org-toggle-switch${option.enabled ? ' is-on' : ''}" aria-pressed="${option.enabled ? 'true' : 'false'}"><span></span></button>`;
    return `
      <div class="org-option-row">
        <div>
          <p class="org-option-title">${escapeHtml(option.title || '')}</p>
          <p class="org-option-desc">${escapeHtml(option.description || '')}</p>
        </div>
        ${control}
      </div>
    `;
  }

  function ConfigCard(config) {
    const options = Array.isArray(config.options) ? config.options : [];
    const bodyContent = config.type === 'invite'
      ? InvitePanel(config.inviteConfig || {})
      : `<div class="org-options-wrap">${options.map(ToggleOptionRow).join('')}</div>`;

    return `
      <section class="org-card">
        <div class="org-card-head">
          <div>
            <h2>${escapeHtml(config.title || '')}</h2>
            ${config.description ? `<p class="org-card-desc">${escapeHtml(config.description)}</p>` : ''}
          </div>
          ${ActionButton({ label: config.actionText || 'Manage', icon: config.actionIcon || 'fa-solid fa-wrench' })}
        </div>
        ${config.subTitle ? `<p class="org-card-subtitle">${escapeHtml(config.subTitle)}</p>` : ''}
        ${bodyContent}
      </section>
    `;
  }

  return {
    Breadcrumb,
    PageIntro,
    InfoRowsCard,
    ConfigCard
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsOrganizationDetailsComponents;
}
