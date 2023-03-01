export interface TodoProviderProps {
  children: React.ReactNode
}

export interface Todo {
  id: string
  name: string
  done: boolean
}

export type TodoActions = 'getTodos'
  | 'createTodo'
  | 'updateTodo'
  | 'deleteTodo'
  | 'clearTodos'

export type TodoPayload = Todo[] 
  | Todo 
  | string
  | boolean

export interface TodoAction {
  type: TodoActions
  payload?: TodoPayload
}

export interface TodoState {
  loading: boolean
  todos: Todo[]
}

export interface TodoContext extends TodoState {
  getTodos: () => void
  createTodo: (name: string) => Promise<void>
  updateTodo: (id: string, name: string, done: boolean) => Promise<void>
  deleteTodo: (id: string) => Promise<void>
  clearTodos: () => void
}