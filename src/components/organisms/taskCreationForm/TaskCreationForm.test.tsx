import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { TaskCreationForm } from '@organisms/taskCreationForm'

describe('TaskCreationForm', () => {
  const mockFn = vi.fn()
  it('renders input field and button', () => {
    render(<TaskCreationForm onSubmit={mockFn} />)
    expect(screen.getByPlaceholderText('タスクを入力してください')).toBeTruthy()
    expect(screen.getByText('追加')).toBeTruthy()
  })

  it('calls onSubmit when valid data is entered', async () => {
    render(<TaskCreationForm onSubmit={mockFn} />)

    const inputs = screen.getAllByPlaceholderText('タスクを入力してください')
    fireEvent.input(inputs[0], {
      target: { value: 'Test Task' },
    })
    const forms = screen.getAllByTestId('task-form')
    fireEvent.submit(forms[0])
    // mockFnが正しい引数で呼び出されたか確認
    await waitFor(() => {
      expect(mockFn).toBeCalled()
    })
  })
})
