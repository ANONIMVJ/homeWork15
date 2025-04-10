import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-white min-h-screen py-8 px-4 text-teal-500">
      <h1 className="text-4xl font-bold text-center mb-8 text-teal-700">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-teal-300"
          >
            <div className="relative w-full h-72">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-teal-700">{product.title}</h2>
              <p className="text-sm text-teal-600 mt-2">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-teal-700">${product.price}</span>
                <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition-all duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
