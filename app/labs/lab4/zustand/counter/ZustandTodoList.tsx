"use client";
import { useState } from "react";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
import { useTodoStore } from "./useTodoStore";

export default function ZustandTodoList() {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodoStore();
  const [todo, setTodo] = useState({ id: "-1", title: "" });

  return (
    <div className="container mt-4">
      <h2>Zustand Todo List</h2>

      <ListGroup>
        <ListGroupItem className="align-items-center d-flex">
          <FormControl
            className="me-2 w-50"
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />

          <Button
            variant="success"
            className="me-2"
            onClick={() => {
              if (todo.title.trim() === "") return;
              addTodo(todo.title);
              setTodo({ id: "-1", title: "" });
            }}
            id="wd-add-todo-click"
          >
            Add
          </Button>

          <Button
            variant="warning"
            onClick={() => {
              if (todo.id === "-1") return;
              updateTodo(todo.id, todo.title);
              setTodo({ id: "-1", title: "" });
            }}
            id="wd-update-todo-click"
          >
            Update
          </Button>
        </ListGroupItem>

        
        {todos.map((t) => (
          <ListGroupItem
            className="d-flex align-items-center"
            key={t.id}
          >
            <span className="w-50 me-2">{t.title}</span>

            <Button
              variant="primary"
              className="me-2"
              onClick={() => deleteTodo(t.id)}
              id="wd-delete-todo-click"
            >
              Delete
            </Button>

            <Button
              variant="danger"
              onClick={() => setTodo(t)}
              id="wd-set-todo-click"
            >
              Edit
            </Button>
          </ListGroupItem>
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}