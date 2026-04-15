/**
 * Talento Candidate Profile Components
 * Reusable UI components for the Candidate Profile screen.
 */
const CandidateProfileComponents = (function() {
  'use strict';

  const Icons = {
    chevronLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    check: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    close: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    edit: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    more: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`,
    activity: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    download: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    mail: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>`,
    phone: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 13 19.8 19.8 0 0 1 1.62 4.4 2 2 0 0 1 3.6 2.2h3a2 2 0 0 1 2 1.72c.12.97.39 1.9.79 2.77a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.87.4 1.8.67 2.77.79a2 2 0 0 1 1.72 2z"/></svg>`,
    briefcase: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
    calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    mapPin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    graduationCap: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    user: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    list: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`
  };

  function PipelineHeader({ items = [], currentIndex = 1, total = 1 }) {
    const crumbs = items.map((item, idx) => {
      const isLast = idx === items.length - 1;
      return isLast
        ? `<span class="cp-crumb-current">${item.label}</span>`
        : `<a href="${item.href || '#'}" class="cp-crumb-link">${item.label}</a>`;
    }).join(`<span class="cp-crumb-separator">/</span>`);

    return `
      <div class="cp-top-row">
        <div class="cp-breadcrumb">${crumbs}</div>
        <div class="cp-nav-inline">
          <button class="cp-link-btn">${Icons.chevronLeft} Back</button>
          <span>${currentIndex} of ${total}</span>
          <button class="cp-link-btn">Next ${Icons.chevronRight}</button>
        </div>
      </div>
    `;
  }

  function CandidateHeading({ name, badge, jobTitle, appliedDate, recruiterName, recruiterAvatar }) {
    return `
      <div class="cp-heading-row">
        <div class="cp-heading-left">
          <div class="cp-title-wrap">
            <h1 class="cp-main-title">${name}</h1>
            <span class="cp-status-badge">${badge}</span>
          </div>
          <div class="cp-meta-row">
            <span>Applied Job <strong>${jobTitle}</strong></span>
            <span>•</span>
            <span>Applied <strong>${appliedDate}</strong></span>
            <span>•</span>
            <span class="cp-recruiter-inline">Recruiter <img src="${recruiterAvatar}" alt="${recruiterName}" /> <strong>${recruiterName}</strong></span>
          </div>
        </div>
        <div class="cp-heading-actions">
          <button class="cp-secondary-btn">Edit ${Icons.edit}</button>
          <button class="cp-icon-btn" aria-label="More">${Icons.more}</button>
        </div>
      </div>
    `;
  }

  function ActionStrip() {
    return `
      <div class="cp-action-strip">
        <div class="cp-action-left">
          <button class="cp-reject-btn">${Icons.close} Reject</button>
          <button class="cp-approve-btn">${Icons.check} Approve</button>
        </div>
        <button class="cp-secondary-btn cp-activities-btn">${Icons.activity} View activities</button>
      </div>
    `;
  }

  function StageProgress({ stages = [], activeStage = 0 }) {
    const stageHTML = stages.map((label, idx) => {
      const status = idx < activeStage ? 'done' : idx === activeStage ? 'active' : 'pending';
      return `
        <div class="cp-stage-item ${status}">
          <div class="cp-stage-bullet">${idx < activeStage ? Icons.check : idx + 1}</div>
          <span class="cp-stage-label">${label}</span>
        </div>
      `;
    }).join(`<div class="cp-stage-line"></div>`);

    return `<div class="cp-stage-row">${stageHTML}</div>`;
  }

  function TagGroup(tags = []) {
    return tags.map(tag => `<span class="cp-tag">${tag}</span>`).join('');
  }

  function RightCard({ title, subtitle = '', bodyHTML }) {
    return `
      <section class="cp-card cp-right-card">
        <div class="cp-card-header">
          <h3>${title}</h3>
          ${subtitle ? `<p>${subtitle}</p>` : ''}
        </div>
        ${bodyHTML}
      </section>
    `;
  }

  function PredictedMatchCard({ title, subtitle, tags, percent }) {
    const radius = 44;
    const circumference = 2 * Math.PI * radius;
    const progress = circumference - (percent / 100) * circumference;
    return RightCard({
      title,
      subtitle,
      bodyHTML: `
        <div class="cp-match-wrap">
          <div class="cp-tag-wrap">${TagGroup(tags)}</div>
          <div class="cp-donut-wrap" aria-label="Predicted match ${percent}%">
            <svg width="118" height="118" viewBox="0 0 118 118">
              <circle cx="59" cy="59" r="${radius}" stroke="#ece9f3" stroke-width="14" fill="none"></circle>
              <circle cx="59" cy="59" r="${radius}" stroke="#b58bff" stroke-width="14" fill="none"
                stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${progress}" transform="rotate(-90 59 59)"></circle>
            </svg>
            <div class="cp-donut-label">Match <strong>${percent}%</strong></div>
          </div>
        </div>
      `
    });
  }

  function ContactRow({ icon, value }) {
    return `
      <div class="cp-contact-row">
        <span class="cp-contact-value">${icon}${value}</span>
        <button class="cp-copy-btn">Copy ${Icons.list}</button>
      </div>
    `;
  }

  function ContactsCard({ contacts }) {
    const rows = contacts.map(item => ContactRow(item)).join('');
    return RightCard({ title: 'Contacts', bodyHTML: `<div class="cp-contact-list">${rows}</div>` });
  }

  function AdditionalInfoCard({ items }) {
    const rows = items.map(item => `
      <div class="cp-info-row">
        <span class="cp-info-label">${item.icon || ''}${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `).join('');

    return RightCard({ title: 'Additional', bodyHTML: `<div class="cp-info-list">${rows}</div>` });
  }

  function KVRow({ label, value }) {
    return `
      <div class="cp-kv-row">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `;
  }

  function TwoColumnDetailsCard({ title, leftItems = [], rightItems = [], icon = '' }) {
    return `
      <section class="cp-card">
        <div class="cp-section-title">${icon}${title}</div>
        <div class="cp-two-col-grid">
          <div>${leftItems.map(KVRow).join('')}</div>
          <div>${rightItems.map(KVRow).join('')}</div>
        </div>
      </section>
    `;
  }

  function CVPreviewCard({ candidateName, role, email, phone, avatar, summary, experience = [] }) {
    const expHTML = experience.map(item => `
      <div class="cp-exp-item">
        <strong>${item.title}</strong>
        <p>${item.company}</p>
        <span>${item.period}</span>
      </div>
    `).join('');

    return `
      <section class="cp-card">
        <div class="cp-section-top">
          <h3>CV preview</h3>
          <button class="cp-secondary-btn">Download ${Icons.download}</button>
        </div>
        <div class="cp-cv-preview">
          <div class="cp-cv-header">
            <div>
              <h2>${candidateName}</h2>
              <p>${role}</p>
            </div>
            <img src="${avatar}" alt="${candidateName}">
          </div>
          <div class="cp-cv-meta">${email} • ${phone}</div>
          <p class="cp-cv-summary">${summary}</p>
          <div class="cp-exp-list">${expHTML}</div>
        </div>
      </section>
    `;
  }

  function renderPage(data) {
    return `
      ${PipelineHeader(data.pipelineHeader)}
      ${CandidateHeading(data.candidate)}
      ${ActionStrip()}
      ${StageProgress(data.stageConfig)}
      <div class="cp-main-grid">
        <div class="cp-left-col">
          ${CVPreviewCard(data.cv)}
          ${TwoColumnDetailsCard(data.salaryDetails)}
          ${TwoColumnDetailsCard(data.personalInformation)}
        </div>
        <div class="cp-right-col">
          ${PredictedMatchCard(data.predictedMatch)}
          ${ContactsCard(data.contacts)}
          ${AdditionalInfoCard(data.additional)}
        </div>
      </div>
    `;
  }

  function render(containerSelector, data) {
    const container = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;
    if (!container) return;
    container.innerHTML = renderPage(data);
  }

  return {
    Icons,
    renderPage,
    render
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CandidateProfileComponents;
}

