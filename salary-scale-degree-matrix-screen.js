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
      rightToLeftColumnColors: [
        ['#B1D8FD', '#D1E6FC', '#E5EEFB', '#E5EEF9', '#E1E9F5'],
        ['#BCDDFCE5', '#D9E9FCE5', '#E5EFFBE5', '#E8EEF7E5', '#E4E8F0E5'],
        ['#C8E1FCCC', '#DEEBFBCC', '#DEEBFBCC', '#E9EEF7CC', '#E5E9F1CC'],
        ['#CDE4FBB2', '#E0ECFBB2', '#EAF0FAB2', '#ECEFF6B2', '#EAEBF1B2'],
        ['#D4E7FC99', '#E6EFFC99', '#ECF1F999', '#EEF1F799', '#EBECF199'],
        ['#DFECFC80', '#EBF1FC80', '#F1F4FA80', '#F1F3F880', '#ECECF280'],
        ['#E5F0FD66', '#EEF3FB66', '#F3F5FB66', '#F2F4F866', '#EFEEF266'],
        ['#EDF3FD4D', '#F1F5FB4D', '#F5F7FB4D', '#F5F5F84D', '#F0F0F34D']
      ],
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
    const headers = Array.isArray(screenData.matrix.degreeHeaders) ? screenData.matrix.degreeHeaders : [];
    const colorBands = Array.isArray(screenData.matrix.rightToLeftColumnColors)
      ? screenData.matrix.rightToLeftColumnColors
      : [];
    const coloredRows = (screenData.matrix.rows || []).map(function(row, rowIndex) {
      const values = Array.isArray(row.values) ? row.values : [];
      const coloredValues = headers.map(function(_, colIndex) {
        const sourceCell = values[colIndex] || { value: '' };
        const rightOffset = (headers.length - 1) - colIndex;
        const band = colorBands[rightOffset];
        const bgColor = Array.isArray(band) ? band[rowIndex] : '';
        return Object.assign({}, sourceCell, bgColor ? { bgColor } : {});
      });
      return Object.assign({}, row, { values: coloredValues });
    });
    const matrixConfig = Object.assign({}, screenData.matrix, { rows: coloredRows });

    root.innerHTML = `
      ${SalaryScaleComponents.Header({ title: screenData.title })}
      ${SalaryScaleTableComponents.TopControls(screenData.controls)}
      ${SalaryScaleDegreeMatrixComponents.MatrixTable(matrixConfig)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
