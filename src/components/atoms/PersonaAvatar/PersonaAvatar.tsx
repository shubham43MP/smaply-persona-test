import { PersonaAvatarProps } from './types';

export const PersonaAvatar = ({
  children,
  customClass
}: PersonaAvatarProps) => (
  <div
    className={`p-3 flex items-center justify-center rounded-xl ${customClass}`}
  >
    {children}
  </div>
);
