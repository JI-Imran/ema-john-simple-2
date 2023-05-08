import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3 className='product-name'>{name}</h3>
                <p className='product-price'>Price: ${price}</p>
                <p>Manufacturer: ${seller}</p>
                <p>Rating: {ratings} Stars</p>

            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-cart'>
                Add To Cart <FontAwesomeIcon icon={faCartShopping} />
                </button>
        </div>
    );
};

export default Product;