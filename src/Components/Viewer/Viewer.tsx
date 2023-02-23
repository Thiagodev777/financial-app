import React from "react";
import styles from "./style.module.css";

interface PropsType {
  title: string;
  value: number;
}

const Viewer = ({ title, value }: PropsType) => {
  return (
    <div className={styles.container_item}>
      <h1>{title}</h1>
      <h2 style={{ color: value < 0 ? "red" : "#fff" }}>
        {value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h2>
    </div>
  );
};

export default Viewer;
