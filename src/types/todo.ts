import type { User } from "@/types/user";

export interface Todo {
  id: string;
  name: string;
  date: string;
  assignees: User[];
  priority: "Low" | "Medium" | "Important" | "Urgent";
  status: "todo" | "in-progress" | "complete";
}
