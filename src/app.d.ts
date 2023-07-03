// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { ListStyle } from '$lib/stores/filmLists';

declare global {
	type FilmDetails = {
		id: number;
		title: string;
		release_date: string;
		poster_path: string;
		backdrop_path: string;
	};

	type Film = {
		id: number;
		title: string;
		release_date: string;
		poster_url: string;
		backdrop_url: string;
	};

	// enum ListStyle {
	// 	Vertical,
	// 	Grid2,
	// 	Grid3
	// }

	type FilmList = {
		id: number;
		name: string;
		films: Film[];
		style: ListStyle;
	};

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
