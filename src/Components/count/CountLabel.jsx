import { useContext } from "react";
import { CountContext } from "../../contexts/count/index";

const CountLabel = () => {
  // 클래스형 컴포넌트에서는 Consumer 사용, 함수형에서는 useContext 훅 사용
  // 파라미터로 만든 context를 전달하면 접근이 가능하다.
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
};

export default CountLabel;
