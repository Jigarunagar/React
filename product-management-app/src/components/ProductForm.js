import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../redux/actions/productActions';

const ProductForm = ({ product, onCancel }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.products);
  const [formData, setFormData] = useState({
    title: product?.title || '',
    price: product?.price || '',
    image: product?.image || '',
    category: product?.category || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.price || !formData.image || !formData.category) {
      alert('Please fill all fields');
      return;
    }

    if (product) {
      dispatch(updateProduct(product.id, formData));
    } else {
      dispatch(addProduct(formData));
    }
    
    if (!product) {
      setFormData({ title: '', price: '', image: '', category: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <h2>{product ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary me-2" disabled={loading}>
            {loading ? 'Saving...' : (product ? 'Update' : 'Add')} Product
          </button>
          {product && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProductForm;