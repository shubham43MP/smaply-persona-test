import { useState, useEffect, useRef } from 'react';
import { TextIcon } from '../../assets/Icons/text';
import { ChooseImage } from '../../assets/Icons/chooseImage';
import { DropDownList, TextImageMenuProps } from './type';
import { ImageOrTextEnum } from '../../utils/types';
import { DropdownIcon } from '../../assets/Icons/dropdownIcon';

const DROPDOWN_LIST: DropDownList[] = [
  {
    id: 1,
    title: 'Text',
    icon: <TextIcon customClass="fill-black bg-greenish" />,
    customClass: 'bg-greenish',
    type: ImageOrTextEnum.text
  },
  {
    id: 2,
    title: 'Image',
    icon: <ChooseImage customClass="fill-white bg-brandpurple" />,
    customClass: 'bg-brandpurple',
    type: ImageOrTextEnum.image
  }
];

export const TextImageMenu = ({
  menuItemClickHandler,
  flag
}: TextImageMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setShowButton(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className="flex flex-col flex-1 cursor-pointer relative"
      ref={dropdownRef}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => {
        if (!isOpen) setShowButton(false);
      }}
    >
      {showButton && (
        <div className=" absolute border-1 border-darkblue border-solid w-full" />
      )}
      <div className="relative w-48 self-center">
        <div
          className={`absolute left-0 top-0 w-full h-full ${
            showButton ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
        />
        <button
          onClick={toggleDropdown}
          className={`flex items-center pl-4 bg-darkblue text-white rounded-lg shadow-md focus:outline-none w-full ${
            showButton ? 'bg-darkblue' : 'opacity-0 invisible'
          } transition-opacity duration-300`}
        >
          <TextIcon customClass="fill-white" />
          <span className="mr-2 p-2 font-semibold text-base">Add Card</span>
          <div
            className={`h-full ml-auto flex items-center justify-center p-3 rounded-r-lg ${
              isOpen ? 'bg-darkestblue border-l' : 'border-transparent'
            }`}
          >
            <DropdownIcon isOpen={isOpen} />
          </div>
        </button>

        <div
          className={`absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <ul className="py-2">
            {DROPDOWN_LIST.map(option => (
              <li
                onClick={() => menuItemClickHandler(option.type, flag)}
                key={option.id}
                className="mx-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
              >
                <div className={`p-2 h-8 w-8 rounded-md ${option.customClass}`}>
                  {option.icon}
                </div>
                <span className="ml-2">{option.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
