import React from "react";
import { useFormik } from "formik";
import Todo from "./components/Todo";
import FormInput from "./components/FormInput";
import "./app.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const [updateTodoIndex, setUpdateTodoIndex] = React.useState("");

  const formik = useFormik({
    initialValues: {
      todoTask: "",
    },

    onSubmit: (values) => {
      if (isUpdate) {
        const elementsIndex = todos.findIndex(
          (element) => element.id === updateTodoIndex
        );
        const tempArray = [
          ...todos,
          (todos[elementsIndex].name = values.todoTask),
        ];
        setTodos(tempArray);
        setIsUpdate(false);
      }
      if (!isUpdate) {
        const id = new Date().toISOString();
        const name = values.todoTask;
        const newTodo = { id, name };
        setTodos((prevTodos) => {
          return prevTodos.concat(newTodo);
        });
      }
    },
  });

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const updateTodo = (updateItem) => {
    setIsUpdate(true);
    setUpdateTodoIndex(updateItem.id);
    <FormInput formik={formik} isUpdate={isUpdate} />;
  };

  return (
    <div className="app">
      <FormInput formik={formik} isUpdate={isUpdate} />
      {todos.map((item) => (
        <Todo
          key={item.id}
          item={item}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default App;
