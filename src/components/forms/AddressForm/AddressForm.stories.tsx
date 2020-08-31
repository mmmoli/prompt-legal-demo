import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Formik, Form, FieldArray } from 'formik';
import { action } from '@storybook/addon-actions';
import { Address, AddressForm } from './AddressForm';

export default {
  title: 'Forms/Address Form',
  component: AddressForm
} as Meta;

const Template: Story<Address> = () => (
  <Formik
    initialValues={{
      premises: []
    }}
    onSubmit={action('submit')}
  >
    <Form>
      <FieldArray name="premises">
        {() => <AddressForm onCancel={action('cancel')} index={0} />}
      </FieldArray>
    </Form>
  </Formik>
);

export const primary = Template.bind({});
