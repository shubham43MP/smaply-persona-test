import {
    ArchiveIcon,
    JourneyMapsIcon,
    OnePeople,
    PortfolioIcon,
    SettingsIcon,
    TemplatesIcon,
  } from '../../assets/Icons';
import { SVGTSXIconProps } from '../../utils/types';

export type PersonaLowerMeuDataType = {
    label: string;
    Icon: React.FC<SVGTSXIconProps>
}

export const personaLowerMeuData: PersonaLowerMeuDataType[] = [
    {
        label: 'Journey Maps',
        Icon: JourneyMapsIcon
    },
    {
        label: 'Personas',
        Icon: OnePeople
    },
    {
        label: 'Templates',
        Icon: TemplatesIcon
    },
    {
        label: 'Portfolio',
        Icon: PortfolioIcon
    },
    {
        label: 'Archives',
        Icon: ArchiveIcon
    },
    {
        label: 'Settings',
        Icon: SettingsIcon
    }
]