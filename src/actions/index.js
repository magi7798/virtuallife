// InitialMenus, MemberMenus, SettingsMenus
import axios from 'axios';

export const fetchMemberMenus = (isSigned) => ({
  type: 'SIGNIN_STATUS',
  payload: isSigned
});

export const sidebarPusher = (visible) => ({
  type: 'SIDEBAR_PUSHER',
  payload: visible
});

// export const fetchResults = (code, type) => (dispatch) => {
//   const response = axios.get(`localhost:3001/search?code=${code}&type=${type}`);

//   return dispatch({
//     type: 'FETCH_ITEM_LIST',
//     payload: response.data
//   });
// };
export const fetchResults = (response) => ({
  type: 'FETCH_ITEM_LIST',
  payload: response
});
