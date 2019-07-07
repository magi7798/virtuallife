import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Grid, Segment, Icon, Header } from 'semantic-ui-react';

class Login extends React.Component {

  render() {
    return (
      <Segment.Group>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable centered>
            <Grid.Row>
              <Grid.Column>
                <Form>
                  <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username' />
                  <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />
                  <Button content='Login' primary fluid />
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <Grid.Row>
                <Button color='facebook'>
                  <Icon name='facebook' /> Facebook
                </Button>
                </Grid.Row>
                <Grid.Row>
                <Button color='google plus'>
                  <Icon name='google' /> Google
                </Button>
                </Grid.Row>
                
                
                
              </Grid.Column>
            </Grid.Row>

          </Grid>
          <Divider vertical>Or</Divider>
        </Segment>
        <Segment textAlign='center' color='teal'>
          <Header>Don't you have an account yet?</Header>
          <Button content='Start here' icon='signup' size='big' as={Link} to='/signup' color='teal' />

        </Segment>
      </Segment.Group>
    );
  };
};

export default Login;