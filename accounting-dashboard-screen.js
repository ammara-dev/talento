/**
 * Talento Accounting Dashboard Screen
 * Data-driven composition for accounting dashboard summary.
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
      description: 'One last thing — configure Accounting Periods to unlock full reporting'
    },
    dashboard: {
      cards: [
        {
          title: 'Bank account',
          subtitle: 'BE15001559627230',
          balanceLabel: 'Available balance',
          balance: '34,226.00 SAR',
          currencyColor: '#787085',
          singleAction: true,
          viewLabel: 'View',
          variant: 'bank'
        },
        {
          title: 'Cash account',
          subtitle: 'Name - HO',
          sparkline: { path: 'M0 22 C55 42, 100 40, 150 28 C205 16, 238 42, 320 32', color: '#AB273B', markerX: 255, markerY: 34 },
          balanceLabel: '',
          balance: '-12,226.00 SAR',
          currencyColor: '#787085',
          viewLabel: 'View',
          addLabel: 'Add new'
        },
        {
          title: 'MISC',
          subtitle: '22 transactions to check',
          sparkline: { path: 'M0 22 C50 42, 96 44, 140 26 C186 10, 224 40, 270 34 C295 30, 306 34, 320 33', color: '#BEBBC4', markerX: 280, markerY: 33 },
          balanceLabel: '',
          balance: '-12,226.00 SAR',
          currencyColor: '#787085',
          viewLabel: 'View',
          addLabel: 'Add new'
        },
        {
          title: 'Salary Journal',
          subtitle: '22 journals to check',
          sparkline: { path: 'M0 26 C70 34, 112 54, 150 58 C180 60, 206 42, 236 46 C262 49, 285 62, 320 56', color: '#C3C0C9', markerX: 275, markerY: 58 },
          balanceLabel: '',
          balance: '84,226.00 SAR',
          currencyColor: '#787085',
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
    const root = document.getElementById('accounting-dashboard-root');
    if (!root) return;

    root.innerHTML = `
      ${AccountingComponents.Header(screenData.header)}
      ${AccountingDashboardScreenComponents.SetupBanner(screenData.setup)}
      ${AccountingDashboardScreenComponents.DashboardGrid(screenData.dashboard)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
