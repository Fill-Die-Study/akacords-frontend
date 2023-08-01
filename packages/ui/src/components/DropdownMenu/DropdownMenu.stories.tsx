import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Like1, MenuBoard, Trash } from 'iconsax-react';
import { Divider, DropdownMenuContainer, DropdownMenuItem } from '@src/components';

export default {
  component: DropdownMenuContainer
} as ComponentMeta<typeof DropdownMenuContainer>;

const Template: ComponentStory<typeof DropdownMenuContainer> = (args) => {
  return (
    <DropdownMenuContainer {...args}>
      <DropdownMenuItem title="메모장" icon={<MenuBoard size={16} />} side={<p>Alt+D</p>} />
      <DropdownMenuItem title="좋아요" icon={<Like1 size={16} />} side={<p>⌘D</p>} />
      <Divider />
      <DropdownMenuItem title="로그아웃" icon={<Trash size={16} />} />
    </DropdownMenuContainer>
  );
};
export const Primary = Template.bind({});
