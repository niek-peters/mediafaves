import { writable } from "svelte/store";

export const listUid = writable<string>(crypto.randomUUID())