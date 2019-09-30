import React, { lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { Container, Grid, Sidebar, Menu, Segment, Icon } from 'semantic-ui-react';

import history from '../history';
import { sidebarPusher } from '../actions';
const SidebarMenus = lazy(() => import('./MenuGroup/SidebarMenus'));
const Header = lazy(() => import('./MenuGroup/Header'));
const Signin = lazy(() => import('./Sign/Signin'));
const Signup = lazy(() => import('./Sign/Signup'));
const SearchResults = lazy(() => import('./Search'));
const Home = lazy(() => import('./Home'));
const Shops = lazy(() => import('./Shops'));
const Products = lazy(() => import('./Products'));
const MyCart = lazy(() => import('./MyCart'));
const Settings = lazy(() => import('./Settings/Account'));
const MySpace = lazy(() => import('./MySpace'));
const EditMySpace = lazy(() => import('./MySpace/EditMySpace'));
const MyShop = lazy(() => import('./MyShop'));
const MyMoneybox = lazy(() => import('./MyMoneybox'));

class App extends React.Component {

  handleSidebarHide = () => this.props.sidebarPusher(false)

  renderContainer = () => {
    return (

      <Grid centered stackable stretched divided='vertically'>
        <Grid.Row style={{ paddingBottom: '0px' }}>
          <Header />
        </Grid.Row>
        <Grid.Row stretched>
          <Grid.Column width={15} style={{ marginTop: '70px' }}>
            <Switch>
              <Route path={'/'} exact component={Home} />
              <Route path={'/signin'} exact component={Signin} />
              <Route path={'/signup'} exact component={Signup} />
              {/* /search?code=${code}&type=${type} */}
              <Route path={'/s?k=:keyvalue&type=:type'} exact component={SearchResults} />>
              <Route path={'/shops'} exact component={Shops} />
              <Route path={'/products'} exact component={Products} />
              <Route path={'/mycart'} exact component={MyCart} />
              <Route path={'/settings/account'} exact component={Settings} />
              <Route path={'/myspace'} exact component={MySpace} />
              <Route path={'/myspace/edit'} exact component={EditMySpace} />
              <Route path={'/myshop'} exact component={MyShop} />
              <Route path={'/mymoneybox'} exact component={MyMoneybox} />
            </Switch>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }

  render() {
    const { visible } = this.props;
    return (
      <Container style={{ width: '100%' }}>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>} >

            <Sidebar.Pushable >
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={this.handleSidebarHide}
                vertical
                visible={visible}
                width='thin'
              >

                <SidebarMenus />

              </Sidebar>
              <Sidebar.Pusher dimmed={visible}>
                {/* <Segment basic> */}
                  {this.renderContainer()}
                {/* </Segment> */}
              </Sidebar.Pusher>
            </Sidebar.Pushable>

          </Suspense>
        </Router>
      </Container>
    );
  };
};

const mapStateToProps = (state) => ({
  visible: state.visible
});

export default connect(mapStateToProps, { sidebarPusher })(App);