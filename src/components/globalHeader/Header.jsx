import React from 'react'
import '../../styles/Header.css'

const Header = () => {
  return (
    <>
        <section className='header-section'>
            <div className='header-container'>
                <div className='header-wrapper'>
                    <div className='logo-wrapper'>
                        <div className='toggle'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <a>
                            <img id="hfNavbarlogo" src="https://assets.www.happyfox.com/v2/images/site-nav/HD-logo.svg" alt="happyfox logo" width="20" height="20" className="hf-productnav__logo" />
                        </a>
                        <span>helpdesk</span>
                    </div>

                    <ul>
                        <li>
                            <a>
                                <span>
                                    Features { }
                                    <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png" className="hf-productnav__menu-arrow" alt="menu togle arrow" width="10" height="10"/>
                                </span>
                            </a>
                        </li>


                        <li>
                            <a>
                                <span>
                                    Solutions { }
                                    <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png" className="hf-productnav__menu-arrow" alt="menu togle arrow" width="10" height="10"/>
                                </span>
                            </a>
                        </li>


                        <li>
                            <a>
                                <span>
                                    Pricing { }
                                    <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png" className="hf-productnav__menu-arrow" alt="menu togle arrow" width="10" height="10"/>
                                </span>
                            </a>
                        </li>


                        <li>
                            <a>
                                <span>
                                    Resources { }
                                    <img src="https://assets.www.happyfox.com/v2/images/site-nav/menu-togle-arrow-gray-up.png" className="hf-productnav__menu-arrow" alt="menu togle arrow" width="10" height="10"/>
                                </span>
                            </a>
                        </li>


                    </ul>

                    <div className='btn-wrapper'>
                        <a>
                            <button>
                                Get a Demo
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Header