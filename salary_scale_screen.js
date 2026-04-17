/**
 * Talento Salary Scale Screen
 * Data-driven composition for salary scale page.
 */
(function() {
  'use strict';

  const screenData = {
    title: 'Salary scale',
    searchPlaceholder: 'Search by name, ID, iqama, title or email',
    activeTab: 'salary-scale',
    tabs: [
      { id: 'salary-scale', label: 'Salary scale' },
      { id: 'level-overview', label: 'Level overview' },
      { id: 'degree-matrix', label: 'Degree matrix' }
    ],
    scales: [
      {
        code: 'SC0002',
        status: 'Draft',
        name: 'Name salary',
        metrics: [
          { label: 'Salary levels', value: '07' },
          { label: 'Company code', value: '23EFSDR' },
          { label: 'Salary degree', value: 'L3' }
        ]
      },
      {
        code: 'SC0002',
        status: 'Active',
        name: 'Name salary',
        metrics: [
          { label: 'N° of levels', value: '07' },
          { label: 'Company code', value: '23EFSDR' },
          { label: 'Salary degree', value: 'L3' }
        ]
      }
    ]
  };

  function render() {
    const root = document.getElementById('salary-scale-root');
    if (!root) return;

    root.innerHTML = `
      ${SalaryScaleComponents.Header({ title: screenData.title })}
      ${SalaryScaleComponents.TopTabs({
        tabs: screenData.tabs,
        activeTab: screenData.activeTab,
        searchPlaceholder: screenData.searchPlaceholder
      })}
      ${SalaryScaleComponents.ScaleGrid({ scales: screenData.scales })}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
