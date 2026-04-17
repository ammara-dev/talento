/**
 * Talento Notifications Screen
 * Data-driven composition for Notifications page.
 */
(function() {
  'use strict';

  const screenData = {
    title: 'Notifications',
    configLabel: 'Configuration',
    items: [
      {
        type: 'system',
        title: 'Talento team',
        subtitle: 'System update',
        message: 'New update available! Check out the improved dashboard and faster loading times. Find out what',
        time: '30 min ago',
        isNew: true
      },
      {
        type: 'reminder',
        title: 'Annual report',
        subtitle: 'Reminder',
        message: 'Your annual report form must be submitted by October 25.',
        time: '1 hr ago',
        isNew: true
      },
      {
        type: 'celebration',
        title: "Mishari AlSubaie's Birthday",
        subtitle: 'Celebration',
        message: 'December 19, 2025 - Happy Birthday to Mishari AlSubaie',
        time: '2 hrs ago',
        isNew: true
      },
      {
        type: 'reminder',
        title: 'Annual report',
        subtitle: 'Reminder',
        message: 'Your annual report form must be submitted by October 25.',
        time: '4 hr ago',
        isNew: false
      },
      {
        type: 'system',
        title: 'Talento team',
        subtitle: 'System update',
        message: 'New update available! Check out the improved dashboard and faster loading times. Find out what',
        time: '7 hr ago',
        isNew: false
      }
    ]
  };

  function renderScreen() {
    const root = document.getElementById('notifications-root');
    if (!root) return;

    root.innerHTML = `
      ${NotificationsComponents.Header(screenData)}
      ${NotificationsComponents.NotificationList({ items: screenData.items })}
    `;
  }

  document.addEventListener('DOMContentLoaded', renderScreen);
})();
