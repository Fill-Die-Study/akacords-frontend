'use client';

import React, { useEffect, useRef, useState } from 'react';

export interface InputProps {
  value: string;
  label: string;
  placeholder: string;
}

export function Input({ value, label, placeholder }: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isInputFocused, setInputFocused] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) {
      if (isInputFocused) {
        inputRef.current.placeholder = placeholder;
      } else {
        inputRef.current.placeholder = label;
      }
    }
  }, [isInputFocused, placeholder, label]);

  return (
    <div className="relative w-[348px] p-[14px_13px] flex items-center gap-[10px] border border-[#C4C6CC] rounded-[8px] bg-white focus-within:border-black">
      <input
        ref={inputRef}
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        className="peer w-[231px] px-[10px] text-sm leading-[17px] font-medium placeholder:text-[#AAADB3] outline-none"
        type="text"
        placeholder={placeholder}
        value={value}
      />
      <span className="hidden absolute h-[14px] text-[12px] mt-[-15%] bg-white px-1 text-[#AAADB3] peer-focus:text-black peer-focus:inline peer-[:not(:placeholder-shown)]:inline">
        {label}
      </span>
    </div>
  );
}
