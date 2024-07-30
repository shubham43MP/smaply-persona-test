import { useState, useEffect, useRef } from 'react';
import { TextIcon } from '../../assets/Icons/text';
import { ChooseImage } from '../../assets/Icons/chooseImage';

const DummySvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 mr-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M3 3v14h14V3H3zm2 2h10v10H5V5zm0 12h10V15H5v2z" />
    </svg>
  );
};

const DROPDOWN_LIST = [
  {
    id: 1,
    title: 'Text',
    icon: <TextIcon customClass="fill-black bg-greenish" />,
    customClass: 'bg-greenish'
  },
  {
    id: 2,
    title: 'Image',
    icon: <ChooseImage customClass="fill-white bg-brandpurple" />,
    customClass: 'bg-brandpurple'
  }
];

const DropdownIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 transform transition-transform duration-300 ${
        isOpen ? 'rotate-180' : 'rotate-0'
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

type TextImageMenuProps = {};

export const TextImageMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(true);
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
    <div className="flex flex-col">
      <div className="border-2 border-darkblue border-solid"></div>
      <div
        ref={dropdownRef}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => {
          if (!isOpen) setShowButton(false);
        }}
        className="relative w-48 self-center"
      >
        {/* Hidden button container */}
        <div
          className={`absolute left-0 top-0 w-full h-full ${
            showButton ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-300`}
        />

        {/* Dropdown button */}
        <button
          onClick={toggleDropdown}
          className={`flex items-center pl-4 bg-[#222ADD] text-white rounded-lg shadow-md focus:outline-none w-full ${
            showButton ? 'bg-[#00256E]' : 'opacity-0 invisible'
          } transition-opacity duration-300`}
        >
          <TextIcon customClass="fill-white" />
          <span className="mr-2 p-2 font-semibold text-base">Add Card</span>
          <div
            className={`h-full ml-auto flex items-center justify-center p-3 rounded-r-lg ${
              isOpen ? 'bg-[#001B49] border-l' : 'border-transparent'
            }`}
          >
            <DropdownIcon isOpen={isOpen} />
          </div>
        </button>

        {/* Dropdown List */}
        <div
          className={`absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          name
          style={{ transition: 'opacity 0.3s ease-in-out' }}
        >
          <ul className="py-2">
            {DROPDOWN_LIST.map(option => (
              <li
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
