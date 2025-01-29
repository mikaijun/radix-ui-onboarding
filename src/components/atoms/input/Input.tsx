import { TextField } from '@radix-ui/themes'
import React from 'react'

export type InputProps = {
  placeholder?: string
  size?: '1' | '2' | '3'
  icon?: React.ReactNode
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  size = '2',
  icon,
}) => {
  return (
    <TextField.Root data-testid="input" placeholder={placeholder} size={size}>
      {icon && <TextField.Slot data-testid="icon">{icon}</TextField.Slot>}
    </TextField.Root>
  )
}
