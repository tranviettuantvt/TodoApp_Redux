const initState = [
  { id: 1, name: "Learn Java", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "Hight" },
  { id: 3, name: "Learn React", completed: false, priority: "Low" },
];

const TodoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
      
    case "todoList/toggleStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default TodoListReducer;
