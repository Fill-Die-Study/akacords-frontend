import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider } from './index';

export default {
  component: Divider
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
