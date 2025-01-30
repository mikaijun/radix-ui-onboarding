import React from 'react'
import { Text } from '@radix-ui/themes'

export type ToggleThroughTextProps = {
  value: string
  isLineThrough: boolean
  onClick: () => void
}

export const ToggleThroughText: React.FC<ToggleThroughTextProps> = ({
  value,
  isLineThrough,
  onClick,
}) => {
  return (
    <Text
      onClick={onClick}
      style={{
        textDecoration: isLineThrough ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
    >
      {value}
    </Text>
  )
}
