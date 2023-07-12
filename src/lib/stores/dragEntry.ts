import { writable } from 'svelte/store';

import type { Entry, DragEntry } from '$lib/types';

const initial: DragEntry = {
	entry: undefined,
	width: undefined,
	moveIndex: undefined,
	lastMoveIndex: undefined,
	measurements: {
		mouseY: 0,
		mouseX: 0,
		topY: 0,
		leftX: 0,
		topDistance: 0,
		leftDistance: 0
	}
};

export const dragEntry = writable<DragEntry>(initial);

export function getTopLeft(main: HTMLElement) {
	if (!window) return;

	dragEntry.update((dragFilm) => {
		dragFilm.measurements.topY = window.scrollY + main.getBoundingClientRect().y;
		dragFilm.measurements.leftX = main.getBoundingClientRect().x;

		return dragFilm;
	});
}

export function startDrag(e: DragEvent, entry: Entry) {
	setLastMove(undefined);

	dragEntry.update((dragEntry) => {
		dragEntry.measurements.mouseY = e.clientY;
		dragEntry.measurements.mouseX = e.clientX;

		const rect = (e.target as HTMLDivElement).getBoundingClientRect();

		dragEntry.measurements.topDistance = window.scrollY + rect.y - dragEntry.measurements.mouseY;
		dragEntry.measurements.leftDistance = rect.x - dragEntry.measurements.mouseX;

		dragEntry.entry = entry;
		dragEntry.width = rect.width;

		const canvas = document.createElement('canvas');

		const dataTransfer = e.dataTransfer;
		if (!dataTransfer) throw new Error('Unexpected error');

		dataTransfer.setDragImage(canvas, 0, 0);

		canvas.remove();

		return dragEntry;
	});
}

export function drag(e: DragEvent) {
	dragEntry.update((dragEntry) => {
		dragEntry.measurements.mouseY = e.clientY;
		dragEntry.measurements.mouseX = e.clientX;

		return dragEntry;
	});
}

export function dragOver(index: number) {
	dragEntry.update((dragEntry) => {
		dragEntry.moveIndex = index;
		return dragEntry;
	});
}

export function dragEnd() {
	dragEntry.update((dragEntry) => {
		dragEntry.entry = undefined;
		dragEntry.moveIndex = undefined;

		return dragEntry;
	});
}

export function setLastMove(index: number | undefined) {
	dragEntry.update((dragEntry) => {
		dragEntry.lastMoveIndex = index;
		return dragEntry;
	});
}
