import { get, writable } from 'svelte/store';
import { filmLists } from './filmLists';

type DragFilm = {
	film: Film | undefined;
	width: number | undefined;
	moveIndex: number | undefined;
	measurements: {
		mouseY: number;
		mouseX: number;
		topY: number;
		leftX: number;
		topDistance: number;
		leftDistance: number;
	};
	fromSearch: boolean;
};

const initial: DragFilm = {
	film: undefined,
	width: undefined,
	moveIndex: undefined,
	measurements: {
		mouseY: 0,
		mouseX: 0,
		topY: 0,
		leftX: 0,
		topDistance: 0,
		leftDistance: 0
	},
	fromSearch: false
};

export const dragFilm = writable<DragFilm>(initial);

export function startDrag(e: DragEvent, film: Film, callback?: () => void) {
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

		if (callback) callback();

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
