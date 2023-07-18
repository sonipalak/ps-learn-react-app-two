import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();
    const [images, setImages] = useState();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${id}`);
                setProduct(response.data);
                setImages(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className='product-details'>
                <article className='product-article'>
                    <article className='product-img'><img src={product.thumbnail} alt="" /></article>
                    <article className='product-details'>
                        <h1>{product.title}</h1>
                        <div>
                            <span className='tag'>{product.brand}</span>
                        </div>
                        <div>
                            <label>Price:</label>
                            <span>{product.price}</span>
                        </div>
                    </article>
                </article>
            </section>


            <div className='item-img'>

            </div>

            <p>{product.description}</p>
            <div>
                <p>{product.discountPercentage}</p>
            </div>
            <p><strong>Category:</strong> {product.category}</p>
            {images.length > 0 ? (
                images.map((image, index) => (
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img key={index} src={image} alt={`Image ${index + 1}`} />
                ))
            ) : (
                <div>Loading...</div>
            )}
        </>
    )
}
export default ProductDetails;