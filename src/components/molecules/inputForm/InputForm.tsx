import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { Text } from '@radix-ui/themes'
import { Input, InputProps } from '@atoms/input'

type InputFormProps = InputProps & {
  register: UseFormRegisterReturn
  errorMessage?: string
}

export const InputForm: React.FC<InputFormProps> = ({
  placeholder,
  register,
  errorMessage,
}) => {
  return (
    <>
      <Input placeholder={placeholder} {...register} />
      {errorMessage && (
        <Text style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
          {errorMessage}
        </Text>
      )}
    </>
  )
}
