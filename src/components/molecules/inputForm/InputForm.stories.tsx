import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { InputForm } from '@molecules/inputForm'

const meta: Meta<typeof InputForm> = {
  title: 'Molecules/InputForm',
  component: InputForm,
  argTypes: {
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof InputForm>

export const Default: Story = {
  render: (args) => {
    const { register } = useForm()
    return <InputForm {...args} register={register('input')} />
  },
  args: {
    placeholder: '入力してください',
    errorMessage: '',
  },
}

export const WithError: Story = {
  render: (args) => {
    const { register } = useForm()
    return <InputForm {...args} register={register('input')} />
  },
  args: {
    placeholder: 'メールアドレス',
    errorMessage: 'メールアドレスは必須です',
  },
}
