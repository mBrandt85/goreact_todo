import { useState } from "react"
import { Todo } from "../state/todo-types"
import Button from "./button"
import { useTodo } from "../state/todo"
import TodoCardCheck from "./todo-card-check"

interface TodoCardProps {
  todo: Todo
}

export default function TodoCard({ todo: { id, name, done } }: TodoCardProps) {
  const { updateTodo, deleteTodo } = useTodo()
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(name)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (loading)
      return
    
    setLoading(true)

    if (edit)
      await updateTodo(id, value, done)

    if (!edit)
      await deleteTodo(id)

    setEdit(false)
    setLoading(false)
  }

  const toggleTodo = async () => {
    setLoading(true)
    await updateTodo(id, value, !done)
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        background: 'linear-gradient(45deg, #609966, #9DC08B)',
        boxShadow: '2px 2px 0 #40513B',
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        borderRadius: 24,
        color: '#EDF1D6',
        textShadow: '1px 1px 0 #40513B'
      }}>
        <TodoCardCheck 
          toggleTodo={toggleTodo}
          disabled={loading} 
          done={done} 
        />

        <input 
          style={{
            flexGrow: 1,
            background: 'transparent',
            border: 0,
            outline: 0,
            margin: '0 12px',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            textShadow: 'inherit',
            color: 'inherit',
            cursor: loading ? 'not-allowed' : 'text'
          }}
          value={value}
          disabled={loading}
          onChange={e => setValue(e.target.value)}
          onFocus={() => setEdit(true)}
          onBlur={() => setTimeout(() => setEdit(false), 100)}
        />

        <Button type="submit" disabled={loading}>
          {loading ? 'Loading' : edit ? 'Save' : 'Delete'}
        </Button>
      </div>
    </form>
  )
}