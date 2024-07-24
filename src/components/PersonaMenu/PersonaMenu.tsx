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
              <p className="text-lg font-medium">My Sandbox</p>
            </div>
            <div className="flex gap-4">
              <IconComp imgUrl="/icons/plusicon.svg" />
              <IconComp imgUrl="/icons/settings.svg" />
            </div>
          </>
        }
        BodyContent={
          <>
            <AccordionCustom
              HeaderContent={
                <div className="flex gap-3 px-2 py-3 ml-2">
                  <IconComp imgUrl="/icons/folder.svg" />
                  <p className="text-lg font-medium">My Workspace</p>
                </div>
              }
              BodyContent={
                <div className="">
                  <div className="flex gap-3 px-2 py-2 pl-8">
                    <IconComp
                      imgUrl="/icons/journeymaps.svg"
                      customClass="h-5 w-5"
                    />
                    <p className="text-base font-medium">Journey Maps</p>
                  </div>
                  <div className="flex gap-3 px-2 py-2 pl-8">
                    <IconComp
                      imgUrl="/icons/onepeople.svg"
                      customClass="h-5 w-5"
                    />
                    <p className="text-base font-medium">Personas</p>
                  </div>
                  <div className="flex gap-3 px-2 py-2 pl-8">
                    <IconComp
                      imgUrl="/icons/templates.svg"
                      customClass="h-5 w-5"
                    />
                    <p className="text-base font-medium">Templates</p>
                  </div>
                  <div className="flex gap-3 px-2 py-2 pl-8">
                    <IconComp
                      imgUrl="/icons/portfolio.svg"
                      customClass="h-5 w-5"
                    />
                    <p className="text-base font-medium">Portfolio</p>
                  </div>
                  <div className="flex gap-3 px-2 py-2 pl-8">
                    <IconComp
                      imgUrl="/icons/archives.svg"
                      customClass="h-5 w-5"
                    />
                    <p className="text-base font-medium">Archives</p>
                  </div>
                  <div className="flex gap-3 px-2 py-2 pl-8">
                    <IconComp
                      imgUrl="/icons/settings.svg"
                      customClass="h-5 w-5"
                    />
                    <p className="text-base font-medium">Settings</p>
                  </div>
                </div>
              }
            />
          </>
        }
      />
    </div>
  );
};
