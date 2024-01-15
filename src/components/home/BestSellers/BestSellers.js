import React, { useState, useEffect } from "react";
import axios from 'axios'; // Import axios for making HTTP requests
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const BestSellers = () => {
  const [products, setProducts] = useState([]); // State to store the fetched products

  useEffect(() => {
    // Function to fetch products
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/bestsellers/Bestsellers/");
        setProducts(response.data); // Update the state with the fetched products
      } catch (error) {
        console.error("Error fetching bestseller products: ", error);
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <Product
            key={product.id}
            _id={product.id}
            img={product.image}
            productName={product.title}
            price={product.price}
            // color and badge are not provided by API, so they are commented out
            // color={product.color}
            // badge={product.badge}
            des={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
