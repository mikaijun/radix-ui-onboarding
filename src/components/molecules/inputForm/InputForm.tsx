import React from 'react'
import { Text } from '@radix-ui/themes'
import { Input, InputProps } from '@atoms/input'

type InputFormProps = InputProps & {
  errorMessage?: string
}

export const InputForm: React.FC<InputFormProps> = ({
  errorMessage,
  ...props
}) => {
  return (
    <div>
      <Input {...props} />
      {errorMessage && (
        <Text
          as="p"
          style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}
        >
          {errorMessage}
        </Text>
      )}
    </div>
  )
}
