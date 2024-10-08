import { IconCompProps } from './types';

export const IconComp = ({
  imgUrl,
  customClass = 'h-6 w-6'
}: IconCompProps) => (
  <picture>
    <img src={imgUrl} alt="persona icon" className={customClass} />
  </picture>
);
