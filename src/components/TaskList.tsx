import type { ReactElement } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import type { Task } from '../tasks';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  header?: ReactElement;
}

// Workshop surface: spacing, separators, header, and list presentation.
export function TaskList({ tasks, onToggle, header }: TaskListProps) {
  return (
    <FlatList
      testID="task-list"
      style={styles.list}
      data={tasks}
      ListHeaderComponent={header}
      keyExtractor={(task) => task.id}
      renderItem={({ item }) => <TaskItem task={item} onToggle={onToggle} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListEmptyComponent={<Text style={styles.empty}>Add your first task above.</Text>}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
    />
  );
}

const styles = StyleSheet.create({
  list: { flex: 1 },
  content: { paddingBottom: 24 },
  separator: { height: 1, backgroundColor: '#dddddd', marginHorizontal: 16 },
  empty: { padding: 16, color: '#555555' },
});
