import React, { useContext, useRef } from "react";
import { TodoContext } from "../../contexts/todo";

const Input = () => {
  const { addTodo, todolist } = useContext(TodoContext);
  const inputRef = useRef(null);
  const onClick = (event) => {
    event.preventDefault();
    addTodo(inputRef.current.value);
  };
  return (
    <form>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Go</button>
    </form>
  );
};

export default Input;
