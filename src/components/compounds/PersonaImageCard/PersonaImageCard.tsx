import { PersonaImageCardProps } from './types';

export const PersonaImageCard = ({ svgElement }: PersonaImageCardProps) => (
  <div className="h-75 w-75 rounded-xl">
    {svgElement && <picture>{svgElement}</picture>}
  </div>
);
