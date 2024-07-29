import { ReactNode, useState } from 'react';
import { PERSONA_ICONS } from '../../assets/personaAsets';
import { COLORS } from '../../utils/constants';
import { RemoveImageComp } from '../../assets/Icons/removeImage';

const CrossIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

const CheckMark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-black absolute"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
};

export const PersonaDetailsModal: React.FC = ({
  displayPicture,
  setDisplayPicture,
  name,
  setName,
  backgroundColor,
  setBackgroundColor,
  handleForm,
  customClass = '',
  onClose
}: any) => {
  return (
    <div className={`flex items-center justify-center ${customClass}`}>
      <div className=" w-full max-w-lg p-6 bg-white rounded-xl shadow-lg">
        {/* Heading and Close Button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Quick Edit</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <CrossIcon />
          </button>
        </div>

        {/* Display Picture and Name Field */}
        <div className="flex mb-6">
          <div
            className="w-16 h-16 rounded-xl bg-gray-200 border flex items-center justify-center"
            style={{ backgroundColor }}
          >
            <div className="w-full h-full p-3 flex items-center justify-center">
              {displayPicture}
            </div>
          </div>
          <div className="ml-4 flex items-center">
            <label className="font-semibold mr-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="outline-none border rounded-lg p-2"
            />
          </div>
        </div>

        {/* Avatar Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Avatar</h3>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <button
              onClick={() => {
                setDisplayPicture(null);
              }}
              className=" p-1 hover:bg-gray-200 rounded"
            >
              <div className=" flex items-center justify-center">
                <RemoveImageComp />
              </div>
            </button>

            {PERSONA_ICONS.map(persona => (
              <div
                key={persona.name}
                onClick={() => {
                  setDisplayPicture(persona.icon);
                }}
                className={`bg-gray-100 p-1 w-10 h-10 cursor-pointer rounded flex items-center justify-center hover:bg-gray-200 ${
                  displayPicture === persona.icon
                    ? 'border border-black'
                    : 'border-none'
                }`}
              >
                <div className="w-full h-full p-1 flex items-center justify-center">
                  {persona.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Color Section */}
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Color</h3>
          <div className="flex flex-wrap gap-2">
            {COLORS.map((color, index) => (
              <button
                key={index}
                onClick={() => setBackgroundColor(color)}
                className={`w-10 h-10 rounded-md flex items-center justify-center ${
                  backgroundColor === color
                    ? 'border-black border'
                    : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              >
                {backgroundColor === color && <CheckMark />}
              </button>
            ))}
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-end gap-4 font-medium border-t pt-4">
          <button
            onClick={onClose}
            className="py-2 px-4 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleForm}
            className="py-2 px-4 bg-purple-700 text-white rounded hover:bg-purple-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
