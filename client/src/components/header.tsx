import Container from "./container"
import TodoForm from "./todo-form"

export default function Header() {
  return (
    <div style={{
      background: 'linear-gradient(45deg, #609966, #9DC08B)',
      boxShadow: '0 2px 0 #40513B'
    }}>
      <Container>
        <h1 style={{
          textAlign: 'center',
          margin: '1.5rem 0',
          color: '#EDF1D6',
          textShadow: '2px 2px 0 #40513B'
        }}>GO React ToDo</h1>

        <div style={{
          display: 'flex',
          margin: '1.5rem 0'
        }}>
          <TodoForm />
        </div>
      </Container>
    </div>
  )
}