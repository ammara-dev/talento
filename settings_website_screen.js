/**
 * Talento Settings Website Screen
 * Assembles the website settings UI from reusable components.
 */
(function() {
  'use strict';

  const screenData = {
    sideGroups: typeof SettingsNavigationConfig !== 'undefined'
      ? SettingsNavigationConfig.getSidebarGroups({
          activeParent: 'website'
        })
      : [],

    header: {
      breadcrumb: ['Settings overview', 'Website'],
      title: 'Website',
      description: 'Settings on this page will apply to this website',
      icon: 'fa-solid fa-window-maximize',
      previewText: 'Preview'
    },

    tabs: [
      { label: 'Appearance', active: true },
      { label: 'Content' },
      { label: 'Forms' },
      { label: 'SEO' },
      { label: 'Analytics' }
    ],

    cards: [
      {
        title: 'Branding',
        description: 'Customize the look of your careers site',
        rows: [
          {
            title: 'Company logo',
            description: 'Upload your company logo (PNG or SVG, max 2MB)',
            control: 'upload',
            uploadText: 'Upload Logo'
          },
          {
            title: 'Primary color',
            description: 'Choose the primary brand color for the careers site',
            control: 'color',
            value: '#BA8AFF'
          },
          {
            title: 'Font family',
            description: 'Choose font for headings and text',
            control: 'select',
            value: 'Alexandria'
          }
        ]
      },
      {
        title: 'Layout',
        description: 'Configure page structure',
        rows: [
          {
            title: 'Show hero image',
            description: 'Display a large image at the top of the page',
            control: 'toggle',
            enabled: true
          },
          {
            title: 'Show values section',
            description: 'Display company values and benefits',
            control: 'toggle',
            enabled: true
          },
          {
            title: 'Show employee testimonials',
            description: 'Display current employee testimonials',
            control: 'toggle',
            enabled: true
          }
        ]
      }
    ]
  };

  function renderMainContent() {
    const root = document.getElementById('settings-main-root');
    if (
      !root ||
      typeof SettingsOrganizationDetailsComponents === 'undefined' ||
      typeof SettingsPayrollFinanceComponents === 'undefined' ||
      typeof SettingsWebsiteComponents === 'undefined'
    ) return;

    root.innerHTML = `
      <div class="website-main-inner">
        ${SettingsOrganizationDetailsComponents.Breadcrumb({ items: screenData.header.breadcrumb })}
        ${SettingsWebsiteComponents.WebsitePageIntro(screenData.header)}
        ${SettingsPayrollFinanceComponents.PayrollTabs({ tabs: screenData.tabs })}
        ${screenData.cards.map(SettingsWebsiteComponents.WebsiteSettingsCard).join('')}
      </div>
    `;
  }

  function render() {
    if (typeof SettingsSidebarShell !== 'undefined') {
      SettingsSidebarShell.render({
        containerId: 'settings-side-panel',
        groups: screenData.sideGroups
      });
    }
    renderMainContent();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
