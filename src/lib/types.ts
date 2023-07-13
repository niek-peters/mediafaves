export type User = {
	uid: string;
	name: string;
	email: string;
};

export type FilmDetails = {
	id: number;
	title: string;
	release_date: string;
	poster_path: string;
	backdrop_path: string;
};

export type ShowDetails = {
	id: number;
	name: string;
	first_air_date: string;
	poster_path: string;
	backdrop_path: string;
};

export type GameDetails = {
	id: number;
	name: string;
	released: string;
	background_image: string;
};

export type Film = {
	imdb_id: number;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string | null;
};

export type Show = {
	imdb_id: number;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string | null;
};

export type Game = {
	rawg_id: number;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string;
};

export type Dragged = {
	entry: Entry | undefined;
	width: number | undefined;
	moveIndex: number | undefined;
	lastMoveIndex: number | undefined;
	measurements: {
		mouseY: number;
		mouseX: number;
		topDistance: number;
		leftDistance: number;
		scrollY: number;
	};
};

export type DBList = {
	id: string;
	owner_id: string;
	name: string;
	style: ListStyle;
	entries: Entry[];
};

export type List = {
	id: string;
	owner_id: string;
	name: string;
	style: ListStyle;
	type: ListType;
};

export type NewList = Omit<List, 'id'>;

export enum ListType {
	Films,
	Shows,
	Games
}

export enum ListStyle {
	Column,
	Grid
}

export type Entry = Film | Show | Game;

// When adding a new list type, add it to this array
// Create a new api route for it: /api/{slug}/search/[query]
// Also update the stores/entries getId function
export const listData = [
	{
		type: ListType.Films,
		name: 'Films',
		slug: 'films',
		textColor: 'text-cyan-500',
		bgColor: 'bg-cyan-500'
	},
	{
		type: ListType.Shows,
		name: 'Shows',
		slug: 'shows',
		textColor: 'text-violet-500',
		bgColor: 'bg-violet-500'
	},
	{
		type: ListType.Games,
		name: 'Games',
		slug: 'games',
		textColor: 'text-emerald-500',
		bgColor: 'bg-emerald-500'
	}
];
