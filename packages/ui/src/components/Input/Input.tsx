import React from 'react';

export interface InputProps {
  value: string;
  label: string;
}

export function Input({ value, label }: InputProps) {
  return (
    <div className="w-[348px] p-[14px_13px] flex items-center gap-[10px] border border-[#C4C6CC] rounded-[8px] bg-white">
      {label && <span className="h-[14px] text-[12px] mt-[-15%] bg-white px-1">{label}</span>}
      <input
        className="w-[231px] px-[10px] text-sm leading-[17px] font-medium placeholder:text-[#AAADB3] outline-none"
        type="text"
        value={value}
      />
    </div>
  );
}
