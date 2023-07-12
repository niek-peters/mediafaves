export type AuthStore = {
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

export type Game = {
	rawg_id: number;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string;
};

export type DragFilm = {
	film: Film | undefined;
	width: number | undefined;
	moveIndex: number | undefined;
	lastMoveIndex: number | undefined;
	measurements: {
		mouseY: number;
		mouseX: number;
		topY: number;
		leftX: number;
		topDistance: number;
		leftDistance: number;
	};
};

export type DragGame = {
	game: Game | undefined;
	width: number | undefined;
	moveIndex: number | undefined;
	lastMoveIndex: number | undefined;
	measurements: {
		mouseY: number;
		mouseX: number;
		topY: number;
		leftX: number;
		topDistance: number;
		leftDistance: number;
	};
};

export type FilmList = {
	id: string;
	owner_id: string;
	name: string;
	style: ListStyle;
	films: Film[];
};

export type GameList = {
	id: string;
	owner_id: string;
	name: string;
	style: ListStyle;
	games: Game[];
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
	Games
}

export enum ListStyle {
	Column,
	Grid
}
