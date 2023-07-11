import { writable } from 'svelte/store';
import type { Film } from './films';

export enum ListType {
	Films,
	Games
}

export enum ListStyle {
	Column,
	Grid
}

export type List = {
	id: string;
	owner_id: string;
	name: string;
	type: ListType;
	style: ListStyle;
};

export type NewList = Omit<List, 'id'>;

export type DBList = {
	id: string;
	owner_id: string;
	name: string;
	type: ListType;
	style: ListStyle;
	films: Film[];
};

export const lists = writable<List[]>([]);

function add(list: List) {
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

export const listStore = {
	add,
	remove,
	updateName,
	updateStyle
};
