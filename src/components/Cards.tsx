import React, { useState } from "react";
import Card from "./Card";
import Loader from "./Loader";

// Product interfeysi (Card.tsx dagi interfeys bilan bir xil bo'lishi mumkin)
interface ProductAttributes {
  image: string;
  title: string;
  price: number;
}

interface Product {
  id: number | string;
  attributes: ProductAttributes;
}

interface CardsProps {
  products: Product[];
}

const Cards: React.FC<CardsProps> = ({ products }) => {
  const [flexDirection, setFlexdiirection] = useState<"row" | "col">("row");

  function handleTable(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const cardsContent = document.querySelector(".cards-content");
    setFlexdiirection(flexDirection === "row" ? "col" : "row");
    if (cardsContent) {
      console.log(cardsContent.classList);
    }
  }

  return (
    <div>
      <div className="products-head border-b pb-5 flex justify-between">
        <span className="text-2xl">{products.length} Products</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="text-xl btn btn-circle btn-sm btn-primary text-primary-content"
          >
            <svg
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
            </svg>
          </button>

          <button
            onClick={handleTable}
            type="button"
            className="text-xl btn btn-circle btn-sm btn-ghost text-based-content"
          >
            <svg
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="cards-content my-5 grid gap-2 justify-center sm:grid-cols-1 sm:gap-3 md:grid-cols-2 md:justify-between md:gap-4 lg:grid-cols-3 lg:gap-5">
        {!products.length ? (
          <Loader />
        ) : (
          products.map((product, index) => {
            return <Card key={index} product={product} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cards;
