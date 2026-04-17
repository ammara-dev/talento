/**
 * Talento Create New Request Screen
 * Composes the screen using reusable create-new-request components.
 */
(function() {
  'use strict';

  const screenData = {
    heading: 'Create new request',
    steps: [
      { label: 'Create request for', active: true },
      { label: 'Request type', active: false },
      { label: 'Request details', active: false }
    ],
    tip: {
      title: 'Accuracy matters',
      text: 'Make sure all employee info is accurate to prevent issues with access, payroll, or compliance'
    },
    sections: [
      {
        title: 'Create request for',
        fields: [
          {
            type: 'select',
            label: 'Choose employee',
            value: 'Fahad AlShahrani',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
          }
        ]
      },
      {
        title: 'Request type',
        fields: [
          {
            type: 'select',
            label: 'Select request type',
            value: 'Time off',
            showDot: true
          }
        ]
      },
      {
        title: 'Request details',
        fields: [
          { type: 'text', label: 'Start date', required: true, placeholder: 'Select...' },
          { type: 'text', label: 'End date', required: true, placeholder: 'Select...' },
          { type: 'textarea', label: 'Description', required: true, placeholder: 'Please describe your request' },
          { type: 'attachment', label: 'Add attachments if necessary', value: 'PDF, JPG, file size no more than 10MB' }
        ]
      }
    ],
    footer: {
      discardLabel: 'Discard',
      submitLabel: 'Submit request'
    }
  };

  function renderScreen() {
    const root = document.getElementById('create-new-request-root');
    if (!root) return;

    root.innerHTML = `
      <header class="cnr-header">
        <h1 class="cnr-title">${screenData.heading}</h1>
      </header>
      <div class="cnr-layout">
        <div class="cnr-left-col">
          ${CreateNewRequestComponents.StepsList({ steps: screenData.steps })}
        </div>
        <div class="cnr-main-col">
          ${screenData.sections.map(function(section) {
            return CreateNewRequestComponents.FormSection(section);
          }).join('')}
        </div>
        <div class="cnr-right-col">
          ${CreateNewRequestComponents.TipCard(screenData.tip)}
        </div>
      </div>
      ${CreateNewRequestComponents.FooterActions(screenData.footer)}
    `;
  }

  document.addEventListener('DOMContentLoaded', renderScreen);
})();
