import Time from "./Time";

export default class Dialogue {
  constructor (data = {}) {
    let text = data.text;

    if (typeof data === "string") text = data;

    let start = data.start || data.startTime;
    let end = data.end || data.endTime;
    let secondaryText = data.secondaryText;

    this.start = new Time(start);
    this.end = new Time(end);
    this.text = text || "";
    this.secondaryText = secondaryText || "";
  }

  static createEmpty () {
    return new Dialogue();
  }

  clone () {
    return new Dialogue(this);
  }

  toJSON () {
    return {
      text: this.text || "",
      secondaryText: this.secondaryText || "",
      start: this.start.valueOf(),
      end: this.end.valueOf()
    }
  }

  toString () {
    return `[Dialogue]`;
  }

  valueOf () {
    return this.toJSON();
  }
}

export {
  Dialogue
}