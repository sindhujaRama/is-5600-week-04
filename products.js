// products.js

const fs = require('fs').promises;
const path = require('path');

const productsFile = path.join(__dirname, 'data/full-products.json');

module.exports = {
  list,
  get,
  update,
  remove,
};

/**
 * List all products
 * @returns {Promise<Array>}
 */
async function list(options = {}) {
  const { offset = 0, limit = 25 } = options;
  const data = await fs.readFile(productsFile);
  return JSON.parse(data).slice(offset, offset + limit); 
}

/**
 * Get a single product
 * @param {string} id
 * @returns {Promise<object>}
 */
async function get(id) {
  const products = JSON.parse(await fs.readFile(productsFile));
  return products.find(product => product.id === id) || null;
}

/**
 * Update a product
 * @param {string} id
 * @param {object} updatedProduct
 * @returns {Promise<object>}
 */
async function update(id, updatedProduct) {
  console.log(`Updating product with ID: ${id}`);
  return { ...updatedProduct, id };
}

/**
 * Delete a product
 * @param {string} id
 * @returns {Promise<void>}
 */
async function remove(id) {
  console.log(`Deleting product with ID: ${id}`);
  return;
}