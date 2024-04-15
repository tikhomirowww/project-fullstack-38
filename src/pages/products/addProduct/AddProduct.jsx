import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../../../widgets/inputs/Input";
import Button from "../../../widgets/buttons/Button";
import { addProduct } from "../../../store/products/products.actions";


const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: 0,
    image: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    for (let key in product) {
      if (!product[key].trim()) {
        alert("some inputs are empty");
        return;
      }
    }
    dispatch(addProduct(product));
    setProduct({
      category: "",
      title: "",
      description: "",
      price: "",
    });


    navigate("/");
    console.log(product);
  }

  const { error } = useSelector((state) => state.products);

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ fontSize: "50px", fontFamily: "cursive" }}>AddProduct</h2>
      {error && <h2 style={{ color: "red" }}>{error}!!!</h2>}
      <Input
        onChange={handleChange}
        value={product.title}
        name="title"
        placeholder="title"
        type="text"
      />
      <Input
        onChange={handleChange}
        value={product.description}
        name="description"
        placeholder="description"
        type="text"
      />
      <Input
        onChange={handleChange}
        value={product.price}
        name="price"
        placeholder="price"
        type="text"
      />
      {/* <Input
        onChange={handleChange}
        value={product.image}
        name="image"
        placeholder="image"
        type="url"
      /> */}
      <Input
        onChange={handleChange}
        value={product.category}
        name="category"
        placeholder="category"
        type="number"
      />
      <Button color="green">Add</Button>
    </form>
  );
};

export default AddProduct;
