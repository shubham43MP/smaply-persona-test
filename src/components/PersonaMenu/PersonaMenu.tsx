import {
  FavoritesIcon,
  FolderIcon,
  OnePeople,
  PlusIcon,
  SettingsIcon,
  TwoPersonIcon
} from '../../assets/Icons';
import { AccordionCustom } from '../Accordion/Accordion';
import { IconComp } from '../atoms/IconComp';
import { MenuHover } from './MenuHover';
import { personaLowerMeuData } from './personaData';

const Item = () => {
  return (
    <>
      <IconComp imgUrl="/icons/favorites.svg" />
    </>
  );
};

export const PersonaMenu = () => {
  return (
    <div className="p-4 rounded-lg w-96 max-w-sm">
      <button className="flex px-2 py-3">
        <FavoritesIcon />
        <p className="ml-2 text-lg font-medium">Favourites</p>
      </button>
      <button className="flex px-2 py-3">
        <TwoPersonIcon />
        <p className="ml-2 text-lg font-medium">Shared with me</p>
      </button>
      <hr className="border-solid border-black-700"></hr>
      <div className=""></div>
      <AccordionCustom
        HeaderContent={
          <>
            <div className="flex gap-3 px-2 py-3">
              <OnePeople />
              <p className="text-lg font-medium">My Sandbox</p>
            </div>
            <div className="flex gap-4">
              <PlusIcon />
              <SettingsIcon />
            </div>
          </>
        }
        BodyContent={
          <>
            <AccordionCustom
              HeaderContent={
                <div className="flex gap-3 px-2 py-3 ml-2">
                  <FolderIcon />
                  <p className="text-lg font-medium">My Workspace</p>
                </div>
              }
              BodyContent={
                <div className="">
                  {personaLowerMeuData.map(({ label, Icon }) => (
                    <MenuHover key={label} menuLabel={label} Icon={Icon} />
                  ))}
                </div>
              }
            />
          </>
        }
      />
    </div>
  );
};
