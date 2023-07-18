import { w as writable } from "./index2.js";
import { L as ListType, B as Breakpoints } from "./user.js";
const entries = writable([]);
function getId(entry) {
  return "imdb_id" in entry ? entry.imdb_id : "imdb_show_id" in entry ? entry.imdb_show_id : "spotify_id" in entry ? entry.spotify_id : "cover_i" in entry ? entry.cover_i : entry.rawg_id;
}
function getType(entry) {
  return "imdb_id" in entry ? ListType.Films : "imdb_show_id" in entry ? ListType.Shows : "rawg_id" in entry ? ListType.Games : "spotify_id" in entry ? ListType.Songs : ListType.Books;
}
function add(entry) {
  return new Promise((res) => {
    entries.update((entries2) => {
      res(null);
      return [...entries2, entry];
    });
  });
}
function remove(id) {
  entries.update((entries2) => entries2.filter((entry) => getId(entry) !== id));
}
function moveTo(id, index) {
  entries.update((entries2) => {
    const entry = entries2.find((entry2) => getId(entry2) === id);
    if (!entry)
      return entries2;
    const newEntry = entries2.filter((entry2) => getId(entry2) !== id);
    newEntry.splice(index, 0, entry);
    return newEntry;
  });
}
function moveToTier(id, tier) {
  entries.update((entries2) => {
    const entryIndex = entries2.findIndex((entry) => getId(entry) === id);
    if (entryIndex === -1)
      return entries2;
    entries2[entryIndex].tier = tier;
    return entries2;
  });
}
const entryHandlers = {
  getId,
  getType,
  add,
  remove,
  moveTo,
  moveToTier
};
const background = writable(null);
const windowWidth = writable();
const breakpoint = writable(null);
windowWidth.subscribe((value) => {
  breakpoint.set(getBreakpoint(value ?? 0));
});
function getBreakpoint(width) {
  if (width < 640)
    return Breakpoints.xs;
  if (width < 768)
    return Breakpoints.sm;
  if (width < 1024)
    return Breakpoints.md;
  if (width < 1280)
    return Breakpoints.lg;
  if (width < 1536)
    return Breakpoints.xl;
  return Breakpoints["2xl"];
}
export {
  breakpoint as a,
  background as b,
  entryHandlers as c,
  entries as e,
  windowWidth as w
};
