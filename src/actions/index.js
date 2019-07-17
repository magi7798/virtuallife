// InitialMenus, MemberMenus, SettingsMenus

export const fetchSidebarMenus = (page) => ({
  type: 'PAGE_STATUS',
  payload: page
});

export const fetchMemberMenus = (isSigned) => ({
  type: 'SIGNIN_STATUS',
  payload: isSigned
});

export const getSearchValue = (value) => ({
  type: 'SEARCH_VALUE',
  payload: value
});

export const getSearchResults = (results) => ({
  type: 'SEARCH_RESULTS',
  payload: results
});

export const sortByValue = (value) => ({
  type: 'SORT_BY_VALUE',
  payload: value
});

export const sortInOrders = (orders) => ({
  type: 'SORT_IN_ORDERS',
  payload: orders
});