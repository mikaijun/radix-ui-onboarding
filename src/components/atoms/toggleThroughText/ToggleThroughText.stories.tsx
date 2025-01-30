import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ToggleThroughText } from '@atoms/toggleThroughText'

const meta: Meta<typeof ToggleThroughText> = {
  title: 'Atoms/ToggleThroughText',
  component: ToggleThroughText,
  argTypes: {
    value: { control: 'text' },
    isLineThrough: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ToggleThroughText>

export const Default: Story = {
  render: (args) => {
    const [isLineThrough, setIsLineThrough] = useState(args.isLineThrough)

    return (
      <ToggleThroughText
        {...args}
        isLineThrough={isLineThrough}
        onClick={() => setIsLineThrough(!isLineThrough)}
      />
    )
  },
  args: {
    value: 'Click me to toggle line-through',
    isLineThrough: false,
  },
}
