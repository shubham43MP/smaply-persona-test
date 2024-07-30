import { ChooseImage } from '../../assets/Icons/chooseImage';
import { ChooseAnImageProps } from './types';

export const ChooseAnImage = ({
  selectedImage,
  handleImageChange,
  identifier = ''
}: ChooseAnImageProps) => {
  const imageIdentifier = `imageInput-${identifier}`;
  return (
    <div
      className=" bg-white rounded-lg relative border-2 border-solid border-gray-300 "
      onClick={() => document.getElementById(imageIdentifier).click()}
    >
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-75 max-h-75 h-75 w-75 bg-cover object-none rounded-lg"
        />
      ) : (
        <div className="text-center flex flex-col items-center w-72 h-52 justify-center cursor-pointer">
          <ChooseImage customClass="fill-bluish" />
          <p className="text-bluish mt-2">Choose an Image</p>
        </div>
      )}
      <input
        type="file"
        id={imageIdentifier}
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};
