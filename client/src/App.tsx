import TodoProvider from './state/todo'
import Header from './components/header'
import TodoList from './components/todo-list'

export default function App() {
  return (
    <TodoProvider>
      <Header />
      <TodoList />
    </TodoProvider>
  )
}
