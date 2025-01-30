import React from 'react'
import { Form } from 'radix-ui'
import { useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import * as v from 'valibot'
import { InputForm } from '@molecules/inputForm/InputForm'
import { Button } from '@atoms/button/Button'

const schema = v.object({
  task: v.pipe(
    v.string('タスクは文字列で入力してください'),
    v.nonEmpty('タスクを入力してください'),
    v.maxLength(50, '50文字以下で入力してください')
  ),
})

type TaskCreationFormData = {
  task: string
}

type TaskCreationFormProps = {
  onSubmit: (data: TaskCreationFormData) => void
}

export const TaskCreationForm: React.FC<TaskCreationFormProps> = ({
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskCreationFormData>({
    mode: 'onBlur',
    resolver: valibotResolver(schema),
  })

  return (
    <Form.Root
      data-testid="task-form"
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}
    >
      <InputForm
        boxProps={{ width: '200px' }}
        errorMessage={errors.task?.message}
        placeholder="タスクを入力してください"
        register={register('task')}
      />
      <Button type="submit">追加</Button>
    </Form.Root>
  )
}
