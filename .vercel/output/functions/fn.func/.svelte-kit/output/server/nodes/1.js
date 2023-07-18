

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b5fb8386.js","_app/immutable/chunks/scheduler.b8a490f1.js","_app/immutable/chunks/index.6eacc56a.js","_app/immutable/chunks/stores.67625e07.js","_app/immutable/chunks/singletons.df133e99.js"];
export const stylesheets = [];
export const fonts = [];
