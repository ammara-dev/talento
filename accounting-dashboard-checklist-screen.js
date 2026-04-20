/**
 * Talento Accounting Dashboard Checklist Screen
 * Data-driven composition for accounting dashboard with setup checklist cards.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      title: 'Accounting dashboard',
      chips: [
        { label: 'Accounting summary', icon: AccountingComponents.Icons.summary, active: true },
        { label: 'Customers', icon: AccountingComponents.Icons.customers, active: false },
        { label: 'Vendors', icon: AccountingComponents.Icons.vendors, active: false },
        { label: 'Journals', icon: AccountingComponents.Icons.journals, active: false },
        { label: 'Reporting', icon: AccountingComponents.Icons.reporting, active: false }
      ],
      configurationLabel: 'Configuration'
    },
    setup: {
      progress: '3/4',
      title: 'Finish setting up your accounting',
      stepLabel: '1 step left',
      description: 'One last thing — configure Accounting Periods to unlock full reporting',
      steps: [
        {
          title: 'First bill',
          description: 'Digitalize vendor bills with OCR',
          actionLabel: 'Create bill',
          active: true,
          done: true
        },
        {
          title: 'Bank account',
          description: 'Sync bank feeds automatically',
          actionLabel: 'Add account',
          active: false,
          done: false
        },
        {
          title: 'Accounting periods',
          description: 'Set fiscal year & tax return schedule',
          actionLabel: 'Setup periods',
          active: false,
          done: false
        },
        {
          title: 'Chart of accounts',
          description: 'Record initial balances & structure',
          actionLabel: 'Add account',
          active: false,
          done: false
        }
      ]
    },
    dashboard: {
      cards: [
        {
          title: 'Bank account',
          subtitle: 'BE15001559627230',
          balanceLabel: 'Available balance',
          balance: '34,226.00 SAR',
          currencyColor: '#FFFFFF99',
          singleAction: true,
          viewLabel: 'View',
          variant: 'bank'
        },
        {
          title: 'Cash account',
          subtitle: 'Name - HO',
          sparkline: { path: 'M0 58 C56 58, 102 56, 154 44 C208 32, 248 48, 292 40 C306 38, 314 34, 320 30', color: '#4CBFBE', markerX: 255, markerY: 44 },
          balanceLabel: '',
          balance: '12,226.00 SAR',
          viewLabel: 'View',
          addLabel: 'Add new'
        },
        {
          title: 'MISC',
          subtitle: '22 transactions to check',
          sparkline: { path: 'M0 28 C48 48, 92 52, 142 34 C186 20, 224 50, 262 44 C286 41, 304 45, 320 48', color: '#BEBBC4', markerX: 280, markerY: 45 },
          balanceLabel: '',
          balance: '-12,226.00 SAR',
          viewLabel: 'View',
          addLabel: 'Add new'
        },
        {
          title: 'Salary Journal',
          subtitle: '22 journals to check',
          sparkline: { path: 'M0 28 C64 32, 110 54, 148 60 C186 64, 220 42, 258 54 C282 60, 302 58, 320 56', color: '#C3C0C9', markerX: 275, markerY: 59 },
          balanceLabel: '',
          balance: '84,226.00 SAR',
          viewLabel: 'View',
          addLabel: 'Add new'
        }
      ],
      purchase: {
        title: 'Purchase',
        subtitle: 'Accounts Payable · 11 bills',
        segments: [
          { width: '49%', color: '#1FA39B' },
          { width: '30%', color: '#F0A540' },
          { width: '11%', color: '#E84B5A' },
          { width: '10%', color: '#C6C5CA' }
        ],
        legend: [
          { color: '#1FA39B', label: 'Upcoming', value: '67,300 SAR' },
          { color: '#F0A540', label: 'Due this week', value: '25,210 SAR' },
          { color: '#E84B5A', label: 'Overdue', value: '12,870 SAR' },
          { color: '#C6C5CA', label: 'Other', value: '8,870 SAR' }
        ],
        viewLabel: 'View',
        addLabel: 'Add new'
      }
    }
  };

  function render() {
    const root = document.getElementById('accounting-dashboard-checklist-root');
    if (!root) return;

    root.innerHTML = `
      ${AccountingComponents.Header(screenData.header)}
      ${AccountingDashboardChecklistComponents.SetupPanel(screenData.setup)}
      ${AccountingDashboardScreenComponents.DashboardGrid(screenData.dashboard)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
