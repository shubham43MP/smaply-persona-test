import { SVGTSXIconProps } from '../../utils/types';

type MenuHoverProps = {
  menuLabel: string;
  Icon: React.FC<SVGTSXIconProps>;
};

export const MenuHover = ({ Icon, menuLabel }: MenuHoverProps) => {
  return (
    <button className="group flex gap-3 px-2 py-2 pl-8 w-full hover:text-indigo-500 rounded-lg">
      <Icon customClass="h-5 w-5 group-hover:fill-indigo-700" />
      <p className="text-base font-medium">{menuLabel}</p>
    </button>
  );
};
