//Soheyl Rahgozar - Assignment4
const { produce } = require("immer");

const currentTime = `${new Date().getFullYear()}/${
  new Date().getMonth() + 1
}/${new Date().getDate()}`;

const toDoListsData = [
  {
    id: 1364953877,
    title: "Self Study",
    description: "react hooks",
    compeletedStatus: false,
    created: currentTime,
  },
  {
    id: 5067882264,
    title: "Quiz",
    description: "mid-term",
    compeletedStatus: true,
    created: "2022/03/05",
  },
  {
    id: 5033976682,
    title: "Exercise",
    description: "basketball",
    compeletedStatus: false,
    created: currentTime,
  },
  {
    id: 2216793200,
    title: "Self Care",
    description: "massage",
    compeletedStatus: false,
    created: "2022/03/07",
  },
  {
    id: 3977600530,
    title: "Family time",
    description: "call mom",
    compeletedStatus: true,
    created: "2022/03/08",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "add-new-tasks": {
      const newState = produce(state, (draft) => {
        draft.push(action.payload);
        return draft;
      });
      return newState;
    }

    case "mark-as-completed-byIndex": {
      const newState = produce(state, (draft) => {
        const selectedTask = action.payload.index;
        draft[selectedTask].compeletedStatus = true;
        return draft;
      });
      return newState;
    }

    case "swap-indexA-indexB": {
      const newState = produce(state, (draft) => {
        const { indexA, indexB } = action.payload;
        const a = draft[indexA];
        const b = draft[indexB];
        draft[indexA] = b;
        draft[indexB] = a;
        return draft;
      });
      return newState;
    }

    case "delete-task-byID-orAll": {
      const newState = produce(state, (draft) => {
        draft = draft.filter((task) => task.id !== action.payload.id);
        if (action.payload.deleteAll) draft.length = 0; //delete everything
        return draft;
      });
      return newState;
    }

    case "duplicate-task_byTitle": {
      const newState = produce(state, (draft) => {
        draft.push(
          toDoListsData.find((obj) => obj.title === action.payload.title)
        );
        return draft;
      });
      return newState;
    }

    default:
      throw `you provided an invalid action ${action}`;
  }
}

const newTaskList1 = reducer(toDoListsData, {
  type: "add-new-tasks",
  payload: {
    id: 3897662541,
    title: "workout",
    description: "going gym",
    compeletedStatus: true,
    created: currentTime,
  },
});

const newTaskList2 = reducer(toDoListsData, {
  type: "swap-indexA-indexB",
  payload: {
    indexA: 1,
    indexB: 3,
  },
});

const newTaskList3 = reducer(toDoListsData, {
  type: "mark-as-completed-byIndex",
  payload: {
    index: 0,
  },
});

const newTaskList4 = reducer(toDoListsData, {
  type: "delete-task-byID-orAll", //delete by ID
  payload: {
    id: 3977600530,
  },
});

const newTaskList5 = reducer(toDoListsData, {
  type: "delete-task-byID-orAll", //delete All
  payload: {
    deleteAll: true,
  },
});

const newTaskList6 = reducer(toDoListsData, {
  type: "duplicate-task_byTitle",
  payload: {
    title: "Family time",
  },
});

// console.log(newTaskList1);
// console.log(newTaskList2);
// console.log(newTaskList3);
// console.log(newTaskList4);
// console.log(newTaskList5);
// console.log(newTaskList6);
