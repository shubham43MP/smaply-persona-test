import React, { ReactNode, useState } from 'react';
import { ChooseImage } from '../../assets/Icons/chooseImage';
import { PersonaTextCard } from '../PersonaTextCard';
import { PersonaWatermarkImage } from '../PersonaWatermarkImage';
import { EditableRichTextComp } from '../EditableRichTextComp';
import { Hoverable } from '../HoverableMenu/';
import { PersonaDetailsModal } from '../PersonaDetailsModal';
import { RemoveImageComp } from '../../assets/Icons/removeImage';

export interface RichTextCardState {
  text: string;
}

export interface ImageCardState {}

export const Persona = () => {
  const [displayPicture, setDisplayPicture] =
    useState<ReactNode>(RemoveImageComp);
  const [name, setName] = useState<string>('Raghav Verma');
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');

  const [selectedImage, setSelectedImage] = useState(null);
  const [rowOneDataCards, setRowOneDataCards] = useState([]);
  const [rowTwoDataCards, setRowTwoDataCards] = useState([]);

  const handleForm = () => {
    const payload = {
      name,
      backgroundColor
    };
    const value = JSON.stringify(payload);
    alert(value);
  };

  const handleImageChange = (
    event: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    const file = event?.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  return (
    <div className="bg-lightcream">
      <PersonaDetailsModal
        displayPicture={displayPicture}
        setDisplayPicture={setDisplayPicture}
        name={name}
        setName={setName}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        handleForm={handleForm}
      />
      <p className="flex gap-2">
        <span className="font-medium text-base text-textblack">My Sandbox</span>
        /<span className="font-medium text-base">My Workspace</span>
      </p>
      <div className=""></div>
      <div className="grid grid-cols-2 max-w-2xl rounded-xl divide-x divide-gray-400 bg-darkcream h-[849px] w-[664px]">
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

        {/* Right Panel Grid*/}
        <div className="p-4 flex flex-col gap-3">
          <div className="bg-white rounded-lg p-3 flex gap-3">
            <PersonaWatermarkImage />
            <PersonaTextCard />
          </div>

          <div className="bg-white rounded-lg p-3 flex gap-3">
            <PersonaTextCard />
          </div>
          <EditableRichTextComp />

          {/* <div className="flex-1 relative">
          <div className="absolute">
            <Hoverable />
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};