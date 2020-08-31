import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import tw from 'twin.macro';

export default {
  title: 'Global/Button',
  component: Button,
  argTypes: {
    buttonVariant: {
      control: {
        type: 'select',
        options: ['primary', 'outlined', 'text']
      }
    },
    children: {
      control: {
        type: 'text'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = ({ children, ...args }: any) => (
  <Button onClick={action('clicked')} {...args}>
    {children}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  children: 'Click me',
  buttonVariant: 'primary'
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Primary.args,
  buttonVariant: 'outlined'
};

export const Text = Template.bind({});
Text.args = {
  ...Primary.args,
  buttonVariant: 'text'
};
