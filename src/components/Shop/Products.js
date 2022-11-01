import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { allProducts } from "../../store/cartItemSlice";

const Products = (props) => {
  const totalProducts = allProducts.map((product) => {
    return (
      <ProductItem
        key={product.id}
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{totalProducts}</ul>
    </section>
  );
};

export default Products;
