import { createSelector } from "reselect";

// export const todoListSelector=(state) => {
//     const searchText= searchTextSelector(state)

//     const todosRemaining=state.todoList.filter((todo) => {
//         return todo.name.includes(searchText)
//     })
//     return todosRemaining
// };

export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;
export const searchTextSelector = (state) => state.filters.search;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritySelector,
  searchTextSelector,
  (todoList, status, priority, searchText) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priority.length
          ? todo.name.includes(searchText) && priority.includes(todo.priority)
          : todo.name.includes(searchText);
      } else {
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed) &&
         ( priority.length ? priority.includes(todo.priority): true)
        );
      }
    });
  }
);
