import { SVGTSXIconProps } from '../../utils/types';

export const SettingsIcon = ({
  color = '#1C1C1C',
  customClass = 'h-6 w-6'
}: SVGTSXIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={customClass}
    >
      <path
        fill={color}
        d="M8.125 20a.934.934 0 01-.65-.25.997.997 0 01-.325-.625l-.3-2.325a3.79 3.79 0 01-.612-.3 8.27 8.27 0 01-.563-.375l-2.175.9a.97.97 0 01-.7.038.983.983 0 01-.55-.438L.4 13.4a.94.94 0 01-.125-.7.96.96 0 01.375-.6l1.875-1.425a2.389 2.389 0 01-.025-.338v-.675c0-.108.008-.22.025-.337L.65 7.9a.96.96 0 01-.375-.6.94.94 0 01.125-.7l1.85-3.225a.983.983 0 01.55-.438.97.97 0 01.7.038l2.175.9c.183-.133.375-.258.575-.375.2-.117.4-.217.6-.3l.3-2.325A.997.997 0 017.475.25c.183-.167.4-.25.65-.25h3.75c.25 0 .467.083.65.25a.997.997 0 01.325.625l.3 2.325c.217.083.42.183.613.3.191.117.379.242.562.375l2.175-.9a.97.97 0 01.7-.038c.233.076.417.221.55.438L19.6 6.6a.94.94 0 01.125.7.96.96 0 01-.375.6l-1.875 1.425c.017.117.025.23.025.338v.675c0 .108-.017.22-.05.337l1.875 1.425c.2.15.325.35.375.6a.94.94 0 01-.125.7l-1.85 3.2c-.133.217-.32.367-.562.45a.958.958 0 01-.713-.025l-2.125-.9a6.826 6.826 0 01-.575.375c-.2.117-.4.217-.6.3l-.3 2.325a.997.997 0 01-.325.625.934.934 0 01-.65.25h-3.75zM9 18h1.975l.35-2.65c.517-.133.996-.33 1.438-.588.441-.258.845-.57 1.212-.937l2.475 1.025.975-1.7-2.15-1.625c.083-.233.142-.48.175-.738a6.153 6.153 0 000-1.575 3.529 3.529 0 00-.175-.737l2.15-1.625-.975-1.7-2.475 1.05a5.554 5.554 0 00-1.212-.963 5.605 5.605 0 00-1.438-.587L11 2H9.025l-.35 2.65c-.517.133-.996.33-1.437.587-.442.259-.846.571-1.213.938L3.55 5.15l-.975 1.7 2.15 1.6c-.083.25-.142.5-.175.75a6.06 6.06 0 00-.05.8c0 .267.017.525.05.775s.092.5.175.75l-2.15 1.625.975 1.7 2.475-1.05c.367.383.77.704 1.213.962.441.259.92.455 1.437.588L9 18zm1.05-4.5c.967 0 1.792-.342 2.475-1.025A3.372 3.372 0 0013.55 10c0-.967-.342-1.792-1.025-2.475A3.372 3.372 0 0010.05 6.5c-.983 0-1.812.342-2.487 1.025A3.393 3.393 0 006.55 10c0 .967.338 1.792 1.013 2.475.675.683 1.504 1.025 2.487 1.025z"
      ></path>
    </svg>
  );
};