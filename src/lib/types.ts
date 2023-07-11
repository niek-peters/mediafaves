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

export type Film = {
	imdb_id: number;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string | null;
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

export type DBList = {
	id: string;
	owner_id: string;
	name: string;
	type: ListType;
	style: ListStyle;
	films: Film[];
};

export type List = Omit<DBList, 'films'>;

export type NewList = Omit<List, 'id'>;

export enum ListType {
	Films,
	Games
}

export enum ListStyle {
	Column,
	Grid
}
