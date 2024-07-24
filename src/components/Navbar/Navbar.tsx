import { Avatar } from '../Avatar';

export const Navbar = () => {
  return (
    <>
      <header className="mx-8 my-6">
        <div className="flex justify-between">
          <picture>
            <img
              src="public/smaplylogo.png"
              alt="Smaply Logo"
              className="h-8 w-44"
            />
          </picture>
          <div className="flex gap-3">
            <p className="self-center font-medium text-base">John Smith</p>
            <Avatar />
            {/* <Avatar sx={{ bgcolor: 'purple', fontSize: '1.8rem' }}>JS</Avatar> */}
          </div>
        </div>
      </header>
      <hr className="mx-6 border-solid border-slate-200"></hr>
    </>
  );
};
