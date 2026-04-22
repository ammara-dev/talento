/**
 * Talento Settings Payroll & Finance Screen
 * Composes payroll settings from reusable settings components.
 */
(function() {
  'use strict';

  const screenData = {
    sideGroups: typeof SettingsNavigationConfig !== 'undefined'
      ? SettingsNavigationConfig.getSidebarGroups({
        activeParent: 'payroll-finance',
        activeChild: 'payroll-settings'
      })
      : [],
    header: {
      breadcrumb: ['Settings overview', 'Payroll & finance'],
      title: 'Payroll & finance',
      description: 'Configure salary structures, deductions, and financial policies',
      icon: 'fa-solid fa-coins'
    },
    tabs: [
      { label: 'Payroll settings', active: true },
      { label: 'Salary scales' },
      { label: 'Deductions' },
      { label: 'Loans' },
      { label: 'Rewards' },
      { label: 'Air tickets' },
      { label: 'Reconciliation' }
    ],
    payrollCard: {
      title: 'General payroll settings',
      description: 'Basic configuration for payroll processing',
      notice: {
        title: 'Changes to payroll settings may affect current salary calculations.',
        text: 'Please review carefully before saving.'
      },
      fields: [
        {
          title: 'Payroll cycle',
          description: 'How often you process payroll',
          control: 'select',
          value: 'Monthly'
        },
        {
          title: 'Payroll processing day',
          description: 'Day of month to process payroll',
          control: 'select',
          value: '25th of month'
        },
        {
          title: 'Default currency',
          description: 'Currency used for salary calculations',
          control: 'select',
          value: 'Saudi Riyal (SAR)'
        },
        {
          title: 'Automatic rounding',
          description: 'Round salary amounts to nearest currency unit',
          control: 'toggle',
          enabled: true
        }
      ]
    },
    footer: {
      discardText: 'Discard',
      saveText: 'Save changes'
    }
  };

  function renderMainContent() {
    const root = document.getElementById('settings-main-root');
    if (!root
      || typeof SettingsOrganizationDetailsComponents === 'undefined'
      || typeof SettingsPayrollFinanceComponents === 'undefined') return;

    root.innerHTML = `
      <div class="payroll-main-inner">
        ${SettingsOrganizationDetailsComponents.Breadcrumb({ items: screenData.header.breadcrumb })}
        ${SettingsOrganizationDetailsComponents.PageIntro(screenData.header)}
        ${SettingsPayrollFinanceComponents.PayrollTabs({ tabs: screenData.tabs })}
        ${SettingsPayrollFinanceComponents.PayrollSettingsCard(screenData.payrollCard)}
      </div>
      ${SettingsPayrollFinanceComponents.FooterActions(screenData.footer)}
    `;
  }

  function render() {
    if (typeof SettingsSidebarShell !== 'undefined') {
      SettingsSidebarShell.render({
        containerId: 'settings-side-panel',
        groups: screenData.sideGroups
      });
    }
    renderMainContent();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
