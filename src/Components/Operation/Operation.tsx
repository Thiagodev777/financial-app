import React from "react";
import styles from "./style.module.css";

interface OperationType {
  id: number;
  title: string;
  value: number;
  type: string;
}

const Operation = ({ id, title, value, type }: OperationType) => {
  return (
    <div className={styles.operation_item}>
      <h1>{title}</h1>
      <h1>
        {value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h1>
      {type === "saida" ? (
        <i style={{ color: "red" }} className="bi bi-arrow-up-square-fill"></i>
      ) : (
        <i
          style={{ color: "green" }}
          className="bi bi-arrow-down-square-fill"
        ></i>
      )}
    </div>
  );
};

export default Operation;
