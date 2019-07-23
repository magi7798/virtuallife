import React, { lazy, Suspense } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';
const Header = lazy(() => import('./MenuGroup/Header'));
const Sidebar = lazy(() => import('./MenuGroup/Sidebar'));
const Signin = lazy(() => import('./Join/Signin'));
const Signup = lazy(() => import('./Join/Signup'));
const SearchResults = lazy(() => import('./Search'));
const Home = lazy(() => import('./Home'));
const Shops = lazy(() => import('./Shops'));
const Products = lazy(() => import('./Products'));
const MyCart = lazy(() => import('./MyCart'));
const Settings = lazy(() => import('./Settings/Account'));
const MySpace = lazy(() => import('./MySpace'));
const MyShop = lazy(() => import('./MyShop'));
const MyMoneybox = lazy(() => import('./MyMoneybox'));

const routeColumnStyle = {
  marginTop: '70px',
  paddingLeft: '70px'
};

class App extends React.Component {
  
  render() {
    return (
      <Container style={{ width: '100%' }}>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>} >
            <Grid stackable divided='vertically'>
              <Grid.Row style={{ paddingBottom: '0px' }}>
                <Header searchResults={this.setResults} />
              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column width={2}>
                  <Sidebar />
                </Grid.Column>
                <Grid.Column width={13} style={routeColumnStyle}>
                  <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/signin'} exact component={Signin} />
                    <Route path={'/signup'} exact component={Signup} />
                    <Route path={'/search/:keyword'} exact component={SearchResults} />>
                    <Route path={'/shops'} exact component={Shops} />
                    <Route path={'/products'} exact component={Products} />
                    <Route path={'/mycart'} exact component={MyCart} />
                    <Route path={'/settings/account'} exact component={Settings} />
                    <Route path={'/myspace'} exact component={MySpace} />
                    <Route path={'/myshop'} exact component={MyShop} />
                    <Route path={'/mymoneybox'} exact component={MyMoneybox} />
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