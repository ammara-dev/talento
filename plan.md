# Multi-Page Layout System for Talento

## Problem
Currently, both `index.html` and `leave.html` duplicate the entire navbar, sidebar, and common styles. This makes maintenance difficult and violates DRY principles.

## Approach
Create a reusable layout system using JavaScript includes (since this is a static HTML project without a backend). This allows:
- Shared CSS in `shared/styles.css`
- Shared sidebar in `shared/sidebar.html` (loaded via JS)
- Shared navbar in `shared/navbar.html` (loaded via JS)
- Shared JavaScript in `shared/layout.js`

Each page will:
1. Include the shared CSS
2. Have placeholder elements for sidebar and navbar
3. Load shared components via JavaScript
4. Define only page-specific content

## Structure
```
talento/
├── shared/
│   ├── styles.css      # Common styles (sidebar, navbar, layout)
│   ├── sidebar.html    # Sidebar HTML template
│   ├── navbar.html     # Navbar HTML template
│   └── layout.js       # Component loader + sidebar/navbar JS logic
├── index.html          # Dashboard (refactored)
└── leave.html          # Leave page (refactored)
```

## Key Features
- **Active state handling**: `layout.js` detects current page and sets appropriate active states
- **Submenu expansion**: Auto-expand attendance submenu when on leave.html
- **Consistent behavior**: Same collapse, mobile drawer logic across all pages
- **Clean separation**: Each page only contains its unique content

## Todos
1. Create `shared/` directory and `styles.css` with common styles
2. Create `shared/sidebar.html` with sidebar template
3. Create `shared/navbar.html` with navbar template
4. Create `shared/layout.js` with component loader and interactivity
5. Refactor `index.html` to use shared components
6. Refactor `leave.html` to use shared components
7. Test navigation and active states
