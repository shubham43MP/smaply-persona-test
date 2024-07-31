import { Fragment } from 'react';
import { PersonaTextCard } from '@/components/compounds/PersonaTextCard';
import { EditableRichTextComp } from '@/components/compounds/EditableRichTextComp';
import { PersonaDetailsModal } from '@/components/compounds/PersonaDetailsModal';
import { TextImageMenu } from '@/components/compounds/TextImageMenu';
import { ChooseAnImage } from '@/components/compounds/ChooseImage';
import { ImageOrTextEnum } from '@/utils/types';
import { EditIcon } from '@/assets/Icons/edit';
import { usePersona } from './usePersona';
import { PersonaAvatar } from '@/components/atoms/PersonaAvatar';

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
    <div className="flex justify-center mt-8">
      <div>
        <div className="flex flex-col gap-3">
          <p className="flex gap-2">
            <span className="font-medium text-base text-textblack">
              My Sandbox
            </span>
            /<span className="font-medium text-base">My Workspace</span>
          </p>
          <div className="flex gap-2 relative">
            <PersonaAvatar
              customClass={`w-14 h-14 rounded-md bg-${backgroundColor}`}
            >
              {displayPicture}
            </PersonaAvatar>
            <p className="ml-2 text-xl sm:text-4xl text-semibold self-center">
              {name}
            </p>
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
                customClass="absolute z-20 top-16"
                onClose={closeHandler}
              />
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8 max-w-2xl rounded-xl divide-x divide-gray-400 bg-darkcream min-h-57 min-w-121">
          <div className="p-4 flex flex-col gap-3 min-w-82">
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
                      handleImageChange={rendererImageHandler(
                        cardIdentifierUq,
                        1
                      )}
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
          <div className="p-4 flex flex-col gap-3 min-w-82">
            <div className="bg-white rounded-lg p-3 flex gap-3">
              <PersonaAvatar customClass={`w-16 h-16 bg-${backgroundColor}`}>
                {displayPicture}
              </PersonaAvatar>
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
                      handleImageChange={rendererImageHandler(
                        cardIdentifierUq,
                        2
                      )}
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
    </div>
  );
};
