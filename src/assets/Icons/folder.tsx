import { SVGTSXIconProps } from '../../utils/types';

export const FolderIcon = ({
  color = '#1C1C1C',
  customClass = 'h-6 w-6'
}: SVGTSXIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="16"
      fill="none"
      viewBox="0 0 20 16"
      className={customClass}
    >
      <path
        fill={color}
        d="M2 16c-.55 0-1.02-.196-1.413-.588A1.926 1.926 0 010 14V2C0 1.45.196.98.588.587A1.926 1.926 0 012 0h5.175a1.975 1.975 0 011.4.575L10 2h8c.55 0 1.02.196 1.413.587C19.803 2.98 20 3.45 20 4v10c0 .55-.196 1.02-.587 1.412A1.926 1.926 0 0118 16H2zm0-2h16V4H9.175l-2-2H2v12z"
      ></path>
    </svg>
  );
};
