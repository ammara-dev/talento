/**
 * Talento Manage Apps Screen
 * Data-driven composition for manage-your-apps page.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      breadcrumb: 'Apps list/ My apps',
      title: 'Manage your apps'
    },
    search: {
      placeholder: 'Search for an app'
    },
    apps: [
      {
        name: 'Google workspace',
        description: 'Email, docs, sheets, and smth else',
        logo: 'https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png',
        enabled: true
      },
      {
        name: 'SAP S/4HANA',
        description: 'By integrating SAP S/4HANA with Jisr HR, you will...',
        logoSvg: `
          <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="10" width="42" height="26" rx="6" fill="#1D92D0"/>
            <path d="M10 28.2c1.7 1.2 3.4 1.7 5.6 1.7 3.3 0 5.4-1.8 5.4-4.5 0-2.2-1.2-3.3-4.2-4.2l-1.7-.5c-1.1-.3-1.5-.6-1.5-1.2 0-.7.7-1.2 1.9-1.2 1.2 0 2.6.3 4 .9l1.2-3.8c-1.5-.7-3.3-1.1-5.3-1.1-3.7 0-6.1 1.9-6.1 4.8 0 2.4 1.4 3.6 4.5 4.4l1.5.4c1 .3 1.4.6 1.4 1.2 0 .8-.7 1.2-2 1.2-1.5 0-3-.4-4.6-1.2l-1.1 3.1Zm12.4 1.3h4.3l.9-3h4.3l.9 3h4.6l-5-15.1h-5l-5 15.1Zm6.1-6.3 1.2-4.1 1.2 4.1h-2.4Zm9.2 6.3h4.3v-5.4h4.6v-3.4H42V18h5.1v-3.6H37.7v15.1Z" fill="#fff"/>
          </svg>
        `,
        enabled: true
      },
      {
        name: 'Almosafer',
        description: "Almosafer's flight ticket services are designed to ...",
        logoSvg: `
          <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
            <circle cx="23" cy="23" r="20" fill="#003E57"/>
            <rect x="14" y="15" width="18" height="16" rx="2" fill="#0A8BA7"/>
            <path d="M14 19h18l-9 6-9-6Z" fill="#fff"/>
            <rect x="18" y="12" width="10" height="4" rx="1" fill="#F2334D"/>
            <rect x="21" y="14" width="4" height="2" fill="#FFE8EC"/>
          </svg>
        `,
        enabled: true
      },
      {
        name: 'Talento employee signature',
        description: 'Electronic signatures for employees',
        logoSvg: `
          <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="34" height="34" rx="8" fill="#F2F1F5"/>
            <path d="M22.8 10c-6.8 0-11.8 5-11.8 12.9 0 8.1 5 13.1 11.8 13.1 6.9 0 11.9-5 11.9-13.1C34.7 15 29.7 10 22.8 10Zm0 6.2c3.2 0 5.5 2.6 5.5 6.7 0 4.3-2.3 6.9-5.5 6.9-3.2 0-5.5-2.6-5.5-6.9 0-4.1 2.3-6.7 5.5-6.7Z" fill="#1A2E78"/>
            <rect x="31" y="29" width="9" height="9" rx="2.5" fill="#43CEE8"/>
          </svg>
        `,
        enabled: true
      },
      {
        name: 'Oracle Fusion',
        description: 'By integrating Oracle Fusion with HR, you will...',
        logoSvg: `
          <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="34" height="34" rx="8" fill="#F2F1F5"/>
            <rect x="12" y="12" width="22" height="22" rx="8" fill="none" stroke="#D34730" stroke-width="4.5"/>
          </svg>
        `,
        enabled: true
      },
      {
        name: 'Almosafer',
        description: "Almosafer's flight ticket services are designed to ...",
        logoSvg: `
          <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="34" height="34" rx="8" fill="#F2F1F5"/>
            <path d="M14 25c3.2 0 4.5-1.6 6.2-5.4 1.2-2.8 2.2-4.1 4.8-4.1 2.4 0 3.9 1.6 3.9 4.1 0 2.6-1.4 4.1-3.8 4.1-1.4 0-2.4-.5-3.7-1.7l-2.8 2.9c1.8 1.7 3.8 2.5 6.5 2.5 4.9 0 8.3-3.2 8.3-7.8s-3.3-7.8-8.1-7.8c-4 0-6.6 2-8.6 6.8-1 2.3-1.6 2.8-3 2.8-1.4 0-2.5-1-2.5-2.3 0-1.2.8-2 2.1-2.4l-1.4-4c-3.2.8-5.1 3.2-5.1 6.5 0 3.8 2.9 6.8 7.2 6.8Z" fill="#2E63E8"/>
          </svg>
        `,
        enabled: true
      }
    ]
  };

  function render() {
    const root = document.getElementById('manage-apps-root');
    if (!root) return;

    root.innerHTML = `
      ${ManageAppsComponents.Header(screenData.header)}
      ${ManageAppsComponents.SearchBar(screenData.search)}
      ${ManageAppsComponents.AppGrid({ apps: screenData.apps })}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
