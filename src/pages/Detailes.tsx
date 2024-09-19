import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ProductAttributes {
  title: string;
  company: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
}

interface Product {
  attributes: ProductAttributes;
}

const Detailes: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const location = useLocation();
  const id = location.pathname.split("id=")[1];
  const [color, setColor] = useState<string>("");
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setProduct(data.data);
      });
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (product) {
      const productData = { ...product.attributes, color, count };
      const products = localStorage.getItem("products")
        ? JSON.parse(localStorage.getItem("products")!)
        : [];

      const isExist = products.some(item => item.title === productData.title && item.color === productData.color);
      
      if (!isExist) {
        products.push(productData);
      } else {
        products.forEach(item => {
          if (item.title === productData.title && item.color === productData.color) {
            item.count += productData.count;
          }
        });
      }

      localStorage.setItem("products", JSON.stringify(products));
    }
  };

  if (!product) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    );
  }

  const { attributes } = product;

  return (
    <div>
      <div className="container py-10">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </div>

        <div className="detailes-info flex gap-5 md:gap-10 lg:gap-20 flex-col md:flex-row mt-10">
          <>
            <div className="detailes-img w-full md:w-1/2">
              <img
                className="w-96 h-96 rounded-lg object-cover lg:w-full"
                src={attributes.image}
                alt={attributes.title}
              />
            </div>
            <div className="detailes-about w-full md:w-1/2">
              <h1 className="capitalize text-3xl font-bold">
                {attributes.title}
              </h1>
              <p className="text-xl text-neutral-content font-bold mt-2">
                {attributes.company}
              </p>
              <p className="mt-3 text-xl">Price: {attributes.price / 100}</p>
              <p className="mt-6 leading-8">{attributes.description}</p>
              <div className="colors">
                <div className="mt-5">
                  <h3 className="mb-3">Colors</h3>
                  {attributes.colors.map((color, ind) => (
                    <div key={ind} style={{ display: "inline-block", marginRight: "10px" }}>
                      <input
                        type="radio"
                        name="colors"
                        id={`color-${ind}`}
                        style={{ display: "none" }}
                        defaultChecked={ind === 0}
                      />
                      <label
                        onClick={(event) => {
                          const labels = document.querySelectorAll("label");
                          labels.forEach((label) => {
                            label.style.border = "none";
                          });
                          setColor(color);
                          event.currentTarget.style.border = "2px solid black";
                        }}
                        htmlFor={`color-${ind}`}
                        style={{
                          display: "inline-block",
                          width: "24px",
                          height: "24px",
                          backgroundColor: color,
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                      ></label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="amount flex flex-col gap-3">
                <label htmlFor="amount">Amount</label>
                <select value={count} onChange={(e) => setCount(Number(e.target.value))} className="select select-primary select-md">
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>{index + 1}</option>
                  ))}
                </select>
                <button onClick={handleSubmit} className="btn btn-primary w-fit">ADD TO BAG</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Detailes;
