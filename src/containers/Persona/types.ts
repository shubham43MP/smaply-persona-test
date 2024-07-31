import { ImageOrTextEnum } from "@/utils/types";

export type DataCard = {
    type: ImageOrTextEnum;
    content: string;
  };
  
export type DataCardDerived = {
    [key: string]: DataCard;
  };
  
export type ChooseAnImageProps = {
    identifier: string;
    selectedImage: string;
    handleImageChange: (
      event: React.ChangeEventHandler<HTMLInputElement>,
      item: string
    ) => void;
  };