/**
 * Talento AI Conversation Screen
 * Data-driven composition for AI conversation view.
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
    conversation: {
      items: [
        {
          role: 'user',
          text: 'How many employees are on leave today?',
          meta: 'You · 10:22 AM'
        },
        {
          role: 'ai',
          text: 'Here is the leave summary for 16 February 2026:\nTotal employees on leave today: 12\nBreakdown by leave type:\n· 6 Annual Leave\n· 3 Sick Leave\n· 2 Emergency Leave\n· 1 Business Trip\nWould you like to see the employee list or filter by department?',
          meta: 'Talento AI · 10:22 AM'
        },
        {
          role: 'user',
          text: 'Show me the employee list',
          meta: 'You · 10:22 AM'
        },
        {
          role: 'ai',
          text: 'Here are the employees currently on leave today:\nAnnual Leave\n· Ahmed Al-Harbi - Finance\n· Sara Al-Qahtani - HR\n· Faisal Al-Mutairi - Operations\n· Reem Al-Otaibi - Marketing\n· Khalid Al-Shammari - IT\n· Nora Al-Zahrani - Administration\nSick Leave\n· Mohammed Al-Dosari - Operations\n· Lama Al-Chamdi - HR',
          meta: 'Talento AI · 10:22 AM'
        },
        {
          role: 'ai',
          text: 'Would you like to export this list or notify department managers?',
          meta: 'Talento AI · 10:22 AM'
        }
      ]
    },
    composer: {
      placeholder: 'Ask about your workforce data...',
      sourceLabel: 'Ask AI anything',
      sendLabel: 'Send'
    }
  };

  function render() {
    const root = document.getElementById('talento-ai-conversation-root');
    if (!root) return;

    root.innerHTML = `
      <div class="tai-frame">
        ${TalentoAIComponents.Sidebar(screenData.sidebar)}
        <section class="tai-main">
          <div class="tai-main-body tai-main-body-thread">
            ${TalentoAIConversationComponents.Conversation(screenData.conversation)}
          </div>
          ${TalentoAIComponents.Composer(screenData.composer)}
        </section>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
