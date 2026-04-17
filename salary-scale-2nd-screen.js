/**
 * Talento Salary Scale 2nd Screen
 * Data-driven composition for create new salary scale form.
 */
(function() {
  'use strict';

  const screenData = {
    heading: { title: 'Create new salary scale' },
    steps: [
      { label: 'Basic Info', active: true },
      { label: 'Add Levels', active: false },
      { label: 'Allowances', active: false },
      { label: 'Review', active: false }
    ],
    mainPanel: {
      title: 'Create new salary scale',
      subtitle: 'Define how total scores are translated into performance levels.',
      form: {
        title: 'Scale details',
        fields: [
          { type: 'text', label: 'Scale name', required: true, value: 'Test 2' },
          { type: 'text', label: 'Company code', required: true, value: '232323' },
          { type: 'select', label: 'Currency', value: 'SAR - Saudi Riyal' }
        ],
        noteTitle: 'What happens next',
        noteText: "You'll define salary levels (eg. Executive, Senior..) with a starting salary and per-degree increment. Degrees are auto-generated from your inputs."
      }
    },
    footer: {
      stepLabel: 'Step 01 of 04',
      backLabel: 'Back',
      backDisabled: true,
      nextLabel: 'Next step'
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-2-root');
    if (!root) return;

    root.innerHTML = `
      <div class="ss2-flow-stack">
        ${SalaryScale2Components.PageHeading(screenData.heading)}
        <div class="ss2-wizard-shell">
          ${SalaryScale2Components.Stepper({ steps: screenData.steps })}
          ${SalaryScale2Components.MainPanel(screenData.mainPanel)}
        </div>
      </div>
      ${SalaryScale2Components.FooterBar(screenData.footer)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
