type PersonaImageCardProps = {
  name?: string;
  svgElement?: React.ReactNode;
};

export const PersonaImageCard = ({ svgElement }: PersonaImageCardProps) => {
  return (
    <div className="h-75 w-75 rounded-xl">
      {svgElement && <picture>{svgElement}</picture>}
    </div>
  );
};
