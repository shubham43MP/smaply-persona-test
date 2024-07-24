import { IconCompProps } from './types';

export const IconComp = ({ imgUrl }: IconCompProps) => {
  return (
    <picture>
      <img src={imgUrl} alt="persona icon" className="h-6 w-6" />
    </picture>
  );
};
