export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["empty_image.png","favicon.png","open_library.png","rawg.png","spotify.png","tmdb.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.489d8aa0.js","app":"_app/immutable/entry/app.74287f3e.js","imports":["_app/immutable/entry/start.489d8aa0.js","_app/immutable/chunks/scheduler.b8a490f1.js","_app/immutable/chunks/singletons.df133e99.js","_app/immutable/entry/app.74287f3e.js","_app/immutable/chunks/preload-helper.cf010ec4.js","_app/immutable/chunks/scheduler.b8a490f1.js","_app/immutable/chunks/index.6eacc56a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			{
				id: "/api/books/search/[query]",
				pattern: /^\/api\/books\/search\/([^/]+?)\/?$/,
				params: [{"name":"query","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/books/search/_query_/_server.ts.js'))
			},
			{
				id: "/api/films/search/[query]",
				pattern: /^\/api\/films\/search\/([^/]+?)\/?$/,
				params: [{"name":"query","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/films/search/_query_/_server.ts.js'))
			},
			{
				id: "/api/games/search/[query]",
				pattern: /^\/api\/games\/search\/([^/]+?)\/?$/,
				params: [{"name":"query","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/games/search/_query_/_server.ts.js'))
			},
			{
				id: "/api/shows/search/[query]",
				pattern: /^\/api\/shows\/search\/([^/]+?)\/?$/,
				params: [{"name":"query","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/shows/search/_query_/_server.ts.js'))
			},
			{
				id: "/api/songs/search/[query]",
				pattern: /^\/api\/songs\/search\/([^/]+?)\/?$/,
				params: [{"name":"query","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/songs/search/_query_/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
