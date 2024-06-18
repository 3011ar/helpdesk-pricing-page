import React, { useState, useEffect } from 'react'
import '../../styles/TestBanner.css'
import PriceCard from '../priceCard/PriceCard'

const TestBanner = () => {

    const [idxValue, setIdxValue] = useState(0);
    const[ cssValue , setCssValue ] = useState("Agent-based")

    const handleClick = (idx) => {
      setIdxValue(idx);
      if( idx === 1 ) {
        setCssValue("unlimited-agents")
      }
      else {
        setCssValue('Agent-based')
      }
      // You can perform additional actions based on idx if needed
      console.log(`im the idx value` , idx ) ;
    };
    
    useEffect(() => {
      }, [idxValue]); // Dependency array with idxValue

    
  return (
    <>
        <div className='pricing-banner'>
            <div className='pricing-container'>
                <div className='pricing-row'>
                    <div className='pricing-test'>
                        <h1>Plans & Pricing</h1>

                        <div className='pricing-explainer'>
                            <a className={`pricing-explainer-block ${cssValue === "Agent-based" ? '': 'volume'}`} onClick={() => handleClick(0)}>
                                <h4>Agent Based Pricing</h4>
                            </a>
                            <a className={`pricing-explainer-block ${cssValue === "Agent-based" ? 'volume' : ''}`} onClick={() => handleClick(1)}>
                                <h4>Unlimited Agents</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <PriceCard/> */}
        <PriceCard idxValue={idxValue} />
    </>
  )
}

export default TestBanner