import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { myProductsActions } from "../../store/cartItemSlice";
import { allProducts } from "../../store/cartItemSlice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, description } = props;

  const addingItemHandler = () => {
    const selectedProduct = allProducts.find((pr) => pr.id === id);
    const toAddProduct = {
      ...selectedProduct,
      quantity: 1,
      total: 1 * selectedProduct.price,
    };

    dispatch(myProductsActions.addToCart(toAddProduct));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addingItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
