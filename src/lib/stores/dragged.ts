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
		topDistance: 0,
		leftDistance: 0
	},
	fromSearch: false
};

export const dragged = writable<Dragged>(initial);

function startDrag(e: DragEvent, entry: Entry, fromSearch = false) {
	setLastMove(undefined);

	dragged.update((dragEntry) => {
		dragEntry.measurements.mouseY = e.clientY;
		dragEntry.measurements.mouseX = e.clientX;

		const rect = (e.target as HTMLDivElement).getBoundingClientRect();

		dragEntry.measurements.topDistance = rect.y - dragEntry.measurements.mouseY;
		dragEntry.measurements.leftDistance = rect.x - dragEntry.measurements.mouseX;

		dragEntry.entry = entry;
		dragEntry.width = rect.width;
		dragEntry.fromSearch = fromSearch;

		const canvas = document.createElement('canvas');

		const dataTransfer = e.dataTransfer;
		if (!dataTransfer) throw new Error('Unexpected error');

		dataTransfer.setDragImage(canvas, 0, 0);

		canvas.remove();

		return dragEntry;
	});
}

let stop = true;
let nearTop = false;
let nearBottom = false;

function drag(e: DragEvent) {
	stop = true;

	if (nearBottom || nearTop) {
		stop = false;
		scroll();
	}

	dragged.update((dragEntry) => {
		dragEntry.measurements.mouseY = e.clientY;
		dragEntry.measurements.mouseX = e.clientX;

		nearTop = e.clientY < window.innerHeight / 10;
		nearBottom = e.clientY > window.innerHeight - window.innerHeight / 10;

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
	stop = true;

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

function scroll() {
	if (stop) return;

	const scrollY = window.scrollY;
	window.scrollTo(0, scrollY + (nearTop ? -1 : nearBottom ? 1 : 0));
	setTimeout(scroll, 40);
}

export const dragHandlers = {
	startDrag,
	drag,
	dragOver,
	dragEnd,
	setLastMove
};
