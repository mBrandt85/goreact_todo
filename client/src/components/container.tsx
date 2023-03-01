export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      width: '100%',
      maxWidth: '24rem',
      margin: '0 auto',
      padding: 16
    }}>
      {children}
    </div>
  )
}