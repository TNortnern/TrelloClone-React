export const boardItems = [
  {
    id: 1,
    name: "Sprint 1",
    tasks: [
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 1, checklist: false, checklistItems: [], description: "", name: "Set up Github", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 1, checklist: false, checklistItems: [], description: "", name: "Push basic template to github", actions: [] },
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 1, checklist: false, checklistItems: [], description: "", name: "Set up Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 1, checklist: false, checklistItems: [], description: "", name: "Study Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] }
    ]
  },
  {
    id: 2,
    name: "Sprint 2",
    tasks: [
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 2, checklist: false, checklistItems: [], description: "", name: "Set up Github", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 2, checklist: false, checklistItems: [], description: "", name: "Push basic template to github", actions: [] },
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 2, checklist: false, checklistItems: [], description: "", name: "Set up Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
      { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 2, checklist: false, checklistItems: [], description: "", name: "Study Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] }
    ]
  },
  // {
  //   id: 3,
  //   name: "Sprint 3",
  //   tasks: [
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Set up Github", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Push basic template to github", actions: [] },
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Set up Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Study Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] }
  //   ]
  // },
  // {
  //   id: 4,
  //   name: "Sprint 4",
  //   tasks: [
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Set up Github", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Push basic template to github", actions: [] },
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Set up Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] },
  //     { id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), checklist: false, checklistItems: [], description: "", name: "Study Trello", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] }
  //   ]
  // },
  {
    id: 5,
    name: "Documentation",
    tasks: [{ id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 5, checklist: false, checklistItems: [], description: "", name: "Set up Github", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] }]
  },
  {
    id: 6,
    name: "Backlog",
    tasks: [{ id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15), laneId: 6, checklist: false, checklistItems: [], description: "", name: "Set up Github", actions: [{ type: "checklist", id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15) }] }]
  },
  {
    id: 7,
    name: "Bugs",
    tasks: []
  }
];

export const addNew = (e, newTask) => {
  e.preventDefault();
  if (!boardItems.includes(newTask)) {
    boardItems.push(newTask);
  }
};
