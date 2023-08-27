import { get, writable } from 'svelte/store';

import { Breakpoints } from '$lib/types';

export const windowWidth = writable<number>();
export const breakpoint = writable<Breakpoints | null>(null);
export const mobile = writable<boolean>(false);

windowWidth.subscribe((value) => {
	const bp = getBreakpoint(value ?? 0);

	breakpoint.set(bp);
	mobile.set(bp <= Breakpoints.md);
});

function getBreakpoint(width: number): Breakpoints {
	if (width < 640) return Breakpoints.xs;
	if (width < 768) return Breakpoints.sm;
	if (width < 1024) return Breakpoints.md;
	if (width < 1280) return Breakpoints.lg;
	if (width < 1536) return Breakpoints.xl;
	return Breakpoints['2xl'];
}
