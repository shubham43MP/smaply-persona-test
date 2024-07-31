import { ImageOrTextEnum, LimitedNumericValueFlag } from "../../../utils/types";

export type DropDownList = {
    id: number;
    title: string;
    icon: JSX.Element;
    customClass: string;
    type: ImageOrTextEnum;
};

export type TextImageMenuProps = {
    menuItemClickHandler: (
      type: ImageOrTextEnum,
      flag: LimitedNumericValueFlag
    ) => void;
    flag: LimitedNumericValueFlag;
  };