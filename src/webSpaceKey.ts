import { Platform } from 'react-native';

// React Native Web handles Enter, but checkbox/radio Pressables need Space too.
export function webSpaceKey(activate: () => void) {
  return Platform.OS === 'web' ? {
    onKeyDown: (event: { key: string; repeat: boolean; preventDefault: () => void }) => {
      if (event.key === ' ') {
        event.preventDefault();
        if (!event.repeat) activate();
      }
    },
  } : {};
}
