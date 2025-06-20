import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const addToCarthandler = () => {};

  const isPrevPage = page > 1;
  const isNextPage = page < 4;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price(Low to High)</option>
            <option value="dsc">Price(High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">sample 1 </option>
            <option value="">sample 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="hfjhjdjhd"
            name="macbook"
            price={4545}
            stock={565}
            handler={addToCarthandler}
            photo="https://reebelo.com.au/_next/image?url=https%3A%2F%2Fcdn.reebelo.com%2Fpim%2Fproducts%2FP-APPLEMACBOOKPRO202213INCH%2FGRA-image-0.jpg&w=640&q=75"
          />
        </div>
        <article>
          <button
            disabled={!isPrevPage}
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
          >
            prev
          </button>
          <span>
            {page} of {4}
          </span>
          <button
            disabled={!isNextPage}
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};

export default Search;
