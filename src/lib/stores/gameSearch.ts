import { get, writable } from 'svelte/store';

import type { Game } from '$lib/types';

const searchValue = writable<string>('');
const searchResults = writable<Game[]>([]);

async function search() {
	const res = await fetch(`/api/games/search/${get(searchValue)}`);
	const data = await res.json();

	searchResults.set(Array.isArray(data) ? data : []);
}

function filter(games: Game[]) {
	searchResults.update((searchResults: Game[]) => {
		return searchResults.filter((searchedGame: Game) => {
			return !games.find((game: Game) => {
				return game.title === searchedGame.title;
			});
		});
	});
}

export const gameSearch = {
	searchValue,
	searchResults,
	search,
	filter
};
