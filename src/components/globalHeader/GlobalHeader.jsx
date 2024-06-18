import React, { useState } from 'react'
import '../../styles/GlobalHeader.css';
import globalHeaderData  from "../../data/globalHeader.json"

const GlobalHeader = () => {

  const items = Array.from({ length: 8 }, (_, index) => index); // Create an array of 10 items
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive); // Toggle isActive to its opposite value
  };

  return (
    <header className='product-bar'>
      <div className='product-container'>
        <div className='product-wrapper'>

          <div className='product-logo-wrapper'>
            <a>
              <img id="hfTopbarlogo" src="https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg" width="116" height="24" alt="happyfox logo" className="hf-productbar__logo" />
            </a>
          </div>


          <nav className='product-bar-products'>
            <ul className='product-bar-product-list'>
              <li className='product-bar-product-list-item'>
                <div className='product-switcher'>
                  <span className='product-switcher-text' onClick={toggleActive}>
                    Products
                    <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png" className="hf-productnav__menu-arrow" alt="menu togle arrow" width="10" height="10" />
                  </span>

                  {/* <div className={`product-switcher-dropbox ${isActive ? 'active' : ''}`}> */}
                  <div className={`product-switcher-dropbox ${isActive ? 'active' : ''}`}>
                    <div className='product-switcher-dropbox-container'>
                      <div className='product-switcher-dropbox-menu-wrapper'>
                        <div className='product-switcher-dropbox-menu'>
                          <ul className='product-switcher-dropbox-menu-list'>
                          {globalHeaderData.globalHeader.map((item) => (
                            <li key={item} className='product-switcher-dropbox-menu-item'>
                              <a>
                                <p className='product-switcher-dropbox-menu-item-img'>
                                  <img src={item.imageUrl} width="20" height="20" alt="Help Desk logo" />
                                </p>
                                <p className='product-switcher-dropbox-menu-item-line'>
                                  <span className='menu-name'>{item.productName}</span>
                                  <span className='menu-name-txt'>{item.productDesc}</span>
                                </p>
                              </a>
                            </li>
                          ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
          </nav>

          <div className='product-bar-login'>
            <a className='product-bar-link'> Log In</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default GlobalHeader