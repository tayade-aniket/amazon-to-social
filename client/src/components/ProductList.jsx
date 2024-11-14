import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://amazon-to-social-rdjb.vercel.app/api/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 my-8">
        Product List
      </h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className="bg-white flex items-center justify-evenly gap-4 shadow-md p-12 m-10 rounded-lg mb-4">
            <div className="w-full h-full">
              <img src={product.image} alt="bg" className="w-full h-full object-fill" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <p>{product.description}</p>
              <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
              <ul>
                {product.features.map((feature, i) => (
                  <li key={i}>- {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
}

export default ProductList;
