/**
 * Talento Settings Departments Screen
 * Composes departments settings using reusable settings components.
 */
(function() {
  'use strict';

  const screenData = {
    sideGroups: typeof SettingsNavigationConfig !== 'undefined'
      ? SettingsNavigationConfig.getSidebarGroups({
        activeParent: 'payroll-finance',
        activeChild: 'departments'
      })
      : [],
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
