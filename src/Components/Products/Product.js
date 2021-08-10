import React, { useState } from 'react'
import LazyLoad from 'react-lazyload';
import "./Product.css"

const Product = () => {

    const [products, setproducts] = useState([
        {
            img: "img/four.jpg",
            actualPrice: "$469.99",
            discountedPrice: "$399.49",
            description: "Home Bar 2-Door Cabinet-21"
        },
        {
            img: "img/four.jpg",
            actualPrice: "$429.99",
            discountedPrice: "$365.49",
            description: "Home Bar 2-Door with Drawer Cabinet-21"
        },
        {
            img: "img/four.jpg",
            actualPrice: "$529.99",
            discountedPrice: "$450.49",
            description: "Home Bar 3-Door Cabinet-21"
        },
        {
            img: "img/four.jpg",
            actualPrice: "$369.99",
            discountedPrice: "$314.49",
            description: "Home Bar Wall Wine Rack Cabinet-21"
        },
        {
            img: "img/four.jpg",
            actualPrice: "$869.99",
            discountedPrice: "$739.49",
            description: "Home Bar  Double Display Cabinet-42"
        },
        {
            img: "img/four.jpg",
            actualPrice: "$429.99",
            discountedPrice: "$363.49",
            description: "Home Bar wine cabinet Cabinet-21"
        }
    ])

    const productDetails = () => {
        return (
            products.map((product, index) => {
                return (
                    <div className="products" key={index}>
                        <div className="productImg">
                        <LazyLoad >
                        <img src={product.img}
                            
                            alt="Product Image" />
                        </LazyLoad>
                        </div>
                        
                        <span className="productActualprice">{product.actualPrice}</span>
                        <p className="productDiscountedPrice">{product.discountedPrice}</p>
                        <p className="productDiscription">{product.description}</p>
                        <button className="primaryButton">Buy Now <i class="fas fa-chevron-right"></i></button>

                    </div>
                )
            })
        )
    }
    return (
        <section>
            <div className="productContainer">
                <div className="productHeader">
                    <h2>Shop Home Bars</h2>
                    <p>Choose from a variety of different styles to suit your home</p>

                </div>
                <div className="productDeatilsContainer">
                    {productDetails()}

                </div>

            </div>
        </section>
    )
}

export default Product
