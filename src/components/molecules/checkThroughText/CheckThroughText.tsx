import React from 'react'
import { Checkbox, Flex } from '@radix-ui/themes'

import {
  ToggleThroughText,
  ToggleThroughTextProps,
} from '@atoms/toggleThroughText'

type CheckThroughTextProps = ToggleThroughTextProps

export const CheckThroughText: React.FC<CheckThroughTextProps> = ({
  value,
  isLineThrough,
  onClick,
}) => {
  return (
    <Flex align="center" gap="8px">
      <Checkbox
        aria-checked={isLineThrough ? 'true' : 'false'}
        checked={isLineThrough}
        onCheckedChange={onClick}
        style={{
          cursor: 'pointer',
        }}
      />
      <ToggleThroughText
        isLineThrough={isLineThrough}
        onClick={onClick}
        value={value}
      />
    </Flex>
  )
}
