import { createContext, useContext, useReducer } from 'react'

import { TodoContext, TodoProviderProps } from './todo-types'
import { TodoReducer } from './todo-reducer'
import { addTodo, editTodo, fetchTodos, removeTodo } from './todo-data'

const TodoCtx = createContext({} as TodoContext)

export default function TodoProvider({ children }: TodoProviderProps) {
  const [state, dispatch] = useReducer(TodoReducer, {
    loading: true,
    todos: []
  })

  const getTodos = async () => {
    const { error, todos } = await fetchTodos()

    if (error) {
      console.error(error)
      return
    }

    dispatch({ 
      type: 'getTodos',
      payload: todos
    })
  }

  const createTodo = async (name: string) => {
    const { error, todo } = await addTodo(name)
    
    if (error) {
      console.error(error)
      return
    }
    
    dispatch({ 
      type: 'createTodo',
      payload: todo
    })
  }

  const updateTodo = async (id: string, name: string, done: boolean) => {
    const { error, todo } = await editTodo(id, name, done)

    if (error) {
      console.error(error)
      return
    }
    
    dispatch({ 
      type: 'updateTodo',
      payload: todo
    })
  }

  const deleteTodo = async (id: string) => {
    const { error } = await removeTodo(id)

    if (error) {
      console.error(error)
      return
    }
    
    dispatch({ 
      type: 'deleteTodo',
      payload: id
    })
  }

  const clearTodos = () => dispatch({
    type: 'clearTodos'
  })

  return <TodoCtx.Provider value={{
    ...state,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    clearTodos
  }}>{children}</TodoCtx.Provider>
}

export const useTodo = () => useContext(TodoCtx)