/**
 * Talento Salary Scale Add Levels Screen
 * Data-driven composition for create-levels step.
 */
(function() {
  'use strict';

  const screenData = {
    heading: {
      title: 'Create new salary scale'
    },
    stepper: {
      steps: [
        { label: 'Basic Info', status: 'completed' },
        { label: 'Add Levels', status: 'active' },
        { label: 'Allowances', status: 'upcoming' },
        { label: 'Review', status: 'upcoming' }
      ]
    },
    panel: {
      title: 'Create levels',
      subtitle: 'Define how total scores are translated into performance levels.',
      sidebar: {
        addLabel: 'Add another level',
        levels: [
          { name: 'L1 Junior', salaryText: '3,000 SAR', color: '#2D5F8E', active: false },
          { name: 'L2 Middle', salaryText: '6,000 SAR', color: '#3F79AF', active: true },
          { name: 'Unnamed', salaryText: 'No salary', color: '#4E8CC1', active: false }
        ]
      },
      editor: {
        swatches: [
          { color: '#2D5F8E', active: true, label: 'Color 1' },
          { color: '#3C74AA', active: false, label: 'Color 2' },
          { color: '#4A84B8', active: false, label: 'Color 3' },
          { color: '#6AA2D2', active: false, label: 'Color 4' },
          { color: '#92BFE4', active: false, label: 'Color 5' },
          { color: '#AED0EC', active: false, label: 'Color 6' },
          { color: '#C8DCEF', active: false, label: 'Color 7' }
        ],
        nameField: {
          label: 'Level name',
          required: true,
          value: '',
          placeholder: 'e.g. Senior Manager'
        },
        rowFields: [
          { label: 'Starting salary', required: true, type: 'text', value: '6,000' },
          { label: 'Degrees', required: false, type: 'select', value: '6 degrees' },
          { label: 'Increment/degree', required: false, type: 'text', value: '1000' }
        ],
        preview: {
          title: 'Salary preview',
          minLabel: 'D1: 6,000 SAR',
          maxLabel: 'D6: 13,000 SAR',
          bars: [
            { label: 'D1', height: '26px', color: '#CBB8EA' },
            { label: 'D2', height: '38px', color: '#C2ACE5' },
            { label: 'D3', height: '54px', color: '#B99FDF' },
            { label: 'D4', height: '60px', color: '#B393DC' },
            { label: 'D5', height: '76px', color: '#AF87DF' },
            { label: 'D6', height: '88px', color: '#A577E1' }
          ]
        }
      }
    },
    footer: {
      stepLabel: 'Step 02 of 04',
      backLabel: 'Back',
      nextLabel: 'Next step'
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-add-levels-root');
    if (!root) return;

    root.innerHTML = `
      ${SalaryScaleAllowancesComponents.PageHeading(screenData.heading)}
      ${SalaryScaleAllowancesComponents.Stepper(screenData.stepper)}
      ${SalaryScaleAddLevelsComponents.MainPanel(screenData.panel)}
      ${SalaryScaleAllowancesComponents.FooterBar(screenData.footer)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
