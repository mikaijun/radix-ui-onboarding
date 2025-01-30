import React, { useCallback } from 'react'
import { Box } from '@radix-ui/themes'
import { FaRegTrashAlt } from 'react-icons/fa'
import { Button } from '@atoms/button/Button'

import {
  CheckThroughText,
  CheckThroughTextProps,
} from '@molecules/checkThroughText'

type TaskItemProps = Omit<CheckThroughTextProps, 'onClick'> & {
  id: number
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

export const TaskItem: React.FC<TaskItemProps> = ({
  id,
  value,
  isLineThrough,
  onToggle,
  onDelete,
}) => {
  const handleToggle = useCallback(() => {
    onToggle(id)
  }, [id, onToggle])

  const handleDeleteTask = useCallback(() => {
    onDelete(id)
  }, [id, onDelete])

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <CheckThroughText
        isLineThrough={isLineThrough}
        onClick={handleToggle}
        value={value}
      />
      <Button color="red" data-testid="trash" onClick={handleDeleteTask}>
        <FaRegTrashAlt />
      </Button>
    </Box>
  )
}
