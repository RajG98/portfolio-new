import React from 'react'

export const Navbar = () => {
  return (
      <div className='header'>
        <div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img src="/images/me.png" alt="Rajarshi Goswami Logo Image" class="header__logo-img"/>
          </div>
          <span class="header__logo-sub">Rajarshi Goswami</span>
        </div>
        <div class="header__main">
          <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="#" class="header__link"> Home </a>
            </li>
            <li class="header__link-wrapper">
              <a href="#about" class="header__link">About </a>
            </li>
            <li class="header__link-wrapper">
              <a href="#projects" class="header__link">
                Projects
              </a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img src="/images/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu"/>
            <img src="/images/ham-menu-close.svg" alt="hamburger menu close" class="header__main-ham-menu-close d-none"/>
          </div>
        </div>
      </div>
    </div>
  )
}
