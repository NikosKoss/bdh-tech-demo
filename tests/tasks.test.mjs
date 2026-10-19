import assert from 'node:assert/strict';
import test from 'node:test';
import { addTask, sampleTasks, toggleTask } from '../src/tasks.ts';

test('adding trims the title, preserves priority, and leaves existing tasks unchanged', () => {
  const before = structuredClone(sampleTasks);
  const result = addTask(sampleTasks, '  Try the keyboard  ', 'high', '9');
  assert.deepEqual(result[0], { id: '9', title: 'Try the keyboard', priority: 'high', completed: false });
  assert.equal(result.length, 9);
  assert.deepEqual(sampleTasks, before);
});

test('blank input does not create a task', () => {
  assert.equal(addTask(sampleTasks, '   ', 'low', '9'), sampleTasks);
});

test('a task can be completed and reopened without changing its title or priority', () => {
  const completed = toggleTask(sampleTasks, '1');
  assert.equal(completed[0].completed, true);
  assert.equal(sampleTasks[0].completed, false);
  assert.deepEqual(completed.slice(1), sampleTasks.slice(1));
  assert.deepEqual(toggleTask(completed, '1'), sampleTasks);
});

test('unknown task IDs cannot change another task', () => {
  assert.deepEqual(toggleTask(sampleTasks, 'missing'), sampleTasks);
});
