/**
 * Talento Credits Packs Screen
 * Data-driven composition for credits packs view.
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
    packs: [
      { label: 'Credits/Month', value: '300', price: '$5', buttonLabel: 'Purchase' },
      { label: 'Credits/Month', value: '660', price: '$5', buttonLabel: 'Purchase' },
      { label: 'Credits/Month', value: '1320', price: '$5', buttonLabel: 'Purchase' },
      { label: 'Credits/Month', value: '3500', bonus: '+ 200Bonus', price: '$5', buttonLabel: 'Purchase' }
    ]
  };

  function render() {
    const root = document.getElementById('credits-packs-root');
    if (!root) return;

    root.innerHTML = `
      <div class="cr-shell">
        ${CreditsComponents.Header(screenData.header)}
        ${CreditsComponents.Tabs({ tabs: screenData.tabs, activeTab: 'credits' })}
        ${CreditsPacksComponents.CreditsPackGrid({ packs: screenData.packs })}
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
