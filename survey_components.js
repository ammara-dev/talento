/**
 * Talento Survey Components
 * Reusable UI building blocks for survey creation screens.
 */
const SurveyComponents = (function() {
  'use strict';

  const Icons = {
    drag: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="6" r="1.5"/><circle cx="16" cy="6" r="1.5"/><circle cx="8" cy="12" r="1.5"/><circle cx="16" cy="12" r="1.5"/><circle cx="8" cy="18" r="1.5"/><circle cx="16" cy="18" r="1.5"/></svg>`,
    back: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    plus: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    trash: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="3 6 5 6 21 6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>`,
    duplicate: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="12" height="12" rx="2"/><rect x="3" y="3" width="12" height="12" rx="2"/></svg>`,
    chevronDown: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    eye: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
    checkAccent: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2CF7B3" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    star: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.7 22 9.3 17 14.1 18.4 21 12 17.3 5.6 21 7 14.1 2 9.3 8.9 8.7"/></svg>`,
    starSmall: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.7 22 9.3 17 14.1 18.4 21 12 17.3 5.6 21 7 14.1 2 9.3 8.9 8.7"/></svg>`,
    starFilled: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#A9A3B6" stroke="#A9A3B6" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.7 22 9.3 17 14.1 18.4 21 12 17.3 5.6 21 7 14.1 2 9.3 8.9 8.7"/></svg>`,
    radio: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8.5" stroke="#8F889E" stroke-width="1.8"/><circle cx="12" cy="12" r="4.2" fill="#A9A3B6"/></svg>`,
    checkbox: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="3"/></svg>`,
    yesNo: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M9 12l2 2 4-4"/></svg>`,
    shortAnswer: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2" stroke-linecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="12" x2="16" y2="12"/><line x1="4" y1="16" x2="12" y2="16"/></svg>`,
    paragraph: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="11" x2="20" y2="11"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="4" y1="19" x2="20" y2="19"/></svg>`,
    xSmall: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A9A3B6" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    close: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    link: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8A67D5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 4"/><path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L13 19"/></svg>`,
    participants: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="3"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a3 3 0 0 1 0 5.74"/></svg>`,
    responses: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A09AAB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    filter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1E1033" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="14" y2="6"/><line x1="4" y1="12" x2="11" y2="12"/><line x1="4" y1="18" x2="9" y2="18"/><line x1="16" y1="6" x2="20" y2="10"/><line x1="16" y1="6" x2="20" y2="2"/><line x1="13" y1="12" x2="20" y2="12"/><line x1="11" y1="18" x2="20" y2="18"/></svg>`,
    sort: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 10 12 6 16 10"/><polyline points="8 14 12 18 16 14"/></svg>`,
    checkWhite: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    refresh: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A59FAD" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.5 9a9 9 0 0 1 14.3-3.36L23 10"/><path d="M20.5 15a9 9 0 0 1-14.3 3.36L1 14"/></svg>`,
    editPencil: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4B405C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>`,
    moreVertical: `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`
  };

  function getTypeIcon(typeLabel) {
    const normalized = String(typeLabel || '').toLowerCase();
    if (normalized === 'paragraph') return Icons.paragraph;
    if (normalized === 'multiple choice') return Icons.radio;
    if (normalized === 'checkboxes') return Icons.checkbox;
    if (normalized === 'yes/no') return Icons.yesNo;
    if (normalized === 'rating scale') return Icons.starSmall;
    return Icons.shortAnswer;
  }

  function Field(config) {
    const {
      label = '',
      placeholder = '',
      value = '',
      textarea = false
    } = config;

    const control = textarea
      ? `<textarea class="sv-input sv-textarea" rows="2" placeholder="${placeholder}">${value}</textarea>`
      : `<input class="sv-input" type="text" placeholder="${placeholder}" value="${value}" />`;

    return `
      <label class="sv-field">
        <span class="sv-label">${label}</span>
        ${control}
      </label>
    `;
  }

  function TypeChip(text, icon) {
    return `<span class="sv-chip">${icon ? `<span class="sv-chip-icon">${icon}</span>` : ''}${text}</span>`;
  }

  function OptionRow(config) {
    const { label = '', icon = Icons.radio } = config;
    return `
      <div class="sv-option-row">
        <span class="sv-option-icon">${icon}</span>
        <input class="sv-option-input" type="text" value="${label}" />
        <button class="sv-option-remove" type="button" aria-label="Remove option">${Icons.xSmall}</button>
      </div>
    `;
  }

  function OptionsBlock(config) {
    const { options = [], variant = 'radio' } = config;
    const optionIcon = variant === 'checkbox' ? Icons.checkbox : Icons.radio;

    return `
      <div class="sv-options-block">
        <p class="sv-options-title">Options</p>
        ${options.map(function(option) {
          return OptionRow({ label: option, icon: optionIcon });
        }).join('')}
        <div class="sv-add-option-row">
          <button class="sv-add-option" type="button">Add option</button>
          <span class="sv-or-text">+</span>
          <button class="sv-add-option" type="button">or add "Other"</button>
        </div>
      </div>
    `;
  }

  function RatingScale(config) {
    const {
      min = 10,
      max = 10
    } = config;
    const values = [];
    for (let i = 1; i <= max; i += 1) {
      values.push(`
        <div class="sv-rating-item">
          <span class="sv-rating-number">${i}</span>
          ${Icons.star}
        </div>
      `);
    }

    return `
      <div class="sv-rating-wrap">
        <button class="sv-select-btn" type="button">${min} ${Icons.chevronDown}</button>
        <div class="sv-rating-items">${values.join('')}</div>
        <button class="sv-select-btn" type="button">${Icons.starFilled} ${Icons.chevronDown}</button>
      </div>
    `;
  }

  function QuestionFooter(config) {
    const {
      required = true,
      typeLabel = 'Short answer'
    } = config;

    return `
      <div class="sv-question-footer">
        <label class="sv-required-wrap">
          <span class="sv-required-check">${Icons.check}</span>
          <input class="sv-required-input" type="checkbox" ${required ? 'checked' : ''} />
          <span>Required question</span>
        </label>
        <div class="sv-question-actions">
          <button class="sv-select-btn" type="button">${getTypeIcon(typeLabel)} ${typeLabel} ${Icons.chevronDown}</button>
          <button class="sv-icon-btn" type="button" aria-label="Delete question">${Icons.trash}</button>
          <button class="sv-icon-btn" type="button" aria-label="Duplicate question">${Icons.duplicate}</button>
        </div>
      </div>
    `;
  }

  function QuestionCard(config) {
    const {
      index = 1,
      type = 'Short answer',
      questionPlaceholder = 'Enter your question',
      descriptionPlaceholder = 'Add description',
      showOptions = false,
      options = [],
      optionVariant = 'radio',
      showRating = false,
      ratingMin = 10,
      ratingMax = 10,
      highlighted = false
    } = config;

    let middleContent = `
      ${Field({ label: '', placeholder: questionPlaceholder })}
      ${Field({ label: 'Description (optional)', placeholder: descriptionPlaceholder })}
    `;

    if (showOptions) {
      middleContent += OptionsBlock({ options, variant: optionVariant });
    }

    if (showRating) {
      middleContent += RatingScale({ min: ratingMin, max: ratingMax });
    }

    return `
      <section class="sv-card ${highlighted ? 'sv-card-highlighted' : ''}">
        <div class="sv-question-top">
          <span class="sv-drag">${Icons.drag}</span>
          ${TypeChip(`Question ${index}`)}
          ${TypeChip(type, getTypeIcon(type))}
        </div>
        <div class="sv-question-body">
          ${middleContent}
        </div>
        ${QuestionFooter({ required: true, typeLabel: type })}
      </section>
    `;
  }

  function SurveyMetaCard(config) {
    const { title = '', description = '' } = config;

    return `
      <section class="sv-card">
        ${Field({ label: 'Survey title*', placeholder: 'Enter survey title', value: title })}
        ${Field({ label: 'Description (optional)', placeholder: 'Add description', value: description })}
      </section>
    `;
  }

  function TopBar(config) {
    const {
      title = 'Create new survey',
      variant = 'default', // 'default' | 'compact'
      showBack = true,
      previewHref = '',
      saveHref = '',
      previewIcon = 'eye', // 'eye' | 'chevron'
      saveIcon = 'check'
    } = config;
    const previewIconSvg = previewIcon === 'chevron' ? Icons.chevronDown : Icons.eye;
    const saveIconSvg = saveIcon === 'none' ? '' : Icons.checkAccent;
    const isCompact = variant === 'compact';
    const topRowClass = `sv-top-row${isCompact ? ' sv-top-row-compact' : ''}`;
    const titleClass = `sv-title${isCompact ? ' sv-title-compact' : ''}`;
    const secondaryBtnClass = `sv-secondary-btn${isCompact ? ' sv-secondary-btn-compact' : ''}`;
    const primaryBtnClass = `sv-primary-btn${isCompact ? ' sv-primary-btn-compact' : ''}`;
    const backIcon = showBack ? `<span class="sv-title-back">${Icons.back}</span>` : '';

    function renderAction(label, icon, className, href) {
      if (href) {
        return `<a class="${className}" href="${href}">${label} ${icon}</a>`;
      }
      return `<button class="${className}" type="button">${label} ${icon}</button>`;
    }

    return `
      <div class="${topRowClass}">
        <h1 class="${titleClass}">${backIcon}<span>${title}</span></h1>
        <div class="sv-top-actions">
          ${renderAction('Preview', previewIconSvg, secondaryBtnClass, previewHref)}
          ${renderAction('Save and publish', saveIconSvg, primaryBtnClass, saveHref)}
        </div>
      </div>
    `;
  }

  function QuestionTypeOption(config) {
    const {
      type = 'Short answer',
      description = '',
      selected = false
    } = config;

    return `
      <button class="sv-type-option ${selected ? 'sv-type-option-active' : ''}" type="button">
        <span class="sv-type-option-title">${getTypeIcon(type)}<span>${type}</span></span>
        <span class="sv-type-option-desc">${description}</span>
      </button>
    `;
  }

  function ChooseQuestionTypeCard(config) {
    const {
      title = 'Choose question type',
      options = []
    } = config;

    return `
      <section class="sv-card sv-type-card">
        <h2 class="sv-type-heading">${title}</h2>
        <div class="sv-type-grid">
          ${options.map(function(option) {
            return QuestionTypeOption(option);
          }).join('')}
        </div>
      </section>
    `;
  }

  function SavePublishSectionTitle(config) {
    const {
      title = '',
      icon = ''
    } = config;
    return `
      <div class="sv-publish-section-title">
        <span class="sv-publish-section-icon">${icon}</span>
        <h3>${title}</h3>
      </div>
    `;
  }

  function SavePublishToggle(config) {
    const {
      leftLabel = 'No',
      rightLabel = 'Yes',
      active = 'right'
    } = config;
    const rightActive = active === 'right' || String(active).toLowerCase() === String(rightLabel).toLowerCase();
    return `
      <div class="sv-publish-toggle" role="group" aria-label="Accepting responses">
        <button type="button" class="sv-publish-toggle-btn${rightActive ? '' : ' active'}">${leftLabel}</button>
        <button type="button" class="sv-publish-toggle-btn${rightActive ? ' active' : ''}">${rightLabel}</button>
      </div>
    `;
  }

  function SavePublishAudienceOption(config) {
    const {
      id = '',
      name = 'participants',
      title = '',
      description = '',
      selected = false,
      count = null
    } = config;
    const countHTML = count !== null && count !== undefined
      ? `<span class="sv-publish-audience-count" data-sv-count-for="${id}">${count}</span>`
      : '';
    return `
      <label class="sv-publish-audience-option${selected ? ' active' : ''}">
        <input class="sv-publish-audience-radio-input" type="radio" name="${name}" value="${id}" ${selected ? 'checked' : ''} />
        <span class="sv-publish-audience-radio-indicator" aria-hidden="true"></span>
        <span class="sv-publish-audience-option-inner">
          <span class="sv-publish-audience-option-title">${title}${countHTML}</span>
          <span class="sv-publish-audience-option-desc">${description}</span>
        </span>
      </label>
    `;
  }

  function SavePublishAudienceGroup(config) {
    const {
      options = [],
      name = 'participants'
    } = config;
    return `
      <div class="sv-publish-audience-grid">
        ${options.map(function(option) {
          return SavePublishAudienceOption({
            id: option.id,
            name,
            title: option.title,
            description: option.description,
            selected: !!option.selected,
            count: option.count
          });
        }).join('')}
      </div>
    `;
  }

  function getInitials(name) {
    return String(name || '')
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map(function(part) { return part.charAt(0).toUpperCase(); })
      .join('');
  }

  function SavePublishTag(config) {
    const {
      label = '',
      avatarText = ''
    } = config;
    return `
      <span class="sv-publish-tag">
        <span class="sv-publish-tag-avatar">${avatarText || getInitials(label)}</span>
        <span>${label}</span>
        <button type="button" class="sv-publish-tag-remove" aria-label="Remove tag">${Icons.xSmall}</button>
      </span>
    `;
  }

  function SavePublishEmployeeRow(config) {
    const {
      id = '',
      name = '',
      role = '',
      selected = false,
      avatarText = ''
    } = config;
    return `
      <div class="sv-publish-employee-row" data-sv-employee-id="${id}">
        <div class="sv-publish-employee-main">
          <span class="sv-publish-employee-avatar">${avatarText || getInitials(name)}</span>
          <span class="sv-publish-employee-meta">
            <span class="sv-publish-employee-name">${name}</span>
            <span class="sv-publish-employee-role">${role}</span>
          </span>
        </div>
        <button class="sv-publish-employee-check${selected ? ' active' : ''}" type="button" data-sv-employee-check="${id}" aria-label="Select ${name}">
          ${selected ? Icons.checkWhite : ''}
        </button>
      </div>
    `;
  }

  function SavePublishSelectedEmployeesPanel(config) {
    const {
      visibleFor = 'selected-employees',
      visible = false,
      searchPlaceholder = 'Search',
      filtersLabel = 'Filters',
      filtersCount = 0,
      tags = [],
      columnsLabel = 'Employee name',
      markAllLabel = 'Mark all',
      employees = []
    } = config;
    return `
      <div class="sv-publish-selected-panel${visible ? '' : ' is-hidden'}" data-sv-visible-for="${visibleFor}">
        <div class="sv-publish-panel-tools">
          <label class="sv-publish-search">
            ${Icons.search}
            <input type="text" placeholder="${searchPlaceholder}" />
          </label>
          <button type="button" class="sv-publish-filters-btn">${Icons.filter}<span>${filtersLabel}</span><span class="sv-publish-filters-count">${filtersCount}</span></button>
        </div>

        <div class="sv-publish-tags-row">
          ${tags.map(function(tag) {
            return SavePublishTag(tag);
          }).join('')}
        </div>

        <div class="sv-publish-table-head">
          <span class="sv-publish-table-title">${columnsLabel} ${Icons.sort}</span>
          <button type="button" class="sv-publish-mark-all">${markAllLabel}<span class="sv-publish-mark-all-box"></span></button>
        </div>

        <div class="sv-publish-employees-list">
          ${employees.map(function(employee) {
            return SavePublishEmployeeRow(employee);
          }).join('')}
        </div>
      </div>
    `;
  }

  function SavePublishModal(config) {
    const {
      title = 'Save and publish survey',
      acceptingResponses = {},
      participants = {},
      footer = {}
    } = config;

    const selectedOption = (participants.options || []).find(function(option) { return option.selected; }) || {};
    const selectedPanelConfig = participants.selectedEmployeesPanel || {};
    const selectedPanelVisibleFor = selectedPanelConfig.visibleFor || 'selected-employees';

    return `
      <section class="sv-publish-modal" role="dialog" aria-modal="true" aria-label="${title}">
        <header class="sv-publish-modal-header">
          <h2 class="sv-publish-modal-title">${title}</h2>
          <button class="sv-publish-close-btn" type="button" aria-label="Close" data-sv-action="close">${Icons.close}</button>
        </header>

        <div class="sv-publish-modal-body">
          <section class="sv-publish-section sv-publish-section-muted">
            <div class="sv-publish-section-row">
              ${SavePublishSectionTitle({
                title: acceptingResponses.title || 'Accepting responses',
                icon: Icons.responses
              })}
              ${SavePublishToggle({
                leftLabel: acceptingResponses.leftLabel || 'No',
                rightLabel: acceptingResponses.rightLabel || 'Yes',
                active: acceptingResponses.active || 'Yes'
              })}
            </div>
          </section>

          <section class="sv-publish-section">
            ${SavePublishSectionTitle({
              title: participants.title || 'Participants',
              icon: Icons.participants
            })}
            ${SavePublishAudienceGroup({
              name: participants.name || 'participants',
              options: participants.options || []
            })}
            ${SavePublishSelectedEmployeesPanel({
              ...selectedPanelConfig,
              visibleFor: selectedPanelVisibleFor,
              visible: selectedOption.id === selectedPanelVisibleFor
            })}
          </section>
        </div>

        <footer class="sv-publish-modal-footer">
          <button class="sv-publish-link-btn" type="button">${footer.copyLinkText || 'Copy responder link'} ${Icons.link}</button>
          <div class="sv-publish-footer-actions">
            <button class="sv-secondary-btn" type="button" data-sv-action="cancel">${footer.cancelText || 'Cancel'} ${Icons.xSmall}</button>
            <button class="sv-primary-btn" type="button">${footer.saveText || 'Save & publish'} ${Icons.checkAccent}</button>
          </div>
        </footer>
      </section>
    `;
  }

  function SavePublishPage(data) {
    return `
      ${TopBar(data.header || {})}
      <div class="sv-popup-layer" aria-hidden="true"></div>
      <div class="sv-save-overlay-wrap">
        ${SavePublishModal(data.modal || {})}
      </div>
    `;
  }

  function CreateSurveyChooseTypePage(data) {
    return `
      ${TopBar(data.header)}
      <div class="sv-page-stack">
        ${SurveyMetaCard(data.meta)}
        ${ChooseQuestionTypeCard(data.questionType)}
      </div>
    `;
  }

  function CreateSurveyPage(data) {
    const cards = data.questions.map(function(question, idx) {
      return QuestionCard({
        index: idx + 1,
        type: question.type,
        questionPlaceholder: question.questionPlaceholder,
        descriptionPlaceholder: question.descriptionPlaceholder,
        showOptions: question.showOptions,
        options: question.options,
        optionVariant: question.optionVariant,
        showRating: question.showRating,
        ratingMin: question.ratingMin,
        ratingMax: question.ratingMax,
        highlighted: !!question.highlighted
      });
    }).join('');

    return `
      ${TopBar(data.header)}
      <div class="sv-page-stack">
        ${SurveyMetaCard(data.meta)}
        ${cards}
        <button class="sv-add-question" type="button">
          <span>Add new question</span>
          ${Icons.plus}
        </button>
      </div>
    `;
  }

  function PreviewMetaChip(text) {
    return `<span class="sv-preview-meta-chip">${text}</span>`;
  }

  function PreviewSurveyHeader(config) {
    const {
      title = '',
      description = '',
      requiredNote = '* Indicates required question',
      respondentName = '',
      respondentEmail = '',
      respondentAvatar = ''
    } = config;

    return `
      <section class="sv-preview-card sv-preview-intro">
        <h2 class="sv-preview-main-title">${title}</h2>
        <p class="sv-preview-body-text sv-preview-description">${description}</p>
        <div class="sv-preview-intro-footer">
          <span class="sv-preview-body-text sv-preview-required-note">${requiredNote}</span>
          <div class="sv-preview-respondent">
            <img class="sv-preview-respondent-avatar" src="${respondentAvatar}" alt="${respondentName}" />
            <div class="sv-preview-respondent-meta">
              <span class="sv-preview-body-text sv-preview-respondent-name">${respondentName}</span>
              <span class="sv-preview-body-text sv-preview-respondent-email">${respondentEmail}</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function PreviewChoiceRow(config) {
    const {
      type = 'radio',
      label = '',
      selected = false,
      showInput = false,
      inputPlaceholder = 'Enter your answer'
    } = config;
    const iconClass = type === 'checkbox' ? 'sv-preview-checkbox' : 'sv-preview-radio';

    const isCheckbox = type === 'checkbox';
    const tick = isCheckbox && selected ? `<span class="sv-preview-choice-tick">${Icons.checkWhite}</span>` : '';
    const rowHTML = `
      <div class="sv-preview-choice-row${selected ? ' selected' : ''}">
        <span class="sv-preview-choice-icon ${iconClass}">${tick}</span>
        <span class="sv-preview-body-text sv-preview-choice-label">${label}</span>
      </div>
    `;
    if (showInput) {
      return `
        <div class="sv-preview-choice-with-input${selected ? ' selected' : ''}">
          ${rowHTML}
          <input class="sv-preview-answer-input sv-preview-other-input" type="text" placeholder="${inputPlaceholder}" />
        </div>
      `;
    }
    return rowHTML;
  }

  function PreviewRatingScale(config) {
    const {
      min = 1,
      max = 10,
      selected = 0
    } = config;
    const stars = [];
    for (let i = min; i <= max; i += 1) {
      const active = i <= selected;
      stars.push(`
        <div class="sv-preview-rating-item">
          <span class="sv-preview-rating-number">${i}</span>
          <span class="sv-preview-rating-star${active ? ' active' : ''}">${active ? Icons.starFilled : Icons.starSmall}</span>
        </div>
      `);
    }
    return `<div class="sv-preview-rating-wrap">${stars.join('')}</div>`;
  }

  function PreviewTopActionButton(config) {
    const {
      label = '',
      icon = '',
      variant = 'ghost',
      ariaLabel = ''
    } = config;
    const iconSvg = icon && Icons[icon] ? Icons[icon] : '';
    const className = `sv-preview-top-action-btn sv-preview-top-action-${variant}`;
    if (variant === 'icon-only') {
      return `<button class="${className}" type="button" aria-label="${ariaLabel || label || 'Action'}">${iconSvg}</button>`;
    }
    return `<button class="${className}" type="button">${label}${iconSvg ? ` ${iconSvg}` : ''}</button>`;
  }

  function PreviewQuestionBody(question) {
    const kind = String(question.kind || '').toLowerCase();

    if (kind === 'paragraph') {
      return `<textarea class="sv-preview-answer-input sv-preview-answer-paragraph" placeholder="${question.placeholder || 'Enter your question'}"></textarea>`;
    }

    if (kind === 'multiple-choice') {
      return `
        <div class="sv-preview-choice-list">
          ${(question.options || []).map(function(option) {
            return PreviewChoiceRow({
              type: 'radio',
              label: option.label,
              selected: !!option.selected,
              showInput: !!option.showInput,
              inputPlaceholder: option.inputPlaceholder || 'Enter your answer'
            });
          }).join('')}
        </div>
      `;
    }

    if (kind === 'checkboxes') {
      const listClass = question.layout === 'grid-2' ? 'sv-preview-choice-grid-2' : 'sv-preview-choice-list';
      return `
        <div class="${listClass}">
          ${(question.options || []).map(function(option) {
            return PreviewChoiceRow({
              type: 'checkbox',
              label: option.label,
              selected: !!option.selected
            });
          }).join('')}
        </div>
      `;
    }

    if (kind === 'yes-no') {
      return `
        <div class="sv-preview-yes-no-wrap">
          ${(question.options || []).map(function(option) {
            return PreviewChoiceRow({
              type: 'radio',
              label: option.label,
              selected: !!option.selected
            });
          }).join('')}
        </div>
      `;
    }

    if (kind === 'rating-scale') {
      return PreviewRatingScale({
        min: question.min || 1,
        max: question.max || 10,
        selected: question.selected || 0
      });
    }

    return `<input class="sv-preview-answer-input" type="text" placeholder="${question.placeholder || 'Enter your answer'}" />`;
  }

  function PreviewQuestionCard(config) {
    const {
      index = 1,
      typeLabel = 'Short answer',
      required = false,
      title = ''
    } = config;

    return `
      <section class="sv-preview-card${String(config.kind || '').toLowerCase() === 'rating-scale' ? ' sv-preview-card-rating' : ''}">
        <div class="sv-preview-question-meta">
          ${PreviewMetaChip(`Question ${index}`)}
          ${PreviewMetaChip(typeLabel)}
          ${required ? PreviewMetaChip('* Required question') : ''}
        </div>
        <h3 class="sv-preview-question-title">${title}${required ? ' *' : ''}</h3>
        ${PreviewQuestionBody(config)}
      </section>
    `;
  }

  function PreviewActions(config) {
    const {
      clearText = 'Clear form',
      submitText = 'Submit form'
    } = config;

    return `
      <div class="sv-preview-actions">
        <button class="sv-preview-clear-btn" type="button">${clearText} ${Icons.refresh}</button>
        <button class="sv-preview-submit-btn" type="button">${submitText} ${Icons.checkAccent}</button>
      </div>
    `;
  }

  function PreviewPage(data) {
    const questions = (data.questions || []).map(function(question, idx) {
      return PreviewQuestionCard({
        ...question,
        index: idx + 1
      });
    }).join('');

    const rightContent = (data.headerActions && data.headerActions.length > 0)
      ? `
        <div class="sv-preview-top-actions">
          ${(data.headerActions || []).map(function(action) {
            return PreviewTopActionButton(action);
          }).join('')}
        </div>
      `
      : (data.statusText
        ? `<p class="sv-preview-status">${data.statusText} <span class="sv-preview-status-close">${Icons.xSmall}</span></p>`
        : '');

    return `
      <div class="sv-preview-topbar">
        <h1 class="sv-preview-top-title">${data.showBack === false ? '' : `<span class="sv-preview-back-icon">${Icons.back}</span>`}<span>${data.headerTitle || 'Preview mode'}</span></h1>
        ${rightContent}
      </div>
      <div class="sv-preview-stack">
        ${PreviewSurveyHeader(data.intro || {})}
        ${questions}
        ${data.showActions === false ? '' : PreviewActions(data.actions || {})}
      </div>
    `;
  }

  function render(containerSelector, data) {
    const container = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;

    if (!container) return;
    container.innerHTML = CreateSurveyPage(data);
  }

  function renderChooseType(containerSelector, data) {
    const container = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;

    if (!container) return;
    container.innerHTML = CreateSurveyChooseTypePage(data);
  }

  function renderSavePublish(containerSelector, data) {
    const container = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;

    if (!container) return;
    container.innerHTML = SavePublishPage(data);
  }

  function renderPreview(containerSelector, data) {
    const container = typeof containerSelector === 'string'
      ? document.querySelector(containerSelector)
      : containerSelector;

    if (!container) return;
    container.innerHTML = PreviewPage(data);
  }

  return {
    Icons,
    Field,
    QuestionCard,
    SurveyMetaCard,
    QuestionTypeOption,
    ChooseQuestionTypeCard,
    SavePublishModal,
    SavePublishAudienceOption,
    SavePublishAudienceGroup,
    SavePublishSelectedEmployeesPanel,
    SavePublishEmployeeRow,
    SavePublishTag,
    SavePublishSectionTitle,
    SavePublishToggle,
    PreviewSurveyHeader,
    PreviewChoiceRow,
    PreviewQuestionCard,
    PreviewTopActionButton,
    PreviewPage,
    TopBar,
    render,
    renderChooseType,
    renderSavePublish,
    renderPreview
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SurveyComponents;
}
