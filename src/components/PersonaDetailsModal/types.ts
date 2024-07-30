import { ReactNode, SetStateAction, Dispatch } from 'react';

export type PersonaDetailsModalProps = {
    displayPicture: ReactNode;
    setDisplayPicture: Dispatch<SetStateAction<ReactNode>>;
    name: string;
    setName: Dispatch<SetStateAction<string>>;
    backgroundColor: string;
    setBackgroundColor: Dispatch<SetStateAction<ReactNode>>;
    handleForm: () => void;
    customClass?: string;
    onClose: () => void;
  };