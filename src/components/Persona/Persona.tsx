import React, { Fragment, ReactNode, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChooseImage } from '../../assets/Icons/chooseImage';
import { PersonaTextCard } from '../PersonaTextCard';
import { EditableRichTextComp } from '../EditableRichTextComp';
import { PersonaDetailsModal } from '../PersonaDetailsModal';
import { RemoveImageComp } from '../../assets/Icons/removeImage';
import { EditIcon } from '../../assets/Icons/edit';
import { COLORS } from '../../utils/constants';
import { TextImageMenu } from '../TextImageMenu';

export type DataCard = {
  type: 'image' | 'text';
  content: string;
};

type DataCardDerived = {
  [key: string]: DataCard;
};

type ChooseAnImageProps = {
  identifier: string;
  selectedImage: string;
  handleImageChange: (
    event: React.ChangeEventHandler<HTMLInputElement>,
    item: string
  ) => void;
};

const ChooseAnImage = ({
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

export const Persona = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [displayPicture, setDisplayPicture] =
    useState<ReactNode>(RemoveImageComp);
  const [name, setName] = useState<string>('Rossie Rosmussen');
  const [backgroundColor, setBackgroundColor] = useState<string>(COLORS[0]);

  const [selectedImage, setSelectedImage] = useState<string>('');
  const [rowOneDataCards, setRowOneDataCards] = useState([]);
  const [rowTwoDataCards, setRowTwoDataCards] = useState<DataCardDerived>({});

  const closeHandler = () => setModalOpen(false);

  const handleForm = () => {
    const payload = {
      name,
      backgroundColor
    };
    closeHandler();
  };

  const handleModal = () => {
    setModalOpen(prev => !prev);
  };

  const rendererImageHandler = (
    event: React.ChangeEventHandler<HTMLInputElement>,
    item: string
  ) => {
    const file = event?.target.files[0];
    if (item && file) {
      return setRowTwoDataCards(prev => ({
        ...prev,
        [item]: {
          type: 'image',
          content: URL.createObjectURL(file)
        }
      }));
    }
  };

  const handleImageChange = (
    event: React.ChangeEventHandler<HTMLInputElement>
  ) => {
    const file = event?.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const addImageCardTextRenderer = (type: 'image' | 'text') => {
    const flag = 1;
    const specifcId = uuidv4();
    setRowTwoDataCards(prev => ({
      ...prev,
      [specifcId]: {
        type,
        content: ''
      }
    }));
  };

  return (
    <div className="bg-lightcream">
      <div className="flex flex-col gap-3">
        <p className="flex gap-2">
          <span className="font-medium text-base text-textblack">
            My Sandbox
          </span>
          /<span className="font-medium text-base">My Workspace</span>
        </p>
        <div className="flex gap-2 relative">
          <div
            className="w-14 h-14 p-3 flex items-center justify-center rounded-md"
            style={{ backgroundColor }}
          >
            {displayPicture}
          </div>
          <p className="ml-2 text-4xl text-semibold self-center">{name}</p>
          <div onClick={handleModal} className="self-center cursor-pointer">
            <EditIcon customClass="h6 w-6 " />
          </div>

          {modalOpen && (
            <PersonaDetailsModal
              displayPicture={displayPicture}
              setDisplayPicture={setDisplayPicture}
              name={name}
              setName={setName}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
              handleForm={handleForm}
              customClass="absolute z-20"
              onClose={closeHandler}
            />
          )}
        </div>
      </div>

      {/* <button onClick={() => addImageCardTextRenderer('text')}>Text</button>
      <button onClick={() => addImageCardTextRenderer('image')}>Image</button> */}
      <div className="grid grid-cols-2 mt-8 max-w-2xl rounded-xl divide-x divide-gray-400 bg-darkcream min-h-[849px] min-w-[664px]">
        <div className="p-4 flex flex-col gap-3">
          <ChooseAnImage
            selectedImage={selectedImage}
            handleImageChange={handleImageChange}
            identifier="default-img-5678"
          />
          <TextImageMenu />
        </div>

        {/* Right Panel Grid*/}
        <div className="p-4 flex flex-col gap-3">
          <div className="bg-white rounded-lg p-3 flex gap-3">
            <div
              className={`w-16 h-16 p-3 flex items-center justify-center rounded-md`}
              style={{ backgroundColor }}
            >
              {displayPicture}
            </div>
            <PersonaTextCard text={name} />
          </div>
          <EditableRichTextComp />
          {Object.keys(rowTwoDataCards).map(cardData => {
            const element = rowTwoDataCards[cardData];
            return (
              <Fragment key={cardData}>
                {element.type === 'image' && (
                  <ChooseAnImage
                    identifier={cardData}
                    selectedImage={element.content}
                    handleImageChange={e => {
                      rendererImageHandler(e, cardData);
                    }}
                  />
                )}
              </Fragment>
            );
          })}
          <TextImageMenu />
        </div>
      </div>
    </div>
  );
};
