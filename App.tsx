import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TaskScreen } from './src/TaskScreen';

export default function App() {
  const { width, height } = useWindowDimensions();
  const isWeb = Platform.OS === 'web';

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <View style={isWeb ? styles.workspace : styles.native}>
        {isWeb && <Text style={styles.caption}>Phone-sized web preview</Text>}
        <View style={isWeb ? [styles.phone, {
          width: Math.min(390, width - 32),
          height: Math.min(844, Math.max(0, height - 80)),
        }] : styles.native}>
          <TaskScreen />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  native: { flex: 1 },
  workspace: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, padding: 16, backgroundColor: '#e9e9e9' },
  caption: { fontSize: 12, color: '#444444', textAlign: 'center' },
  phone: { borderWidth: 2, borderColor: '#555555', borderRadius: 24, overflow: 'hidden', backgroundColor: '#ffffff' },
});
