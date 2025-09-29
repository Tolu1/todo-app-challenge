import type { Todo } from "@/types/todo";
import type { BoardData } from "react-kanban-kit";

const COLUMNS = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "complete", title: "Complete" },
] as const;

export function toBoard(todos: Todo[]): BoardData {
  const boardData: BoardData = {
    root: {
      id: "root",
      title: "Board",
      parentId: null,
      children: COLUMNS.map((col) => col.id),
      totalChildrenCount: COLUMNS.length,
    },
  };

  COLUMNS.forEach((column) => {
    const columnTodos = todos.filter((todo) => todo.status === column.id);

    boardData[column.id] = {
      id: column.id,
      title: column.title,
      parentId: "root",
      children: columnTodos.map((todo) => todo.id),
      totalChildrenCount: columnTodos.length,
      isDraggable: false,
    };

    columnTodos.forEach((todo) => {
      boardData[todo.id] = {
        id: todo.id,
        title: todo.name,
        parentId: column.id,
        children: [],
        totalChildrenCount: 0,
        content: todo,
        type: "todo-card",
        isDraggable: true,
      };
    });
  });

  return boardData;
}
