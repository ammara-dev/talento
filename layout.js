/**
 * Talento Layout System
 * Handles sidebar, navbar loading and interactivity across all pages
 */
(function() {
  'use strict';

  // Current page detection
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Page configuration for active states
  const pageConfig = {
    'index.html': { navItem: 'dashboard', submenu: null },
    'leave.html': { navItem: 'attendance-leave', submenu: 'leave' },
    'business-missions-trip.html': { navItem: 'business-missions', submenu: 'missions-trip' },
    'air-tickets.html': { navItem: 'business-missions', submenu: 'air-tickets' },
    'air-ticket-request.html': { navItem: 'business-missions', submenu: 'air-tickets' },
    'payroll.html': { navItem: 'finance', submenu: 'payroll' },
    'payroll-detail.html': { navItem: 'finance', submenu: 'payroll' },
    'loans.html': { navItem: 'finance', submenu: 'loans' },
    'loan-installments.html': { navItem: 'finance', submenu: 'loans' },
    'candidate-profile.html': { navItem: 'hiring', submenu: 'job-positions' },
    'create-new-survey.html': { navItem: 'team-engagement', submenu: 'surveys' },
    'create-new-survey-choose-question-type.xml': { navItem: 'team-engagement', submenu: 'surveys' }
  };

  const config = pageConfig[currentPage] || pageConfig['index.html'];

  /**
   * Generate sidebar HTML
   */
  function getSidebarHTML() {
    const isDashboardActive = config.navItem === 'dashboard';
    const isLeaveActive = config.submenu === 'leave';
    const isAttendanceExpanded = config.navItem === 'attendance-leave';
    const isMissionsTripActive = config.submenu === 'missions-trip';
    const isAirTicketsActive = config.submenu === 'air-tickets';
    const isBusinessMissionsExpanded = config.navItem === 'business-missions';
    const isPayrollActive = config.submenu === 'payroll';
    const isLoansActive = config.submenu === 'loans';
    const isFinanceExpanded = config.navItem === 'finance';
    const isJobPositionsActive = config.submenu === 'job-positions';
    const isAllCandidatesActive = config.submenu === 'all-candidates';
    const isHiringReportActive = config.submenu === 'hiring-report';
    const isHiringExpanded = config.navItem === 'hiring';
    const isSurveysActive = config.submenu === 'surveys';
    const isPerformanceEvaluationActive = config.submenu === 'performance-evaluation';
    const isTeamEngagementExpanded = config.navItem === 'team-engagement';

    return `
    <!-- Logo + Collapse -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 12px 10px;flex-shrink:0;">
      <span class="logo-full" style="font-size:24px;font-weight:700;color:#1e1033;">Talento</span>
      <div class="logo-icon-only" style="display:none;align-items:center;justify-content:center;width:100%;">
        <i class="fa-solid fa-house" style="font-size:20px;color:#1e1033;"></i>
      </div>
      <button id="collapse-btn" aria-label="Collapse sidebar"
              style="display:none;align-items:center;justify-content:center;width:28px;height:28px;border-radius:6px;flex-shrink:0;transition:background 150ms;"
              onmouseover="this.style.background='#ece9ef'" onmouseout="this.style.background='transparent'">
        <svg id="collapse-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>
        </svg>
      </button>
    </div>

    <!-- Nav (scrollable) -->
    <div id="sb-scroll">
      <nav style="display:flex;flex-direction:column;padding:4px 0;">

        <!-- Dashboard -->
        <a href="index.html" style="text-decoration:none;">
          <button class="nav-item${isDashboardActive ? ' active' : ''}" data-page="Dashboard"${isDashboardActive ? ' aria-current="page"' : ''}
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 16px);height:40px;border-radius:8px;padding:0 8px;margin:0 8px;text-align:left;outline:none;">
            <i class="fa-solid fa-house" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;line-height:1;white-space:nowrap;">Dashboard</span>
          </button>
        </a>

        <!-- Requests -->
        <button class="nav-item" data-page="Requests"
          style="display:flex;align-items:center;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;text-align:left;outline:none;">
          <i class="fa-solid fa-clipboard-list" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
          <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;line-height:1;white-space:nowrap;flex:1;">Requests</span>
        </button>

        <!-- Attendance & leave (dropdown) -->
        <button class="nav-item" id="attendance-toggle" aria-haspopup="true" aria-expanded="${isAttendanceExpanded}"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-calendar-check" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;line-height:1;white-space:nowrap;">Attendance &amp; leave</span>
          </span>
          <svg class="s-arrow" id="attendance-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;${isAttendanceExpanded ? 'transform:rotate(180deg);' : ''}transition:transform 200ms;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>

        <!-- Attendance sub-items -->
        <div id="attendance-submenu" style="display:${isAttendanceExpanded ? 'flex' : 'none'};flex-direction:column;">
          <!-- Attendance sub-link -->
          <button class="nav-sub-item"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-regular fa-clock" style="width:16px;font-size:13px;color:#787085;flex-shrink:0;"></i>
            <span class="s-label" style="color:#787085;font-size:13px;letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Attendance</span>
          </button>
          <!-- Leave (Time off) -->
          <a href="leave.html" style="text-decoration:none;">
            <button class="nav-sub-item${isLeaveActive ? ' active' : ''}"${isLeaveActive ? ' aria-current="page"' : ''}
              style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
              <i class="fa-regular fa-calendar-minus" style="width:16px;font-size:13px;color:#1e1033;flex-shrink:0;"></i>
              <span class="s-label" style="color:#1e1033;font-size:13px;${isLeaveActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Leave (Time off)</span>
            </button>
          </a>
        </div>

        <!-- Employees -->
        <button class="nav-item" data-page="Employees" aria-haspopup="true"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-users" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Employees</span>
          </span>
          <svg class="s-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>

        <!-- Finance (dropdown) -->
        <button class="nav-item" id="finance-toggle" data-page="Finance" aria-haspopup="true" aria-expanded="${isFinanceExpanded}"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-wallet" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Finance</span>
          </span>
          <svg class="s-arrow" id="finance-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;${isFinanceExpanded ? 'transform:rotate(180deg);' : ''}transition:transform 200ms;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>

        <!-- Finance sub-items -->
        <div id="finance-submenu" style="display:${isFinanceExpanded ? 'flex' : 'none'};flex-direction:column;">
          <!-- Payroll -->
          <a href="payroll.html" style="text-decoration:none;">
            <button class="nav-sub-item${isPayrollActive ? ' active' : ''}"${isPayrollActive ? ' aria-current="page"' : ''}
              style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
              <i class="fa-solid fa-money-check-dollar" style="width:16px;font-size:13px;color:${isPayrollActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
              <span class="s-label" style="color:${isPayrollActive ? '#1e1033' : '#787085'};font-size:13px;${isPayrollActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Payroll</span>
            </button>
          </a>
          <!-- Loans -->
          <a href="loan-installments.html" style="text-decoration:none;">
            <button class="nav-sub-item${isLoansActive ? ' active' : ''}"${isLoansActive ? ' aria-current="page"' : ''}
              style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
              <i class="fa-solid fa-hand-holding-dollar" style="width:16px;font-size:13px;color:${isLoansActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
              <span class="s-label" style="color:${isLoansActive ? '#1e1033' : '#787085'};font-size:13px;${isLoansActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Loans</span>
            </button>
          </a>
          <!-- Salary scale -->
          <button class="nav-sub-item"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-chart-line" style="width:16px;font-size:13px;color:#787085;flex-shrink:0;"></i>
            <span class="s-label" style="color:#787085;font-size:13px;letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Salary scale</span>
          </button>
          <!-- Deductions & Violations -->
          <button class="nav-sub-item"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-circle-minus" style="width:16px;font-size:13px;color:#787085;flex-shrink:0;"></i>
            <span class="s-label" style="color:#787085;font-size:13px;letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Deductions & Violations</span>
          </button>
          <!-- Rewards -->
          <button class="nav-sub-item"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-gift" style="width:16px;font-size:13px;color:#787085;flex-shrink:0;"></i>
            <span class="s-label" style="color:#787085;font-size:13px;letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Rewards</span>
          </button>
          <!-- Expenses (Accounting) -->
          <button class="nav-sub-item"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-receipt" style="width:16px;font-size:13px;color:#787085;flex-shrink:0;"></i>
            <span class="s-label" style="color:#787085;font-size:13px;letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Expenses (Accounting)</span>
          </button>
        </div>

        <!-- Business missions -->
        <button class="nav-item" id="business-missions-toggle" data-page="Business missions" aria-haspopup="true" aria-expanded="${isBusinessMissionsExpanded}"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-briefcase" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Business missions</span>
          </span>
          <svg class="s-arrow" id="business-missions-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;${isBusinessMissionsExpanded ? 'transform:rotate(180deg);' : ''}transition:transform 200ms;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>

        <!-- Business missions sub-items -->
        <div id="business-missions-submenu" style="display:${isBusinessMissionsExpanded ? 'flex' : 'none'};flex-direction:column;">
          <!-- Missions / Business Trip -->
          <a href="business-missions-trip.html" style="text-decoration:none;">
            <button class="nav-sub-item${isMissionsTripActive ? ' active' : ''}"${isMissionsTripActive ? ' aria-current="page"' : ''}
              style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
              <i class="fa-solid fa-suitcase" style="width:16px;font-size:13px;color:${isMissionsTripActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
              <span class="s-label" style="color:${isMissionsTripActive ? '#1e1033' : '#787085'};font-size:13px;${isMissionsTripActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Missions / Business Trip</span>
            </button>
          </a>
          <!-- Exit and Re-entry -->
          <button class="nav-sub-item"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-right-from-bracket" style="width:16px;font-size:13px;color:#787085;flex-shrink:0;"></i>
            <span class="s-label" style="color:#787085;font-size:13px;letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Exit and Re-entry</span>
          </button>
          <!-- Air tickets -->
          <a href="air-tickets.html" style="text-decoration:none;">
            <button class="nav-sub-item${isAirTicketsActive ? ' active' : ''}"${isAirTicketsActive ? ' aria-current="page"' : ''}
              style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
              <i class="fa-solid fa-plane" style="width:16px;font-size:13px;color:#1e1033;flex-shrink:0;"></i>
              <span class="s-label" style="color:#1e1033;font-size:13px;${isAirTicketsActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Air tickets</span>
            </button>
          </a>
        </div>

        <!-- Hiring (dropdown) -->
        <button class="nav-item" id="hiring-toggle" data-page="Hiring" aria-haspopup="true" aria-expanded="${isHiringExpanded}"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-user-plus" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Hiring</span>
          </span>
          <svg class="s-arrow" id="hiring-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;${isHiringExpanded ? 'transform:rotate(180deg);' : ''}transition:transform 200ms;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>

        <!-- Hiring sub-items -->
        <div id="hiring-submenu" style="display:${isHiringExpanded ? 'flex' : 'none'};flex-direction:column;">
          <a href="candidate-profile.html" style="text-decoration:none;">
            <button class="nav-sub-item${isJobPositionsActive ? ' active' : ''}"${isJobPositionsActive ? ' aria-current="page"' : ''}
              style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
              <i class="fa-solid fa-briefcase" style="width:16px;font-size:13px;color:${isJobPositionsActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
              <span class="s-label" style="color:${isJobPositionsActive ? '#1e1033' : '#787085'};font-size:13px;${isJobPositionsActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Job positions</span>
            </button>
          </a>
          <button class="nav-sub-item${isAllCandidatesActive ? ' active' : ''}"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-users" style="width:16px;font-size:13px;color:${isAllCandidatesActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
            <span class="s-label" style="color:${isAllCandidatesActive ? '#1e1033' : '#787085'};font-size:13px;${isAllCandidatesActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">All Candidates</span>
          </button>
          <button class="nav-sub-item${isHiringReportActive ? ' active' : ''}"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-chart-bar" style="width:16px;font-size:13px;color:${isHiringReportActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
            <span class="s-label" style="color:${isHiringReportActive ? '#1e1033' : '#787085'};font-size:13px;${isHiringReportActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Hiring report</span>
          </button>
        </div>

        <!-- Documents -->
        <button class="nav-item" data-page="Documents" aria-haspopup="true"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-folder-open" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Documents</span>
          </span>
          <svg class="s-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>

        <!-- Team engagement -->
        <button class="nav-item" id="team-engagement-toggle" data-page="Team engagement" aria-haspopup="true" aria-expanded="${isTeamEngagementExpanded}"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-people-group" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Team engagement</span>
          </span>
          <svg class="s-arrow" id="team-engagement-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;${isTeamEngagementExpanded ? 'transform:rotate(180deg);' : ''}transition:transform 200ms;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div id="team-engagement-submenu" style="display:${isTeamEngagementExpanded ? 'flex' : 'none'};flex-direction:column;">
          <a href="create-new-survey.html" style="text-decoration:none;">
            <button class="nav-sub-item${isSurveysActive ? ' active' : ''}"${isSurveysActive ? ' aria-current="page"' : ''}
              style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
              <i class="fa-regular fa-rectangle-list" style="width:16px;font-size:13px;color:${isSurveysActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
              <span class="s-label" style="color:${isSurveysActive ? '#1e1033' : '#787085'};font-size:13px;${isSurveysActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Surveys</span>
            </button>
          </a>
          <button class="nav-sub-item${isPerformanceEvaluationActive ? ' active' : ''}"
            style="display:flex;align-items:center;gap:10px;width:calc(100% - 32px);height:36px;padding:0 8px;margin:1px 8px 1px 24px;text-align:left;outline:none;">
            <i class="fa-solid fa-chart-line" style="width:16px;font-size:13px;color:${isPerformanceEvaluationActive ? '#1e1033' : '#787085'};flex-shrink:0;"></i>
            <span class="s-label" style="color:${isPerformanceEvaluationActive ? '#1e1033' : '#787085'};font-size:13px;${isPerformanceEvaluationActive ? 'font-weight:500;' : ''}letter-spacing:-0.13px;line-height:1;white-space:nowrap;">Performance evaluation</span>
          </button>
        </div>

        <!-- Mobile app -->
        <button class="nav-item" data-page="Mobile app" aria-haspopup="true"
          style="display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;outline:none;">
          <span style="display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-mobile-screen" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
            <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Mobile app</span>
          </span>
          <svg class="s-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><polyline points="6 9 12 15 18 9"/></svg>
        </button>

        <!-- Website -->
        <button class="nav-item" data-page="Website"
          style="display:flex;align-items:center;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;text-align:left;outline:none;">
          <i class="fa-solid fa-globe" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
          <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Website</span>
        </button>

        <!-- Apps -->
        <button class="nav-item" data-page="Apps"
          style="display:flex;align-items:center;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 16px;text-align:left;outline:none;">
          <i class="fa-solid fa-grip" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
          <span class="s-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Apps</span>
        </button>

      </nav>
    </div>

    <!-- Settings (bottom) -->
    <div style="padding:10px 8px 14px;flex-shrink:0;border-top:1px solid #e8e7eb;margin-top:4px;">
      <button class="nav-item"
        style="display:flex;align-items:center;gap:10px;width:100%;height:40px;border-radius:8px;padding:0 8px;outline:none;">
        <i class="fa-solid fa-gear" style="width:20px;font-size:16px;color:#1e1033;flex-shrink:0;"></i>
        <span class="s-label settings-label" style="color:#1e1033;font-size:14px;letter-spacing:-0.14px;white-space:nowrap;">Settings</span>
      </button>
    </div>
    `;
  }

  /**
   * Generate navbar HTML
   */
  function getNavbarHTML() {
    return `
    <!-- Left: hamburger + Talento AI -->
    <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">
      <button id="menu-btn" aria-label="Open menu"
              style="display:flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:6px;transition:background 150ms;"
              onmouseover="this.style.background='#ece9ef'" onmouseout="this.style.background='transparent'">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4b405c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
      <button style="display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px;border-radius:999px;border:1.5px solid #c4b0e8;background:#fff;color:#1e1033;font-size:13px;font-family:'Alexandria',Helvetica,sans-serif;font-weight:500;transition:background 150ms;white-space:nowrap;"
              onmouseover="this.style.background='#f5f0ff'" onmouseout="this.style.background='#fff'">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        <span class="hide-on-mobile">Talento AI analyst</span>
      </button>
    </div>

    <!-- Right: icons + user -->
    <div style="display:flex;align-items:center;gap:4px;flex-shrink:0;">
      <!-- Calendar -->
      <button style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:background 150ms;"
              onmouseover="this.style.background='#f0eef8'" onmouseout="this.style.background='transparent'" aria-label="Calendar">
        <i class="fa-regular fa-calendar" style="font-size:16px;color:#4b405c;"></i>
      </button>
      <!-- Chat -->
      <button style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:background 150ms;"
              onmouseover="this.style.background='#f0eef8'" onmouseout="this.style.background='transparent'" aria-label="Messages">
        <i class="fa-regular fa-comment-dots" style="font-size:16px;color:#4b405c;"></i>
      </button>
      <!-- Bell -->
      <button style="position:relative;width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:background 150ms;"
              onmouseover="this.style.background='#f0eef8'" onmouseout="this.style.background='transparent'" aria-label="Notifications">
        <i class="fa-regular fa-bell" style="font-size:16px;color:#4b405c;"></i>
        <span style="position:absolute;top:6px;right:6px;width:6px;height:6px;border-radius:50%;background:#e74c3c;border:1.5px solid #fff;"></span>
      </button>
      <!-- Divider -->
      <div style="width:1px;height:20px;background:#e8e7eb;margin:0 4px;flex-shrink:0;"></div>
      <!-- User -->
      <button style="display:flex;align-items:center;gap:8px;padding:2px 6px;border-radius:8px;transition:background 150ms;outline:none;"
              onmouseover="this.style.background='#f0eef8'" onmouseout="this.style.background='transparent'">
        <div style="width:30px;height:30px;border-radius:50%;background:#c9b8d8;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="#5b3a7a"><circle cx="12" cy="8" r="5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        </div>
        <div id="user-info" style="text-align:left;">
          <p style="color:#1e1033;font-size:13px;font-weight:600;letter-spacing:-0.13px;line-height:1.2;">Huda AlQahtani</p>
          <p style="color:#787085;font-size:10px;line-height:1.2;">alqahtani@gmail.com</p>
        </div>
        <svg id="user-chevron" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#787085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
    </div>
    `;
  }

  /**
   * Initialize layout components and interactivity
   */
  function initLayout() {
    // Inject sidebar content
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.innerHTML = getSidebarHTML();
    }

    // Inject navbar content
    const navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.innerHTML = getNavbarHTML();
    }

    // Initialize interactivity after content is loaded
    initInteractivity();
  }

  /**
   * Initialize all interactive behaviors
   */
  function initInteractivity() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const menuBtn = document.getElementById('menu-btn');
    const collapseBtn = document.getElementById('collapse-btn');
    const collapseIcon = document.getElementById('collapse-icon');
    const userInfo = document.getElementById('user-info');
    const userChevron = document.getElementById('user-chevron');

    let isOpen = false;
    let isCollapsed = false;

    // Show/hide collapse button based on screen size
    function updateLayout() {
      const desktop = window.innerWidth >= 1024;
      if (menuBtn) menuBtn.style.display = desktop ? 'none' : 'flex';
      if (collapseBtn) collapseBtn.style.display = desktop ? 'flex' : 'none';
      
      // Hide user info text on narrow viewports
      if (window.innerWidth < 640) {
        if (userInfo) userInfo.style.display = 'none';
        if (userChevron) userChevron.style.display = 'none';
      } else {
        if (userInfo) userInfo.style.display = 'block';
        if (userChevron) userChevron.style.display = 'block';
      }
    }
    updateLayout();
    window.addEventListener('resize', function() {
      updateLayout();
      if (window.innerWidth >= 1024 && isOpen) closeMobile();
    });

    // Mobile drawer open/close
    function openMobile() {
      isOpen = true;
      if (sidebar) sidebar.classList.add('open');
      if (overlay) overlay.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    function closeMobile() {
      isOpen = false;
      if (sidebar) sidebar.classList.remove('open');
      if (overlay) overlay.classList.remove('show');
      document.body.style.overflow = '';
    }

    if (menuBtn) {
      menuBtn.addEventListener('click', function() {
        isOpen ? closeMobile() : openMobile();
      });
    }

    if (overlay) {
      overlay.addEventListener('click', closeMobile);
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) closeMobile();
    });

    // Desktop collapse/expand
    if (collapseBtn) {
      collapseBtn.addEventListener('click', function() {
        isCollapsed = !isCollapsed;
        if (sidebar) sidebar.classList.toggle('collapsed', isCollapsed);
        collapseBtn.setAttribute('aria-label', isCollapsed ? 'Expand sidebar' : 'Collapse sidebar');
        if (collapseIcon) {
          collapseIcon.innerHTML = isCollapsed
            ? '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="15" y1="3" x2="15" y2="21"/>'
            : '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/>';
        }
      });
    }

    // Attendance submenu toggle
    const attToggle = document.getElementById('attendance-toggle');
    const attSubmenu = document.getElementById('attendance-submenu');
    const attArrow = document.getElementById('attendance-arrow');
    let attOpen = config.navItem === 'attendance-leave';

    if (attToggle && attSubmenu) {
      attToggle.addEventListener('click', function() {
        attOpen = !attOpen;
        attSubmenu.style.display = attOpen ? 'flex' : 'none';
        if (attArrow) {
          attArrow.style.transform = attOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        attToggle.setAttribute('aria-expanded', String(attOpen));
      });
    }

    // Finance submenu toggle
    const finToggle = document.getElementById('finance-toggle');
    const finSubmenu = document.getElementById('finance-submenu');
    const finArrow = document.getElementById('finance-arrow');
    let finOpen = config.navItem === 'finance';

    if (finToggle && finSubmenu) {
      finToggle.addEventListener('click', function() {
        finOpen = !finOpen;
        finSubmenu.style.display = finOpen ? 'flex' : 'none';
        if (finArrow) {
          finArrow.style.transform = finOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        finToggle.setAttribute('aria-expanded', String(finOpen));
      });
    }

    // Business missions submenu toggle
    const bmToggle = document.getElementById('business-missions-toggle');
    const bmSubmenu = document.getElementById('business-missions-submenu');
    const bmArrow = document.getElementById('business-missions-arrow');
    let bmOpen = config.navItem === 'business-missions';

    if (bmToggle && bmSubmenu) {
      bmToggle.addEventListener('click', function() {
        bmOpen = !bmOpen;
        bmSubmenu.style.display = bmOpen ? 'flex' : 'none';
        if (bmArrow) {
          bmArrow.style.transform = bmOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        bmToggle.setAttribute('aria-expanded', String(bmOpen));
      });
    }

    // Hiring submenu toggle
    const hiringToggle = document.getElementById('hiring-toggle');
    const hiringSubmenu = document.getElementById('hiring-submenu');
    const hiringArrow = document.getElementById('hiring-arrow');
    let hiringOpen = config.navItem === 'hiring';

    if (hiringToggle && hiringSubmenu) {
      hiringToggle.addEventListener('click', function() {
        hiringOpen = !hiringOpen;
        hiringSubmenu.style.display = hiringOpen ? 'flex' : 'none';
        if (hiringArrow) {
          hiringArrow.style.transform = hiringOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        hiringToggle.setAttribute('aria-expanded', String(hiringOpen));
      });
    }

    // Team engagement submenu toggle
    const teamToggle = document.getElementById('team-engagement-toggle');
    const teamSubmenu = document.getElementById('team-engagement-submenu');
    const teamArrow = document.getElementById('team-engagement-arrow');
    let teamOpen = config.navItem === 'team-engagement';

    if (teamToggle && teamSubmenu) {
      teamToggle.addEventListener('click', function() {
        teamOpen = !teamOpen;
        teamSubmenu.style.display = teamOpen ? 'flex' : 'none';
        if (teamArrow) {
          teamArrow.style.transform = teamOpen ? 'rotate(180deg)' : 'rotate(0deg)';
        }
        teamToggle.setAttribute('aria-expanded', String(teamOpen));
      });
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }

})();
