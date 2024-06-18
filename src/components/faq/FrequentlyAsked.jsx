import React, { useState} from 'react'
import '../../styles/FrequentlyAsked.css';
import frequentlyAskedQuestions  from "../../data/globalHeader.json"

const FrequentlyAsked = () => {

    const [showContent, setShowContent] = useState(false);
    const divs = Array.from({ length: 6 }, (_, index) => index);

    const [showContentArray, setShowContentArray] = useState(Array(divs.length).fill(false));

    const toggleContent = (index) => {
        console.log( "hi" )

        const updatedShowContentArray = [...showContentArray];
        updatedShowContentArray[index] = !updatedShowContentArray[index];
        setShowContentArray(updatedShowContentArray);
    };


  return (
    <>
        <div className='frequently-asked-wrapper'>
            <div className='background-container'></div>
            <div className='frequently-asked-container'>
                <div className='frequently-asked-container-rows'>
                    
                        <div className='faq-container'>
                            <h3>Frequently Asked Questions</h3>

                            <div className='frequently-asked-queries'>
                                <div className='frequently-asked-queries-rows'>
                                {frequentlyAskedQuestions.frequentlyAskedQuestions.map((item,index) => (
                                    <div key={index} className='queries-rows'>
                                        <div className='queries-column' onClick={() => toggleContent(index)}>
                                            <h6>
                                                {item.questionName}
                                                <img src="https://assets.www.happyfox.com/v2/images/down-arrow.svg" alt="icon" style={{ transform: showContentArray[index] ? 'rotate(180deg)' : 'rotate(0)' }} />
                                            </h6>
                                            {/* {showContentArray[index] && 
                                                <p>
                                                    {item.questionAnswer}
                                                </p>
                                            } */}
                                            <p style={{ maxHeight: showContentArray[index] ? '450px' : '0px' }}>{item.questionAnswer}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default FrequentlyAsked