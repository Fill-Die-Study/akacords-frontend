import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './index';

export default {
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
