import { ReactNode, useCallback, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { COLORS } from "@/utils/constants";
import { ImageOrTextEnum, LimitedNumericValueFlag } from "@/utils/types";
import { PERSONA_ICONS } from "@/assets/personaAsets";
import { DataCardDerived } from "./types";

export const usePersona = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [displayPicture, setDisplayPicture] =
      useState<ReactNode>(PERSONA_ICONS[0].icon);
    const [name, setName] = useState<string>('Rossie Rosmussen');
    const [backgroundColor, setBackgroundColor] = useState<string>(COLORS[0]);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [rowOneDataCards, setRowOneDataCards] = useState<DataCardDerived>({});
    const [rowTwoDataCards, setRowTwoDataCards] = useState<DataCardDerived>({});
  
    const closeHandler = () => setModalOpen(false);
  
    const rowDataCards = useCallback(
      (flag: LimitedNumericValueFlag) => {
        if (flag === 1) return setRowOneDataCards;
        else return setRowTwoDataCards;
      },
      [setRowOneDataCards, setRowTwoDataCards]
    );
  
    const richTextChangeHandler = useCallback(
      (value: string, identifier: string, flag: LimitedNumericValueFlag) => {
        return rowDataCards(flag)(prev => ({
          ...prev,
          [identifier]: {
            type: ImageOrTextEnum.text,
            content: value
          }
        }));
      },
      [rowDataCards]
    );
  
    const rendererImageHandler = useCallback(
      (
        event: React.ChangeEvent<HTMLInputElement>,
        item: string,
        flag: LimitedNumericValueFlag
      ) => {
        const file = event && event.target?.files?.[0];
        if (item && file) {
          return rowDataCards(flag)(prev => ({
            ...prev,
            [item]: {
              type: ImageOrTextEnum.image,
              content: URL.createObjectURL(file)
            }
          }));
        }
      },
      [rowDataCards]
    );
  
    const handleImageChange = useCallback(
      (event: React.ChangeEventHandler<HTMLInputElement>) => {
        const file = event?.target.files[0];
        if (file) {
          setSelectedImage(URL.createObjectURL(file));
        }
      },
      []
    );
  
    const addImageCardTextRenderer = useCallback(
      (type: ImageOrTextEnum, flag: LimitedNumericValueFlag) => {
        const specifcId = uuidv4();
        const resultant = {
          [specifcId]: {
            type,
            content: ''
          }
        };
        rowDataCards(flag)(prev => ({
          ...prev,
          ...resultant
        }));
      },
      [rowDataCards]
    );

    const handleModal = () => setModalOpen(prev => !prev);

    return {
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
        addImageCardTextRenderer,
      }
}