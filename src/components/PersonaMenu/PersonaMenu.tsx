import { AccordionCustom } from '../Accordion/Accordion';
import { IconComp } from '../atoms/IconComp';

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
      <div className="flex px-2 py-3">
        <IconComp imgUrl="/icons/favorites.svg" />
        <p className="ml-2 text-lg font-medium">Favourites</p>
      </div>
      <div className="flex px-2 py-3">
        <IconComp imgUrl="/icons/twopeople.svg" />
        <p className="ml-2 text-lg font-medium">Shared with me</p>
      </div>
      <hr className="border-solid border-black-700"></hr>
      <div className=""></div>
      <AccordionCustom
        HeaderContent={
          <>
            <div className="flex gap-3 px-2 py-3">
              <IconComp imgUrl="/icons/onepeople.svg" />
              <p className="text-lg font-medium">My Workspace</p>
            </div>
            <div className="flex gap-4">
              <IconComp imgUrl="/icons/plusicon.svg" />
              <IconComp imgUrl="/icons/settings.svg" />
            </div>
          </>
        }
      />
    </div>
  );
};
