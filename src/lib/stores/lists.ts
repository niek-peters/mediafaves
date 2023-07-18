import { writable } from 'svelte/store';

import { ListType, type ListStyle, listData, type DBList } from '$lib/types';

export const lists = writable<DBList[]>([]);

function getSnippet(type: ListType) {
	return listData[type].slug;
}

function add(list: DBList) {
	lists.update((lists) => [...lists, list]);
}

function remove(id: string) {
	lists.update((lists) => lists.filter((list) => list.id !== id));
}

function updateName(id: string, name: string) {
	lists.update((lists) => lists.map((list) => (list.id === id ? { ...list, name } : list)));
}

function updateStyle(id: string, style: ListStyle) {
	lists.update((lists) => lists.map((list) => (list.id === id ? { ...list, style } : list)));
}

function addTier(id: string, tierName: string) {
	lists.update((lists) =>
		lists.map((list) =>
			list.id === id ? { ...list, tiers: [...(list.tiers || []), tierName] } : list
		)
	);
}

function updateTier(id: string, tierName: string, newName: string) {
	lists.update((lists) =>
		lists.map((list) =>
			list.id === id
				? {
						...list,
						tiers: list.tiers?.map((tier) => (tier === tierName ? newName : tier))
				  }
				: list
		)
	);
}

function removeTier(id: string, tierName: string) {
	lists.update((lists) =>
		lists.map((list) =>
			list.id === id ? { ...list, tiers: list.tiers?.filter((tier) => tier !== tierName) } : list
		)
	);
}

export const listHandlers = {
	getSnippet,
	add,
	remove,
	updateName,
	updateStyle,
	addTier,
	updateTier,
	removeTier
};
