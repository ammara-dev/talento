/**
 * Talento Appraisal Employee Profile Peer Feedback Screen
 * Screen composition using reusable appraisal components.
 */
(function() {
  'use strict';

  const screenData = {
    header: {
      breadcrumb: [
        'Performance evaluations list',
        'Performance evaluations name',
        'Employee profile'
      ],
      pager: {
        backLabel: 'Back',
        progress: '2 of 213',
        nextLabel: 'Next'
      },
      employee: {
        name: 'Sarah AlSubaie',
        role: 'HR Business Partner',
        review: 'Q1 2024 Performance Review',
        period: 'January - March 2024',
        state: 'In progress',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
      },
      actions: {
        primaryLabel: 'Edit evaluation'
      }
    },
    tabs: [
      { id: 'summary', label: 'Summary', icon: 'summary' },
      { id: 'answers', label: 'Answers', icon: 'answers' },
      { id: 'peer-feedback', label: 'Peer feedback', icon: 'peerFeedback' },
      { id: 'self-review', label: 'Self review', icon: 'selfReview' },
      { id: 'evaluators', label: 'Evaluators', icon: 'evaluators' }
    ],
    feedbackItems: [
      {
        title: 'Received peer feedback 01',
        badge: 'Anonymous',
        body: 'Sarah is an exceptional designer and colleague. Her attention to detail and user-centered approach have significantly improved our product quality. She is always willing to share her knowledge and help team members grow.'
      },
      {
        title: 'Received peer feedback 02',
        badge: 'Anonymous',
        body: 'Working with Sarah has been a great experience. She brings creative solutions to complex problems and maintains a positive attitude even under pressure. Her mentorship has been invaluable to my professional development.'
      }
    ],
    pendingNotice: {
      title: 'One peer evaluation is still pending',
      text: 'The full peer feedback will be available once all evaluations are submitted.'
    }
  };

  let activeTab = 'peer-feedback';
  const root = document.getElementById('appraisal-employee-profile-peer-feedback-root');

  function renderPeerFeedbackBody() {
    if (activeTab !== 'peer-feedback') {
      return '<div class="aeppf-empty">This standalone screen focuses on the Peer feedback view.</div>';
    }

    return `
      ${AppraisalEmployeeProfilePeerFeedbackComponents.FeedbackList({ items: screenData.feedbackItems })}
      ${AppraisalEmployeeProfilePeerFeedbackComponents.PendingNotice(screenData.pendingNotice)}
    `;
  }

  function render() {
    if (!root) return;

    root.innerHTML = `
      ${AppraisalEmployeeProfileComponents.Header(screenData.header)}
      ${AppraisalEmployeeProfileComponents.Tabs({
        tabs: screenData.tabs,
        activeTab: activeTab
      })}
      ${renderPeerFeedbackBody()}
    `;
  }

  function bindEvents() {
    if (!root || root.__aepPeerFeedbackBound) return;

    root.addEventListener('click', function(event) {
      const tab = event.target.closest('[data-aep-tab]');
      if (!tab) return;

      activeTab = tab.getAttribute('data-aep-tab');
      render();
    });

    root.__aepPeerFeedbackBound = true;
  }

  document.addEventListener('DOMContentLoaded', function() {
    render();
    bindEvents();
  });
})();
