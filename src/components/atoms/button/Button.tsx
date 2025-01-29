import { Button as RadixButton } from '@radix-ui/themes'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <RadixButton onClick={onClick}>{children}</RadixButton>
}
