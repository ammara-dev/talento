/**
 * Talento Request2 Screen
 * Renders Requests UI using reusable RequestsComponents.
 */
(function() {
  'use strict';

  const requestsData = {
    team: [
      {
        employeeName: 'Sun 11 February 2024',
        employeeRole: '',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        statusKey: 'pending',
        statusLabel: 'In review',
        dateLabel: '12 Oct. - 16 Oct. 2025',
        duration: '12 days',
        typeKey: 'vacation',
        requestType: 'Vacation',
        approver: 'Samira AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        employeeName: 'Sun 11 February 2024',
        employeeRole: '',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        statusKey: 'pending',
        statusLabel: 'In review',
        dateLabel: '12 Oct. - 16 Oct. 2025',
        duration: '12 days',
        typeKey: 'time-off',
        requestType: 'Time off',
        approver: 'Mishari AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/men/63.jpg'
      },
      {
        employeeName: 'Sun 11 February 2024',
        employeeRole: '',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        statusKey: 'approved',
        statusLabel: 'Approved',
        dateLabel: 'Tue, Aug 26 2025',
        duration: '',
        typeKey: 'salary',
        requestType: 'Salary',
        approver: 'Samira AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        employeeName: 'Sun 11 February 2024',
        employeeRole: '',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        statusKey: 'rejected',
        statusLabel: 'Rejected',
        dateLabel: '01 Oct. - 05 Oct. 2025',
        duration: '5 days',
        typeKey: 'vacation',
        requestType: 'Vacation',
        approver: 'Samira AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    ],
    mine: [
      {
        employeeName: 'Huda AlQahtani',
        employeeRole: 'Product developer',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        statusKey: 'pending',
        statusLabel: 'In review',
        dateLabel: '21 Oct. - 23 Oct. 2025',
        duration: '3 days',
        typeKey: 'vacation',
        requestType: 'Vacation',
        approver: 'Samira AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        employeeName: 'Huda AlQahtani',
        employeeRole: 'Product developer',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        statusKey: 'approved',
        statusLabel: 'Approved',
        dateLabel: 'Tue, Aug 12 2025',
        duration: '',
        typeKey: 'salary',
        requestType: 'Salary',
        approver: 'Mishari AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/men/63.jpg'
      },
      {
        employeeName: 'Huda AlQahtani',
        employeeRole: 'Product developer',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        statusKey: 'rejected',
        statusLabel: 'Rejected',
        dateLabel: '01 Sep. - 03 Sep. 2025',
        duration: '3 days',
        typeKey: 'air-tickets',
        requestType: 'Air tickets',
        approver: 'Samira AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      {
        employeeName: 'Huda AlQahtani',
        employeeRole: 'Product developer',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        statusKey: 'expired',
        statusLabel: 'Expired',
        dateLabel: '15 Jul. - 16 Jul. 2025',
        duration: '2 days',
        typeKey: 'time-off',
        requestType: 'Time off',
        approver: 'Samira AlSubaie',
        approverAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      }
    ]
  };

  const requestsState = {
    scope: 'team',
    status: 'all',
    query: ''
  };

  document.addEventListener('DOMContentLoaded', function() {
    renderRequestsScreen();
  });

  function normalizeStatus(statusKey) {
    if (statusKey === 'done' || statusKey === 'approved') {
      return 'approved';
    }
    return statusKey;
  }

  function countPending(rows) {
    return rows.filter(function(row) {
      return normalizeStatus(row.statusKey) === 'pending';
    }).length;
  }

  function getScopeOptions() {
    return [
      { value: 'team', label: 'Team requests' },
      { value: 'mine', label: 'My requests', count: countPending(requestsData.mine) }
    ];
  }

  function getStatusTabs(rows) {
    return [
      { value: 'all', label: 'All requests', icon: 'all' },
      {
        value: 'pending',
        label: 'Pending',
        icon: 'pending',
        showCount: false
      },
      { value: 'approved', label: 'Approved', icon: 'approved' },
      { value: 'rejected', label: 'Rejected', icon: 'rejected' },
      { value: 'expired', label: 'Expired', icon: 'expired' }
    ];
  }

  function getFilteredRows() {
    const scopedRows = requestsData[requestsState.scope] || [];
    const query = requestsState.query.trim().toLowerCase();

    return scopedRows.filter(function(row) {
      const matchesStatus = requestsState.status === 'all' || normalizeStatus(row.statusKey) === requestsState.status;
      const matchesQuery = !query || [
        row.employeeName,
        row.employeeRole,
        row.requestType,
        row.approver,
        row.dateLabel,
        row.duration
      ].join(' ').toLowerCase().includes(query);

      return matchesStatus && matchesQuery;
    });
  }

  function renderRequestsScreen(shouldFocusSearch) {
    const root = document.getElementById('requests-screen-root');
    const scopedRows = requestsData[requestsState.scope] || [];
    const filteredRows = getFilteredRows();

    root.innerHTML = RequestsComponents.Page({
      title: 'Requests',
      scopeOptions: getScopeOptions(),
      activeScope: requestsState.scope,
      searchValue: requestsState.query,
      searchPlaceholder: 'Search',
      filterCount: 2,
      statusTabs: getStatusTabs(scopedRows),
      activeStatus: requestsState.status,
      rows: filteredRows,
      emptyState: {
        title: 'No requests match this view',
        description: 'Try a different status or search term to see more requests.'
      }
    });

    bindRequestsScreenEvents();
    applyRequest2LayoutTweaks();
    applyStatusBadgeOverrides();

    if (shouldFocusSearch) {
      const searchInput = root.querySelector('.requests-search input');
      if (searchInput) {
        searchInput.focus();
        searchInput.setSelectionRange(searchInput.value.length, searchInput.value.length);
      }
    }
  }

  function bindRequestsScreenEvents() {
    const root = document.getElementById('requests-screen-root');

    root.querySelectorAll('[data-scope-value]').forEach(function(button) {
      button.addEventListener('click', function() {
        requestsState.scope = button.getAttribute('data-scope-value');
        requestsState.status = 'all';
        renderRequestsScreen(false);
      });
    });

    root.querySelectorAll('[data-status-value]').forEach(function(button) {
      button.addEventListener('click', function() {
        requestsState.status = button.getAttribute('data-status-value');
        renderRequestsScreen(false);
      });
    });

    const searchInput = root.querySelector('.requests-search input');
    if (searchInput) {
      searchInput.addEventListener('input', function(event) {
        requestsState.query = event.target.value;
        renderRequestsScreen(true);
      });
    }
  }

  function applyRequest2LayoutTweaks() {
    const requestedOnHeader = document.querySelector('.requests-table thead th:first-child .requests-header-label span');
    if (requestedOnHeader) {
      requestedOnHeader.textContent = 'Requested on';
    }
  }

  function applyStatusBadgeOverrides() {
    const badges = document.querySelectorAll('.requests-table tbody tr td:nth-child(2) span');
    badges.forEach(function(badge) {
      const label = (badge.textContent || '').trim().toLowerCase();

      if (label === 'approved' || label === 'done') {
        badge.className = 'badge-approved';
        badge.style.background = '#D7FFE7';
        badge.style.color = '#1A9A54';
      } else if (label === 'rejected') {
        badge.className = 'badge-rejected';
        badge.style.background = '#FFEAEC';
        badge.style.color = '#D73A49';
      }
    });
  }
})();
