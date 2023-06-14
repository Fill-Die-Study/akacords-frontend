import Link from 'next/link';
import React from 'react';
import { NavColumn, NavContainer, NavItem, NavText } from '@akacords-frontend/ui';
import { Notification, SearchNormal } from 'iconsax-react';
import Image from 'next/image';
import TestImage from './test_image.png';

export default function MainPage() {
  return (
    <section>
      <NavContainer>
        <NavColumn>
          <NavText>홈</NavText>
          <NavText>강의 목록</NavText>
          <NavText>크리에이터 신청하기</NavText>
        </NavColumn>
        <NavColumn isNarrow>
          <NavItem>
            <SearchNormal size={18} />
          </NavItem>
          <NavItem>
            <Notification size={18} />
          </NavItem>
          <NavItem>
            <div className="flex items-center space-x-[16px]">
              <img src="https://via.placeholder.com/40" alt="profile" className="rounded-full" />
              <Link href="/login" className="hover:opacity-70">
                로그인
              </Link>
            </div>
          </NavItem>
        </NavColumn>
      </NavContainer>

      <div className="w-full h-[600px] bg-black flex flex-col-reverse">
        <h1 className="text-5xl text-white font-medium mb-[60px] ml-[200px]">크리에이터 강의 만들기</h1>
        <h1 className="text-5xl text-white font-medium mb-3 ml-[200px]">시뮬레이터 활용한</h1>
        <Image src={TestImage} alt="image" width={600} height={600} className="absolute left-[40%]" />
      </div>
    </section>
  );
}
