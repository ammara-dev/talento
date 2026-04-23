/**
 * Talento Surveys List Screen
 * Assembles the Surveys list page from reusable components.
 * Inject target: #surveys-root
 */
(function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────────────────
  // RING COLOR HELPERS
  // ─────────────────────────────────────────────────────────────────────────
  var TRACK = '#ede9f5';
  var TRACK_EMPTY = '#e8e7eb';

  function participationRing(percent, sublabel) {
    var isDraft = (percent === 0 && !sublabel);
    return {
      percent:    percent,
      label:      percent + '%',
      sublabel:   sublabel || '',
      color:      isDraft ? '#c9c4d4' : '#BA8AFF',
      trackColor: isDraft ? TRACK_EMPTY : TRACK
    };
  }

  function completionRing(percent, sublabel) {
    var isDraft = (percent === 0 && !sublabel);
    var color;
    if (isDraft)            color = '#c9c4d4';
    else if (percent >= 80) color = '#38B291';
    else if (percent >= 40) color = '#FECC36';
    else                    color = '#EB505C';
    return {
      percent:    percent,
      label:      percent + '%',
      sublabel:   sublabel || '',
      color:      color,
      trackColor: isDraft ? TRACK_EMPTY : TRACK
    };
  }

  function avgScoreRing(percent, sublabel) {
    percent = Number(percent);
    var isDraft = (percent === 0 && !sublabel);
    var color;
    if (isDraft) color = '#c9c4d4';
    else         color = '#2C71FF';
    return {
      percent:    percent,
      label:      percent + '%',
      sublabel:   sublabel || '',
      color:      color,
      trackColor: isDraft ? TRACK_EMPTY : TRACK
    };
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SCREEN DATA
  // ─────────────────────────────────────────────────────────────────────────
  var screenData = {
    header: { title: 'Surveys' },

    tabs: [
      { id: 'all',       label: 'All surveys', icon: 'allSurveys', active: true },
      { id: 'active',    label: 'Active',       icon: 'active',    active: false },
      { id: 'drafts',    label: 'Drafts',       icon: 'drafts',    active: false },
      { id: 'completed', label: 'Completed',    icon: 'completed', active: false }
    ],

    toolbar: {
      searchPlaceholder: 'Search',
      filterCount: 2
    },

    surveys: [
      {
        id: 1,
        name: 'Employee satisfaction and engagement survey',
        status: 'draft',
        participation: participationRing(0, ''),
        completion:    completionRing(0, ''),
        avgScore:      avgScoreRing(0, ''),
        editHref: 'create-new-survey.html',
        viewHref: '#'
      },
      {
        id: 2,
        name: 'New Hire Onboarding Feedback - January',
        status: 'active',
        participation: participationRing(89, '116/130'),
        completion:    completionRing(46, '16 completed'),
        avgScore:      avgScoreRing(32, 'Normal'),
        editHref: '#',
        viewHref: 'survey-preview.html'
      },
      {
        id: 3,
        name: 'New Hire Onboarding Feedback - January',
        status: 'active',
        participation: participationRing(89, '100/130'),
        completion:    completionRing(23, '16 completed'),
        avgScore:      avgScoreRing(10, 'Bad score'),
        editHref: '#',
        viewHref: 'survey-preview.html'
      },
      {
        id: 4,
        name: 'Manager Effectiveness Survey - Q4 2024',
        status: 'completed',
        participation: participationRing(89, '128/130'),
        completion:    completionRing(100, '16 completed'),
        avgScore:      avgScoreRing(89, 'Excellent'),
        editHref: '#',
        viewHref: 'survey-published.html'
      }
    ]
  };

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────
  function render() {
    var root = document.getElementById('surveys-root');
    if (!root || typeof SurveysListComponents === 'undefined') return;

    root.innerHTML =
      SurveysListComponents.PageHeader(screenData.header) +
      SurveysListComponents.TabBar(screenData.tabs) +
      SurveysListComponents.Toolbar(screenData.toolbar) +
      SurveysListComponents.SurveyTable({ surveys: screenData.surveys });
  }

  document.addEventListener('DOMContentLoaded', render);
})();
