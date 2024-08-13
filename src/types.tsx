import { ReactNode } from "react";

type Status = "pending" | "in-progress" | "completed";

export type Task = {
  _id: string;
  title: string;
  description: string;
  status: Status;
  userId: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type TaskContextProps = {
  tasks: Task[];
  addTask: (task: { title: string; description: string }) => Promise<void>;
  updateTask: (taskId: string, updatedData: Partial<Task>) => Promise<void>;
  deleteTask: (taskId: string) => Promise<void>;
};

export type TaskContainerProps = {
  status: string;
  tasks: Task[];
};

export type TaskItemProps = {
  task: Task;
};

// Types for authentication
export type UserData = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string | null;
  isDarkMode: boolean;
  isVerified: boolean;
};

export type AuthContextType = {
  user: UserData | null;
  loading: boolean;
  setUser: (user: UserData | null) => void;
  updateUser: (updatedData: FormData) => void;
};

export interface AuthProviderProps {
  children: ReactNode;
}
