const API_URL = 'http://localhost:3001';

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const addProduct = async (product) => {
  const response = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  });
  return id;
};