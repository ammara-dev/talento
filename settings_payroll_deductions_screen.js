/**
 * Talento Settings Payroll Deductions Screen
 * Assembles the payroll deductions UI from reusable components.
 */
(function() {
  'use strict';

  const screenData = {
    sideGroups: typeof SettingsNavigationConfig !== 'undefined'
      ? SettingsNavigationConfig.getSidebarGroups({
          activeParent: 'payroll-finance',
          activeChild: 'payroll-departments'
        })
      : [],

    header: {
      breadcrumb: ['Settings overview', 'Payroll & finance'],
      title: 'Payroll & finance',
      description: 'Configure salary structures, deductions, and financial policies',
      icon: 'fa-solid fa-coins'
    },

    tabs: [
      { label: 'Payroll settings' },
      { label: 'Salary scales' },
      { label: 'Deductions', active: true },
      { label: 'Loans' },
      { label: 'Rewards' },
      { label: 'Air tickets' },
      { label: 'Reconciliation' }
    ],

    deductionsCard: {
      title: 'Deductions & contributions',
      description: 'Configure automatic deductions and contributions',
      actionText: 'Manage',
      rows: [
        {
          title: 'GOSI contribution',
          description: 'Automatically calculate and deduct GOSI contributions',
          control: 'toggle',
          enabled: true
        },
        {
          title: 'Employee GOSI rate',
          description: 'Percentage of basic salary',
          control: 'input-unit',
          value: 10,
          unit: '%'
        },
        {
          title: 'Employer GOSI rate',
          description: 'Employer rate for Saudi nationals',
          control: 'input-unit',
          value: 10,
          unit: '%'
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
    if (
      !root ||
      typeof SettingsOrganizationDetailsComponents === 'undefined' ||
      typeof SettingsPayrollFinanceComponents === 'undefined' ||
      typeof SettingsPayrollDeductionsComponents === 'undefined'
    ) return;

    root.innerHTML = `
      <div class="payroll-main-inner">
        ${SettingsOrganizationDetailsComponents.Breadcrumb({ items: screenData.header.breadcrumb })}
        ${SettingsOrganizationDetailsComponents.PageIntro(screenData.header)}
        ${SettingsPayrollFinanceComponents.PayrollTabs({ tabs: screenData.tabs })}
        ${SettingsPayrollDeductionsComponents.DeductionsCard(screenData.deductionsCard)}
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
