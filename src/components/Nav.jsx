import React from 'react';
import '../styled/Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <img className='nav__logo' src="../../public/image/logo-netflix.png" alt="Logo de Netflix" />
      <img className='nav__avatar' src="../../public/image/Netflix-avatar.png" alt="Avatar de usuario" />
    </div>
  )
}

export default Nav