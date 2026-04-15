/**
 * Talento Candidate Profile Components
 */
const CandidateProfileComponents = (function() {
  'use strict';

  const Icons = {
    chevronLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    chevronRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    close: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    edit: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
    more: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`,
    activity: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    download: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    mail: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>`,
    phone: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.7 13 19.8 19.8 0 0 1 1.62 4.4 2 2 0 0 1 3.6 2.2h3a2 2 0 0 1 2 1.72c.12.97.39 1.9.79 2.77a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.13 6.13l1.27-1.27a2 2 0 0 1 2.11-.45c.87.4 1.8.67 2.77.79a2 2 0 0 1 1.72 2z"/></svg>`,
    briefcase: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`,
    calendar: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    mapPin: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    graduationCap: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    user: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    copy: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
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
            <span>Applied Job <span class="cp-meta-emphasis">${jobTitle}</span></span>
            <span>•</span>
            <span>Applied <span class="cp-meta-emphasis">${appliedDate}</span></span>
            <span>•</span>
            <span class="cp-recruiter-inline">Recruiter <img src="${recruiterAvatar}" alt="${recruiterName}" /> <span class="cp-meta-emphasis">${recruiterName}</span></span>
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

  function StageStrip({ stages = [], activeStage = 1 }) {
    const stageHTML = stages.map((label, idx) => {
      let status = 'pending';
      if (idx === 0) status = 'done';
      else if (idx === activeStage) status = 'active';

      const bullet = status === 'done' ? Icons.check : `${idx + 1}`;
      return `
        <div class="cp-stage-item ${status}">
          <div class="cp-stage-bullet">${bullet}</div>
          <span class="cp-stage-label">${label}</span>
        </div>
      `;
    }).join(`<div class="cp-stage-line"></div>`);

    return `<div class="cp-stage-strip">${stageHTML}</div>`;
  }

  function TagGroup(tags = []) {
    return tags.map(tag => `<span class="cp-tag"><span class="cp-tag-check">${Icons.check}</span>${tag}</span>`).join('');
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
              <circle cx="59" cy="59" r="${radius}" stroke="#BA8AFF" stroke-width="14" fill="none"
                stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${progress}" transform="rotate(-90 59 59)"></circle>
            </svg>
            <div class="cp-donut-label">Match <span>${percent}%</span></div>
          </div>
        </div>
      `
    });
  }

  function ContactRow({ icon, value }) {
    const copyText = String(value || '').replace(/"/g, '&quot;');
    return `
      <div class="cp-contact-row">
        <span class="cp-contact-value"><span class="cp-contact-icon">${icon}</span><span class="cp-contact-text">${value}</span></span>
        <button type="button" class="cp-copy-btn" data-copy-text="${copyText}">
          <span class="cp-copy-label">Copy</span>
          ${Icons.copy}
        </button>
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
        <span class="cp-info-label"><span class="cp-info-icon">${item.icon || ''}</span><span>${item.label}</span></span>
        <span class="cp-info-value">${item.value}</span>
      </div>
    `).join('');

    return RightCard({ title: 'Additional', bodyHTML: `<div class="cp-info-list">${rows}</div>` });
  }

  function KVRow({ label, value }) {
    const lowerLabel = (label || '').toLowerCase();
    const lowerValue = (value || '').toLowerCase();
    const isTrialLabel = lowerLabel.includes('trial period') || lowerLabel.includes('after trial period');
    const isNotProvided = lowerValue.includes('not provided');

    return `
      <div class="cp-kv-row">
        <span class="${isTrialLabel ? 'cp-kv-label-trial' : 'cp-kv-label-default'}">${label}</span>
        <span class="cp-kv-value ${isNotProvided ? 'cp-kv-value-muted' : 'cp-kv-value-strong'}">${value}</span>
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

  function CVPreviewCard({ cvImageSrc, cvDownloadName, stageConfig }) {
    const fallbackSvg = encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
        <rect width="900" height="1200" fill="#f6f5f7"/>
        <rect x="40" y="40" width="820" height="1120" rx="16" fill="#ffffff" stroke="#d8d3e1"/>
        <rect x="72" y="90" width="360" height="32" rx="6" fill="#ece9f3"/>
        <rect x="72" y="142" width="240" height="20" rx="6" fill="#ece9f3"/>
        <rect x="72" y="218" width="756" height="2" fill="#ece9f3"/>
        <rect x="72" y="260" width="520" height="18" rx="6" fill="#ece9f3"/>
        <rect x="72" y="292" width="680" height="18" rx="6" fill="#ece9f3"/>
        <rect x="72" y="324" width="620" height="18" rx="6" fill="#ece9f3"/>
        <rect x="72" y="356" width="680" height="18" rx="6" fill="#ece9f3"/>
        <text x="72" y="454" fill="#a59fad" font-size="34" font-family="Arial, sans-serif">Candidate CV preview</text>
      </svg>`
    );
    return `
      <section class="cp-card">
        ${StageStrip(stageConfig)}
        <div class="cp-section-top">
          <h3>CV preview</h3>
          <a class="cp-secondary-btn" href="${cvImageSrc}" download="${cvDownloadName}">
            Download ${Icons.download}
          </a>
        </div>
        <div class="cp-cv-preview">
          <img src="${cvImageSrc}" alt="Candidate CV preview" onerror="this.onerror=null;this.src='data:image/svg+xml;charset=UTF-8,${fallbackSvg}'">
        </div>
      </section>
    `;
  }

  function renderPage(data) {
    return `
      ${PipelineHeader(data.pipelineHeader)}
      ${CandidateHeading(data.candidate)}
      ${ActionStrip()}
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

    if (!container.__cpCopyBound) {
      container.addEventListener('click', async function(event) {
        const button = event.target.closest('.cp-copy-btn');
        if (!button || !container.contains(button)) return;

        const textToCopy = button.getAttribute('data-copy-text') || '';
        if (!textToCopy) return;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
          } else {
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }

          const label = button.querySelector('.cp-copy-label');
          if (label) label.textContent = 'Copied';
          button.classList.add('is-copied');
          window.setTimeout(function() {
            if (label) label.textContent = 'Copy';
            button.classList.remove('is-copied');
          }, 1200);
        } catch (error) {
          console.error('Copy failed:', error);
        }
      });
      container.__cpCopyBound = true;
    }
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

