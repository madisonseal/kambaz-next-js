import { useState } from "react";
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";
export default function TodoList() {
const [todos, setTodos] = useState([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node"  }]);
  const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });

  const addTodo = (todo: any) => {
    const newTodos = [ ...todos, { ...todo,
      id: new Date().getTime().toString() }];
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const updateTodo = (todo: any) => {
    const newTodos = todos.map((item) =>
      (item.id === todo.id ? todo : item));
    setTodos(newTodos);
    setTodo({id: "-1", title: ""});
  };
  return (
    <div className="container mt-4">
      <h2>Todo List</h2>
      <ListGroup>
        <ListGroupItem className="align-item-center d-flex ">
        <FormControl
        className="me-2 w-50"
        value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
          <Button 
          variant="success"
          className="me-2"
          onClick={() => addTodo(todo)}
                  id="wd-add-todo-click"> Add </Button>
          <Button
          variant="warning"
          onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click"> Update </Button>
          
        </ListGroupItem>
        {todos.map((todo) => (
          
          <ListGroupItem 
          className="d-flex  align-items-center "
          key={todo.id}>
            <span className="w-50 mr-2">{todo.title}</span>
            <Button 
            variant="primary"
            className="me-2"
            onClick={() => deleteTodo(todo.id)}
                    id="wd-delete-todo-click"> Delete </Button>
            <Button 
            variant="danger"
            onClick={() => setTodo(todo)}
                    id="wd-set-todo-click"> Edit </Button>
            
          </ListGroupItem>
        ))}
      </ListGroup><hr/>
</div>
);}