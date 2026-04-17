/**
 * Talento All Documents Components
 * Reusable UI building blocks for the all documents screen.
 */
const AllDocumentsComponents = (function() {
  'use strict';

  function escapeHtml(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function CategoryCard(category) {
    return `
      <article class="ad-category-card">
        <div class="ad-category-icon">
          <i class="fa-solid fa-folder-open" aria-hidden="true"></i>
        </div>
        <p class="ad-category-name">${escapeHtml(category.name || '')}</p>
        <p class="ad-category-count">${escapeHtml(category.count || '')}</p>
      </article>
    `;
  }

  function SectionHead(config) {
    return `
      <div class="ad-section-head">
        <h2>${escapeHtml(config.title || '')}</h2>
        <div class="ad-section-actions">${config.actions || ''}</div>
      </div>
    `;
  }

  function CategoriesSection(config) {
    const list = Array.isArray(config.items) ? config.items : [];
    return `
      <section class="ad-card">
        ${SectionHead({
          title: config.title || 'Categories',
          actions: `
            <button type="button" class="ad-pill-btn">Edit categories <i class="fa-solid fa-pen"></i></button>
            <button type="button" class="ad-pill-btn">Create new category <i class="fa-solid fa-plus"></i></button>
            <button type="button" class="ad-icon-btn" aria-label="Previous categories"><i class="fa-solid fa-chevron-left"></i></button>
            <button type="button" class="ad-icon-btn" aria-label="Next categories"><i class="fa-solid fa-chevron-right"></i></button>
          `
        })}
        <div class="ad-categories-row">
          ${list.map(CategoryCard).join('')}
        </div>
      </section>
    `;
  }

  function Toolbar(config) {
    const search = (typeof LeaveComponents !== 'undefined' && LeaveComponents.SearchInput)
      ? LeaveComponents.SearchInput({
          placeholder: config.searchPlaceholder || 'Search',
          width: '100%'
        })
      : `
        <div class="ad-search-fallback">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="${escapeHtml(config.searchPlaceholder || 'Search')}" />
        </div>
      `;

    return `
      <div class="ad-toolbar">
        <div class="ad-toolbar-search">${search}</div>
        <div class="ad-toolbar-controls">
          <button type="button" class="ad-sort-btn">Sort by <strong>${escapeHtml(config.sortLabel || 'Name')}</strong> <i class="fa-solid fa-chevron-down"></i></button>
          <div class="ad-view-toggle">
            <button type="button" class="ad-view-btn is-active" data-view="grid" aria-label="Grid view"><i class="fa-solid fa-grip"></i></button>
            <button type="button" class="ad-view-btn" data-view="list" aria-label="List view"><i class="fa-solid fa-list"></i></button>
          </div>
        </div>
      </div>
    `;
  }

  function DocumentCard(item) {
    return `
      <article class="ad-doc-card">
        <div class="ad-doc-head">
          <div class="ad-doc-type ad-doc-type--${escapeHtml(item.type || 'pdf')}">${escapeHtml((item.type || 'pdf').toUpperCase())}</div>
          <div class="ad-doc-meta">
            <h3>${escapeHtml(item.title || '')}</h3>
            <p>${escapeHtml(item.size || '')} • ${escapeHtml(item.date || '')}</p>
          </div>
          <button type="button" class="ad-doc-more" aria-label="Document actions"><i class="fa-solid fa-ellipsis"></i></button>
        </div>
        <button type="button" class="ad-doc-link">Open related record <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
      </article>
    `;
  }

  function DocumentsSection(config) {
    const list = Array.isArray(config.items) ? config.items : [];
    return `
      <section class="ad-documents-block">
        ${Toolbar(config.toolbar || {})}
        <div class="ad-doc-grid">
          ${list.map(DocumentCard).join('')}
        </div>
      </section>
    `;
  }

  function Header(config) {
    return `
      <header class="ad-page-head">
        <h1>${escapeHtml(config.title || 'All documents')}</h1>
        <button type="button" class="ad-primary-btn">${escapeHtml(config.actionLabel || 'Add new document')} <i class="fa-solid fa-plus"></i></button>
      </header>
    `;
  }

  return {
    Header,
    CategoriesSection,
    DocumentsSection
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = AllDocumentsComponents;
}
