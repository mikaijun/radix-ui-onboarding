import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import React from 'react'
import { InputForm } from './InputForm'

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

  it('renders without crashing', () => {
    render(<InputForm placeholder="Enter text" register={mockRegister} />)
    expect(screen.getByPlaceholderText('Enter text')).toBeTruthy()
  })

  it('displays an error message when provided', () => {
    render(
      <InputForm
        errorMessage="Error message"
        placeholder="Enter text"
        register={mockRegister}
      />
    )
    expect(screen.getByText('Error message')).toBeTruthy()
  })

  it('does not render an error message when not provided', () => {
    render(<InputForm placeholder="Enter text" register={mockRegister} />)
    expect(screen.queryByText('Error message')).toBeNull()
  })
})
