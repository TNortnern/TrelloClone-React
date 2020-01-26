export class generateId {
  constructor() {
    this.randomId =
      Math.random()
        .toString(36)
        .substring(2, 15) +
      Math.random()
        .toString(36)
        .substring(2, 15);

    this.dateId = new Date().getTime();
  }
}

export const randomID =
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

export const dateID = () => {
  return new Date().getTime();
};
