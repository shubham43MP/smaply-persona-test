export type DataCard = {
    type: 'image' | 'text';
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