import { ChangeEventHandler, useRef } from 'react';
import { ChooseImage } from '@/assets/Icons/chooseImage';
import { ChooseAnImageProps } from './types';

export const ChooseAnImage = ({
  selectedImage,
  handleImageChange,
  identifier = ''
}: ChooseAnImageProps) => {
  const imageIdentifier = `imageInput-${identifier}`;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className=" bg-white rounded-lg relative border-2 border-solid border-gray-300 "
      onClick={handleClick}
    >
      {selectedImage ? (
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-75 max-h-75 h-75 w-75 bg-cover object-none rounded-lg"
        />
      ) : (
        <div className="text-center flex flex-col items-center sm:w-72 h-52 justify-center cursor-pointer">
          <ChooseImage customClass="fill-bluish" />
          <p className="text-bluish mt-2 hidden sm:block">Choose an Image</p>
        </div>
      )}
      <input
        type="file"
        id={imageIdentifier}
        accept="image/*"
        ref={inputRef}
        onChange={
          handleImageChange as ChangeEventHandler<HTMLInputElement> | undefined
        }
        className="hidden"
      />
    </div>
  );
};
