/**
 * Talento AI Screen
 * Composes Talento AI chat landing view with reusable components.
 */
(function() {
  'use strict';

  const screenData = {
    sidebar: {
      title: 'Talento AI',
      searchPlaceholder: 'Search',
      newChatLabel: 'New chat',
      historyLabel: 'HISTORY',
      historyItems: [
        { label: 'General' },
        { label: 'Talento Project' },
        { label: 'Time off talks' }
      ],
      creditsText: '40 credits left',
      creditsSubText: '16 credits in 5 days',
      addCreditsLabel: 'Add more'
    },
    emptyState: {
      title: "Hi, I'm your AI Assistant for HR & Workforce Insights",
      subtitle: 'Ask about attendance, payroll, vacations, hiring, or generate instant reports from your system data.',
      tryLabel: 'Try this:',
      suggestions: [
        'How many employees are on leave today?',
        'Show payroll summary for January',
        'Who has low attendance this month?'
      ]
    },
    composer: {
      placeholder: 'Ask about your workforce data...',
      sourceLabel: 'Base on your company data',
      sendLabel: 'Send'
    }
  };

  function render() {
    const root = document.getElementById('talento-ai-root');
    if (!root) return;

    root.innerHTML = `
      <div class="tai-frame">
        ${TalentoAIComponents.Sidebar(screenData.sidebar)}
        <section class="tai-main">
          <div class="tai-main-body">
            ${TalentoAIComponents.EmptyState(screenData.emptyState)}
          </div>
          ${TalentoAIComponents.Composer(screenData.composer)}
        </section>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
