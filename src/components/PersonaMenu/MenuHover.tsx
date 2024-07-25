import { SVGTSXIconProps } from '../../utils/types';

type MenuHoverProps = {
  menuLabel?: string;
  Icon: React.FC<SVGTSXIconProps>;
  btnClass?: string;
  iconClass?: string;
  txtClass?: string;
};

export const MenuHover = ({
  Icon,
  menuLabel,
  btnClass = '',
  iconClass = '',
  txtClass = ''
}: MenuHoverProps) => {
  return (
    <button
      className={`group flex gap-3 px-2 py-2 pl-8 w-full hover:text-indigo-500 hover:bg-gray-50 rounded-lg ${btnClass}`}
    >
      <Icon customClass={`h-5 w-5 group-hover:fill-indigo-700 ${iconClass}`} />
      {menuLabel && (
        <p className={`text-base font-medium ${txtClass}`}>{menuLabel}</p>
      )}
    </button>
  );
};
