import { writable } from 'svelte/store';

import type { Entry, Dragged } from '$lib/types';

const initial: Dragged = {
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

export const dragged = writable<Dragged>(initial);

function getTopLeft(main: HTMLElement) {
	if (!window) return;

	dragged.update((dragEntry) => {
		dragEntry.measurements.topY = window.scrollY + main.getBoundingClientRect().y;
		dragEntry.measurements.leftX = main.getBoundingClientRect().x;

		return dragEntry;
	});
}

function startDrag(e: DragEvent, entry: Entry) {
	setLastMove(undefined);

	dragged.update((dragEntry) => {
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

function drag(e: DragEvent) {
	dragged.update((dragEntry) => {
		dragEntry.measurements.mouseY = e.clientY;
		dragEntry.measurements.mouseX = e.clientX;

		return dragEntry;
	});
}

function dragOver(index: number) {
	dragged.update((dragEntry) => {
		dragEntry.moveIndex = index;
		return dragEntry;
	});
}

function dragEnd() {
	dragged.update((dragEntry) => {
		dragEntry.entry = undefined;
		dragEntry.moveIndex = undefined;

		return dragEntry;
	});
}

function setLastMove(index: number | undefined) {
	dragged.update((dragEntry) => {
		dragEntry.lastMoveIndex = index;
		return dragEntry;
	});
}

export const dragHandlers = {
	getTopLeft,
	startDrag,
	drag,
	dragOver,
	dragEnd,
	setLastMove
};
