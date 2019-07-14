import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Grid, Segment, Icon, Header } from 'semantic-ui-react';

const segmentStyle = {
  width: '70%',
  marginTop: '30px',
  marginLeft: 'Auto', 
  marginRight: 'Auto'
}

class Login extends React.Component {

  render() {
    return (
      <Segment.Group style={segmentStyle}>
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable centered >
            <Grid.Row >
              <Grid.Column>
                <Form size='small'>
                  <Form.Input icon='user' iconPosition='left' label='Username' placeholder='Username'/>
                  <Form.Input icon='lock' iconPosition='left' label='Password' type='password' />
                  <Button content='SIGN IN' primary fluid/>
                </Form>
              </Grid.Column>

              <Grid.Column verticalAlign='middle'>
                <p>Sign in through your SNS account.</p>
                <Grid.Row>
                  <Button color='facebook' style={{width: '200px'}}>
                    <Icon name='facebook' /> Facebook
                  </Button>
                </Grid.Row>
                <br></br>
                <Grid.Row>
                  <Button color='google plus' style={{width: '200px'}}>
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
          <Button content='Create Your Account' icon='signup' size='big' as={Link} to='/signup' color='teal' />
        </Segment>
      </Segment.Group>
    );
  };
};

export default Login;