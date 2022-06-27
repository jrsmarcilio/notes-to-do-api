export type priorityType = "none" | "low" | "medium" | "high";

export enum priorityEnum {
  None = "none",
  Low = "low",
  Medium = "medium",
  High = "high"
}

export interface INotes {
  id: number;
  notes: string;
  name: string;
  isActive: boolean;
  dueDate: Date;
  priority: priorityEnum;
  createdAt: Date;
  updatedAt: Date;
}
