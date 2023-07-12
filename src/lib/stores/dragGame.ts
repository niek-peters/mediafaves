import { writable } from 'svelte/store';

import type { Game, DragGame } from '$lib/types';

const initial: DragGame = {
	game: undefined,
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

export const dragGame = writable<DragGame>(initial);

export function getTopLeft(main: HTMLElement) {
	if (!window) return;

	dragGame.update((dragGame) => {
		dragGame.measurements.topY = window.scrollY + main.getBoundingClientRect().y;
		dragGame.measurements.leftX = main.getBoundingClientRect().x;

		return dragGame;
	});
}

export function startDrag(e: DragEvent, game: Game) {
	setLastMove(undefined);

	dragGame.update((dragGame) => {
		dragGame.measurements.mouseY = e.clientY;
		dragGame.measurements.mouseX = e.clientX;

		const rect = (e.target as HTMLDivElement).getBoundingClientRect();

		dragGame.measurements.topDistance = window.scrollY + rect.y - dragGame.measurements.mouseY;
		dragGame.measurements.leftDistance = rect.x - dragGame.measurements.mouseX;

		dragGame.game = game;
		dragGame.width = rect.width;

		const canvas = document.createElement('canvas');

		const dataTransfer = e.dataTransfer;
		if (!dataTransfer) throw new Error('Unexpected error');

		dataTransfer.setDragImage(canvas, 0, 0);

		canvas.remove();

		return dragGame;
	});
}

export function drag(e: DragEvent) {
	dragGame.update((dragGame) => {
		dragGame.measurements.mouseY = e.clientY;
		dragGame.measurements.mouseX = e.clientX;

		return dragGame;
	});
}

export function dragOver(index: number) {
	dragGame.update((dragGame) => {
		dragGame.moveIndex = index;
		return dragGame;
	});
}

export function dragEnd() {
	dragGame.update((dragGame) => {
		dragGame.game = undefined;
		dragGame.moveIndex = undefined;

		return dragGame;
	});
}

export function setLastMove(index: number | undefined) {
	dragGame.update((dragGame) => {
		dragGame.lastMoveIndex = index;
		return dragGame;
	});
}
