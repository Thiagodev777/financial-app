import React from "react";
import styles from "./style.module.css";

interface OperationType {
  id: number;
  title: string;
  value: number;
  type: string;
}

interface PropsType {
  setOperations: React.Dispatch<React.SetStateAction<OperationType[]>>;
}

const InputOperation = ({ setOperations }: PropsType) => {
  const [title, setTitle] = React.useState("");
  const [value, setValue] = React.useState("");
  const [type, setType] = React.useState("");

  const handleNewOperation = () => {
    if (!title || !value || !type) {
      return window.alert("Preencha as informações corretamente...");
    }
    const newOperation = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      value: Number(value.replace(",", ".")),
      type: type,
    };
    setOperations((operation) => [...operation, newOperation]);
    setTitle("");
    setValue("");
    setType("");
  };

  return (
    <div className={styles.inputOperation}>
      <div>
        <h3>Nome:</h3>
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        <h3>Valor:</h3>
        <input
          type="number"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </div>
      <select value={type} onChange={({ target }) => setType(target.value)}>
        <option disabled value="">
          Tipo
        </option>
        <option value="entrada">entrada</option>
        <option value="saida">saida</option>
      </select>
      <button onClick={handleNewOperation} type="submit">
        Adicionar
      </button>
    </div>
  );
};

export default InputOperation;
