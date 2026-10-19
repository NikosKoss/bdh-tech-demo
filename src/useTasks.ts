import { useRef, useState } from 'react';
import { addTask, sampleTasks, toggleTask, type Priority } from './tasks';

export function useTasks() {
  const [tasks, setTasks] = useState(sampleTasks);
  const nextId = useRef(sampleTasks.length + 1);

  function add(title: string, priority: Priority) {
    if (!title.trim()) return;
    const id = String(nextId.current++);
    setTasks((current) => addTask(current, title, priority, id));
  }

  function toggle(id: string) {
    setTasks((current) => toggleTask(current, id));
  }

  return { tasks, add, toggle };
}
