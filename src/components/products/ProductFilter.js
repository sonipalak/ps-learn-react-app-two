import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

const ProductFilter = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error));
            
    }, []);

    return (
        <div>
            <ul className='link-items'>
                {categories.map(category => (
                    <li key={category}><Link to={`/products/${category}`}>{category}</Link></li>
                ))}
            </ul>
        </div>
    )
}
export default ProductFilter;
