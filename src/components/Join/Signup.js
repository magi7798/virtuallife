import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'semantic-ui-react';
import TimezonePicker from 'react-timezone';

const SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Form onSubmit={handleSubmit}>
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
  )
}

export default reduxForm({
  form: 'simple' // a unique identifier for this form
})(SimpleForm)