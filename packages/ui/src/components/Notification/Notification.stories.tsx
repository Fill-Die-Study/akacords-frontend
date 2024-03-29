import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Divider, NotificationContainer, NotificationEmptyItem, NotificationItem } from '@src/components';

export default {
  component: NotificationContainer
} as ComponentMeta<typeof NotificationContainer>;

const DefaultNotification: ComponentStory<typeof NotificationContainer> = (args) => {
  return (
    <NotificationContainer {...args}>
      <NotificationItem title="제목" body="내용" />
      <Divider />
      <NotificationItem
        title="제목2"
        body="국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다."
      />
    </NotificationContainer>
  );
};

const EmptyNotification: ComponentStory<typeof NotificationContainer> = (args) => {
  return (
    <NotificationContainer {...args}>
      <NotificationEmptyItem />
    </NotificationContainer>
  );
};

export const Primary = DefaultNotification.bind({});
export const Empty = EmptyNotification.bind({});
