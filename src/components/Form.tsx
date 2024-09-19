import React, { useRef, useState } from "react";

const Form: React.FC = () => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const categoryRef = useRef<HTMLSelectElement | null>(null);
  const companyRef = useRef<HTMLSelectElement | null>(null);
  const sortRef = useRef<HTMLSelectElement | null>(null);
  const [shipping, setShipping] = useState(false);
  const [price, setPrice] = useState<number>(1000);

  function handleSearch(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
  }

  function handleReset(event: React.MouseEvent<HTMLButtonElement>) {
  }

  return (
    <div className="py-20">
      <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center border">
        <div className="form-control">
          <label htmlFor="search" className="label-text capitalize mb-3">
            Search Products
          </label>
          <input
            ref={searchRef}
            type="text"
            className="input input-bordered input-sm"
            name="search"
            id="search"
          />
        </div>

        <div className="form-control">
          <label htmlFor="category" className="label-text capitalize mb-3">
            Select Category
          </label>
          <select
            ref={categoryRef}
            name="category"
            className="select select-bordered select-sm"
            id="category"
          >
            <option value="all">all</option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Kids">Kids</option>
            <option value="Sofas">Sofas</option>
            <option value="Beds">Beds</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="company" className="label-text capitalize mb-3">
            Select Company
          </label>
          <select
            ref={companyRef}
            name="company"
            className="select select-bordered select-sm"
            id="company"
          >
            <option value="all">all</option>
            <option value="Modenza">Modenza</option>
            <option value="Luxora">Luxora</option>
            <option value="Artifex">Artifex</option>
            <option value="Comfora">Comfora</option>
            <option value="Homestead">Homestead</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="sort" className="label-text capitalize mb-3">
            Sort by
          </label>
          <select
            ref={sortRef}
            name="sort"
            className="select select-bordered select-sm"
            id="sort"
          >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>

        <div className="form-control">
          <div className="pb-3 flex justify-between">
            <span>Select Price</span>
            <p>${price}.00</p>
          </div>
          <input
            onChange={(event) => setPrice(Number(event.target.value))}
            value={price}
            className="range range-primary range-sm"
            type="range"
            name="price"
            id="price"
            min="0"
            max="1000"
          />
          <div className="flex justify-between mt-2">
            <span className="text-sm">0</span>
            <p className="text-sm">Max: $1,000.0</p>
          </div>
        </div>

        <div className="form-control">
          <label className="cursor-pointer label flex flex-col">
            <span className="label-text mb-3">Free Shipping</span>
            <input
              onChange={() => setShipping(!shipping)}
              type="checkbox"
              className="checkbox checkbox-info"
              checked={shipping}
            />
          </label>
        </div>

        <div className="form-control">
          <button
            onClick={handleSearch}
            className="btn btn-info btn-sm text-white"
          >
            SEARCH
          </button>
        </div>

        <div className="form-control">
          <button
            type="reset"
            onClick={handleReset}
            className="btn bg-pink-600 btn-sm text-white uppercase"
          >
            reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
