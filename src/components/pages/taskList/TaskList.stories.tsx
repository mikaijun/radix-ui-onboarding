import { Meta, StoryObj } from '@storybook/react'
import { TaskList } from '@pages/taskList/TaskList'

const meta: Meta<typeof TaskList> = {
  title: 'Pages/TaskList',
  component: TaskList,
  argTypes: {
    onToggle: { action: 'onToggle' },
    onDelete: { action: 'onDelete' },
  },
}

export default meta
type Story = StoryObj<typeof TaskList>

export const Default: Story = {
  render: () => {
    return <TaskList />
  },
}
