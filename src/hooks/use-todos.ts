import { useLocalStorage } from "@/hooks/use-local-storage";
import type { Todo } from "@/types/todo";
import { todos as todosData } from "@/data/todos";
import { v4 as uuidv4 } from "uuid";

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", todosData);

  function addTodo(todo: Omit<Todo, "id">) {
    const newTodo: Todo = {
      ...todo,
      id: uuidv4(),
    };
    setTodos((prev) => [...prev, newTodo]);
  }

  function updateTodo(id: string, updates: Partial<Todo>) {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
    );
  }

  function deleteTodo(id: string) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function markComplete(id: string) {
    updateTodo(id, { status: "complete" });
  }

  function markInProgress(id: string) {
    updateTodo(id, { status: "in-progress" });
  }

  function markTodo(id: string) {
    updateTodo(id, { status: "todo" });
  }

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    markComplete,
    markInProgress,
    markTodo,
  };
}
