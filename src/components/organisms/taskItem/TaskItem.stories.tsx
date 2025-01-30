import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TaskItem } from '@organisms/taskItem'

const meta: Meta<typeof TaskItem> = {
  title: 'Organisms/TaskItem',
  component: TaskItem,
  argTypes: {
    value: { control: 'text' },
    isLineThrough: { control: 'boolean' },
    onToggle: { action: 'onToggle' },
    onDelete: { action: 'onDelete' },
  },
}

export default meta
type Story = StoryObj<typeof TaskItem>

export const Default: Story = {
  render: (args) => {
    const [isLineThrough, setIsLineThrough] = useState(args.isLineThrough)

    const handleToggle = () => {
      setIsLineThrough((prev) => !prev)
      args.onToggle(args.id)
    }

    return (
      <TaskItem
        {...args}
        isLineThrough={isLineThrough}
        onToggle={handleToggle}
      />
    )
  },
  args: {
    id: 1,
    value: 'Sample Task',
    isLineThrough: false,
  },
}

export const Completed: Story = {
  render: (args) => {
    const [isLineThrough, setIsLineThrough] = useState(args.isLineThrough)

    const handleToggle = () => {
      setIsLineThrough((prev) => !prev)
      args.onToggle(args.id)
    }

    return (
      <TaskItem
        {...args}
        isLineThrough={isLineThrough}
        onToggle={handleToggle}
      />
    )
  },
  args: {
    id: 2,
    value: 'Completed Task',
    isLineThrough: true,
  },
}
