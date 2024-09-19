import React from "react";
import { useNavigate } from "react-router-dom";

// Product interfeysi
interface ProductAttributes {
  image: string;
  title: string;
  price: number;
}

interface Product {
  id: number | string;
  attributes: ProductAttributes;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const navigate = useNavigate();

  function handleCard(event: React.MouseEvent<HTMLDivElement>) {
    const productId = event.currentTarget.getAttribute("data-id");
    if (productId) {
      navigate(`/products/id=${productId}`);
    }
  }

  return (
    <div
      onClick={handleCard}
      data-id={product.id}
      className="card cursor-pointer bg-base-100 w-full shadow-xl"
    >
      <figure className="p-6 h-full w-full" aria-disabled="true">
        <img
          aria-disabled="true"
          src={product.attributes.image}
          alt={product.attributes.title}
          className="rounded-xl object-cover h-64 w-full"
        />
      </figure>
      <div className="card-body  pt-0 items-center text-center">
        <h2 className="card-title">{product.attributes.title}</h2>
        <p className="text-blue-600">{product.attributes.price / 100}</p>
      </div>
    </div>
  );
};

export default Card;
