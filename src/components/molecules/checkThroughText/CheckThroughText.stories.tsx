import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CheckThroughText } from '@/components/molecules/checkThroughText'

const meta: Meta<typeof CheckThroughText> = {
  title: 'Molecules/CheckThroughText',
  component: CheckThroughText,
  argTypes: {
    value: { control: 'text' },
    isLineThrough: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof CheckThroughText>

export const Default: Story = {
  render: (args) => {
    const [isLineThrough, setIsLineThrough] = useState(args.isLineThrough)

    return (
      <CheckThroughText
        {...args}
        isLineThrough={isLineThrough}
        onClick={() => setIsLineThrough(!isLineThrough)}
      />
    )
  },
  args: {
    value: 'Sample Task',
    isLineThrough: false,
  },
}

export const Completed: Story = {
  render: (args) => {
    const [isLineThrough, setIsLineThrough] = useState(args.isLineThrough)

    return (
      <CheckThroughText
        {...args}
        isLineThrough={isLineThrough}
        onClick={() => setIsLineThrough(!isLineThrough)}
      />
    )
  },
  args: {
    value: 'Completed Task',
    isLineThrough: true,
  },
}
