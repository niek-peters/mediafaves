import { ListType, type Entry, type List } from '$lib/types';
import { dates } from '$utils/dates';

function get(list: List, entry: Entry) {
	return `${
		entry.release_date && list.type !== ListType.Songs
			? list.type !== ListType.Books
				? dates.getDay(entry.release_date) +
				  '-' +
				  dates.getMonth(entry.release_date) +
				  '-' +
				  dates.getYear(entry.release_date)
				: entry.release_date
			: ''
	}${
		entry.release_date && list.type !== ListType.Songs && ('authors' in entry || 'artists' in entry)
			? ' - '
			: ''
	}${
		'authors' in entry
			? entry.authors.join(', ')
			: 'artists' in entry
			? entry.artists.join(', ')
			: ''
	}`;
}

export const subtext = {
	get
};
