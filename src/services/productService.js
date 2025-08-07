import { products } from '../data/products';

// Product service
export const productService = {
  // Get all products
  getAll: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return products;
  },

  // Get products by category
  getByCategory: async (category) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return products.filter(product => product.category === category);
  },

  // Get product by ID
  getById: async (id) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return products.find(product => product.id === parseInt(id));
  },

  // Create new product (admin only)
  create: async (productData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const newProduct = {
      id: Date.now(),
      ...productData,
      price: parseFloat(productData.price),
      stock: parseInt(productData.stock)
    };
    
    products.push(newProduct);
    return newProduct;
  },

  // Update product (admin only)
  update: async (id, productData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const index = products.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    products[index] = {
      ...products[index],
      ...productData,
      id: parseInt(id),
      price: parseFloat(productData.price),
      stock: parseInt(productData.stock)
    };
    
    return products[index];
  },

  // Delete product (admin only)
  delete: async (id) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const index = products.findIndex(product => product.id === parseInt(id));
    if (index === -1) {
      throw new Error('Product not found');
    }
    
    products.splice(index, 1);
    return { message: 'Product deleted successfully' };
  }
}; 