/**
 * Settings Sidebar Shell
 * Reusable secondary sidebar container for settings pages.
 */
const SettingsSidebarShell = (function() {
  'use strict';

  let sidebarObserver = null;

  function syncWithPrimarySidebar() {
    const primary = document.getElementById('sidebar');
    const secondary = document.getElementById('settings-side-panel');
    if (!primary || !secondary) return;
    secondary.classList.toggle('is-primary-collapsed', primary.classList.contains('collapsed'));
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
  }

  function render(config) {
    const panel = document.getElementById(config.containerId || 'settings-side-panel');
    if (!panel || typeof SettingsOverviewComponents === 'undefined') return;

    panel.innerHTML = SettingsOverviewComponents.SettingsSidebar({
      groups: config.groups || []
    });

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

