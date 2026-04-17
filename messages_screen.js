/**
 * Talento Messages Screen
 * Data-driven composition for standalone messages page.
 */
(function() {
  'use strict';

  const screenData = {
    sidebar: {
      title: 'Inbox',
      channels: [
        { id: 'general', name: 'General' },
        { id: 'project', name: 'Talento Project' },
        { id: 'talks', name: 'Time off talks' }
      ],
      directMessages: [
        { id: 'omar', name: 'Omar AlJuhani', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', active: true },
        { id: 'muhammad', name: 'Muhammad Arafah', avatar: 'https://randomuser.me/api/portraits/men/63.jpg' },
        { id: 'fahad', name: 'Fahad AlShahrani', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' }
      ]
    },
    activeConversation: {
      name: 'Omar AlJuhani',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      role: 'Marketing lead',
      description: 'This conversation is just between @Omar AlJuhani and you.'
    },
    composer: {
      placeholder: 'Enter message...'
    }
  };

  function render() {
    const root = document.getElementById('messages-root');
    if (!root) return;

    root.innerHTML = `
      <div class="msg-layout">
        ${MessagesComponents.Sidebar(screenData.sidebar)}
        <section class="msg-chat-panel">
          ${MessagesComponents.ChatHeader(screenData.activeConversation)}
          <div class="msg-chat-body">
            ${MessagesComponents.ProfileCard(screenData.activeConversation)}
          </div>
          ${MessagesComponents.Composer(screenData.composer)}
        </section>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
