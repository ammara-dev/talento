/**
 * Settings Sidebar Shell
 * Reusable secondary sidebar container for settings pages.
 */
const SettingsSidebarShell = (function() {
  'use strict';

  let sidebarObserver = null;
  let panelClickBound = false;
  let isMobilePanelOpen = false;

  function handlePanelClick(event) {
    const trigger = event.target.closest('.set-side-item-block > .set-side-item');
    if (!trigger) return;
    const block = trigger.closest('.set-side-item-block');
    const children = block ? block.querySelector('.set-side-children') : null;
    if (!children) return;

    const chevronClicked = !!event.target.closest('.fa-chevron-down');
    const isLink = trigger.tagName === 'A';
    if (isLink && !chevronClicked) {
      return;
    }

    event.preventDefault();
    const isOpen = children.classList.toggle('is-open');
    const chevron = trigger.querySelector('.fa-chevron-down');
    if (chevron) {
      chevron.classList.toggle('is-open', isOpen);
    }
  }

  function syncWithPrimarySidebar() {
    const primary = document.getElementById('sidebar');
    const secondary = document.getElementById('settings-side-panel');
    const shell = secondary ? secondary.closest('.set-shell') : null;
    if (!primary || !secondary) return;
    const isDesktop = window.innerWidth >= 1024;
    const isPrimaryMobileDrawerOpen = primary.classList.contains('open');
    const shouldHideSettingsPanel = isDesktop
      ? !primary.classList.contains('collapsed')
      : (isPrimaryMobileDrawerOpen || !isMobilePanelOpen);
    secondary.classList.toggle('is-primary-collapsed', shouldHideSettingsPanel);
    if (shell) shell.classList.toggle('is-settings-panel-hidden', shouldHideSettingsPanel);
  }

  function setupSyncObserver() {
    const primary = document.getElementById('sidebar');
    if (!primary || sidebarObserver) return;

    sidebarObserver = new MutationObserver(function(mutations) {
      for (let i = 0; i < mutations.length; i += 1) {
        if (mutations[i].attributeName === 'class') {
          syncWithPrimarySidebar();
          break;
        }
      }
    });

    sidebarObserver.observe(primary, { attributes: true });
    window.addEventListener('resize', syncWithPrimarySidebar);
    window.addEventListener('settings-panel-toggle', function() {
      if (window.innerWidth >= 1024) return;
      isMobilePanelOpen = !isMobilePanelOpen;
      syncWithPrimarySidebar();
    });
  }

  function render(config) {
    const panel = document.getElementById(config.containerId || 'settings-side-panel');
    if (!panel || typeof SettingsOverviewComponents === 'undefined') return;

    panel.innerHTML = SettingsOverviewComponents.SettingsSidebar({
      groups: config.groups || []
    });

    if (!panelClickBound) {
      panel.addEventListener('click', handlePanelClick);
      panelClickBound = true;
    }

    setupSyncObserver();
    syncWithPrimarySidebar();
  }

  return {
    render
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsSidebarShell;
}

