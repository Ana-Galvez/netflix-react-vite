import React from 'react';
import '../styled/Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <img className='nav__logo' src="/image/logo-netflix.png" alt="Logo de Netflix" />
      {/* <div className='nav__menu'>
        <ul>
          <a href="/">Home</a>
          <a href="/peliculas">Películas</a>
          <a href="/series">Series</a>
        </ul>
      </div> */}
      <img className='nav__avatar' src="/image/Netflix-avatar.png" alt="Avatar de usuario" />
    </div>
  )
}

export default Nav