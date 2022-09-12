import React, { useContext } from "react";
import { TodoContext } from "../../contexts/todo/index";
import Input from "./Input";

const Container = () => {
  const { todolist } = useContext(TodoContext);
  return (
    <div>
      {todolist[0]?.map((v, i) => {
        return (
          <div key={i}>
            <span>{v.id}</span>
            <span>{v.todo}</span>
            <span>{v.done ? "✔" : "❌"}</span>
          </div>
        );
      })}
      <Input />
    </div>
  );
};

export default Container;
