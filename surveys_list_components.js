/**
 * Talento Surveys List Components
 * Reusable UI building blocks for the Surveys list screen.
 * Font: Alexandria (project-wide standard)
 * Heading scale: 20px (section titles), 14px (body / table cells)
 */
const SurveysListComponents = (function () {
  'use strict';

  // ─────────────────────────────────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────────────────────────────────
  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // ─────────────────────────────────────────────────────────────────────────
  // ICONS
  // ─────────────────────────────────────────────────────────────────────────
  const Icons = {
    allSurveys: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="5" width="2" height="2" rx="1"/><rect x="7" y="5" width="14" height="2" rx="1"/><rect x="3" y="11" width="2" height="2" rx="1"/><rect x="7" y="11" width="10" height="2" rx="1"/><rect x="3" y="17" width="2" height="2" rx="1"/><rect x="7" y="17" width="12" height="2" rx="1"/></svg>`,
    active: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 5a5 5 0 1 1 0 10A5 5 0 0 1 12 7z"/></svg>`,
    drafts: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.71 4.04a1 1 0 0 0 0-1.41l-1.34-1.34a1 1 0 0 0-1.41 0L16.5 2.75l2.75 2.75 1.46-1.46zM4 18.17V21h2.83L19.66 8.17l-2.83-2.79L4 18.17z"/></svg>`,
    completed: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    search: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A09AAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    filter: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="6" x2="13" y2="6"/><line x1="5" y1="12" x2="10" y2="12"/><line x1="5" y1="18" x2="15" y2="18"/><circle cx="16.5" cy="6" r="1.6" fill="currentColor"/><circle cx="13.5" cy="12" r="1.6" fill="currentColor"/><circle cx="18.5" cy="18" r="1.6" fill="currentColor"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    editPencil: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.71 4.04a1 1 0 0 0 0-1.41l-1.34-1.34a1 1 0 0 0-1.41 0L16.5 2.75l2.75 2.75 1.46-1.46zM4 18.17V21h2.83L19.66 8.17l-2.83-2.79L4 18.17z"/></svg>`,
    arrowUpRight: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>`,
    moreVertical: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`
  };

  // ─────────────────────────────────────────────────────────────────────────
  // PAGE HEADER
  // Renders the page title + "Create new survey" button
  // config: { title }
  // ─────────────────────────────────────────────────────────────────────────
  function PageHeader(config) {
    return `
      <div class="svl-page-header">
        <h1 class="svl-page-title">${escapeHtml(config.title || 'Surveys')}</h1>
        <a href="create-new-survey.html" class="svl-create-btn">
          <span>Create new survey</span>
          ${Icons.plus}
        </a>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // TAB BAR
  // Renders the All / Active / Drafts / Completed tabs
  // tabs: [{ id, label, icon, active }]
  // ─────────────────────────────────────────────────────────────────────────
  function TabBar(tabs) {
    const items = Array.isArray(tabs) ? tabs : [];
    return `
      <div class="svl-tabs-bar" role="tablist">
        ${items.map(function (tab) {
          const icon = Icons[tab.icon] || '';
          return `
            <button
              type="button"
              role="tab"
              class="svl-tab${tab.active ? ' is-active' : ''}"
              aria-selected="${tab.active ? 'true' : 'false'}"
              data-tab-id="${escapeHtml(tab.id)}"
            >
              ${icon}
              <span>${escapeHtml(tab.label)}</span>
            </button>
          `;
        }).join('')}
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // TOOLBAR  (search input + filters button)
  // config: { searchPlaceholder, filterCount }
  // ─────────────────────────────────────────────────────────────────────────
  function Toolbar(config) {
    const placeholder = escapeHtml(config.searchPlaceholder || 'Search');
    const filterCount = config.filterCount != null ? config.filterCount : 0;
    return `
      <div class="svl-toolbar">
        <div class="svl-search-wrap">
          ${Icons.search}
          <input
            type="text"
            class="svl-search-input"
            placeholder="${placeholder}"
            aria-label="${placeholder}"
          />
        </div>
        <button type="button" class="svl-filter-btn">
          ${Icons.filter}
          <span>Filters</span>
          ${filterCount > 0 ? `<span class="svl-filter-count">${filterCount}</span>` : ''}
        </button>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // STATUS BADGE
  // status: 'draft' | 'active' | 'completed'
  // ─────────────────────────────────────────────────────────────────────────
  function StatusBadge(status) {
    const map = {
      draft:     { label: 'Draft',     cls: 'svl-badge svl-badge--draft' },
      active:    { label: 'Active',    cls: 'svl-badge svl-badge--active' },
      completed: { label: 'Completed', cls: 'svl-badge svl-badge--completed' }
    };
    const cfg = map[status] || map.draft;
    return `<span class="${cfg.cls}">${cfg.label}</span>`;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // CIRCULAR PROGRESS  ← KEY REUSABLE COMPONENT
  // Renders an SVG ring with a percentage label + optional sublabel.
  // Reused 3 times per survey row (Participation, Completion, Avg Score).
  //
  // config: {
  //   percent     : number   0-100
  //   label       : string   text shown in the center (e.g. "89%")
  //   sublabel    : string   text shown below the ring (e.g. "116/130")
  //   color       : string   stroke color of the filled arc
  //   trackColor  : string   stroke color of the background track
  // }
  // ─────────────────────────────────────────────────────────────────────────
  function CircularProgress(config) {
    const r = 19;
    const cx = 24;
    const cy = 24;
    const circumference = 2 * Math.PI * r; // ≈ 119.38

    const pct = Math.max(0, Math.min(100, Number(config.percent) || 0));
    const offset = circumference * (1 - pct / 100);

    const fillColor   = escapeHtml(config.color      || '#BA8AFF');
    const trackColor  = escapeHtml(config.trackColor  || '#ede9f5');
    const label       = escapeHtml(config.label       || (pct + '%'));
    const sublabel    = config.sublabel ? escapeHtml(config.sublabel) : '';

    return `
      <div class="svl-ring-cell">
        <div class="svl-ring-wrap">
          <svg width="48" height="48" viewBox="0 0 48 48" aria-hidden="true">
            <!-- background track -->
            <circle
              cx="${cx}" cy="${cy}" r="${r}"
              fill="none"
              stroke="${trackColor}"
              stroke-width="3.5"
            />
            <!-- filled arc -->
            <circle
              cx="${cx}" cy="${cy}" r="${r}"
              fill="none"
              stroke="${fillColor}"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-dasharray="${circumference.toFixed(2)}"
              stroke-dashoffset="${offset.toFixed(2)}"
              transform="rotate(-90 ${cx} ${cy})"
            />
          </svg>
          <span class="svl-ring-label" style="color:${fillColor};">${label}</span>
        </div>
        ${sublabel ? `<span class="svl-ring-sublabel">${sublabel}</span>` : ''}
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // ACTION BUTTON
  // Renders Edit (draft) or View (active/completed) + kebab menu
  // survey: { status, editHref, viewHref }
  // ─────────────────────────────────────────────────────────────────────────
  function ActionButton(survey) {
    const isDraft = survey.status === 'draft';
    if (isDraft) {
      return `
        <div class="svl-action-wrap">
          <a href="${escapeHtml(survey.editHref || '#')}" class="svl-action-btn svl-action-btn--edit">
            ${Icons.editPencil}
            <span>Edit</span>
          </a>
          <button type="button" class="svl-kebab-btn" aria-label="More actions">
            ${Icons.moreVertical}
          </button>
        </div>
      `;
    }
    return `
      <div class="svl-action-wrap">
        <a href="${escapeHtml(survey.viewHref || '#')}" class="svl-action-btn svl-action-btn--view">
          <span>View</span>
          ${Icons.arrowUpRight}
        </a>
        <button type="button" class="svl-kebab-btn" aria-label="More actions">
          ${Icons.moreVertical}
        </button>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // TABLE HEADER ROW
  // ─────────────────────────────────────────────────────────────────────────
  function TableHeader() {
    return `
      <div class="svl-table-header" role="row">
        <div class="svl-th svl-col-check"><input type="checkbox" class="table-checkbox" aria-label="Select all" /></div>
        <div class="svl-th svl-col-name">Name</div>
        <div class="svl-th svl-col-status">Status</div>
        <div class="svl-th svl-col-ring">Participation</div>
        <div class="svl-th svl-col-ring">Completion</div>
        <div class="svl-th svl-col-ring">Avg Score %</div>
        <div class="svl-th svl-col-actions">Actions</div>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SURVEY ROW  ← composes CircularProgress 3× per row
  // survey: {
  //   id, name, status,
  //   participation : { percent, label, sublabel, color, trackColor },
  //   completion    : { percent, label, sublabel, color, trackColor },
  //   avgScore      : { percent, label, sublabel, color, trackColor },
  //   editHref, viewHref
  // }
  // ─────────────────────────────────────────────────────────────────────────
  function SurveyRow(survey) {
    return `
      <div class="svl-table-row" role="row" data-survey-id="${escapeHtml(String(survey.id || ''))}" data-status="${escapeHtml(survey.status || '')}">
        <div class="svl-td svl-col-check">
          <input type="checkbox" class="table-checkbox" aria-label="Select ${escapeHtml(survey.name || '')}" />
        </div>
        <div class="svl-td svl-col-name">
          <span class="svl-survey-name">${escapeHtml(survey.name || '')}</span>
        </div>
        <div class="svl-td svl-col-status">
          ${StatusBadge(survey.status)}
        </div>
        <div class="svl-td svl-col-ring">
          ${CircularProgress(survey.participation)}
        </div>
        <div class="svl-td svl-col-ring">
          ${CircularProgress(survey.completion)}
        </div>
        <div class="svl-td svl-col-ring">
          ${CircularProgress(survey.avgScore)}
        </div>
        <div class="svl-td svl-col-actions">
          ${ActionButton(survey)}
        </div>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // SURVEY TABLE  (header + all rows)
  // config: { surveys: [...] }
  // ─────────────────────────────────────────────────────────────────────────
  function SurveyTable(config) {
    const surveys = Array.isArray(config.surveys) ? config.surveys : [];
    return `
      <div class="svl-table-outer">
        <div class="svl-table" role="table" aria-label="Surveys list">
          ${TableHeader()}
          <div class="svl-table-body" role="rowgroup">
            ${surveys.map(SurveyRow).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PUBLIC API
  // ─────────────────────────────────────────────────────────────────────────
  return {
    PageHeader,
    TabBar,
    Toolbar,
    StatusBadge,
    CircularProgress,
    SurveyRow,
    SurveyTable
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SurveysListComponents;
}
