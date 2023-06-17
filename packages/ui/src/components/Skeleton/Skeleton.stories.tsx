'use client';

import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from '.';

export default {
  component: Skeleton
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => {
  return <Skeleton {...args} />;
};

export const Skeleton1 = Template.bind({});
Skeleton1.storyName = '크기 지정';
Skeleton1.args = {
  variant: 'rect',
  width: 100,
  height: '6rem'
};

export const Skeleton2 = Template.bind({});
Skeleton2.storyName = '모양(variant)';
Skeleton2.args = {
  variant: 'circle',
  width: 150,
  height: 150
};

const GridTemplate: ComponentStory<typeof Skeleton> = (args) => {
  return (
    <div className="w-full h-[150px] grid grid-cols-5 gap-3">
      <Skeleton {...args} />
      <Skeleton {...args} />
      <Skeleton {...args} />
      <Skeleton {...args} />
      <Skeleton {...args} />
    </div>
  );
};

export const Skeleton3 = GridTemplate.bind({});
Skeleton3.storyName = '크기 상속';
