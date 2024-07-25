import { SVGTSXIconProps } from '../../utils/types';

export const UpIcon = ({ customClass = 'h-6 w-6' }: SVGTSXIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      className={`fill-black-700 ${customClass}`}
    >
      <path d="M6 .625l-6 6 1.4 1.4 4.6-4.6 4.6 4.6 1.4-1.4-6-6z"></path>
    </svg>
  );
};
