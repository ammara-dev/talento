/**
 * Talento App Details Screen
 * Data-driven composition for app details page.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      breadcrumb: 'Apps list/ App name',
      page: '2 of 12'
    },
    hero: {
      installLabel: 'Install app',
      app: {
        name: 'Talento employee signature',
        subtitle: 'Electronic signatures for employees',
        rating: '4.7',
        reviews: '1.5k ratings',
        logoSvg: `
          <svg viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="34" height="34" rx="8" fill="#F2F1F5"/>
            <path d="M22.8 10c-6.8 0-11.8 5-11.8 12.9 0 8.1 5 13.1 11.8 13.1 6.9 0 11.9-5 11.9-13.1C34.7 15 29.7 10 22.8 10Zm0 6.2c3.2 0 5.5 2.6 5.5 6.7 0 4.3-2.3 6.9-5.5 6.9-3.2 0-5.5-2.6-5.5-6.9 0-4.1 2.3-6.7 5.5-6.7Z" fill="#1A2E78"/>
            <rect x="31" y="29" width="9" height="9" rx="2.5" fill="#43CEE8"/>
          </svg>
        `
      }
    },
    workflow: {
      imageSrc: 'app details.png',
      alt: 'Automation of Order Workflow'
    },
    overview: {
      title: 'Overview',
      paragraphs: [
        'Dark mode for Google Docs!',
        'Dark mode for those long nights working on Google Docs!',
        'This extension changes the style of Google Docs to a dark theme that is easier on the eyes and looks cooler :)',
        'The dark mode and page color can be toggled from the controls on the top right of the page.',
        '1.5.1 Update:'
      ],
      bullets: [
        'Controls are now draggable, no more getting in your way!',
        'Improved visibility for top bar icons and word count window.'
      ]
    }
  };

  function render() {
    const root = document.getElementById('app-details-root');
    if (!root) return;

    root.innerHTML = `
      ${AppDetailsComponents.AppHeader(screenData.header)}
      ${AppDetailsComponents.Hero(screenData.hero)}
      ${AppDetailsComponents.WorkflowCard(screenData.workflow)}
      ${AppDetailsComponents.Overview(screenData.overview)}
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
