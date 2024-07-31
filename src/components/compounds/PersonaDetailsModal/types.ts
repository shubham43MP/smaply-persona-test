import { ReactNode, SetStateAction, Dispatch } from 'react';

export type PersonaDetailsModalProps = {
  displayPicture: ReactNode;
  setDisplayPicture: Dispatch<SetStateAction<ReactNode>>;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  backgroundColor: string;
  setBackgroundColor: Dispatch<SetStateAction<string>>;
  handleForm: () => void;
  customClass?: string;
  onClose: () => void;
};