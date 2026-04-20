/**
 * Talento Salary Scale Table Screen
 * Data-driven composition for salary scale table layout.
 */
(function() {
  'use strict';

  const screenData = {
    title: 'Salary scale',
    controls: {
      tabs: [
        { id: 'salary', label: 'Salary scale', active: true },
        { id: 'overview', label: 'Level overview', active: false },
        { id: 'matrix', label: 'Degree matrix', active: false }
      ],
      configLabel: 'Configuration'
    },
    table: {
      columns: ['Level', 'Scale', 'Minimal salary', 'Max salary', 'Allowances', 'Medical insurance', 'Status'],
      rows: [
        {
          levelName: 'Level 1 - Executive',
          levelCode: 'LV0001',
          scale: 'Job Grades 2024',
          minSalary: '12,000.00',
          maxSalary: '25,500.00',
          allowanceTrial: 'Trial: 3,000',
          allowanceAfter: 'After: 4,000',
          medicalIncluded: true,
          status: 'Active'
        },
        {
          levelName: 'Level 2 - Senior',
          levelCode: 'LV0002',
          scale: 'Job Grades 2024',
          minSalary: '8,000.00',
          maxSalary: '16,100.00',
          allowanceTrial: 'Trial: 1,000',
          allowanceAfter: 'After: 2,000',
          medicalIncluded: true,
          status: 'Active'
        },
        {
          levelName: 'Level 3 - Mid',
          levelCode: 'LV0003',
          scale: 'Job Grades 2024',
          minSalary: '8,000.00',
          maxSalary: '16,100.00',
          allowanceTrial: 'Trial: 500',
          allowanceAfter: 'After: 1,000',
          medicalIncluded: true,
          status: 'Active'
        },
        {
          levelName: 'Level 4 - Junior',
          levelCode: 'LV0004',
          scale: 'Job Grades 2024',
          minSalary: '3,000.00',
          maxSalary: '5,700.00',
          allowanceTrial: 'Trial: 0,000',
          allowanceAfter: 'After: 0,000',
          allowanceTrialGray: true,
          allowanceAfterGray: true,
          medicalIncluded: false,
          status: 'Active'
        },
        {
          levelName: 'Level 5 - Entry',
          levelCode: 'LV0005',
          scale: 'Job Grades 2024',
          minSalary: '1,800.00',
          maxSalary: '3,500.00',
          allowanceTrial: 'Trial: 0,000',
          allowanceAfter: 'After: 0,000',
          allowanceTrialGray: true,
          allowanceAfterGray: true,
          medicalIncluded: false,
          status: 'Active'
        }
      ]
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-table-root');
    if (!root) return;

    root.innerHTML = `
      ${SalaryScaleComponents.Header({ title: screenData.title })}
      ${SalaryScaleTableComponents.TopControls(screenData.controls)}
      ${SalaryScaleTableComponents.SalaryTable(screenData.table)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
