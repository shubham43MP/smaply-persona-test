import { PersonaTextCardProps } from './types';

export const PersonaTextCard = ({
  header = 'Persona Name',
  text = 'Rosie Russman'
}: PersonaTextCardProps) => {
  return (
    <div className="flex flex-col justify-center text-lightgray">
      <p className="text-sm sm:text-base font-semibold">{header}</p>
      <p className="text-xs sm:text-sm font-normal">{text}</p>
    </div>
  );
};
