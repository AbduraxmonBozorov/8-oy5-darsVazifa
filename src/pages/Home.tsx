import React from "react";
import { useNavigate } from "react-router-dom";

interface ProductAttributes {
  image: string;
  title: string;
  price: number;
}

interface Product {
  id: string;
  attributes: ProductAttributes;
}

interface HomeProps {
  data: {
    data: Product[];
  };
}

const Home: React.FC<HomeProps> = ({ data }) => {
  const navigate = useNavigate();

  if (!data || !data.data) {
    return null; // Return null if data is not available
  }

  const handleCard = (event: React.MouseEvent<HTMLDivElement>) => {
    const productId = event.currentTarget.getAttribute("data-id");
    if (productId) {
      navigate(`/products/id=${productId}`);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="hero flex gap-10 py-20">
          <div className="hero-info w-1/2 flex flex-col gap-10">
            <h1 className="text-4xl font-bold sm:text-6xl">
              We are changing the way people shop
            </h1>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              repellat explicabo enim soluta temporibus asperiores aut obcaecati
              perferendis porro nobis.
            </p>
            <div>
              <button onClick={() => navigate("/products")} className="btn btn-primary text-white">
                OUR PRODUCTS
              </button>
            </div>
          </div>

          <div className="hero-img w-1/2 flex justify-end">
            <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
              {data.data.map((product, ind) => (
                <div key={ind} className="carousel-item">
                  <img
                    src={product.attributes.image}
                    className="rounded-box w-80 object-cover"
                    alt={`Product ${ind}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="featured">
          <h2 className="capitalize text-3xl pb-8 font-medium mb-10 border-b">featured products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {data.data.map((product, index) => (
              <div 
                onClick={handleCard} 
                key={index} 
                data-id={product.id} 
                className="bg-white cursor-pointer hover:shadow-lg transition p-4 rounded-lg shadow-md"
              >
                <img
                  src={product.attributes.image}
                  alt={`Product ${index}`}
                  className="rounded-lg mb-4 h-64 md:h-48 w-full object-cover"
                />
                <h2 className="text-xl capitalize text-center font-semibold">
                  {product.attributes.title}
                </h2>
                <p className="text-gray-600 text-center mt-5">
                  {product.attributes.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
