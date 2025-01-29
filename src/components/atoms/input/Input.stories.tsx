import type { Meta, StoryObj } from '@storybook/react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Input } from '@atoms/input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  args: {
    placeholder: 'Type something...',
    size: '2',
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    icon: <MagnifyingGlassIcon />,
  },
}

export const Small: Story = {
  args: {
    size: '1',
  },
}

export const Large: Story = {
  args: {
    size: '3',
  },
}
