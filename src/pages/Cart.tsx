import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  company: string;
  image: string;
  colors: string[];
  price: number;
  count: number;
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  function handleChangeAmout() {
  }

  function setColor() {
  }

  return (
    <div className="container">
      <h1 className="border-b-2 text-3xl mt-10 my-5 py-2">Shopping Cart</h1>
      <div className="products my-5">
        {products.length > 0 &&
          products.map((product) => (
            <div key={product.id} className="flex flex-row justify-between my-3">
              <img src={product.image} className="w-36 h-36 rounded" alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <p>{product.company}</p>
                <p>Colors:</p>
                {product.colors.map((color, ind) => (
                  <div
                    key={ind}
                    style={{
                      display: "inline-block",
                      marginRight: "10px",
                    }}
                  >
                    <input
                      type="radio"
                      name={`colors-${product.id}`}
                      id={`color-${ind}-${product.id}`}
                      style={{ display: "none" }}
                      defaultChecked={ind === 0}
                    />
                    <label
                      onClick={(event) => {
                        let labels = document.querySelectorAll("label");
                        labels.forEach((label) => {
                          label.style.border = "none";
                        });
                        setColor(color);
                        (event.target as HTMLLabelElement).style.border = "2px solid black";
                      }}
                      htmlFor={`color-${ind}-${product.id}`}
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
              <div>
                <h3>Amount</h3>
                <input
                  type="number"
                  onChange={handleChangeAmout}
                  value={product.count}
                  className="w-12"
                />
              </div>
              <div className="bg-slate-100 rounded p-5 w-60">
                <div className="flex flex-row justify-between border-b">
                  <h3>Subtotal</h3>
                  <h3>${(product.price / 100) * product.count}</h3>
                </div>
                <div className="flex flex-row justify-between border-b">
                  <h3>Shipping</h3>
                  <h3>$5</h3>
                </div>
                <div className="flex flex-row justify-between border-b">
                  <h3>Tax</h3>
                  <h3>$577.89</h3>
                </div>
                <div className="flex flex-row justify-between border-b">
                  <h3>Order Total</h3>
                  <h3>${((product.count * product.price) / 100 + 5 + 577.89).toFixed(2)}</h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
