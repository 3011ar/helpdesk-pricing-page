// import React from 'react'
// import '../../styles/PriceCard.css'

// const PriceCard = () => {

//     const emptyArray = Array.from({ length: 4 });
//   return (
//     <>
//         <section className='agent-pricing-section'>
//             <div className='agent-pricing-wrapper'>
//                 <div className='agent-pricing-rows'>
//                     <div className='agent-pricing-tab-header'>
//                         <button className='agent-pricing-tab-button active'>Monthly</button>
//                         <button className='agent-pricing-tab-button'>Annual</button>
//                         <button className='agent-pricing-tab-button'>
//                             2-Year Savings Plan
//                             <br/>
//                             <span>Paid Up-Front</span>
//                         </button>
//                         <button className='agent-pricing-tab-button'>
//                             3-Year Contract
//                             <br/>
//                             <span>Billed Annually</span>
//                         </button>
//                     </div>

//                     <div className='pricing-compare-container'>
//                         <div className='pricing-comparison'>
//                             <div className='pricing-plans'>
//                             {emptyArray.map((_, index) => (
//                                 <div className='pricing-box'>
//                                     <h3 className='plan-name'>Migthy</h3>
//                                     <div className='pricing-figures'>
//                                         <div className='pricing-dollars'>
//                                             <span className='dollar-symbol'>$</span>
//                                             <span className='dollar-inner'>
//                                                 <span className='dollar-amount'>39</span>
//                                                 <span className='amount-slip'>Per agent/mo</span>
//                                             </span>
//                                         </div>

//                                         <div className='pricing-saving-perentage'></div>


//                                     </div>

//                                     <div className='pricing-feature-list'>
//                                         <ul className='pricing-feature-list-items'>
//                                             <li>Omnichannel Ticket Creation</li>
//                                             <li>SLA Management</li>
//                                             <li>Knowledge Base</li>
//                                             <li>SSO (GSuite/SAML/Azure)</li>
//                                             <li>SSL Certificate Hosting</li>
//                                             <li>Migration Assistance</li>
//                                         </ul>
//                                     </div>

//                                     <div className='pricing-btn-container'>
//                                         <a className='pricing-btn'>
//                                             Get a Demo
                                            
//                                         </a>
//                                     </div>
//                                 </div>
//                                 ))}
//                             </div>
//                         </div>

//                         <p className='pricing-compare-banner'>
//                             All plans require a minimum of 5 help desk agents. Non-profit and educational organizations are eligible for a discount.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default PriceCard


import React, { useState } from 'react';
import pricingData  from "../../data/pricingData.json"
import '../../styles/PriceCard.css';

const PriceCard = () => {
  const [duration, setDuration] = useState('Monthly');

  const handleDurationChange = (newDuration) => {
    setDuration(newDuration);
  };

  return (
    <>
      <section className='agent-pricing-section'>
        <div className='agent-pricing-wrapper'>
          <div className='agent-pricing-rows'>
            <div className='agent-pricing-tab-header'>
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
              {/* Add similar buttons for other durations */}
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
            </div>

            <div className='pricing-compare-container'>
              <div className='pricing-comparison'>
                <div className='pricing-plans'>
                  {pricingData[duration].map((plan, index) => (
                    <div key={index} className={`pricing-box ${index === 0 ? 'first-pricing-box' : 'other-pricing-box'}`}>
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
                </div>
              </div>

              <p className='pricing-compare-banner'>
                All plans require a minimum of 5 help desk agents. Non-profit and educational organizations are eligible for a discount.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PriceCard;
