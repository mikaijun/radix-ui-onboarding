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
  it('正しくレンダリングされる', () => {
    render(<Input placeholder="テキストを入力" register={mockRegister} />)
    const inputElement = screen.getByPlaceholderText('テキストを入力')
    expect(inputElement).not.toBeNull()
  })

  it('アイコンが表示される', () => {
    render(<Input icon={<MagnifyingGlassIcon />} register={mockRegister} />)
    const iconElement = screen.queryByTestId('icon')
    expect(!!iconElement && !!iconElement).toBe(true)
  })
})
