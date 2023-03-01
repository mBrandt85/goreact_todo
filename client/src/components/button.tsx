import { useState } from "react"

interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ 
  children,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const [hover, setHover] = useState(false)

  return <button
    style={{
      display: 'flex',
      alignItems: 'center',
      height: 36,
      backgroundColor: disabled ? 'gray' : '#40513B',
      color:  disabled ? 'lightgray' : '#EDF1D6',
      border: 'none',
      outline: 'none',
      padding: '0 1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontSize: 10,
      borderRadius: 16,
      transition: 'all .1s ease',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: disabled ? 'none' : `${hover ? '0 0' : '2px 2px'} 0 #EDF1D6`,
      transform: disabled ? 'none' : hover ? `translate(2px, 2px)` : 'translate(0px, 0px)'
      //boxShadow: `2px 2px 0 #${disabled ? 'darkgray' : hover ? '40513B' : 'EDF1D6'}`
    }}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    type={type}
  >{children}</button>
}