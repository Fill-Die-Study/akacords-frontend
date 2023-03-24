export enum InputStatus {
  DEFAULT = 'DEFAULT',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export const InputBorderColorMap = {
  [InputStatus.DEFAULT]: 'focus-within:border-black',
  [InputStatus.SUCCESS]: 'focus-within:border-[#3486FA]',
  [InputStatus.ERROR]: 'focus-within:border-[#ED1D1D]'
};

export const LabelTextColorMap = {
  [InputStatus.DEFAULT]: 'peer-focus:text-black',
  [InputStatus.SUCCESS]: 'peer-focus:text-[#3486FA]',
  [InputStatus.ERROR]: 'peer-focus:text-[#ED1D1D]'
};
