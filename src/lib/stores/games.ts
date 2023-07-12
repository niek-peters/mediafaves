import { writable } from 'svelte/store';

import type { Game } from '$lib/types';

export const games = writable<Game[]>([]);

function add(game: Game) {
	return new Promise((res) => {
		games.update((games) => {
			res(null);
			return [...games, game];
		});
	});
}

function remove(rawg_id: number) {
	games.update((game) => game.filter((game) => game.rawg_id !== rawg_id));
}

function moveTo(rawg_id: number, index: number) {
	games.update((games) => {
		const game = games.find((game) => game.rawg_id === rawg_id);
		if (!game) return games;

		const newGames = games.filter((game) => game.rawg_id !== rawg_id);
		newGames.splice(index, 0, game);

		return newGames;
	});
}

export const gameStore = {
	add,
	remove,
	moveTo
};
