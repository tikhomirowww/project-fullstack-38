import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/products.actions";
import Button from "../../../widgets/buttons/Button";

const ProductsList = () => {
  const dispatch = useDispatch();
  // console.log("qwert");
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const { products } = useSelector((state) => state.products);
  // console.log(products);
  return (
    <div>
      {products.map((item) => (
        <div>
          <img width={200} src={item.image} alt="" />
          <h2>{item.title}</h2>
          <p>{item.author}</p>
          <p>Likes: {item.likes}</p>
          <h5>Comments:</h5>
          {item.reviews.map((item) => (
            <p>{item.text}</p>
          ))}
          <Button>Comment</Button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
