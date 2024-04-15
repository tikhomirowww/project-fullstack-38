import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/products.actions";
import Button from "../../../widgets/buttons/Button";
import Cards from "../../../widgets/productCard/Cards";
import styles from "./products.module.css";
const ProductsList = () => {
  const dispatch = useDispatch();
  console.log("qwert");
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  console.log(products);
  return (
    <div className={styles.containerCard}>
      {products.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductsList;
