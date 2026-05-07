/**
 * Attendance Scan Badge Screen
 * Assembles the scan UI from reusable components.
 */
(function() {
  'use strict';

  const screenData = {
    actions: [
      { label: 'Summary', icon: 'fa-regular fa-star' },
      { label: 'Reports', icon: 'fa-regular fa-file-lines' },
      { label: 'Policies', icon: 'fa-solid fa-scale-balanced' },
      { label: 'Kiosk Mode', icon: 'fa-solid fa-store', active: true }
    ],
    configuration: {
      label: 'Configuration',
      icon: 'fa-solid fa-gear'
    },
    card: {
      topText: 'Welcome to Talento HR',
      title: 'Scan your badge',
      dividerText: 'or continue with',
      manualLabel: 'Manual authentication',
      manualHref: 'attendance-kiosk-mode.html'
    }
  };

  function render() {
    const actionsRoot = document.getElementById('attendance-action-row');
    const cardRoot = document.getElementById('attendance-scan-root');

    if (actionsRoot && typeof AttendanceAuthenticationComponents !== 'undefined') {
      actionsRoot.innerHTML = AttendanceAuthenticationComponents.ActionRow({
        items: screenData.actions,
        configurationLabel: screenData.configuration.label,
        configurationIcon: screenData.configuration.icon
      });
    }

    if (cardRoot && typeof AttendanceScanBadgeComponents !== 'undefined') {
      cardRoot.innerHTML = AttendanceScanBadgeComponents.ScanCard(screenData.card);
    }
  }

  document.addEventListener('DOMContentLoaded', render);
})();
