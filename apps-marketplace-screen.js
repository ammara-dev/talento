/**
 * Talento Apps Marketplace Screen
 * Data-driven composition for apps marketplace page.
 */
(function() {
  'use strict';

  const logos = {
    google: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.35 12.2c0-.71-.06-1.23-.2-1.77H12v3.35h5.37c-.11.83-.73 2.08-2.08 2.92l-.02.11 3.02 2.34.21.02c1.94-1.79 3.05-4.42 3.05-7.97Z" fill="#4285F4"/><path d="M12 21.75c2.63 0 4.84-.87 6.45-2.37l-3.07-2.38c-.82.58-1.92.98-3.38.98-2.58 0-4.76-1.69-5.54-4.03l-.1.01-3.13 2.43-.03.09c1.6 3.18 4.89 5.27 8.8 5.27Z" fill="#34A853"/><path d="M6.46 13.95A5.98 5.98 0 0 1 6.14 12c0-.68.12-1.35.31-1.95l-.01-.13-3.17-2.47-.1.05A9.73 9.73 0 0 0 2.25 12c0 1.56.37 3.03 1.02 4.32l3.19-2.37Z" fill="#FBBC05"/><path d="M12 6.01c1.84 0 3.09.79 3.8 1.45l2.77-2.7C16.83 3.16 14.63 2.25 12 2.25c-3.92 0-7.2 2.1-8.8 5.28l3.28 2.55c.78-2.34 2.96-4.07 5.52-4.07Z" fill="#EA4335"/></svg>',
    sap: '<svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="10" width="42" height="26" rx="6" fill="#1D92D0"/><path d="M10 28.2c1.7 1.2 3.4 1.7 5.6 1.7 3.3 0 5.4-1.8 5.4-4.5 0-2.2-1.2-3.3-4.2-4.2l-1.7-.5c-1.1-.3-1.5-.6-1.5-1.2 0-.7.7-1.2 1.9-1.2 1.2 0 2.6.3 4 .9l1.2-3.8c-1.5-.7-3.3-1.1-5.3-1.1-3.7 0-6.1 1.9-6.1 4.8 0 2.4 1.4 3.6 4.5 4.4l1.5.4c1 .3 1.4.6 1.4 1.2 0 .8-.7 1.2-2 1.2-1.5 0-3-.4-4.6-1.2l-1.1 3.1Zm12.4 1.3h4.3l.9-3h4.3l.9 3h4.6l-5-15.1h-5l-5 15.1Zm6.1-6.3 1.2-4.1 1.2 4.1h-2.4Zm9.2 6.3h4.3v-5.4h4.6v-3.4H42V18h5.1v-3.6H37.7v15.1Z" fill="#fff"/></svg>',
    almosafer: '<svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><circle cx="23" cy="23" r="20" fill="#003E57"/><rect x="14" y="15" width="18" height="16" rx="2" fill="#0A8BA7"/><path d="M14 19h18l-9 6-9-6Z" fill="#fff"/><rect x="18" y="12" width="10" height="4" rx="1" fill="#F2334D"/></svg>',
    talento: '<svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="34" height="34" rx="8" fill="#F2F1F5"/><path d="M22.8 10c-6.8 0-11.8 5-11.8 12.9 0 8.1 5 13.1 11.8 13.1 6.9 0 11.9-5 11.9-13.1C34.7 15 29.7 10 22.8 10Zm0 6.2c3.2 0 5.5 2.6 5.5 6.7 0 4.3-2.3 6.9-5.5 6.9-3.2 0-5.5-2.6-5.5-6.9 0-4.1 2.3-6.7 5.5-6.7Z" fill="#1A2E78"/><rect x="31" y="29" width="9" height="9" rx="2.5" fill="#43CEE8"/></svg>',
    oracle: '<svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="6" width="34" height="34" rx="8" fill="#F2F1F5"/><rect x="12" y="12" width="22" height="22" rx="8" fill="none" stroke="#D34730" stroke-width="4.5"/></svg>'
  };

  const screenData = {
    header: {
      title: 'Apps marketplace',
      developerLabel: 'Developer center',
      myAppsLabel: 'My apps'
    },
    search: {
      placeholder: 'Search for an app'
    },
    categories: {
      chips: [
        { label: 'All categories', count: '123', active: true },
        { label: 'Sales', count: '12' },
        { label: 'Services', count: '04' },
        { label: 'Accounting', count: '123' },
        { label: 'Inventory', count: '32' },
        { label: 'Manufacturing', count: '16' },
        { label: 'Website', count: '38' },
        { label: 'Marketing', count: '90' },
        { label: 'Human resources', count: '44' },
        { label: 'Productivity', count: '11' },
        { label: 'Customizations', count: '02' },
        { label: 'Technical', count: '01' },
        { label: 'Localization', count: '02' },
        { label: 'Themes', count: '63' },
        { label: 'Operations', count: '70' },
        { label: 'Export', count: '42' },
        { label: 'Forms', count: '160' },
        { label: 'Purchase', count: '51' },
        { label: 'Generic modules', count: '75' }
      ]
    },
    featured: {
      title: 'Featured apps',
      banner: {
        title: 'Odoo apps store',
        description: 'Over 335 apps to extend your system capabilities',
        cta: 'Browse apps',
        brand: 'odoo'
      },
      apps: [
        { name: 'Google workspace', description: 'Email, docs, sheets, and smth else', logoSvg: logos.google },
        { name: 'SAP S/4HANA', description: 'By integrating SAP S/4HANA with Jisr HR, you will...', logoSvg: logos.sap },
        { name: 'Almosafer', description: "Almosafer's flight ticket services are designed to ...", logoSvg: logos.almosafer },
        { name: 'Talento employee signature', description: 'Electronic signatures for employees', logoSvg: logos.talento },
        { name: 'Oracle Fusion', description: 'By integrating Oracle Fusion with HR, you will...', logoSvg: logos.oracle },
        { name: 'Almosafer', description: "Almosafer's flight ticket services are designed to ...", logoSvg: logos.almosafer }
      ]
    },
    youMightLike: {
      title: 'Apps you might like',
      apps: [
        { name: 'Fleet rental vehicle', description: 'Vehicle management', rating: '4.7', artClass: 'is-green', artLabel: '#1' },
        { name: 'POS Arabic receipt', description: 'Arabic receipts for point of sale', rating: '4.5', artClass: 'is-blue', artLabel: 'ZIAB' },
        { name: 'Dynamic global export excel', description: 'Dynamically export any data to Excel', rating: '4.2', artClass: 'is-purple', artLabel: '#1' },
        { name: 'Odoo 14 accounting', description: 'Full accounting for Odoo 14', rating: '3.5', artClass: 'is-light', artLabel: 'shopify' },
        { name: 'Odoo 14 Human Resources P...', description: 'Payroll management for Odoo 14', rating: '4.1', artClass: 'is-gray', artLabel: 'GraphQL' }
      ]
    },
    allApps: {
      title: 'All apps',
      apps: [
        { name: 'Dynamic global export excel', description: 'Dynamically export any data to Excel', rating: '4.2', artClass: 'is-cyan', artLabel: 'doo.sh' },
        { name: 'POS Arabic receipt', description: 'Arabic receipts for point of sale', rating: '4.5', artClass: 'is-soft', artLabel: 'Build app' },
        { name: 'Odoo 14 accounting', description: 'Full accounting for Odoo 14', rating: '3.5', artClass: 'is-light', artLabel: 'shopify' },
        { name: 'Fleet rental vehicle', description: 'Vehicle management', rating: '4.7', artClass: 'is-yellow', artLabel: '#1' },
        { name: 'Odoo 14 Human Resources P...', description: 'Payroll management for Odoo 14', rating: '4.1', artClass: 'is-gray', artLabel: 'GraphQL' }
      ]
    }
  };

  function render() {
    const root = document.getElementById('apps-marketplace-root');
    if (!root) return;

    root.innerHTML = `
      ${AppsMarketplaceComponents.PageHeader(screenData.header)}
      ${AppsMarketplaceComponents.Search(screenData.search)}
      ${AppsMarketplaceComponents.CategoryChips(screenData.categories)}
      ${AppsMarketplaceComponents.FeaturedSection(screenData.featured)}
      ${AppsMarketplaceComponents.MarketplaceSection(screenData.youMightLike)}
      ${AppsMarketplaceComponents.MarketplaceSection(screenData.allApps)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
