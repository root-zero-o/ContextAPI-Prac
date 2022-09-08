import { createContext, useState } from "react";

// Context를 생성하기 위해 createContext를 사용해야 한다.
// context도 하나의 React 컴포넌트이기 때문에, 변경 가능한 데이터를 다루기 위해 State를 사용해야 한다.

const CountContext = createContext({
  // 전역 변수로 사용될 데이터의 초기값을 설정한다.
  count: 0,
  plusCount: () => {},
});

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };
  // 화면에 표시될 내용에 Provider를 감싸준다.
  // 만든 state를 Context Provider에 준다.
  return (
    <CountContext.Provider value={{ count, plusCount }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContext, CountProvider };
