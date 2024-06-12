import React from 'react'
import '../../styles/TestBanner.css'

const TestBanner = () => {
  return (
    <>
        <div className='pricing-banner'>
            <div className='pricing-container'>
                <div className='pricing-row'>
                    <div className='pricing-test'>
                        <h1>Plans & Pricing</h1>

                        <div className='pricing-explainer'>
                            <a className='pricing-explainer-block'>
                                <h4>Agent Based Pricing</h4>
                            </a>
                            <a className='pricing-explainer-block volume'>
                                <h4>Unlimited Agents</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TestBanner