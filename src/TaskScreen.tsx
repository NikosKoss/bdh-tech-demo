import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TaskList } from './components/TaskList';
import type { Priority } from './tasks';
import { useTasks } from './useTasks';
import { webSpaceKey } from './webSpaceKey';

const priorities: Priority[] = ['low', 'medium', 'high'];

export function TaskScreen() {
  const { tasks, add, toggle } = useTasks();
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const completed = tasks.filter((task) => task.completed).length;

  function submit() {
    if (!title.trim()) return;
    add(title, priority);
    setTitle('');
    Keyboard.dismiss();
  }

  // The form scrolls with the list so it stays reachable in short viewports.
  const header = (
    <>
      <View style={styles.header}>
        <Text accessibilityRole="header" style={styles.heading}>My tasks</Text>
        <Text testID="task-summary" style={styles.summary} accessibilityLiveRegion="polite">
          {tasks.length - completed} open · {completed} completed
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>New task</Text>
        <TextInput
          testID="new-task-title"
          accessibilityLabel="New task title"
          placeholder="What needs doing?"
          placeholderTextColor="#666666"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          maxLength={240}
          returnKeyType="done"
          onSubmitEditing={submit}
          submitBehavior="submit"
        />
        <View style={styles.priorities} accessibilityRole="radiogroup" accessibilityLabel="New task priority">
          {priorities.map((value) => (
            <Pressable
              key={value}
              testID={`priority-${value}`}
              accessibilityRole="radio"
              accessibilityState={{ checked: priority === value }}
              aria-checked={priority === value}
              accessibilityLabel={`${value} priority`}
              onPress={() => setPriority(value)}
              {...webSpaceKey(() => setPriority(value))}
              style={[styles.priority, priority === value && styles.selectedPriority]}
            >
              <Text style={[styles.priorityText, priority === value && styles.selectedText]}>{value}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          testID="add-task"
          accessibilityRole="button"
          accessibilityState={{ disabled: !title.trim() }}
          disabled={!title.trim()}
          onPress={submit}
          style={({ pressed }) => [styles.addButton, !title.trim() && styles.disabled, pressed && styles.pressed]}
        >
          <Text style={styles.buttonText}>Add task</Text>
        </Pressable>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TaskList tasks={tasks} onToggle={toggle} header={header} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#ffffff' },
  header: { padding: 16, paddingBottom: 8, gap: 4 },
  heading: { fontSize: 26, fontWeight: '600', color: '#222222' },
  summary: { fontSize: 14, color: '#555555' },
  form: { padding: 16, gap: 10, borderBottomWidth: 1, borderBottomColor: '#cccccc' },
  label: { fontSize: 14, fontWeight: '600', color: '#222222' },
  input: { minHeight: 48, borderWidth: 1, borderColor: '#777777', borderRadius: 4, paddingHorizontal: 12, fontSize: 16, color: '#222222' },
  priorities: { flexDirection: 'row', gap: 8 },
  priority: { flex: 1, minHeight: 48, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#777777', borderRadius: 4 },
  selectedPriority: { backgroundColor: '#333333' },
  priorityText: { fontSize: 14, color: '#333333' },
  selectedText: { color: '#ffffff', fontWeight: '600' },
  addButton: { minHeight: 48, alignItems: 'center', justifyContent: 'center', backgroundColor: '#333333', borderRadius: 4 },
  disabled: { backgroundColor: '#666666' },
  pressed: { opacity: 0.8 },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
});
