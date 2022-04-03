import React from "react";
import { MdDelete } from "react-icons/md";
import "./todo.css";

const Todo = (props) => {
  return (
    <section className="row-container">
      <section className="row">
        <button className="update-button" onClick={() => props.updateTodo(props.item)}>
          {props.item.name}
        </button>
        <MdDelete className="icon" onClick={() => props.deleteTodo(props.item.id)} />
      </section>
    </section>
  );
};

export default React.memo(Todo);
