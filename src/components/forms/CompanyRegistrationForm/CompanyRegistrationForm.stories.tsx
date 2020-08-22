import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Form from './CompanyRegistrationForm';

export default {
  title: 'Forms/Company Registration Form',
  component: Form
} as Meta;

const Template: Story<{}> = () => <Form submitHandler={action('Submit')} />;

export const primary = Template.bind({});
