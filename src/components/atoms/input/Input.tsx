import { Box, BoxProps, TextField } from '@radix-ui/themes'
import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export type InputProps = {
  register: UseFormRegisterReturn
  placeholder?: string
  size?: '1' | '2' | '3'
  icon?: React.ReactNode
  boxProps?: BoxProps
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  register,
  size = '2',
  icon,
  boxProps,
}) => {
  return (
    <Box {...boxProps}>
      <TextField.Root
        data-testid="input"
        placeholder={placeholder}
        size={size}
        {...register}
      >
        {icon && <TextField.Slot data-testid="icon">{icon}</TextField.Slot>}
      </TextField.Root>
    </Box>
  )
}
