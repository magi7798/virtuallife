import 'react-datepicker/dist/react-datepicker.css';
import React from 'react'
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

/*
const FormFields = () => {
  const fieldLabels = [
    'Username', 'Password', 'Password Confirmation', 'Email', 'Date of birth', 'Timezone'
  ];
  const formfield = fieldLabels.map(label => {
    return (
      <Form.Field required key={label}>
        <label>{label}</label>
        <Field
          name="username"
          component="input"
          type="text"
          placeholder="username"
        />
      </Form.Field>
    );
  });
  return formfield;
};
*/
class SimpleForm extends React.Component {

  state = {
    startDate: new Date()
  };

  handleChange = (date) => {
    this.setState({ startDate: date });
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <Form onSubmit={handleSubmit} style={formStyle}>
        <Header as='h2'>
          <Icon name='edit' />
          <Header.Content>Create Your Account</Header.Content>
        </Header>
        <Form.Field required>
          <label>Username</label>
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="username"
          />
        </Form.Field>
        <Form.Field required>
          <label>Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="password"
          />
        </Form.Field>
        <Form.Field required>
          <label>Password Confirmation</label>
          <Field
            name="confirmation"
            component="input"
            type="password"
            placeholder="confirmation"
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
            <Button type="button" disabled={pristine || submitting} onClick={reset} size='large'>
              Clear Values
          </Button>
            <Button.Or />
            <Button type="submit" disabled={submitting} color='blue' size='large'>
              Submit
          </Button>
          </Button.Group>
        </Form.Field>
      </Form>
    );
  };
};

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm);