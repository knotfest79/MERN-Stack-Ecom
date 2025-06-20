import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
const Home = () => {
  const addToCarthandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="hfjhjdjhd"
          name="macbook"
          price={4545}
          stock={565}
          handler={addToCarthandler}
          photo="https://reebelo.com.au/_next/image?url=https%3A%2F%2Fcdn.reebelo.com%2Fpim%2Fproducts%2FP-APPLEMACBOOKPRO202213INCH%2FGRA-image-0.jpg&w=640&q=75"
        />
      </main>
    </div>
  );
};

export default Home;
