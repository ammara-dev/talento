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
    check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
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
      previewIcon = 'eye', // 'eye' | 'chevron'
      saveIcon = 'check'
    } = config;
    const previewIconSvg = previewIcon === 'chevron' ? Icons.chevronDown : Icons.eye;
    const saveIconSvg = saveIcon === 'none' ? '' : Icons.checkAccent;

    return `
      <div class="sv-top-row">
        <h1 class="sv-title">${Icons.back} ${title}</h1>
        <div class="sv-top-actions">
          <button class="sv-secondary-btn" type="button">Preview ${previewIconSvg}</button>
          <button class="sv-primary-btn" type="button">Save and publish ${saveIconSvg}</button>
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

  return {
    Icons,
    Field,
    QuestionCard,
    SurveyMetaCard,
    QuestionTypeOption,
    ChooseQuestionTypeCard,
    TopBar,
    render,
    renderChooseType
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SurveyComponents;
}
