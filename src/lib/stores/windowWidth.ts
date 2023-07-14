import { writable } from 'svelte/store';
import { Breakpoints } from '../types';

export const windowWidth = writable<{ width: number; breakpoint: Breakpoints } | null>(null);

function update() {
	const width = window.innerWidth;

	windowWidth.set({
		width,
		breakpoint: getBreakpoint(width)
	});
}

function init() {
	update();

	window.addEventListener('resize', update);
}

function destroy() {
	window.removeEventListener('resize', update);
}

function getBreakpoint(width: number): Breakpoints {
	if (width < 640) return Breakpoints.xs;
	if (width < 768) return Breakpoints.sm;
	if (width < 1024) return Breakpoints.md;
	if (width < 1280) return Breakpoints.lg;
	if (width < 1536) return Breakpoints.xl;
	return Breakpoints['2xl'];
}

export const windowHandlers = {
	init,
	destroy
};
