import { SVGTSXIconProps } from '../../utils/types';

export const FavoritesIcon = ({
  color = '#1C1C1C',
  customClass = 'h-6 w-6'
}: SVGTSXIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none'"
      viewBox="0 0 20 20"
      className={customClass}
    >
      <path
        fill={color}
        d="M3 20c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 011 18V6.725c-.3-.183-.542-.42-.725-.712A1.862 1.862 0 010 5V2C0 1.45.196.98.588.587A1.926 1.926 0 012 0h16c.55 0 1.02.196 1.413.588C19.803.979 20 1.45 20 2v3c0 .383-.092.72-.275 1.013-.183.291-.425.529-.725.712V18c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0117 20H3zM3 7v11h14V7H3zM2 5h16V2H2v3zm6 7h4c.283 0 .52-.096.713-.287A.968.968 0 0013 11a.968.968 0 00-.287-.713A.968.968 0 0012 10H8a.967.967 0 00-.713.287A.968.968 0 007 11c0 .283.096.52.287.713.192.191.43.287.713.287z"
      ></path>
    </svg>
  );
};
