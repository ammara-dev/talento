/**
 * Attendance Kiosk Mode Screen
 * Assembles the kiosk authentication UI from reusable components.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      title: 'Attendance'
    },
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
      backText: 'Back',
      backHref: 'attendance-scan-badge.html',
      title: 'Manual authentication',
      subtitle: '',
      inputLabel: 'Enter your name',
      inputPlaceholder: 'Enter your name',
      buttonText: 'Continue',
      buttonHref: 'attendance-authentication-screen.html'
    }
  };

  function bindOtpInputs(root) {
    const inputs = root.querySelectorAll('.att-otp-input');
    if (!inputs.length) return;

    inputs.forEach(function(input, index) {
      input.addEventListener('input', function() {
        const digits = input.value.replace(/\D/g, '');
        input.value = digits.slice(-1);
        if (input.value && inputs[index + 1]) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && !input.value && inputs[index - 1]) {
          inputs[index - 1].focus();
        }
      });
    });
  }

  function render() {
    const actionsRoot = document.getElementById('attendance-action-row');
    const cardRoot = document.getElementById('attendance-auth-root');

    if (actionsRoot && typeof AttendanceAuthenticationComponents !== 'undefined') {
      actionsRoot.innerHTML = AttendanceAuthenticationComponents.ActionRow({
        items: screenData.actions,
        configurationLabel: screenData.configuration.label,
        configurationIcon: screenData.configuration.icon
      });
    }

    if (cardRoot && typeof AttendanceAuthenticationComponents !== 'undefined') {
      cardRoot.innerHTML = AttendanceAuthenticationComponents.ManualAuthCard(screenData.card);
      bindOtpInputs(cardRoot);
    }
  }

  document.addEventListener('DOMContentLoaded', render);
})();
