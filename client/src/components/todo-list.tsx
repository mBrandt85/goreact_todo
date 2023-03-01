import { useEffect } from "react"

import { useTodo } from "../state/todo"
import Container from "./container"
import TodoCard from "./todo-card"

export default function TodoList() {
  const { loading, todos, getTodos, clearTodos } = useTodo()

  useEffect(() => {
    getTodos()
    return () => clearTodos()
  }, [])

  if (loading) return (
    <TodoListContainer>
      Loading...
    </TodoListContainer>
  )

  if (todos.length === 0) return (
    <TodoListContainer>
      No todos yet...
    </TodoListContainer>
  )

  return (
    <TodoListContainer>
      {todos.map(todo => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </TodoListContainer>
  )
}

function TodoListContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem 0', 
        rowGap: 8 
      }}>
          {children}
      </div>
    </Container>
  )
}