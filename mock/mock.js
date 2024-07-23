module.exports = {
  "/getAll": [
    {
      id: 1,
      toDo: "testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      isCompleted: false,
    },
    { id: 2, toDo: "test2", isCompleted: true },
    { id: 3, toDo: "test3", isCompleted: false },
    { id: 4, toDo: "test4", isCompleted: false },
  ],
  "post /delete": {
    result: "ok",
  },
  "post /update": { id: 4, toDo: "test4", isCompleted: false },
};
