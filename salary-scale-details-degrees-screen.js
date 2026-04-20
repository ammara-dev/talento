/**
 * Talento Salary Scale Details Degrees Screen
 * Data-driven composition for salary scale details degree table view.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      breadcrumb: 'Salary scale list/ Salary scale name',
      title: 'Salary scale name',
      pager: { backLabel: 'Back', position: '1 of 2', nextLabel: 'Next' },
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
    degreeSalary: {
      title: 'Degrees & salary',
      toggles: [
        { label: 'Degrees & Salary', active: true },
        { label: 'Allowances', active: false }
      ],
      chart: {
        bars: [
          { label: 'D1', height: '30px', color: '#CFBAE9' },
          { label: 'D2', height: '42px', color: '#C7AFE6' },
          { label: 'D3', height: '62px', color: '#BC9FE1' },
          { label: 'D4', height: '70px', color: '#B691DE' },
          { label: 'D5', height: '86px', color: '#AE83DD' },
          { label: 'D6', height: '100px', color: '#A476DE' }
        ]
      },
      table: {
        columns: ['Degree', 'Code', 'Salary', 'Status'],
        rows: [
          { degree: 'D1: Description', code: 'SC3921/LV_NO/D2', salary: '6,000.00', status: 'Active' },
          { degree: 'D2 Description', code: 'SC3921/LV_NO/D3', salary: '6,400.00', status: 'Active' },
          { degree: 'D3: Description', code: 'SC3921/LV_NO/D2', salary: '3,000.00', status: 'Active' },
          { degree: 'D4: Description', code: 'SC3921/LV_NO/D2', salary: '3,000.00', status: 'Active' },
          { degree: 'D5: Description', code: 'SC3921/LV_NO/D2', salary: '3,000.00', status: 'Active' },
          { degree: 'D6: Description', code: 'SC3921/LV_NO/D2', salary: '13,000.00', status: 'Active' }
        ]
      }
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-details-degrees-root');
    if (!root) return;

    root.innerHTML = `
      ${SalaryScaleDetailsComponents.Header(screenData.header)}
      ${SalaryScaleDetailsDegreesComponents.DegreeSalarySection(screenData.degreeSalary)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
