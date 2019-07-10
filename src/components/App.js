import React, { lazy, Suspense } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
const Header = lazy(() => import('./MenuBars/Header'));
const LeftMenus = lazy(() => import('./MenuBars/LeftMenus'));
const Signin = lazy(() => import('./Join/Signin'));
const Signup = lazy(() => import('./Join/Signup'));
const Home = lazy(() => import('./Home'));
const Shops = lazy(() => import('./Shops'));
const Products = lazy(() => import('./Products'));
const MyCart = lazy(() => import('./MyCart'));
const Settings = lazy(() => import('./Settings/Account'));
const MyRoom = lazy(() => import('./MyRoom'));
const MyShop = lazy(() => import('./MyShop'));

const routeColumnStyle = {
  marginTop: '70px'
};

/*
const components = [
  null, Login, Signup, Home, Shops, Products, MyCart, MyRoom, MyShop
];
const routes = components.map(componentName => {
  let path, name;
  if (componentName === null) {
    path = '/';
    name = Login;
  } else {
    path = '/' + componentName.toString().toLowerCase();
    name = componentName;
  }
  console.log('name: ', name.key);
  return (
    <Route key={componentName} path={path} exact component={name} />
  );
});
*/
class App extends React.Component {
  state = { signedUser: true }

  render() {
    return (

      <Container style={{ width: '100%' }}>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>} >
            <Grid stackable divided='vertically'>
              <Grid.Row style={{ paddingBottom: '0px' }}>
                <Header />
              </Grid.Row>
              <Grid.Row columns={2}>
                {this.state.signedUser ? <Grid.Column width={3}>
                  <LeftMenus />
                </Grid.Column> : undefined}
                <Grid.Column width={12} style={routeColumnStyle}>
                  <Switch>
                    {/*routes*/}
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/signin'} exact component={Signin} />
                    <Route path={'/signup'} exact component={Signup} />
                    <Route path={'/shops'} exact component={Shops} />
                    <Route path={'/products'} exact component={Products} />
                    <Route path={'/mycart'} exact component={MyCart} />
                    <Route path={'/settings/account'} exact component={Settings} />
                    <Route path={'/myroom'} exact component={MyRoom} />
                    <Route path={'/myshop'} exact component={MyShop} />
                  </Switch>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Suspense>
        </Router>
      </Container>

    );
  };
};

export default App;