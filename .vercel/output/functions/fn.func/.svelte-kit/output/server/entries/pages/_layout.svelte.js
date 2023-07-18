import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute, d as each, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { F as Fa, l as listData, u as user, a as lists } from "../../chunks/user.js";
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "firebase/firestore";
import "../../chunks/firebase.client.js";
import "firebase/auth";
import { e as entries, w as windowWidth, b as background } from "../../chunks/windowWidth.js";
const app = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".dropdown.svelte-1spg7cw{background-color:rgb(46, 46, 50)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let parentWidth;
  let childWidth;
  let overflow;
  let navWidth;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { lists: lists2 = [] } = $$props;
  let { user: user2 } = $$props;
  let dropDownOpen = false;
  let navEl;
  if ($$props.lists === void 0 && $$bindings.lists && lists2 !== void 0)
    $$bindings.lists(lists2);
  if ($$props.user === void 0 && $$bindings.user && user2 !== void 0)
    $$bindings.user(user2);
  $$result.css.add(css);
  parentWidth = 0;
  childWidth = 0;
  overflow = false;
  {
    if (parentWidth && childWidth) {
      overflow = parentWidth < childWidth;
    }
  }
  navWidth = 0;
  $$unsubscribe_page();
  return `<header class="flex items-center justify-center w-full h-16 bg-zinc-800 py-3 shadow-2xl"><div class="flex items-center gap-8 w-11/12 xl:w-4/5"><div class="flex items-center gap-12 w-2/3 2xl:w-3/4 flex-grow-0"><a href="/" class="text-4xl font-bold flex" data-svelte-h="svelte-15hexit"><span class="text-cyan-500">Media</span><span class="text-emerald-500">Faves</span></a> ${lists2.length ? ` <div class="h-9 flex-grow flex whitespace-nowrap rounded-md"><div class="${"z-10 relative w-full flex transition-[background-color,height] gap-2 rounded-md mr-4 " + escape(
    "",
    true
  ) + " svelte-1spg7cw"}" style="${"height: " + escape(2.25, true) + "rem;"}"${add_attribute("this", navEl, 0)}>${`<div class="absolute flex gap-2 overflow-hidden h-9 border border-transparent" style="${"width: " + escape(overflow ? `${navWidth}px` : "100%", true)}"><div class="relative flex items-center gap-2 px-4 w-fit h-9">${each(lists2, (list, index) => {
    return `${index !== 0 ? `<span class="h-6 w-px shrink-0 bg-zinc-600"></span>` : ``} <div class="relative flex flex-col"><a href="${"/" + escape(list.id, true)}" class="${"font-semibold text-lg h-fit " + escape(listData[list.type].textColor, true) + " hover:opacity-75 transition svelte-1spg7cw"}">${escape(list.name)}</a> <span class="${"absolute left-0 bottom-0 h-px transition-[width] " + escape(
      $page.params.id === list.id ? `${listData[list.type].bgColor} w-full` : "bg-transparent w-0",
      true
    ) + " svelte-1spg7cw"}"></span> </div>`;
  })}</div> ${overflow ? `<span class="absolute z-20 -right-4 w-32 h-9 bg-gradient-to-r from-transparent to-zinc-800 pointer-events-none"></span>` : ``}</div>`}</div> ${overflow && !dropDownOpen ? `<button class="z-10 flex gap-2 overflow-hidden shrink-0 rounded-md dropdown svelte-1spg7cw"><div class="flex items-center gap-2 px-4 py-1 h-9 hover:bg-zinc-700/20 text-sky-500 transition">${validate_component(Fa, "Fa").$$render(
    $$result,
    {
      icon: faCaretDown,
      class: "flex text-xl transition rotate-90"
    },
    {},
    {}
  )} <p class="text-lg font-semibold" data-svelte-h="svelte-q67c29">Show all</p></div></button>` : ``}</div>` : ``}</div> <div class="flex w-1/3 2xl:w-1/4 gap-4"> <div class="relative w-1/2 flex"><div class="absolute top-0 left-0 w-full flex transition-[height] z-10" style="${"height: " + escape(2.25, true) + "rem"}">${` <button class="dropdown flex w-full h-full text-sky-500 rounded-md border border-transparent overflow-hidden svelte-1spg7cw"><div class="flex gap-2 w-full h-fit px-4 py-1 items-center hover:bg-zinc-700/20 transition">${validate_component(Fa, "Fa").$$render($$result, { icon: faPlus }, {}, {})} <p class="text-lg font-semibold" data-svelte-h="svelte-c31xox">New list</p></div></button>`}</div></div> ${user2 === null ? `<button class="w-1/2 h-9 flex items-center gap-2 px-4 py-1 text-emerald-500 dropdown hover:bg-zinc-700/20 transition rounded-md svelte-1spg7cw">${validate_component(Fa, "Fa").$$render($$result, { icon: faGoogle }, {}, {})} <p class="text-lg font-semibold" data-svelte-h="svelte-11k8kok">Log in</p></button>` : `<button class="w-1/2 flex items-center gap-2 px-4 py-1 text-rose-500 bg-zinc-700/30 hover:bg-zinc-700/50 transition rounded-md">${validate_component(Fa, "Fa").$$render($$result, { icon: faGoogle }, {}, {})} <p class="text-lg font-semibold" data-svelte-h="svelte-1qve2gd">Log out</p></button>`}</div></div> </header>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex flex-col gap-8 items-center w-full mt-auto py-8 bg-zinc-900" data-svelte-h="svelte-l56fxg"><div class="flex w-11/12 xl:w-4/5 justify-between items-center"><a draggable="false" href="https://developer.themoviedb.org/docs" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/tmdb.svg" alt="TMDB" class="h-14"> <h4 class="text-lg xl:text-xl font-semibold">Film/show search and images</h4></a> <a draggable="false" href="https://rawg.io/apidocs" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/rawg.png" alt="RAWG" class="h-14 w-32 object-cover"> <h4 class="text-lg xl:text-xl font-semibold">Game search and images</h4></a> <a draggable="false" href="https://developer.spotify.com/" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/spotify.png" alt="Spotify" class="h-14"> <h4 class="text-lg xl:text-xl font-semibold">Song search and album covers</h4></a> <a draggable="false" href="https://openlibrary.org/" target="_blank" class="flex flex-col flex-grow flex-shrink basis-0 items-center gap-4"><img src="/open_library.png" alt="OpenLibrary" class="h-14"> <h4 class="text-lg xl:text-xl font-semibold">Book search and covers</h4></a></div> <p class="xl:text-lg">This product uses the TMDB, RAWG, Spotify and OpenLibrary APIs but is not endorsed or certified
		by any of these organizations</p> <span class="w-11/12 xl:w-4/5 h-px bg-zinc-600"></span> <div class="flex flex-grow flex-shrink basis-0 items-center gap-4"><h4 class="text-sm xl:text-lg font-semibold">MediaFaves is a non-profit site made by Niek Peters</h4> <p>-</p> <p class="text-sm xl:text-lg text-zinc-300">Copyright © Niek Peters 2023</p></div></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_entries;
  let $$unsubscribe_page;
  let $user, $$unsubscribe_user;
  let $$unsubscribe_windowWidth;
  let $$unsubscribe_background;
  let $lists, $$unsubscribe_lists;
  $$unsubscribe_entries = subscribe(entries, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_windowWidth = subscribe(windowWidth, (value) => value);
  $$unsubscribe_background = subscribe(background, (value) => value);
  $$unsubscribe_lists = subscribe(lists, (value) => $lists = value);
  $$unsubscribe_entries();
  $$unsubscribe_page();
  $$unsubscribe_user();
  $$unsubscribe_windowWidth();
  $$unsubscribe_background();
  $$unsubscribe_lists();
  return ` <div class="flex flex-col w-screen min-h-[110vh] bg-gradient-to-tr from-zinc-800 to-zinc-700 text-zinc-200"><div class="fixed w-screen h-screen filter brightness-[0.3]"></div> <div class="relative flex flex-col items-center gap-6 w-full min-h-[110vh]">${validate_component(Header, "Header").$$render($$result, { lists: $lists, user: $user }, {}, {})} <main class="relative flex justify-center w-11/12 xl:w-4/5 gap-8">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Layout as default
};
