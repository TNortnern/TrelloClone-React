import { generateId } from "../id";

export class Board {
  constructor(name, team, visibility, theme) {
    this.id = new generateId().dateId;
    this.name = name;
    this.recent = false;
    this.team = team;
    this.visibility = visibility;
    this.theme = theme
    this.content = new SingleBoard(this.name, this.id);
  }
}

// clicked on board
export class SingleBoard {
  constructor(name, parent) {
    this.id = new generateId().dateId;
    // the board should have a reference to it's parent's ID so when a user clicks it brings it to this specific board
    this.parent = parent;
    this.name = name;
    this.lanes = [];
  }
}

export class Lane {
  constructor(name) {
    this.id = new generateId().dateId;
    this.name = name;
    this.tasks = []
  }
}

export class Task {
    constructor(name, laneId) {
      this.laneId = ""
      this.name = name
      this.additions = new TaskAddition();
    }
}

export class TaskAddition {
  type;
  constructor() {
    this.id = new generateId().dateId;
  }
  setType(type) {
    this.type = type;
  }
  // setcontent of the addition if checklist, description, label etc.
  setContent(content) {
    this.content = content;
  }
}
