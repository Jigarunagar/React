import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      filterCategory ? product.category === filterCategory : true
    )
    .sort((a, b) => {
      if (sortOrder === 'price-low-high') return a.price - b.price;
      if (sortOrder === 'price-high-low') return b.price - a.price;
      return 0;
    });

  const categories = [...new Set(products.map((product) => product.category))];

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return (
    <div className="container mt-4">
      <div className="alert alert-danger">
        Error: {error}
        <br />
        <small>Make sure JSON server is running on port 3001</small>
        <br />
        <button 
          className="btn btn-primary mt-2"
          onClick={() => dispatch(fetchProducts())}
        >
          Retry
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product List</h2>
      
      {/* Search, Sort, Filter Controls */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <ProductItem product={product} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && !loading && (
        <div className="text-center text-muted">No products found</div>
      )}
    </div>
  );
};

export default ProductList;