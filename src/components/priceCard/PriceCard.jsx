import React, { useEffect, useState } from 'react';
import pricingData  from "../../data/pricingData.json"
import pricingDataUnlimitedAgent  from "../../data/pricingDataUnlimited.json"
import '../../styles/PriceCard.css';

const PriceCard = ({ idxValue }) => {
  const [duration, setDuration] = useState('Monthly');
  const [duration1, setDuration1] = useState('Annual');

  // if( idxValue !== 1 ) {
  //   setDuration('Annual') ;
  // }

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  const handleDurationChange1 = (newDuration) => {
    setDuration1(newDuration);
  };

  useEffect(() => {
    console.log('im the parent componet' , idxValue )
    // if(idxValue !== 1 ) {

    //   setDuration('Annual')
    // }
    // else {
    //   setDuration('Monthly')
    // }
  }, [idxValue]); // Dependency array with idxValue

  return (
    <>
      <section className='agent-pricing-section'>
        <div className='agent-pricing-wrapper'>
          <div className='agent-pricing-rows'>
            <div className='agent-pricing-tab-header' style={{ justifyContent: idxValue === 1 ? "space-around" : "space-between"}}>
              
                { idxValue === 0 && 
                
                (
                  <>
                <button
                  className={`agent-pricing-tab-button ${duration === 'Monthly' ? 'active' : ''}`}
                  onClick={() => handleDurationChange('Monthly')}
                >
                  Monthly
                </button>

           
              <button
                className={`agent-pricing-tab-button ${duration === 'Annual' ? 'active' : ''}`}
                onClick={() => handleDurationChange('Annual')}
              >
                Annual
              </button>
            
              <button
                className={`agent-pricing-tab-button ${duration === '2-Year Savings Plan' ? 'active' : ''}`}
                onClick={() => handleDurationChange('2-Year Savings Plan')}
              >
                2-Year Savings Plan
                <br/>
                <span>Paid Up-Front</span>
              </button>

              <button
                className={`agent-pricing-tab-button ${duration === '3-Year Contract' ? 'active' : ''}`}
                onClick={() => handleDurationChange('3-Year Contract')}
              >
                3-Year Contract
                <br/>
                <span>Billed Annually</span>
              </button>
            </>
            )}


{ idxValue === 1 && 
                
                (
                  <>           
              <button
                className={`agent-pricing-tab-button ${duration1 === 'Annual' ? 'active' : ''}`}
                onClick={() => handleDurationChange1('Annual')}
              >
                Annual
              </button>
            
              <button
                className={`agent-pricing-tab-button ${duration1 === '2-Year Savings Plan' ? 'active' : ''}`}
                onClick={() => handleDurationChange1('2-Year Savings Plan')}
              >
                2-Year Savings Plan
                <br/>
                <span>Paid Up-Front</span>
              </button>

              <button
                className={`agent-pricing-tab-button ${duration1 === '3-Year Contract' ? 'active' : ''}`}
                onClick={() => handleDurationChange1('3-Year Contract')}
              >
                3-Year Contract
                <br/>
                <span>Billed Annually</span>
              </button>
            </>
            )}
              
            </div>

            <div className='pricing-compare-container'>
              <div className='pricing-comparison'>
                <div className='pricing-plans'>
                  { idxValue === 0 && pricingData[duration].map((plan, index) => (
                    <div key={index} className={`pricing-box ${index === 0 ? 'first-pricing-box' : 'other-pricing-box'}`}>
                        <p className={`${index === 2 ? 'pricing-popular' : 'pricicing-not-popular'}`}>Most Popular</p>
                      <h3 className='plan-name'>{plan.name}</h3>
                      <div className='pricing-figures'>
                        <div className='pricing-dollars'>
                          <span className='dollar-symbol'>$</span>
                          <span className='dollar-inner'>
                            <span className='dollar-amount'>{plan.price}</span>
                            <span className='amount-slip'>Per agent/mo</span>
                          </span>
                        </div>
                        <div className='pricing-saving-perentage'>
                            <span className='pricing-saving-perentage-show'>
                                <span>{plan.savings}</span>
                            </span>
                        </div>
                      </div>

                      <div className='pricing-feature-list'>
                        <ul className='pricing-feature-list-items'>
                          {plan.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className='pricing-btn-container'>
                        <a className='pricing-btn'>Get a Demo</a>
                      </div>
                    </div>
                  ))}

                  {
                    idxValue === 1 && pricingDataUnlimitedAgent[duration1].map((plan, index) => (
                      <div key={index} className={`pricing-box ${index === 0 ? 'first-pricing-box' : 'other-pricing-box'}`}>
                          <p className={`${index === 2 ? 'pricing-popular' : 'pricicing-not-popular'}`}>Most Popular</p>
                        <h3 className='plan-name'>{plan.name}</h3>
                        <div className='pricing-figures'>
                          <div className='pricing-dollars'>
                            <span className='dollar-symbol'>$</span>
                            <span className='dollar-inner'>
                              <span className='dollar-amount'>{plan.price}</span>
                              <span className='amount-slip'>/ month</span>
                            </span>
                          </div>
                          <div className='pricing-saving-perentage'>
                              <span className='pricing-saving-perentage-show'>
                                  <span>{plan.savings}</span>
                              </span>
                          </div>
                        </div>
  
                        <div className='pricing-feature-list'>
                          <ul className='pricing-feature-list-items'>
                            {plan.features.map((feature, index) => (
                              <li key={index}>{feature}</li>
                            ))}
                          </ul>
                        </div>
  
                        <div className='pricing-btn-container'>
                          <a className='pricing-btn'>Get a Demo</a>
                        </div>
                      </div>
                    ))}
                  
                </div>
              </div>
                
                { idxValue === 0 && 
                    <p className='pricing-compare-banner'>
                    All plans require a minimum of 5 help desk agents. Non-profit and educational organizations are eligible for a discount.
                  </p>
                }
                {
                  idxValue === 1 && 
                  <p className='pricing-compare-banner'>
                    All plans come with SSL security, unlimited agents, smart rules, knowledge base, multilingual support, rich text formatting in tickets and iOS & Android apps.
                  </p>
                }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceCard;
