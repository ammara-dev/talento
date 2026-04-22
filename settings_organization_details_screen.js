/**
 * Talento Settings Organization Details Screen
 * Composes organization settings details using reusable components.
 */
(function() {
  'use strict';

  const screenData = {
    sideGroups: typeof SettingsNavigationConfig !== 'undefined'
      ? SettingsNavigationConfig.getSidebarGroups({
        activeParent: 'payroll-finance',
        activeChild: 'organization-details'
      })
      : [],
    header: {
      breadcrumb: ['Settings overview', 'Organization settings'],
      title: 'Organization settings',
      description: 'Manage your company information and organizational structure',
      icon: 'fa-solid fa-building'
    },
    cards: [
      {
        type: 'info',
        title: 'Company profile',
        actionText: 'Edit',
        actionIcon: 'fa-solid fa-pen',
        rows: [
          { label: 'Company name', value: 'TechCorp Solutions' },
          { label: 'Commercial registration number', value: '1010123456' },
          { label: 'Country', value: 'Saudi Arabia' }
        ]
      },
      {
        type: 'info',
        title: 'Contact information',
        actionText: 'Edit',
        actionIcon: 'fa-solid fa-pen',
        rows: [
          { label: 'Admin email address', value: 'demo@gmail.com' },
          { label: 'Contact person', value: 'Name Surname' },
          { label: 'Contact number', value: '+966535688802' },
          { label: 'Website', value: 'www.talento.com' }
        ]
      },
      {
        type: 'config',
        title: 'Users',
        subTitle: '19 active users',
        actionText: 'Manage',
        actionIcon: 'fa-solid fa-wrench',
        configType: 'invite',
        inviteConfig: {
          title: 'Invite new users',
          placeholder: 'Enter email addresses',
          sendText: 'Sent',
          pendingLabel: 'Pending invitations:',
          pendingInvitations: ['i.gazder@gmail.com', 'testdemo@gmail.com']
        }
      },
      {
        type: 'config',
        title: 'Departments',
        description: 'Configure your organizational department structure',
        actionText: 'Manage',
        actionIcon: 'fa-solid fa-wrench',
        actionHref: 'settings-payroll-finance.html',
        options: [
          {
            title: 'Hierarchical Departments',
            description: 'Allow creation of nested departments (sub-departments)',
            enabled: true
          },
          {
            title: 'Department head required',
            description: 'Require assignment of a department head for each department',
            enabled: true
          }
        ]
      },
      {
        type: 'config',
        title: 'Branches & legal entities',
        description: 'Manage physical locations and different legal entities',
        actionText: 'Manage',
        actionIcon: 'fa-solid fa-wrench',
        options: [
          {
            title: 'Multiple branches',
            description: 'Allow management of multiple branches in your HR system',
            enabled: true
          },
          {
            title: 'Separate legal entity per branch',
            description: 'Require legal entity for each branch in contracts and payroll',
            enabled: true
          },
          {
            title: 'Separate legal entity per branch',
            description: 'Require legal entity for each branch in contracts and payroll',
            type: 'select',
            value: 'Select form'
          }
        ]
      }
    ]
  };

  function renderMainContent() {
    const root = document.getElementById('settings-main-root');
    if (!root || typeof SettingsOrganizationDetailsComponents === 'undefined') return;

    root.innerHTML = `
      <div class="org-main-inner">
        ${SettingsOrganizationDetailsComponents.Breadcrumb({ items: screenData.header.breadcrumb })}
        ${SettingsOrganizationDetailsComponents.PageIntro(screenData.header)}
        <div class="org-cards-wrap">
          ${screenData.cards.map(function(card) {
            if (card.type === 'info') {
              return SettingsOrganizationDetailsComponents.InfoRowsCard(card);
            }
            return SettingsOrganizationDetailsComponents.ConfigCard({
              title: card.title,
              description: card.description,
              subTitle: card.subTitle,
              actionText: card.actionText,
              actionIcon: card.actionIcon,
              actionHref: card.actionHref,
              type: card.configType,
              inviteConfig: card.inviteConfig,
              options: card.options
            });
          }).join('')}
        </div>
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
