import { writable } from 'svelte/store';

import { scrollEnd } from '$utils/scrollEnd';

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
		leftDistance: 0,
		scrollY: 0
	}
};

export const dragged = writable<Dragged>(initial);

function startDrag(e: DragEvent, entry: Entry) {
	setLastMove(undefined);

	dragged.update((dragEntry) => {
		dragEntry.measurements.mouseY = e.clientY;
		dragEntry.measurements.mouseX = e.clientX;

		const rect = (e.target as HTMLDivElement).getBoundingClientRect();

		dragEntry.measurements.topDistance = window.scrollY + rect.y - dragEntry.measurements.mouseY;
		dragEntry.measurements.leftDistance = rect.x - dragEntry.measurements.mouseX;
		dragEntry.measurements.scrollY = window.scrollY;

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

let scrolling = false;
function drag(e: DragEvent) {
	dragged.update((dragEntry) => {
		dragEntry.measurements.mouseY = e.clientY;
		dragEntry.measurements.mouseX = e.clientX;

		const rect = (e.target as HTMLDivElement).getBoundingClientRect();
		console.log(
			dragEntry.measurements.topDistance,
			window.scrollY + rect.y - dragEntry.measurements.mouseY
		);

		if (scrolling) return dragEntry;

		const nearTop = e.clientY < window.innerHeight / 10;
		const nearBottom = e.clientY > window.innerHeight - window.innerHeight / 10;

		if (nearTop) {
			window.scrollTo({
				top: Math.max(window.scrollY - 50, 0),
				behavior: 'smooth'
			});
		} else if (nearBottom)
			window.scrollTo({
				top: Math.min(window.scrollY + 50, document.body.scrollHeight),
				behavior: 'smooth'
			});

		if (nearTop || nearBottom) {
			scrolling = true;
			scrollEnd().then(() => {
				scrolling = false;
			});
		}

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
	startDrag,
	drag,
	dragOver,
	dragEnd,
	setLastMove
};
