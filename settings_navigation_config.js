/**
 * Talento Settings Navigation Config
 * Shared sidebar data builder for all settings screens.
 */
const SettingsNavigationConfig = (function() {
  'use strict';

  const baseGroups = [
    {
      title: 'GENERAL SETTINGS',
      items: [
        {
          key: 'organization',
          label: 'Organization',
          icon: 'fa-solid fa-building',
          children: [
            { key: 'organization-details', label: 'Organization details', href: 'settings-organization-details.html' },
            { key: 'branches', label: 'Branches' },
            { key: 'org-structure', label: 'Org structure' }
          ]
        },
        { key: 'people-hr', label: 'People & HR', icon: 'fa-solid fa-users' },
        {
          key: 'payroll-finance',
          label: 'Payroll & finance',
          icon: 'fa-solid fa-coins',
          children: [
            { key: 'payroll-settings', label: 'Payroll settings', href: 'settings-payroll-finance.html' },
            { key: 'departments', label: 'Departments', href: 'settings-payroll-finance.html' },
            { key: 'salary-scales', label: 'Salary scales' },
            { key: 'deductions', label: 'Deductions' }
          ]
        },
        { key: 'communication', label: 'Communication', icon: 'fa-solid fa-comment-dots' },
        { key: 'website', label: 'Website', icon: 'fa-solid fa-window-maximize' },
        { key: 'operations', label: 'Operations', icon: 'fa-solid fa-chalkboard' }
      ]
    },
    {
      title: 'ADVANCED SETTINGS',
      items: [
        { key: 'access-security', label: 'Access & security', icon: 'fa-solid fa-shield-halved' },
        { key: 'system-customization', label: 'System Customization', icon: 'fa-solid fa-palette' },
        { key: 'system-integrations', label: 'System & integrations', icon: 'fa-solid fa-wrench' }
      ]
    }
  ];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function getSidebarGroups(options) {
    const state = options || {};
    const activeParent = state.activeParent || '';
    const activeChild = state.activeChild || '';
    const groups = clone(baseGroups);

    groups.forEach(function(group) {
      (group.items || []).forEach(function(item) {
        const children = Array.isArray(item.children) ? item.children : [];
        let hasActiveChild = false;

        children.forEach(function(child) {
          child.active = child.key === activeChild;
          hasActiveChild = hasActiveChild || child.active;
        });

        item.active = item.key === activeParent || hasActiveChild;
        item.expanded = children.length > 0 && (item.key === activeParent || hasActiveChild);
      });
    });

    return groups;
  }

  return {
    getSidebarGroups
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsNavigationConfig;
}
