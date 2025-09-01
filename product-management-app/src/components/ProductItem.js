import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';
import ProductForm from './ProductForm';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(product.id));
    }
  };

  if (isEditing) {
    return (
      <ProductForm
        product={product}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="card h-100">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">
          <strong>Price:</strong> ${product.price}
        </p>
        <p className="card-text">
          <strong>Category:</strong> {product.category}
        </p>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-warning btn-sm me-2"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem;