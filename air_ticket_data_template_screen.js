/**
 * Talento Air Ticket Data Template Screen
 * Uses reusable components to render data-driven request details.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      breadcrumb: 'Request list / Air tickets request',
      progress: '1 of 2',
      title: 'Air Tickets Request',
      createdBy: {
        name: 'Mishari AlSubaie',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
      },
      createdDate: '12 Feb 2025',
      state: 'In review'
    },
    actions: {
      rejectLabel: 'Reject',
      approveLabel: 'Approve',
      activitiesLabel: 'View activities'
    },
    steps: [
      { label: 'Draft', state: 'done' },
      { label: 'Under Review', state: 'active' },
      { label: 'Manager Review', state: 'upcoming' },
      { label: 'Final Review', state: 'upcoming' }
    ],
    sections: [
      {
        id: 'overview',
        icon: 'menu',
        title: 'Request Overview',
        fields: [
          { label: 'Code', value: 'APO0002' },
          { label: 'Request Date', value: '11 Oct 2025' },
          { label: 'Air ticket request reason', value: 'Leave' },
          { label: 'Description', value: 'Air ticket request for leave' }
        ]
      },
      {
        id: 'trip',
        icon: 'ticket',
        title: 'Trip & Ticket Details',
        fields: [
          { label: 'Leave Period (from/to)', value: '12 Feb - 05 May 2025' },
          { label: 'Air ticket Type', value: 'SINGLE | 2500 | 2 years' }
        ]
      },
      {
        id: 'balance',
        icon: 'balance',
        title: 'Balance',
        fields: [
          { label: 'Current air Ticket balance', value: '2 months' },
          { label: 'If this Air Ticket approved, system will deduct', value: '12.00 months' },
          { label: 'Remaining Balance', value: '-10.00 months' }
        ],
        tabs: [
          {
            id: 'employee-eligibility',
            label: 'Employee & Eligibility',
            fields: [
              { label: 'Employee', value: 'Mishari AlSubaie' },
              { label: 'Contract', value: 'Name' },
              { label: 'Last return from leave', value: '11 March 2025' },
              { label: 'Relatives Tickets', value: 'Not allowed' },
              { label: 'Reserve ticket for', value: 'Employee and his relatives' },
              { label: 'Number of relatives', value: '3 relatives' }
            ]
          },
          {
            id: 'financial-impact',
            label: 'Financial & Policy Impact',
            fields: [
              { label: 'Estimated Cost', value: '2500 SAR' },
              { label: 'Policy Cycle', value: '2 years' },
              { label: 'Requested Count', value: '1 ticket' },
              { label: 'Eligibility Status', value: 'Eligible' }
            ]
          },
          {
            id: 'air-tickets-details',
            label: 'Air tickets details',
            fields: [
              { label: 'Ticket Type', value: 'Single' },
              { label: 'Coverage', value: 'Employee + 3 relatives' },
              { label: 'Travel Window', value: '12 Feb - 05 May 2025' },
              { label: 'Route', value: 'As per approved itinerary' }
            ]
          }
        ]
      }
    ]
  };

  const state = {
    activeBalanceTabId: 'employee-eligibility'
  };

  function render() {
    const root = document.getElementById('air-ticket-data-template-root');
    if (!root) return;

    const sectionMarkup = screenData.sections.map(function(section) {
      const sectionHtml = AirTicketDataTemplateComponents.DataSection(section);
      if (section.id !== 'balance') return sectionHtml;

      return sectionHtml + AirTicketDataTemplateComponents.BalanceTabs({
        tabs: section.tabs,
        activeTabId: state.activeBalanceTabId
      });
    }).join('');

    root.innerHTML = `
      <div class="atdt-shell">
        ${AirTicketDataTemplateComponents.Header(screenData.header)}
        ${AirTicketDataTemplateComponents.ActionStrip(screenData.actions)}
        ${AirTicketDataTemplateComponents.ProgressSteps({ steps: screenData.steps })}
        ${sectionMarkup}
      </div>
    `;
  }

  function bindEvents() {
    const root = document.getElementById('air-ticket-data-template-root');
    if (!root || root.__atdtBound) return;

    root.addEventListener('click', function(event) {
      const tabBtn = event.target.closest('[data-atdt-tab]');
      if (tabBtn) {
        state.activeBalanceTabId = tabBtn.getAttribute('data-atdt-tab');
        render();
      }
    });

    root.__atdtBound = true;
  }

  document.addEventListener('DOMContentLoaded', function() {
    render();
    bindEvents();
  });
})();
