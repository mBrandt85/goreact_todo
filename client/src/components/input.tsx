interface InputProps {
  edit?: boolean
  value: string
  placeholder?: string
  disabled: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export default function Input({ edit, value, disabled, ...rest }: InputProps) {
  return <input
    style={{
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      height: 36,
      backgroundColor: '#EDF1D6',
      color: '#40513B',
      fontWeight: value === '' ? '300' : '700',
      border: 'none',
      outline: 'none',
      padding: '0 1rem',
      letterSpacing: .5,
      fontSize: 12,
      borderRadius: 16,
      boxShadow: '2px 2px 0 #40513B',
      cursor: disabled ? 'not-allowed' : 'text'
    }}
    value={value}
    {...rest}
  />
}