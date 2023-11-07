export type User = {
	uid: string;
	name: string;
	email: string;
};

export type ResultData = {
	count: number;
	limit: number;
	offset: number;
};

export type FilmDetails = {
	id: number;
	title: string;
	release_date?: string;
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

export type SongDetails = {
	id: string;
	name: string;
	album: {
		release_date: string;
		images: {
			url: string;
			height: number | null;
		}[];
	};
	artists: {
		name: string;
	}[];
};

export type BookDetails = {
	cover_i: string;
	title: string;
	first_publish_year: string;
	author_name: string[];
};

export type Film = {
	imdb_id: number;
	title: string;
	release_date: string | null;
	poster_url: string;
	backdrop_url: string | null;
};

export type Show = {
	imdb_show_id: number;
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

export type Song = {
	spotify_id: string;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string;
	artists: string[];
};

export type Book = {
	cover_i: string;
	title: string;
	release_date: string;
	poster_url: string;
	backdrop_url: string;
	authors: string[];
};

export type Dragged = {
	entry: Entry | undefined;
	width: number | undefined;
	moveIndex: number | undefined;
	moveTier: string | undefined;
	lastMoveIndex: number | undefined;
	lastMoveTier: string | undefined;
	measurements: {
		mouseY: number;
		mouseX: number;
		topDistance: number;
		leftDistance: number;
	};
	fromSearch: boolean;
};

export type DBList = {
	id: string;
	owner_id: string;
	index: number;
	name: string;
	style: ListStyle;
	type: ListType;
	rankType: RankType;
	entries: Entry[];
	tiers?: string[];
};

export type List = Omit<DBList, 'entries' | 'index'>;

export type NewList = Omit<List, 'id'>;

export enum ListStyle {
	Column,
	Grid
}

export enum ListType {
	Films,
	Shows,
	Games,
	Songs,
	Books
}

export enum RankType {
	Ranks,
	Tiers
}

export enum Breakpoints {
	xs = 0,
	sm = 640,
	md = 768,
	lg = 1024,
	xl = 1280,
	'2xl' = 1536
}

export enum Popups {
	Lists,
	New,
	Search
}

export type Entry = (Film | Show | Game | Song | Book) & {
	uid: string;
	tier?: string;
};

export type ListData = {
	type: ListType;
	name: string;
	slug: string;
	textColor: string;
	bgColor: string;
};

export type RankData = {
	type: RankType;
	name: string;
	slug: string;
	filter: string;
};

// When adding a new list type, add it to this array
// Create a new api route for it: /api/{slug}/search/[query]
// Also update the stores/entries getId function
export const listData: ListData[] = [
	{
		type: ListType.Films,
		name: 'Films',
		slug: 'films',
		textColor: 'text-violet-500',
		bgColor: 'bg-violet-500'
	},
	{
		type: ListType.Shows,
		name: 'Shows',
		slug: 'shows',
		textColor: 'text-cyan-500',
		bgColor: 'bg-cyan-500'
	},
	{
		type: ListType.Games,
		name: 'Games',
		slug: 'games',
		textColor: 'text-emerald-500',
		bgColor: 'bg-emerald-500'
	},
	{
		type: ListType.Songs,
		name: 'Songs',
		slug: 'songs',
		textColor: 'text-orange-500',
		bgColor: 'bg-orange-500'
	},
	{
		type: ListType.Books,
		name: 'Books',
		slug: 'books',
		textColor: 'text-rose-500',
		bgColor: 'bg-rose-500'
	}
];

export const rankData: RankData[] = [
	{
		type: RankType.Ranks,
		name: 'Ranking',
		slug: 'ranking',
		filter: ''
	},
	{
		type: RankType.Tiers,
		name: 'Tier',
		slug: 'tierlist',
		filter: 'hue-rotate-15'
	}
];

export type SpotifyToken = {
	access_token: string;
	token_type: string;
	expires_in: number;
};
