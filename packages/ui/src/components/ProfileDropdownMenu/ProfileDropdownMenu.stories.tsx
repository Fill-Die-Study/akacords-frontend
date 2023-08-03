import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileDropdownMenu } from '@src/components';

export default {
  component: ProfileDropdownMenu
} as ComponentMeta<typeof ProfileDropdownMenu>;

const Template: ComponentStory<typeof ProfileDropdownMenu> = (args) => <ProfileDropdownMenu {...args} />;

export const Primary = Template.bind({});
