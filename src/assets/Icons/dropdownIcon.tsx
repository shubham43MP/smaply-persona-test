export const DropdownIcon = ({ isOpen }: { isOpen: boolean }) => {
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
