/**
 * Talento Salary Scale Degree Matrix Screen
 * Data-driven composition for degree matrix layout.
 */
(function() {
  'use strict';

  const screenData = {
    title: 'Salary scale',
    controls: {
      tabs: [
        { id: 'salary', label: 'Salary scale', active: false },
        { id: 'overview', label: 'Level overview', active: false },
        { id: 'matrix', label: 'Degree matrix', active: true }
      ],
      configLabel: 'Configuration'
    },
    matrix: {
      degreeHeaders: ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
      rows: [
        {
          levelName: 'Level 1 - Executive',
          levelCode: 'LV0001',
          levelDotColor: '#234B72',
          values: [
            { value: '12k' }, { value: '14k' }, { value: '15k' }, { value: '17k' },
            { value: '18k', tone: 'light' }, { value: '20k', tone: 'light' }, { value: '21k', tone: 'medium' },
            { value: '23k', tone: 'medium' }, { value: '24k', tone: 'dark' }, { value: '25k', tone: 'dark' }
          ]
        },
        {
          levelName: 'Level 2 - Senior',
          levelCode: 'LV0002',
          levelDotColor: '#346BA3',
          values: [
            { value: '8k' }, { value: '9k' }, { value: '10k' }, { value: '11k' },
            { value: '12k' }, { value: '13k', tone: 'light' }, { value: '13k', tone: 'light' },
            { value: '14k', tone: 'medium' }, { value: '15k', tone: 'medium' }, { value: '16k', tone: 'dark' }
          ]
        },
        {
          levelName: 'Level 3 - Mid',
          levelCode: 'LV0003',
          levelDotColor: '#4784BC',
          values: [
            { value: '8k' }, { value: '8k' }, { value: '8k' }, { value: '8k' }, { value: '8k' },
            { value: '8k' }, { value: '8k' }, { value: '8k' }, { value: '8k' }, { value: '8k', tone: 'soft' }
          ]
        },
        {
          levelName: 'Level 4 - Junior',
          levelCode: 'LV0004',
          levelDotColor: '#70ABDD',
          values: [
            { value: '3k' }, { value: '3k' }, { value: '4k' }, { value: '4k' }, { value: '4k' },
            { value: '4k' }, { value: '5k' }, { value: '5k', tone: 'soft' }, { value: '5k', tone: 'soft' }, { value: '6k', tone: 'soft' }
          ]
        },
        {
          levelName: 'Level 5 - Entry',
          levelCode: 'LV0005',
          levelDotColor: '#92C0E5',
          values: [
            { value: '2k' }, { value: '2k' }, { value: '2k' }, { value: '2k' }, { value: '2k' },
            { value: '2k' }, { value: '3k', tone: 'soft' }, { value: '3k', tone: 'soft' }, { value: '3k', tone: 'soft' }, { value: '3k', tone: 'soft' }
          ]
        }
      ]
    }
  };

  function render() {
    const root = document.getElementById('salary-scale-degree-matrix-root');
    if (!root) return;

    root.innerHTML = `
      ${SalaryScaleComponents.Header({ title: screenData.title })}
      ${SalaryScaleTableComponents.TopControls(screenData.controls)}
      ${SalaryScaleDegreeMatrixComponents.MatrixTable(screenData.matrix)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
