import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@atoms/button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  args: {
    children: 'Click me',
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const WithClickHandler: Story = {
  args: {
    onClick: () => alert('Button clicked!'),
  },
}
