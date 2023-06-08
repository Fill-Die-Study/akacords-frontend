import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NavColumn, NavContainer, NavItem, NavText } from '@src/components';
import { Notification, SearchNormal } from 'iconsax-react';

export default {
  component: NavContainer
} as ComponentMeta<typeof NavContainer>;

const DefaultTemplate: ComponentStory<typeof NavContainer> = (args) => {
  return (
    <NavContainer {...args}>
      <NavColumn>
        <NavText>홈</NavText>
        <NavText>메뉴1</NavText>
        <NavText>메뉴2</NavText>
      </NavColumn>
    </NavContainer>
  );
};

const ProfileTemplate: ComponentStory<typeof NavContainer> = (args) => {
  return (
    <NavContainer {...args}>
      <NavColumn>
        <NavText>홈</NavText>
        <NavText>메뉴1</NavText>
        <NavText>메뉴2</NavText>
      </NavColumn>
      <NavColumn isNarrow>
        <NavItem>
          <SearchNormal size={18} color="black" />
        </NavItem>
        <NavItem>
          <Notification size={18} color="black" />
        </NavItem>
        <NavItem>
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="profile" className="rounded-full mr-[16px]" />
            <p>닉네임</p>
          </div>
        </NavItem>
      </NavColumn>
    </NavContainer>
  );
};

export const Primary = DefaultTemplate.bind({});
export const WithProfile = ProfileTemplate.bind({});
