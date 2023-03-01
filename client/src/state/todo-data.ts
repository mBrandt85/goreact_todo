import { Todo } from "./todo-types"

const apiURL = 'http://localhost:4000'

interface TodoResponse {
  success?: boolean
  error?: Error
  todos?: Todo[]
  todo?: Todo
  id?: string
}

export async function fetchTodos(): Promise<TodoResponse> {
  try {
    const response = await fetch(`${apiURL}/todos`, {
      method: 'GET'
    })

    if (response.status !== 200) 
      throw new Error('Something went wrong')

    const todos = await response.json() as Todo[]

    return { todos }
  } catch (error) {
    return { error: error as Error }
  }
}

export async function addTodo(name: string): Promise<TodoResponse> {
  try {
    const response = await fetch(`${apiURL}/todos`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        name,
        done: false
      })
    })

    if (response.status !== 201) 
      throw new Error('Something went wrong')

    const todo = await response.json() as Todo

    return { todo }
  } catch (error) {
    return { error: error as Error }
  }
}

export async function editTodo(id: string, name: string, done: boolean): Promise<TodoResponse> {
  try {
    const response = await fetch(`${apiURL}/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        name,
        done
      })
    })

    if (response.status !== 200) 
      throw new Error('Something went wrong')

    const todo = await response.json() as Todo

    return { todo }
  } catch (error) {
    return { error: error as Error }
  }
}

export async function removeTodo(id: string): Promise<TodoResponse> {
  try {
    const response = await fetch(`${apiURL}/todos/${id}`, {
      method: 'DELETE'
    })

    if (response.status !== 200) 
      throw new Error('Something went wrong')

    return { success: true }
  } catch (error) {
    return { error: error as Error }
  }
}