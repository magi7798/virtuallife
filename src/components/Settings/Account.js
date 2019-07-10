import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form, Button, Header, Icon } from 'semantic-ui-react';
import TimezonePicker from 'react-timezone';

class Account extends React.Component {

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Fragment>
        <Header as='h2'>
          <Icon name='edit' />
          <Header.Content>Edit Your Account</Header.Content>
        </Header>

        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Username (No Change)</label>
            <Field
              name="username"
              component="input"
              type="text"
              placeholder="username"
              disabled
            />
          </Form.Field>
          <Form.Field required>
            <label>Current Password</label>
            <Field
              name="current password"
              component="input"
              type="password"
              placeholder="current password"
            />
          </Form.Field>
          <Form.Field required>
            <label>New Password</label>
            <Field
              name="new password"
              component="input"
              type="password"
              placeholder="new password"
            />
          </Form.Field>
          <Form.Field required>
            <label>New Password Confirmation</label>
            <Field
              name="new password confirmation"
              component="input"
              type="password"
              placeholder="new password confirmation"
            />
          </Form.Field>
          <Form.Field required>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </Form.Field>

          <Form.Field required>
            <label>Date of birth</label>
          </Form.Field>

          <Form.Field required>
            <label>Timezone</label>
            <TimezonePicker
              value="Asia/Yerevan"
              onChange={timezone => console.log('New Timezone Selected:', timezone)}
              inputProps={{
                placeholder: 'Select Timezone...',
                name: 'timezone',
              }}
            />
          </Form.Field>

          <Form.Field>
            <Button.Group floated='right'>
              <Button type="button" disabled={submitting} color='red' size='large'>
                Cancel
              </Button>
              <Button.Or />
              <Button type="submit" disabled={submitting} color='blue' size='large'>
                Save
              </Button>
            </Button.Group>
          </Form.Field>
        </Form>
      </Fragment>
    );
  };
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(Account);