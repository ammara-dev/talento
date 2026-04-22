/**
 * Talento Settings Overview Screen
 * Composes the settings shell and overview cards using reusable components.
 */
(function() {
  'use strict';

  const screenData = {
    sideGroups: typeof SettingsNavigationConfig !== 'undefined'
      ? SettingsNavigationConfig.getSidebarGroups({})
      : [],
    sections: [
      {
        title: 'General settings',
        description: 'Configure day-to-day HR and business operations',
        cards: [
          {
            icon: 'fa-solid fa-building',
            title: 'Organization',
            description: 'Manage company structure, branches, and operational settings',
            items: ['Company profile', 'Branches & legal entities', 'Departments', 'Working calendar'],
            actionHref: 'settings-organization-details.html'
          },
          {
            icon: 'fa-solid fa-users',
            title: 'People & HR',
            description: 'Configure employee management and HR processes',
            items: ['Attendance rules', 'Time off types', 'Contracts', 'Employees']
          },
          {
            icon: 'fa-solid fa-coins',
            title: 'Payroll & finance',
            description: 'Configure salary structures, deductions, and financial policies',
            items: ['Salary scales', 'Payroll settings', 'Deductions', 'Loans'],
            actionHref: 'settings-payroll-finance.html'
          },
          {
            icon: 'fa-solid fa-comment-dots',
            title: 'Communication',
            description: 'Manage notification templates and communication channels',
            items: ['Notifications', 'Custom alerts', 'SMS templates', 'Email templates']
          },
          {
            icon: 'fa-solid fa-window-maximize',
            title: 'Website',
            description: 'Settings on this page will apply to this website',
            items: ['Website', 'Features', 'SEO', 'Customization']
          },
          {
            icon: 'fa-solid fa-chalkboard',
            title: 'Operations',
            description: 'Manage recruitment, appraisal systems and operational tools',
            items: ['Appraisal settings', 'Recruitment', 'Projects']
          }
        ]
      },
      {
        title: 'Advanced settings',
        description: 'System-level configuration, security, and technical settings',
        badge: 'Restricted access',
        cards: [
          {
            icon: 'fa-solid fa-shield-halved',
            title: 'Access & security',
            description: 'Control user permissions and security settings',
            items: ['System users', 'Roles & permissions', 'Activity logs', 'Two-factor auth']
          },
          {
            icon: 'fa-solid fa-palette',
            title: 'System Customization',
            description: 'Customize system appearance and interface settings',
            items: ['Background image', 'Disabled menus', 'Translations', 'Branding']
          },
          {
            icon: 'fa-solid fa-wrench',
            title: 'Technical',
            description: 'Advanced technical configuration and integrations',
            items: ['Apps', 'API Keys', 'AI Configuration', 'Email Servers']
          }
        ]
      }
    ]
  };

  function renderMainContent() {
    const root = document.getElementById('settings-main-root');
    if (!root || typeof SettingsOverviewComponents === 'undefined') return;

    root.innerHTML = `
      <div class="set-main-inner">
        <header class="set-main-header">
          <h1>Settings overview</h1>
          <p>Configure and manage your HR system settings</p>
        </header>
        ${screenData.sections.map(function(section) {
          return `
            <section class="set-main-section">
              ${SettingsOverviewComponents.SectionIntro({
                title: section.title,
                description: section.description,
                badge: section.badge
              })}
              ${SettingsOverviewComponents.SettingsGrid({
                cards: section.cards,
                variant: section.badge ? 'advanced-muted' : ''
              })}
            </section>
          `;
        }).join('')}
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

