// InitialMenus, MemberMenus, SettingsMenus

export const fetchMemberMenus = (isSigned) => ({
  type: 'SIGNIN_STATUS',
  payload: isSigned
});

export const sidebarPusher = (visible) => ({
  type: 'SIDEBAR_PUSHER',
  payload: visible
})