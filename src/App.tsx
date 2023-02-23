import React from "react";
import styles from "./App.module.css";

import Header from "./Components/Header/Header";
import Operation from "./Components/Operation/Operation";
import Viewer from "./Components/Viewer/Viewer";
import InputOperation from "./Components/InputOperation/InputOperation";
import Average from "./Components/Average";
import Footer from "./Components/Footer/Footer";

interface OperationType {
  id: number;
  title: string;
  value: number;
  type: string;
}

const App = () => {
  const [operations, setOperations] = React.useState<OperationType[]>([]);

  const inputTotal = () => {
    let total = 0;
    const entradas = operations.filter(
      (operation) => operation.type === "entrada"
    );
    entradas.forEach((operation) => (total += operation.value));
    return total;
  };

  const outputTotal = () => {
    let total = 0;
    const entradas = operations.filter(
      (operation) => operation.type === "saida"
    );
    entradas.forEach((operation) => (total += operation.value));
    return total;
  };

  return (
    <React.Fragment>
      <Header />
      {operations.length === 0 ? null : (
        <Average total={inputTotal() - outputTotal()} />
      )}
      <div className={styles.container}>
        <Viewer title={"Entradas"} value={inputTotal()} />
        <Viewer title={"Saídas"} value={outputTotal()} />
        <Viewer title={"Total"} value={inputTotal() - outputTotal()} />
      </div>
      <div className={styles.container_newOperation}>
        <InputOperation setOperations={setOperations} />
      </div>
      <div className={styles.container_operation}>
        {operations.map(({ id, title, value, type }) => (
          <Operation key={id} id={id} title={title} value={value} type={type} />
        ))}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default App;
