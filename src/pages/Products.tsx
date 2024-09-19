import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import Cards from "../components/Cards";

interface Product {
  id: string;
  attributes: {
    title: string;
    image: string;
    price: number;
    // Add any other attributes you need here
  };
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products?page=1&limit=10`)
      .then(resp => resp.json())
      .then(data => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <Form />
      <Cards products={products} />
    </div>
  );
};

export default Products;
