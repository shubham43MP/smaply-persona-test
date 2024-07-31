export type ChooseAnImageProps = {
  identifier: string;
  selectedImage: string;
  handleImageChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    item: string
  ) => void;
};