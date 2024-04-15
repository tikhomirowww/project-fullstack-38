import React, { useState } from "react";
import Button from "../buttons/Button";
import styles from "./card.module.css";
import Input from "../inputs/Input";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

const Cards = ({ item }) => {
  const [openInput, setOpenInput] = useState(false);
  const toggle = () => {
    setOpenInput(!openInput);
  };

  return (
    <div className={styles.contCard}>
      <div className={styles.card}>
        <img className={styles.cardImg} src={item.image} alt="" />
        <h2>{item.title}</h2>
        <p>{item.author}</p>
        <div>
          <FcLike size={25} />
          <FcLikePlaceholder size={25} />
        </div>
        <p>Likes: {item.likes}</p>
        <h5>Comments:</h5>
        {item.reviews.map((item) => (
          <p>{item.text}</p>
        ))}
        <Button onClick={toggle} color="red">
          Comment
        </Button>

        {openInput && <Input />}
      </div>
    </div>
  );
};

export default Cards;
