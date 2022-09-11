import { createContext, useState } from "react";

const initialTodo = [
  {
    id: 1,
    todo: "자바스크립트 공부하기",
    done: false,
  },
  {
    id: 2,
    todo: "사이드 프로젝트 하기",
    done: true,
  },
];

const TodoContext = createContext({
  todolist: initialTodo,
  addTodo: () => {},
});

const TodoProvider = ({ children }) => {
  const [todolist, setTodolist] = useState([initialTodo]);

  const addTodo = (payload) => {
    setTodolist(payload, ...todolist);
  };

  return (
    <TodoContext.Provider value={{ todolist, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
