export type Priority = 'low' | 'medium' | 'high';

export interface Task {
  id: string;
  title: string;
  priority: Priority;
  completed: boolean;
}

export const sampleTasks: Task[] = [
  { id: '1', title: 'Choose your design direction', priority: 'high', completed: false },
  { id: '2', title: 'Open the starter and check the task list', priority: 'low', completed: true },
  { id: '3', title: 'Read a long headline: Students share ideas for making campus news easier to discover, read, and revisit on a small screen', priority: 'medium', completed: false },
  { id: '4', title: 'Make priority labels easy to read', priority: 'high', completed: false },
  { id: '5', title: 'Check that a completed task with a long title still wraps clearly and can be reopened without losing its priority', priority: 'medium', completed: true },
  { id: '6', title: 'Take a screenshot of your design', priority: 'low', completed: false },
  { id: '7', title: 'Explain one change without asking AI', priority: 'high', completed: true },
  { id: '8', title: 'Scroll here, then review your changes', priority: 'low', completed: false },
];

// Pure behavior functions: redesigning the components should not change these.
export function addTask(tasks: Task[], title: string, priority: Priority, id: string): Task[] {
  const trimmedTitle = title.trim();
  if (!trimmedTitle) return tasks;
  return [{ id, title: trimmedTitle, priority, completed: false }, ...tasks];
}

export function toggleTask(tasks: Task[], id: string): Task[] {
  return tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
}
