import { SVGTSXIconProps } from '../../utils/types';

export const TemplatesIcon = ({
  color = '#1C1C1C',
  customClass = 'h-6 w-6'
}: SVGTSXIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 18 18"
      className={customClass}
    >
      <path
        fill={color}
        d="M2 18c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 010 16V2C0 1.45.196.98.588.587A1.926 1.926 0 012 0h14c.55 0 1.02.196 1.413.588C17.803.979 18 1.45 18 2v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0116 18H2zm0-2h6V2H2v14zm8 0h6V9h-6v7zm0-9h6V2h-6v5z"
      ></path>
    </svg>
  );
};
