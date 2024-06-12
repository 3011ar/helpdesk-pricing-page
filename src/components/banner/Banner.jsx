import React from 'react'
import "../../styles/Banner.css";

const Banner = () => {
  return (
    <>
        <div className='pricing-banner'>
            <div className='pricing-container'>
                <div className='pricing-row'>
                    <div className='test'>
                        <h2>Plans and Pricing</h2>

                        <div className='pricing-explainer'>
                            <a className="pricing-explainer-block">
                                <h4>
                                    Agent-based pricing
                                </h4>
                            </a>

                            <a className="pricing-explainer-block " style={{backgroundColor: '#ffeada'}}>
                                <h4>
                                    Unlimited Agents
                                </h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner