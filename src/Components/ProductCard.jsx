import React from 'react';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ id, name, price, imageUrl, category }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = { productId: id };
        addToCart(item);
    };

    return (
        <div className="col-md-3 mb-4 col-lg-3 col-sm-6">
            <div className="card h-100">
                <img src={imageUrl} alt={name} className="img-fluid mx-auto card-img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <div className="d-flex justify-content-center mx-auto">
                        <button className="btn btn-warning mr-2" onClick={handleAddToCart}>Add to Cart</button>
                        <button type="button" className="btn btn-dark">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
