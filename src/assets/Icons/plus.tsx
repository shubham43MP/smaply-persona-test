import { SVGTSXIconProps } from '../../utils/types';

export const PlusIcon = ({ customClass = 'h-6 w-6' }: SVGTSXIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={`fill-black-700 ${customClass}`}
    >
      <path d="M6 8H1a.968.968 0 01-.713-.287A.968.968 0 010 7c0-.283.096-.52.287-.713A.968.968 0 011 6h5V1c0-.283.096-.52.287-.713A.968.968 0 017 0c.283 0 .52.096.713.287C7.904.48 8 .718 8 1v5h5c.283 0 .52.096.713.287.191.192.287.43.287.713s-.096.52-.287.713A.968.968 0 0113 8H8v5c0 .283-.096.52-.287.713A.967.967 0 017 14a.967.967 0 01-.713-.287A.968.968 0 016 13V8z"></path>
    </svg>
  );
};
