export type ChooseAnImageProps = {
    identifier: string;
    selectedImage: string;
    handleImageChange: (
      event: React.ChangeEventHandler<HTMLInputElement>,
      item: string
    ) => void;
  };