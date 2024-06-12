import React from 'react'
import '../../styles/MoreProducts.css';
import moreProductsData  from "../../data/globalHeader.json"

const MoreProducts = () => {

    const cards = Array.from({ length: 5 }, (_, index) => index);
  return (
    <>
        <div className='more-products-wrapper'>
            <div className='more-product-container'>
                <div className='product-container-rows'>
                    <div className='test'>
                        <h2>More From HappyFox</h2>

                        <div className='product-rows'>
                            { moreProductsData.moreProducts.map((products) => (
                                <div className='product-card'>
                                    <img src={products.imageUrl} alt="icon"/>
                                    <h4>{products.ProductName}</h4>
                                    <p>{products.ProductDesc}</p>
                                    <a>
                                        Start free trial
                                        <img src="https://assets.www.happyfox.com/v2/images/right-arrow-small.svg" alt="icon" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MoreProducts