import React, { useState } from 'react';
import { ChooseImage } from '../../assets/Icons/chooseImage';
import { PersonaTextCard } from '../PersonaTextCard';
import { PersonaWatermarkImage } from '../PersonaWatermarkImage';

export const Persona = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (
    event: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    const file = event?.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="grid grid-cols-2 max-w-2xl rounded-xl divide-y-2 bg-[#DED7D5] h-[849px] w-[664px]">
      <div className="p-4">
        {
          <div
            className=" bg-white rounded-lg relative border-2 border-solid border-gray-300 "
            onClick={() => document.getElementById('imageInput').click()}
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
              id="imageInput"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        }
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="bg-white rounded-lg p-3 flex gap-3">
          <PersonaWatermarkImage />
          <PersonaTextCard />
        </div>

        <div className="bg-white rounded-lg p-3 flex gap-3">
          <PersonaTextCard />
        </div>
      </div>
    </div>
  );
};
