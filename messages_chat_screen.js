/**
 * Talento Messages Chat Screen
 * Composes chat timeline using reusable message components.
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
    conversation: {
      name: 'Omar AlJuhani',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    timeline: [
      { type: 'divider', label: 'Yesterday' },
      {
        sender: 'other',
        senderLabel: 'Ali Sarraf',
        time: '9:16 AM',
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        text: "Hello, let's move our call from 5:00 PM to 4:00 PM?"
      },
      {
        sender: 'you',
        senderLabel: 'You',
        time: '10:22 AM',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        text: 'Sure, no problem!'
      },
      {
        sender: 'you',
        senderLabel: 'You',
        time: '10:24 AM',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        text: 'Please send me the contract for review'
      },
      { type: 'divider', label: 'Today' },
      {
        sender: 'other',
        senderLabel: 'Ali Sarraf',
        time: '9:16 AM',
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        text: 'Give me 10 mins'
      },
      {
        sender: 'other',
        senderLabel: 'Ali Sarraf',
        time: '',
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        text: '',
        attachment: {
          name: 'filename212.pdf',
          meta: '2.4 MB · Download'
        }
      },
      {
        sender: 'you',
        senderLabel: 'You',
        time: '10:24 AM',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        text: 'Thanks!'
      }
    ],
    composer: {
      placeholder: 'Also i wl'
    }
  };

  function render() {
    const root = document.getElementById('messages-chat-root');
    if (!root) return;

    root.innerHTML = `
      <div class="msg-layout">
        ${MessagesComponents.Sidebar(screenData.sidebar)}
        <section class="msg-chat-panel">
          ${MessagesComponents.ChatHeader(screenData.conversation)}
          <div class="msg-chat-body msg-chat-body-thread">
            ${MessagesChatComponents.MessageList({ items: screenData.timeline })}
          </div>
          ${MessagesComponents.Composer(screenData.composer)}
        </section>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', render);
})();
