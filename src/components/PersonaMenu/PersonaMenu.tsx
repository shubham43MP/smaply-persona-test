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
      <MenuHover
        menuLabel="Favourites"
        Icon={FavoritesIcon}
        btnClass="pl-0 px-2 py-3 gap-0"
        txtClass="ml-2 text-lg"
        iconClass="h-6 w-6"
      />
      <MenuHover
        menuLabel="Shared with me"
        Icon={TwoPersonIcon}
        btnClass="pl-0 px-2 py-3 gap-0"
        txtClass="ml-2 text-lg"
        iconClass="h-6 w-6"
      />
      <hr className="border-solid border-black-700"></hr>
      <AccordionCustom
        HeaderContent={
          <>
            <div className="flex gap-3 px-2 py-3">
              <MenuHover
                menuLabel="My Sandbox"
                Icon={OnePeople}
                btnClass="pl-0"
              />
            </div>
            <div className="flex gap-4 ">
              <MenuHover Icon={PlusIcon} btnClass="pl-0" />
              <MenuHover Icon={SettingsIcon} btnClass="pl-0" />
            </div>
          </>
        }
        BodyContent={
          <>
            <AccordionCustom
              HeaderContent={
                <div className="flex gap-3 px-2 py-3 ml-2">
                  <MenuHover
                    menuLabel="My Workspace"
                    Icon={FolderIcon}
                    btnClass="pl-0"
                  />
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
