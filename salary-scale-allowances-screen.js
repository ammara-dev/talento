/**
 * Talento Salary Scale Allowances Screen
 * Data-driven composition for salary scale allowances step.
 */
(function() {
  'use strict';

  const allowanceRows = [
    { typeLabel: 'House allowance - type', typeValue: 'Fixed', valueLabel: 'Value', value: '1,000' },
    { typeLabel: 'Transportation allowance - type', typeValue: 'Fixed', valueLabel: 'Value', value: '1,000' },
    { typeLabel: 'Phone allowance - type', typeValue: 'Fixed', valueLabel: 'Value', value: '1,000' }
  ];

  const screenData = {
    heading: { title: 'Create new salary scale' },
    steps: [
      { label: 'Basic Info', status: 'completed' },
      { label: 'Add Levels', status: 'completed' },
      { label: 'Allowances', status: 'active' },
      { label: 'Review', status: 'upcoming' }
    ],
    mainPanel: {
      title: 'Allowances per level',
      subtitle: 'Configure allowance type and value for each level. Set separately for trial and post-trial periods.',
      levels: [
        { label: 'L1 Junior', subtitle: 'Trial: 3,000  After: 0,000', active: true },
        { label: 'L2 Middle', subtitle: 'No setup', active: false },
        { label: 'L3 Middle +', subtitle: 'No setup', active: false }
      ],
      periods: [
        {
          title: 'During trial period',
          total: '3,000',
          rows: allowanceRows,
          insurance: {
            title: 'Medical insurance',
            commissionLabel: 'Commission*',
            commissionValue: 'Not Illegible'
          },
          otherAllowance: {
            title: 'Other allowance',
            namePlaceholder: 'Other allowance name',
            valuePlaceholder: 'Allowance value',
            addLabel: 'Add other allowance'
          }
        },
        {
          title: 'After trial period',
          total: '0,000',
          rows: allowanceRows.map(function(row) {
            return Object.assign({}, row, { value: '0,000' });
          }),
          insurance: {
            title: 'Medical insurance',
            commissionLabel: 'Commission*',
            commissionValue: 'Not Illegible'
          },
          otherAllowance: {
            title: 'Other allowance',
            namePlaceholder: 'Other allowance name',
            valuePlaceholder: 'Allowance value',
            addLabel: 'Add other allowance'
          }
        }
      ]
    },
    footer: {
      stepLabel: 'Step 03 of 04',
      backLabel: 'Back',
      nextLabel: 'Next step'
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-allowances-root');
    if (!root) return;

    root.innerHTML = `
      <div class="ssa-flow-stack">
        ${SalaryScaleAllowancesComponents.PageHeading(screenData.heading)}
        ${SalaryScaleAllowancesComponents.Stepper({ steps: screenData.steps })}
        ${SalaryScaleAllowancesComponents.MainPanel(screenData.mainPanel)}
      </div>
      ${SalaryScaleAllowancesComponents.FooterBar(screenData.footer)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
