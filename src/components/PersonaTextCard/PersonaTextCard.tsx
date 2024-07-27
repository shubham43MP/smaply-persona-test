type PersonaTextCardProps = {
  header?: string;
  text?: string;
};

export const PersonaTextCard = ({
  header = 'Persona Name',
  text = 'Rosie Russman'
}: PersonaTextCardProps) => {
  return (
    <div className="flex flex-col justify-center text-lightgray">
      <p className="text-base font-semibold">{header}</p>
      <p className="text-sm font-normal">{text}</p>
    </div>
  );
};
