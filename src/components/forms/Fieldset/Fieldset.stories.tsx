/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Fieldset, FieldsetProps } from './Fieldset';

export default {
  title: 'Forms/Fieldset',
  component: Fieldset
} as Meta;

const Template: Story<FieldsetProps> = (args: any) => (
  <Fieldset {...args}>Stuff and things</Fieldset>
);

export const primary = Template.bind({});
primary.args = {
  heading: 'Premises'
};
