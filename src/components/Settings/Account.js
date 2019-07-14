import "react-datepicker/dist/react-datepicker.css";
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Form, Button, Header, Icon } from 'semantic-ui-react';
import TimezonePicker from 'react-timezone';
import DatePicker from "react-datepicker";

const formStyle = {
  width: '50%',
  marginTop: '30px',
  marginLeft: 'Auto',
  marginRight: 'Auto'
}

class Account extends React.Component {

  state = {
    startDate: new Date()
  };

  handleChange = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit} style={formStyle}>
        <Header as='h2'>
          <Icon name='edit' />
          <Header.Content>Edit Your Account</Header.Content>
        </Header>
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
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </Form.Field>

        <Form.Field required>
          <label>Timezone</label>
          <TimezonePicker
            value="Asia/Yerevan"
            onChange={timezone => console.log('New Timezone Selected:', timezone)}
            inputProps={{
              placeholder: 'Select Timezone...',
              name: 'timezone'
            }}
            style={{ width: '400px' }}
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
    );
  };
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Account);