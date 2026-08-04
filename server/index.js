globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/map-gangnam-GZNHP2V0.jpg": {
		"type": "image/jpeg",
		"etag": "\"bbc8-+09pMzkZH06yWozWK/BIFX0XH7o\"",
		"mtime": "2026-08-03T04:52:28.539Z",
		"size": 48072,
		"path": "../public/assets/map-gangnam-GZNHP2V0.jpg"
	},
	"/assets/index-BRigp8p6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54dd8-SQq5eyJKgtAkBSE+5exqVDIFR90\"",
		"mtime": "2026-08-03T04:52:28.536Z",
		"size": 347608,
		"path": "../public/assets/index-BRigp8p6.js"
	},
	"/assets/map-gangnam-pB8UKu--.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f1f0-4QEzolP5s4IgN6xsJQrv/vDuF5k\"",
		"mtime": "2026-08-03T04:52:28.537Z",
		"size": 61936,
		"path": "../public/assets/map-gangnam-pB8UKu--.js"
	},
	"/assets/routes-fix54ab34.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1753a-fRi8li/PFda/3IeydPNQ8Icoxus\"",
		"mtime": "2026-08-04T01:04:02.000Z",
		"size": 95546,
		"path": "../public/assets/routes-fix54ab34.js"
	},
	"/assets/services-DANwIzbe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1234e-YSpzBl+bvAJGRPJlWukgr6MpcFc\"",
		"mtime": "2026-08-03T04:52:28.537Z",
		"size": 74574,
		"path": "../public/assets/services-DANwIzbe.js"
	},
	"/assets/styles-CUOL7DAh.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16d9c-IQKTh646PhxjnOTEmNJpAkGuW+4\"",
		"mtime": "2026-08-03T04:52:28.546Z",
		"size": 93596,
		"path": "../public/assets/styles-CUOL7DAh.css"
	},
	"/og.png": {
		"type": "image/png",
		"etag": "\"1a740b-Te9dYaiwwQaN3MylyhTSv6Im15Q\"",
		"mtime": "2026-08-03T04:52:29.129Z",
		"size": 1733643,
		"path": "../public/og.png"
	},
	"/assets/hero-community-v2-5XDIHCKZ.png": {
		"type": "image/png",
		"etag": "\"1e6722-V2/10higtDF7j8T23fr7VIFv3Ik\"",
		"mtime": "2026-08-03T04:52:28.537Z",
		"size": 1992482,
		"path": "../public/assets/hero-community-v2-5XDIHCKZ.png"
	},
	"/assets/program-clay-1-smart-house-DFcxZwBN.png": {
		"type": "image/png",
		"etag": "\"1eec80-UUMUe3WZXebnezGQ0/KUbK3Duv4\"",
		"mtime": "2026-08-03T04:52:28.539Z",
		"size": 2026624,
		"path": "../public/assets/program-clay-1-smart-house-DFcxZwBN.png"
	},
	"/assets/program-clay-7-ai-B7nWsB-U.png": {
		"type": "image/png",
		"etag": "\"1daf5e-6WPfcsLhyA7fA5PqINbkwzdkBN4\"",
		"mtime": "2026-08-03T04:52:28.546Z",
		"size": 1945438,
		"path": "../public/assets/program-clay-7-ai-B7nWsB-U.png"
	},
	"/assets/program-clay-2-health-Cmwvsq6U.png": {
		"type": "image/png",
		"etag": "\"21adfd-aYnkeJ2OU5e1f5PjFMtr4eL7EFw\"",
		"mtime": "2026-08-03T04:52:28.540Z",
		"size": 2207229,
		"path": "../public/assets/program-clay-2-health-Cmwvsq6U.png"
	},
	"/assets/program-clay-4-hospice-c-jOUDA8.png": {
		"type": "image/png",
		"etag": "\"219041-GQE8GdckQVFN7LnVdc3GYrDkAHY\"",
		"mtime": "2026-08-03T04:52:28.543Z",
		"size": 2199617,
		"path": "../public/assets/program-clay-4-hospice-c-jOUDA8.png"
	},
	"/assets/program-clay-5-exercise-DKYNq8wh.png": {
		"type": "image/png",
		"etag": "\"2141ab-4SO2FY8GJj3GsDyeF8EH88ERZyg\"",
		"mtime": "2026-08-03T04:52:28.544Z",
		"size": 2179499,
		"path": "../public/assets/program-clay-5-exercise-DKYNq8wh.png"
	},
	"/assets/program-clay-3-discharge-Cfo5aI_g.png": {
		"type": "image/png",
		"etag": "\"228eba-XXKsJ5ssd5lGWoenmQhPKt3NS+Q\"",
		"mtime": "2026-08-03T04:52:28.542Z",
		"size": 2264762,
		"path": "../public/assets/program-clay-3-discharge-Cfo5aI_g.png"
	},
	"/assets/program-clay-6-visit-BP8nVggL.png": {
		"type": "image/png",
		"etag": "\"213c26-a6Luky6BIABJV0GZzR2k5+wfPYE\"",
		"mtime": "2026-08-03T04:52:28.545Z",
		"size": 2178086,
		"path": "../public/assets/program-clay-6-visit-BP8nVggL.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_N48TAc = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_N48TAc
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
