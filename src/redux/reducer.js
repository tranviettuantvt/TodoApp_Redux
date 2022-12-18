import filtersReducer from "../components/Filters/FilterSlice"
import TodoListReducer from "../components/TodoList/TodoListSlice"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: TodoListReducer
})

// thay the cho
// const rootReducer = (state={}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: TodoListReducer(state.todoList, action)
//     }
// }

export default rootReducer