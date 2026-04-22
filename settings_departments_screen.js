/**
 * Talento Settings Departments Screen
 * Composes departments settings using reusable settings components.
 */
(function() {
  'use strict';

  const screenData = {
    sideGroups: [
      {
        title: 'GENERAL SETTINGS',
        items: [
          {
            label: 'Organization',
            icon: 'fa-solid fa-building',
            href: 'settings-organization-details.html',
            active: true,
            expanded: true,
            children: [
              { label: 'Organization details', href: 'settings-organization-details.html' },
              { label: 'Departments', href: 'settings-departments.html', active: true },
              { label: 'Branches' },
              { label: 'Org structure' }
            ]
          },
          { label: 'People & HR', icon: 'fa-solid fa-users' },
          { label: 'Payroll & finance', icon: 'fa-solid fa-coins' },
          { label: 'Communication', icon: 'fa-solid fa-comment-dots' },
          { label: 'Website', icon: 'fa-solid fa-window-maximize' },
          { label: 'Operations', icon: 'fa-solid fa-chalkboard' }
        ]
      },
      {
        title: 'ADVANCED SETTINGS',
        items: [
          { label: 'Access & security', icon: 'fa-solid fa-shield-halved' },
          { label: 'System Customization', icon: 'fa-solid fa-palette' },
          { label: 'System & integrations', icon: 'fa-solid fa-wrench' }
        ]
      }
    ],
    header: {
      breadcrumb: ['Settings overview', 'Departments'],
      title: 'Departments',
      description: 'Manage organizational department structure and department heads',
      icon: 'fa-solid fa-building'
    },
    table: {
      searchPlaceholder: 'Search by name, ID, iqama, title or email',
      filterLabel: 'Department: All',
      sortLabel: 'Sort by: All',
      rows: [
        {
          name: 'Human Resources',
          status: 'Active',
          parentDepartment: 'Human Resources',
          employeeCount: '12',
          head: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          name: 'Marketing',
          status: 'Active',
          parentDepartment: 'SMM',
          employeeCount: '2',
          head: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          name: 'Finance',
          status: 'Active',
          parentDepartment: 'Finance',
          employeeCount: '4',
          head: 'Mishari AlSubaie',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        }
      ]
    }
  };

  function renderMainContent() {
    const root = document.getElementById('settings-main-root');
    if (!root || typeof SettingsOrganizationDetailsComponents === 'undefined') return;

    root.innerHTML = `
      <div class="org-main-inner">
        ${SettingsOrganizationDetailsComponents.Breadcrumb({ items: screenData.header.breadcrumb })}
        ${SettingsOrganizationDetailsComponents.PageIntro(screenData.header)}
        ${SettingsOrganizationDetailsComponents.DepartmentsTableCard(screenData.table)}
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
