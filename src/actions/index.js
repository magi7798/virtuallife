// InitialMenus, MemberMenus, SettingsMenus

export const fetchSidebarMenus = (page) => ({
  type: 'PAGE_STATUS',
  payload: page
});

export const fetchMemberMenus = (isSigned) => ({
  type: 'SIGNIN_STATUS',
  payload: isSigned
});