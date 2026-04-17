/**
 * Talento Appraisal Employee Profile Self Review Screen
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
    selfReview: {
      head: {
        title: 'Self-evaluation review',
        subtitle: 'Completed by Sarah AlSubaie'
      },
      items: [
        {
          question: 'What are your key achievements this quarter?',
          answer: 'I have strengthened my technical skills and continued to improve my workflow. I recently completed advanced prototyping courses and implemented new techniques in my projects.'
        },
        {
          question: 'What areas would you like to focus on for development?',
          answer: 'I would like to deepen my understanding of product strategy and business metrics. I also want to improve my presentation skills to better communicate design decisions to stakeholders. Learning advanced animation and interaction design is also on my list.'
        },
        {
          question: 'What support do you need from your manager or the organization?',
          answer: 'I would appreciate opportunities to attend industry conferences and participate in strategic planning sessions. Access to advanced training in design leadership would also be valuable as I work towards a leadership role.'
        }
      ]
    }
  };

  let activeTab = 'self-review';
  const root = document.getElementById('appraisal-employee-profile-self-review-root');

  function renderSelfReviewBody() {
    if (activeTab !== 'self-review') {
      return '<div class="aepr-empty">This standalone screen focuses on the Self review view.</div>';
    }

    return AppraisalEmployeeProfileSelfReviewComponents.SelfReviewView(screenData.selfReview);
  }

  function render() {
    if (!root) return;

    root.innerHTML = `
      ${AppraisalEmployeeProfileComponents.Header(screenData.header)}
      ${AppraisalEmployeeProfileComponents.Tabs({
        tabs: screenData.tabs,
        activeTab: activeTab
      })}
      ${renderSelfReviewBody()}
    `;
  }

  function bindEvents() {
    if (!root || root.__aepSelfReviewBound) return;

    root.addEventListener('click', function(event) {
      const tab = event.target.closest('[data-aep-tab]');
      if (!tab) return;

      activeTab = tab.getAttribute('data-aep-tab');
      render();
    });

    root.__aepSelfReviewBound = true;
  }

  document.addEventListener('DOMContentLoaded', function() {
    render();
    bindEvents();
  });
})();

