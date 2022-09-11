import { useContext } from "react";
import { CountContext } from "../../contexts/count";

const PlusBtn = () => {
  const { plusCount } = useContext(CountContext);
  return <button onClick={plusCount}>+ 1</button>;
};

export default PlusBtn;
