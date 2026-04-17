/**
 * Talento Credits Screen
 * Data-driven rendering for plans and credits page.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      breadcrumb: 'Talento AI / Credits',
      title: 'Become PRO and unlock all features'
    },
    tabs: [
      { id: 'plans', label: 'All plans' },
      { id: 'credits', label: 'Credits' }
    ],
    plans: [
      {
        type: 'core',
        name: 'Talento Core',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit etiam',
        isCurrent: true,
        features: [
          'Full-featured employee management (Core HR)',
          'Daily operations (attendance and leave management)',
          'Basic salaries and allowances',
          'Basic reports and analytics',
          'Mobile app with limited functions'
        ]
      },
      {
        type: 'pro',
        name: 'Talento Pro',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit etiam',
        isCurrent: false,
        features: [
          'All Talento Core features',
          'Talent acquisition',
          'Recruitment system (ATS, AI resume screening, interview scheduling)',
          'Advanced analytics',
          'Reporting Employee rewards and incentives',
          'Full-featured mobile app',
          'Advanced support and limited integration options'
        ]
      },
      {
        type: 'enterprise',
        name: 'Talento Enterprise',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit etiam',
        isCurrent: false,
        features: [
          'All Talento Pro features',
          'Ability to customize all system units according to company needs',
          'Consulting services for large companies',
          'Dedicated 24/7 support',
          'Dedicated account manager',
          'Custom hosting (cloud/local)',
          'Advanced integration with ERP systems'
        ]
      }
    ]
  };

  const state = {
    activeTab: 'plans'
  };

  function render() {
    const root = document.getElementById('credits-root');
    if (!root) return;

    const bodyMarkup = state.activeTab === 'plans'
      ? CreditsComponents.PlansGrid({ plans: screenData.plans })
      : '<section class="cr-empty">Credits details view is not included in this standalone mock.</section>';

    root.innerHTML = `
      <div class="cr-shell">
        ${CreditsComponents.Header(screenData.header)}
        ${CreditsComponents.Tabs({ tabs: screenData.tabs, activeTab: state.activeTab })}
        ${bodyMarkup}
      </div>
    `;
  }

  function bindEvents() {
    const root = document.getElementById('credits-root');
    if (!root || root.__creditsBound) return;

    root.addEventListener('click', function(event) {
      const tabBtn = event.target.closest('[data-cr-tab]');
      if (!tabBtn) return;
      state.activeTab = tabBtn.getAttribute('data-cr-tab');
      render();
    });

    root.__creditsBound = true;
  }

  document.addEventListener('DOMContentLoaded', function() {
    render();
    bindEvents();
  });
})();
