const initialState = {
  listTodo: [
    { id: 1, name: "Learn React", piority: "High", completed: true },
    { id: 2, name: "Learn PHP", piority: "Medium", completed: true },
  ],
};

const rootReducer = (state = initialState, action) => {
  console.log({state})
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        listTodo: [
          ...state.listTodo,
          action.payload
        ]
      }
    case "checkedTodo":
      return state.todoList.listTodo.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default rootReducer;
