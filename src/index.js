import { convert as toSsa, parse as fromSsa } from "./format/ssa.js";
import { convert as toAss, parse as fromAss } from "./format/ass.js";
import { convert as toSrt, parse as fromSrt } from "./format/srt.js";
import Time from "./managers/Time.js";
import Dialogue from "./managers/Dialogue.js";

function from (arr) {
  if (Array.isArray(arr)) {
    return arr.map(data => new Dialogue(data));
  }
}

export {
  Time,
  Dialogue,
  from,
  toSsa,
  toAss,
  toSrt,
  fromSsa,
  fromAss,
  fromSrt,
}