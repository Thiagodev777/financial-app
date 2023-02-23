interface PropsType {
  total: number;
}

const Average = ({ total }: PropsType) => {
  return (
    <h1 style={{ color: "#FFF", textAlign: "center", marginTop: "30px" }}>
      Saúde Financeira:{" "}
      <span style={{ color: total < 0 ? "red" : "green" }}>
        {total < 0 ? "Péssima" : "Ótima"}
      </span>
    </h1>
  );
};

export default Average;
