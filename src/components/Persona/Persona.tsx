import { Fragment } from 'react';
import { PersonaTextCard } from '../PersonaTextCard';
import { EditableRichTextComp } from '../EditableRichTextComp';
import { PersonaDetailsModal } from '../PersonaDetailsModal';
import { EditIcon } from '../../assets/Icons/edit';
import { TextImageMenu } from '../TextImageMenu';
import { ImageOrTextEnum } from '../../utils/types';
import { ChooseAnImage } from '../ChooseImage/ChooseImage';
import { usePersona } from './usePersona';

export const Persona = () => {
  const {
    backgroundColor,
    name,
    displayPicture,
    modalOpen,
    selectedImage,
    rowOneDataCards,
    rowTwoDataCards,
    handleModal,
    setDisplayPicture,
    setBackgroundColor,
    closeHandler,
    handleImageChange,
    setName,
    rendererImageHandler,
    richTextChangeHandler,
    addImageCardTextRenderer
  } = usePersona();

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
              handleForm={closeHandler}
              customClass="absolute z-20"
              onClose={closeHandler}
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 mt-8 max-w-2xl rounded-xl divide-x divide-gray-400 bg-darkcream min-h-[230px] min-w-[664px]">
        <div className="p-4 flex flex-col gap-3">
          <ChooseAnImage
            selectedImage={selectedImage}
            handleImageChange={handleImageChange}
            identifier="default-img-5678"
          />
          {Object.keys(rowOneDataCards).map(cardIdentifierUq => {
            const element = rowOneDataCards[cardIdentifierUq];
            return (
              <Fragment key={cardIdentifierUq}>
                {element.type === ImageOrTextEnum.image && (
                  <ChooseAnImage
                    identifier={cardIdentifierUq}
                    selectedImage={element.content}
                    handleImageChange={e => {
                      rendererImageHandler(e, cardIdentifierUq, 1);
                    }}
                  />
                )}
                {element.type === ImageOrTextEnum.text && (
                  <EditableRichTextComp
                    flag={1}
                    richText={element.content}
                    richTextChangeHandler={richTextChangeHandler}
                    identifier={cardIdentifierUq}
                  />
                )}
              </Fragment>
            );
          })}
          <TextImageMenu
            menuItemClickHandler={addImageCardTextRenderer}
            flag={1}
          />
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
          {Object.keys(rowTwoDataCards).map(cardIdentifierUq => {
            const element = rowTwoDataCards[cardIdentifierUq];
            return (
              <Fragment key={cardIdentifierUq}>
                {element.type === ImageOrTextEnum.image && (
                  <ChooseAnImage
                    identifier={cardIdentifierUq}
                    selectedImage={element.content}
                    handleImageChange={e => {
                      rendererImageHandler(e, cardIdentifierUq, 2);
                    }}
                  />
                )}

                {element.type === ImageOrTextEnum.text && (
                  <EditableRichTextComp
                    flag={2}
                    richText={element.content}
                    richTextChangeHandler={richTextChangeHandler}
                    identifier={cardIdentifierUq}
                  />
                )}
              </Fragment>
            );
          })}
          <TextImageMenu
            menuItemClickHandler={addImageCardTextRenderer}
            flag={2}
          />
        </div>
      </div>
    </div>
  );
};
