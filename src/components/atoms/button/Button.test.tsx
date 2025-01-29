import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button component', () => {
  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const buttons = screen.getAllByText('Click me')
    fireEvent.click(buttons[0])
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
