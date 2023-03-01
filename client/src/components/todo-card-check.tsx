import { useState } from "react"

interface TodoCardCheckProps {
  toggleTodo: () => Promise<void>
  disabled: boolean
  done: boolean
}

export default function TodoCardCheck({ toggleTodo, disabled, done }: TodoCardCheckProps) {
  const [hover, setHover] = useState(false)

  return (
    <div 
      style={{
        borderRadius: 8,
        backgroundColor: disabled ? 'gray' : '#40513B',
        width: 24,
        height: 24,
        marginLeft: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all .1s ease',
        boxShadow: disabled ? 'none' : `${hover ? '0 0' : '2px 2px'} 0 #EDF1D6`,
        transform: disabled ? 'none' : hover ? `translate(2px, 2px)` : 'translate(0px, 0px)'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => !disabled && toggleTodo()}
    >
      {done && <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20"
        style={{ 
          position: 'absolute',
          width: 38,
          height: 38,
          fill: '#EDF1D6',
          marginTop: -12,
          marginLeft: -4
        }}
      >
        <path d="M8.294 16.998c-.435 0-.847-.203-1.111-.553L3.61 11.724a1.392 1.392 0 0 1 .27-1.951 1.392 1.392 0 0 1 1.953.27l2.351 3.104 5.911-9.492a1.396 1.396 0 0 1 1.921-.445c.653.406.854 1.266.446 1.92L9.478 16.34a1.39 1.39 0 0 1-1.12.656c-.022.002-.042.002-.064.002z" />
      </svg>}
    </div>
  )
}