import { Button as RadixButton } from '@radix-ui/themes'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <RadixButton onClick={onClick} style={{ cursor: 'pointer' }} type={type}>
      {children}
    </RadixButton>
  )
}
