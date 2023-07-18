import React from "react";
import { Link } from 'react-router-dom';


const ProductItem = (props) => {
    let { thumbnail, title, description, price, discountPercentage, brand, category, id } = props;
    return (
        <>
            <div className='item-box'>
                <div className='item-img'>
                    <img src={thumbnail} alt="" />
                </div>
                <div>
                    <h1>{id}, {title}</h1>
                    <p>{description}</p>
                    <div>
                        <p>{price}</p>
                        <p>{discountPercentage}</p>
                    </div>
                    <p><strong>Brand:</strong> {brand}</p>
                    <p><strong>Category:</strong> {category}</p>
                    <Link to={`details/${id}`}>Details</Link>
                </div>
            </div>
        </>
    )
}
export default ProductItem;