import { Avatar, Divider } from '@mui/material';
import './Navbar.scss';

export const Navbar = () => {
  return (
    <>
      <header className="navbar__header">
        <div className="navbar__header-container">
          <picture>
            <img
              src="public/smaplylogo.png"
              alt="Smaply Logo"
              className="navbar__logo"
            />
          </picture>
          <div className="navbar__user-container">
            <p className="navbar__username">John Smith</p>
            <Avatar sx={{ bgcolor: 'purple', fontSize: '1.8rem' }}>JS</Avatar>
          </div>
        </div>
      </header>
      <Divider sx={{ marginLeft: '2.4rem', marginRight: '2.4rem' }} />
    </>
  );
};
