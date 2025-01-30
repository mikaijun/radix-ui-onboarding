import {
  Button as RadixButton,
  ButtonProps as RadixButtonProps,
} from '@radix-ui/themes'
import React from 'react'

type ButtonProps = RadixButtonProps

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <RadixButton style={{ cursor: 'pointer' }} {...props}>
      {children}
    </RadixButton>
  )
}
