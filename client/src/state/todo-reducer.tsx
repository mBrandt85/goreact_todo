import { Todo, TodoAction, TodoState } from "./todo-types"

export const TodoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case 'getTodos':
      return {
        ...state,
        loading: false,
        todos: action.payload as Todo[]
      }

    case 'createTodo':
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload as Todo
        ]
      }

    case 'updateTodo':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === (action.payload as Todo).id
            ? action.payload as Todo
            : todo
        )
      }

    case 'deleteTodo':
      return {
        ...state,
        todos: state.todos.filter(({ id }) => 
          id !== action.payload as string
        )
      }

    case 'clearTodos':
      return {
        ...state,
        todos: []
      }

    default:
      return state
  }
}