import Time from "./Time.js";

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

  /**
   * The function takes a string as an argument and sets the text property of the object to the string.
   * @param text - The text to be displayed.
   * @returns The object itself.
   */
  setText (text) {
    this.text = text;
    return this;
  }

  /**
   * This function sets the secondary text of the card.
   * @param text - The text to display in the notification.
   * @returns The object itself.
   */
  setSecondaryText (text) {
    this.secondaryText = text;
    return this;
  }

  /**
   * This function sets the start time of the event to the time passed in as a parameter.
   * @param time - The time to set the start time to.
   * @returns The object itself.
   */
  setStartTime (time) {
    this.start = new Time(time);
    return this;
  }

  /**
   * This function sets the end time of the event.
   * @param time - The time to set the end time to.
   * @returns The object itself.
   */
  setEndTime (time) {
    this.end = new Time(time);
    return this;
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