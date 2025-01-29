import { render, screen } from '@testing-library/react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { describe, it, expect } from 'vitest'
import React from 'react'
import { Input } from '@atoms/input'

describe('Input component', () => {
  it('renders without crashing', () => {
    render(<Input placeholder="Enter text" />)
    const inputElement = screen.getByPlaceholderText('Enter text')
    expect(inputElement).not.toBeNull()
  })

  it('renders with an icon', () => {
    render(<Input icon={<MagnifyingGlassIcon />} />)
    const iconElement = screen.queryByTestId('icon')
    expect(!!iconElement && !!iconElement).toBe(true)
  })
})
