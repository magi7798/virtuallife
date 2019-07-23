// Component and redux roadmap

// Menu data: pass the page path(url) and childnode
// InitialMenus, MemberMenus, SettingsMenus, CategoryMenusexport 
export const InitialMenus = [
  {
    name: 'Home',
    path: '/',
    childnode: 'Home'
  },
  {
    name: 'Signin',
    path: '/signin',
    childnode: 
      <Fragment>
        <p>Sign in to enjoy virtual life.</p>
        <Button basic color='blue'>
          <Icon name='user' />
          Sign in
        </Button>
      </Fragment>
  }
];


// Actions
export const fetchSidebarMenus = (page) => ({
  type: 'PAGE_STATUS',
  payload: page // => page: pass the page path(url)
});


export const fetchMemberMenus = (isSigned) => ({
  type: 'SIGNIN_STATUS',
  payload: isSigned // => isSigned: true or false
});


component: {
  App: {
    Header: {    -> redux results

    }
  }
}

