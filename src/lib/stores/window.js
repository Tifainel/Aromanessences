import { readable } from 'svelte/store';
import { browser } from '$app/environment';

function createWindowStore() {
  return readable({ width: 0, height: 0 }, (set) => {
    if (!browser) return;

    const update = () => set({
      width: window.innerWidth,
      height: window.innerHeight
    });

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });
}

export const windowSize = createWindowStore();
