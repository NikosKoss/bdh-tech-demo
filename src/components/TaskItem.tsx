import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Task } from '../tasks';
import { webSpaceKey } from '../webSpaceKey';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

// Workshop surface: change layout, typography, priority, and completed styling.
export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <Pressable
      testID={`task-${task.id}`}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: task.completed }}
      aria-checked={task.completed}
      accessibilityLabel={`${task.title}. ${task.priority} priority. ${task.completed ? 'Completed' : 'Open'}`}
      accessibilityHint="Toggle between open and completed"
      onPress={() => onToggle(task.id)}
      {...webSpaceKey(() => onToggle(task.id))}
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
    >
      <Text style={styles.mark} accessible={false}>{task.completed ? '☑' : '☐'}</Text>
      <View style={styles.content}>
        <Text style={[styles.title, task.completed && styles.completed]}>{task.title}</Text>
        <Text style={styles.details}>
          {task.priority} priority · {task.completed ? 'Completed' : 'Open'}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, padding: 16, minHeight: 64 },
  pressed: { backgroundColor: '#eeeeee' },
  mark: { fontSize: 24, color: '#222222' },
  content: { flex: 1, gap: 6 },
  title: { fontSize: 16, lineHeight: 23, color: '#222222' },
  completed: { textDecorationLine: 'line-through', color: '#555555' },
  details: { fontSize: 13, lineHeight: 19, color: '#555555' },
});
