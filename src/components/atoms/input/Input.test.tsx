import { render, screen } from '@testing-library/react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { Input } from '@atoms/input'

describe('Input component', () => {
  const mockRegister = {
    name: 'email',
    onChange: vi.fn(),
    onBlur: vi.fn(),
    ref: vi.fn(),
  }
  it('renders without crashing', () => {
    render(<Input placeholder="Enter text" register={mockRegister} />)
    const inputElement = screen.getByPlaceholderText('Enter text')
    expect(inputElement).not.toBeNull()
  })

  it('renders with an icon', () => {
    render(<Input icon={<MagnifyingGlassIcon />} register={mockRegister} />)
    const iconElement = screen.queryByTestId('icon')
    expect(!!iconElement && !!iconElement).toBe(true)
  })
})
