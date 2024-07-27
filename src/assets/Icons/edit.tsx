import { SVGTSXIconProps } from '../../utils/types';

export const EditIcon = ({ customClass = 'h-6 w-6' }: SVGTSXIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      className={`fill-black-700 ${customClass}`}
    >
      <path d="M1.333 10.667h.95L8.8 4.15l-.95-.95-6.517 6.517v.95zM.667 12a.645.645 0 01-.475-.192.645.645 0 01-.192-.475V9.717a1.316 1.316 0 01.383-.934L8.8.383c.133-.122.28-.216.442-.283a1.38 1.38 0 011.025 0c.166.067.31.167.433.3l.917.933c.133.123.23.267.291.434a1.444 1.444 0 010 1.008 1.25 1.25 0 01-.291.442l-8.4 8.4a1.316 1.316 0 01-.933.383H.666zm7.65-8.317L7.85 3.2l.95.95-.483-.467z"></path>
    </svg>
  );
};
