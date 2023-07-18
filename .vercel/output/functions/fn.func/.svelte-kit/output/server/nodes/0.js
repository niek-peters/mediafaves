import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.cfe68c80.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.b8a490f1.js","_app/immutable/chunks/index.6eacc56a.js","_app/immutable/chunks/stores.67625e07.js","_app/immutable/chunks/singletons.df133e99.js","_app/immutable/chunks/user.2e12a8a7.js","_app/immutable/chunks/windowWidth.bd7fe143.js"];
export const stylesheets = ["_app/immutable/assets/0.daddd64e.css","_app/immutable/assets/user.95b16411.css"];
export const fonts = [];
