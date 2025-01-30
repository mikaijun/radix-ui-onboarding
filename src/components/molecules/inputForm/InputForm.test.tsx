import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import React from 'react'
import { InputForm } from './InputForm'

const PLACEHOLDER = 'text value'

describe('InputForm component', () => {
  const mockRegister = {
    name: 'email',
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
  }

  afterEach(() => {
    cleanup()
  })

  it('レンダリングされる', () => {
    render(<InputForm placeholder={PLACEHOLDER} register={mockRegister} />)
    expect(screen.getByPlaceholderText(PLACEHOLDER)).toBeTruthy()
  })

  it('エラーメッセージが提供されたときに表示される', () => {
    render(
      <InputForm
        errorMessage="Error message"
        placeholder={PLACEHOLDER}
        register={mockRegister}
      />
    )
    expect(screen.getByText('Error message')).toBeTruthy()
  })

  it('エラーメッセージが提供されない場合は表示されない', () => {
    render(<InputForm placeholder={PLACEHOLDER} register={mockRegister} />)
    expect(screen.queryByText('Error message')).toBeNull()
  })
})
