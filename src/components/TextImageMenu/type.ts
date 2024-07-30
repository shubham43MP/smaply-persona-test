import { ImageOrTextEnum } from "../../utils/types";

export type DropDownList = {
    id: number;
    title: string;
    icon: JSX.Element;
    customClass: string;
    type: ImageOrTextEnum;
};