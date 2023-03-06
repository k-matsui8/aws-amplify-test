import React from 'react'

const Header = () => {
  return (
    <header id="masthead" class="header">
      <div class="head-inner">
        <div class="head-sitename">
          <a href="/">
            <div class="head-sitename_title">
              <div class="js-splited" >r</div>
              <div class="js-splited" >e</div>
              <div class="js-splited" >c</div>
              <div class="js-splited" >r</div>
              <div class="js-splited" >u</div>
              <div class="js-splited" >i</div>
              <div class="js-splited" >t</div>
            </div>
          </a>
        </div>
        <nav class="site-menu">
          <ul class="site-menu-list">
            <li class="site-menu-item">
              <a class="site-menu-item_link" href="/news/">news</a>
            </li>
            <li class="site-menu-item">
              <a class="site-menu-item_link" href="/service">service</a>
            </li>
            <li class="site-menu-item">
              <a class="site-menu-item_link" href="/interview/">interview</a>
            </li>
            <li class="site-menu-item">
              <a class="site-menu-item_link" href="/position/">position</a>
            </li>
            <li class="site-menu-item site-menu-item--button">
              <a class="entry-button" href="/entry/">entry</a>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header
