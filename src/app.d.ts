// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { ListStyle } from '$lib/stores/filmLists';

declare global {
	type User = {
		id: string;
		name: string;
		email: string;
	};

	type FilmDetails = {
		id: number;
		title: string;
		release_date: string;
		poster_path: string;
		backdrop_path: string | null;
	};

	type Film = {
		imdb_id: number;
		title: string;
		release_date: string;
		poster_url: string;
		backdrop_url: string | null;
	};

	// enum ListStyle {
	// 	Vertical,
	// 	Grid
	// }

	type FilmList = {
		id: string;
		owner_id: string;
		name: string;
		films: Film[];
		style: ListStyle;
	};

	type NewFilmList = Omit<FilmList, 'id'>;

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
