'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import VerifyEmailSection from '@app/register/VerifyEmailSection';
import InputSection from '@app/register/InputSection';
import DoneSection from '@app/register/DoneSection';
import RegisterImage from './register-image.png';

export enum RegisterStep {
  VERIFY_EMAIL,
  OTHER_INPUT,
  DONE
}
export default function RegisterPage() {
  const [step, setStep] = useState<RegisterStep>(RegisterStep.VERIFY_EMAIL);

  const stepMap = {
    [RegisterStep.VERIFY_EMAIL]: <VerifyEmailSection setStep={setStep} />,
    [RegisterStep.OTHER_INPUT]: <InputSection setStep={setStep} />,
    [RegisterStep.DONE]: <DoneSection />
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[56rem] h-[48rem] border-2 border-gray-100 flex shadow-lg">
        <Image className="w-2/4" src={RegisterImage} alt="Welcome" placeholder="blur" />
        {stepMap[step]}
      </div>
    </div>
  );
}
