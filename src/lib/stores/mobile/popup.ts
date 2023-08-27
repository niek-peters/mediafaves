import type { Popups } from '$src/lib/types';
import { get, writable } from 'svelte/store';

export const popup = writable<Popups | null>(null);

function toggle(state: Popups) {
	const current = get(popup);
	if (current === state) return popup.set(null);

	popup.set(state);
}

function close() {
	popup.set(null);
}

export const popupHandlers = {
	open: toggle,
	close
};
