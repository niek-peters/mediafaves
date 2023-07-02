// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	type FilmDetails = {
		id: number;
		title: string;
		release_date: string;
		poster_path: string;
	};

	type Film = {
		id: number;
		title: string;
		release_date: string;
		image_url: string;
	};

	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
