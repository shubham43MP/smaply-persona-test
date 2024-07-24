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
    <div className="p-4 rounded-lg w-[370px] bg-orange-200">
      <div className="flex px-2 py-3">
        <IconComp imgUrl="/icons/favorites.svg" />
        <p className="ml-2 text-lg font-medium">Favourites</p>
      </div>
      <div className="flex px-2 py-3">
        <IconComp imgUrl="/icons/twopeople.svg" />
        <p className="ml-2 text-lg font-medium">Shared with me</p>
      </div>
      <hr className="border-solid border-black-700"></hr>
    </div>
  );
};
