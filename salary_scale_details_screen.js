/**
 * Talento Salary Scale Details Screen
 * Data-driven composition for salary scale details screen.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      breadcrumb: 'Salary scale list/ Salary scale name',
      title: 'Salary scale name',
      pager: { position: '1 of 2' },
      meta: {
        items: ['10 degrees', '3,000 - 6,600 SAR', 'Starting: 3,000.00', 'SC3921'],
        status: 'Draft'
      },
      actions: { editLabel: 'Edit' },
      levelTabs: {
        tabs: [
          { label: 'L1 Junior', active: true },
          { label: 'L2 Middle', active: false },
          { label: 'L3 Middle +', active: false },
          { label: 'L4 Senior', active: false }
        ]
      }
    },
    allowances: {
      title: 'Allowances',
      toggles: [
        { label: 'Degrees & Salary', active: false },
        { label: 'Allowances', active: true }
      ],
      periods: [
        {
          title: 'During trial period',
          leftItems: [
            { label: 'House allowance', value: 'Fixed - 2,000.00' },
            { label: 'Transportation allowance', value: '% of Basic - 12.00' },
            { label: 'Phone Allowance', value: 'Fixed - 0.00' }
          ],
          rightItems: [
            { label: 'Medical Insurance', value: 'Covered', state: 'covered' },
            { label: 'Commission', value: 'Illegible' },
            { label: 'Other Allowance', value: '1,200.00' }
          ]
        },
        {
          title: 'After Trial Period',
          leftItems: [
            { label: 'House allowance', value: 'Fixed - 2,000.00' },
            { label: 'Transportation allowance', value: '% of Basic - 12.00' },
            { label: 'Phone Allowance', value: 'Fixed - 0.00' }
          ],
          rightItems: [
            { label: 'Medical Insurance', value: 'Covered', state: 'covered' },
            { label: 'Commission', value: 'Illegible' },
            { label: 'Other Allowance', value: '1,200.00' }
          ]
        }
      ]
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-details-root');
    if (!root) return;

    root.innerHTML = `
      ${SalaryScaleDetailsComponents.Header(screenData.header)}
      ${SalaryScaleDetailsComponents.AllowancesSection(screenData.allowances)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
