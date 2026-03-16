import { create } from "zustand";

// Define a Todo type
interface Todo {
  id: string;
  title: string;
}


interface TodoState {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
  resetTodos: () => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now().toString(), title }],
    })),

  updateTodo: (id, title) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo
      ),
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  resetTodos: () =>
    set({ todos: [] }),
}));