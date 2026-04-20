/**
 * Talento Salary Scale Review Launch Screen
 * Data-driven composition for salary scale review and launch step.
 */
(function() {
  'use strict';

  const screenData = {
    heading: { title: 'Create new salary scale' },
    steps: [
      { label: 'Basic Info', status: 'completed' },
      { label: 'Add Levels', status: 'completed' },
      { label: 'Allowances', status: 'completed' },
      { label: 'Review', status: 'active' }
    ],
    mainPanel: {
      title: 'Review & launch salary scale',
      hero: {
        name: 'Salary scale name',
        subtitle: 'HFG · SAR · Draft',
        metrics: [
          { value: '03', label: 'Number of levels' },
          { value: '27', label: 'Total degrees' },
          { value: '213232ERS', label: 'Company code' },
          { value: 'SAR', label: 'Currency type' }
        ]
      },
      levelSummary: {
        levels: [
          {
            name: 'L1 Junior',
            chips: ['Trial: 3,000', 'After: 0,000', 'Medical insurance ✓'],
            expanded: false,
            detailRows: []
          },
          {
            name: 'L2 Middle',
            chips: ['Trial: 3,000', 'After: 0,000', 'Medical insurance ✓'],
            expanded: true,
            detailRows: [
              { label: 'Trial period', values: ['House: 2,000', 'Transportation: 500', 'Phone: 500'] },
              { label: 'After trial period', values: ['House: 2,000', 'Transportation: 1,500', 'Phone: 1,000'] }
            ]
          },
          {
            name: 'L3 Middle +',
            chips: ['Trial: 3,000', 'After: 0,000', 'Medical insurance ✓'],
            expanded: false,
            detailRows: []
          },
          {
            name: 'L4 Senior',
            chips: ['Trial: 3,000', 'After: 0,000', 'Medical insurance ✓'],
            expanded: false,
            detailRows: []
          }
        ]
      }
    },
    footer: {
      stepLabel: 'Step 04 of 04',
      backLabel: 'Back',
      nextLabel: 'Launch salary scale',
      nextIcon: 'check'
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-review-launch-root');
    if (!root) return;

    root.innerHTML = `
      <div class="ssr-flow-stack">
        ${SalaryScaleAllowancesComponents.PageHeading(screenData.heading)}
        ${SalaryScaleAllowancesComponents.Stepper({ steps: screenData.steps })}
        ${SalaryScaleReviewLaunchComponents.MainPanel(screenData.mainPanel)}
      </div>
      ${SalaryScaleAllowancesComponents.FooterBar(screenData.footer)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
