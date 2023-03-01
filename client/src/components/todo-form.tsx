import { useState } from "react"

import { useTodo } from "../state/todo"
import Button from "./button"
import Input from "./input"

interface TodoFormProps {
  edit?: boolean
}

export default function TodoForm({ edit }: TodoFormProps) {
  const { createTodo } = useTodo()
  const [loading, setLoading] = useState(false)
  const [todo, setTodo] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (todo === '' || loading)
      return

    setLoading(true)
    await createTodo(todo)
    setTodo('')
    setLoading(false)
  }

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit}>
      <div style={{
        display: 'flex',
        columnGap: 8
      }}>
        <Input 
          placeholder={edit ? 'Edit ToDo' : 'New ToDo'}
          onChange={e => setTodo(e.target.value)}
          disabled={loading}
          value={todo}
        />

        <Button type="submit" disabled={loading || todo === ''}>
          {loading ? 'Loading' : edit ? 'Save' : 'Add'}
        </Button>
      </div>
    </form>
  )
}