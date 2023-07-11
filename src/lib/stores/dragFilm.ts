import { writable } from 'svelte/store';

import type { Film, DragFilm } from '$lib/types';

const initial: DragFilm = {
	film: undefined,
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

export const dragFilm = writable<DragFilm>(initial);

export function getTopLeft(main: HTMLElement) {
	if (!window) return;

	dragFilm.update((dragFilm) => {
		dragFilm.measurements.topY = window.scrollY + main.getBoundingClientRect().y;
		dragFilm.measurements.leftX = main.getBoundingClientRect().x;

		return dragFilm;
	});
}

export function startDrag(e: DragEvent, film: Film) {
	setLastMove(undefined);

	dragFilm.update((dragFilm) => {
		dragFilm.measurements.mouseY = e.clientY;
		dragFilm.measurements.mouseX = e.clientX;

		const rect = (e.target as HTMLDivElement).getBoundingClientRect();

		dragFilm.measurements.topDistance = window.scrollY + rect.y - dragFilm.measurements.mouseY;
		dragFilm.measurements.leftDistance = rect.x - dragFilm.measurements.mouseX;

		dragFilm.film = film;
		dragFilm.width = rect.width;

		const canvas = document.createElement('canvas');

		const dataTransfer = e.dataTransfer;
		if (!dataTransfer) throw new Error('Unexpected error');

		dataTransfer.setDragImage(canvas, 0, 0);

		canvas.remove();

		return dragFilm;
	});
}

export function drag(e: DragEvent) {
	dragFilm.update((dragFilm) => {
		dragFilm.measurements.mouseY = e.clientY;
		dragFilm.measurements.mouseX = e.clientX;

		return dragFilm;
	});
}

export function dragOver(index: number) {
	dragFilm.update((dragFilm) => {
		dragFilm.moveIndex = index;
		return dragFilm;
	});
}

export function dragEnd() {
	dragFilm.update((dragFilm) => {
		dragFilm.film = undefined;
		dragFilm.moveIndex = undefined;

		return dragFilm;
	});
}

export function setLastMove(index: number | undefined) {
	dragFilm.update((dragFilm) => {
		dragFilm.lastMoveIndex = index;
		return dragFilm;
	});
}
