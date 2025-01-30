import { Meta, StoryObj } from '@storybook/react'
import { TaskCreationForm } from '@organisms/taskCreationForm'

const meta: Meta<typeof TaskCreationForm> = {
  title: 'Organisms/TaskCreationForm',
  component: TaskCreationForm,
  argTypes: {
    onSubmit: { action: 'submitted' },
  },
}

export default meta

type Story = StoryObj<typeof TaskCreationForm>

export const Default: Story = {
  render: (args) => {
    const onSubmit = (data: { task: string }) => {
      alert(data.task)
    }
    return <TaskCreationForm {...args} onSubmit={onSubmit} />
  },
  args: {},
}
