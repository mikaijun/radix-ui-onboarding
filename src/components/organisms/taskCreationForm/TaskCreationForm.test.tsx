import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import React from 'react'
import { TaskCreationForm } from '@organisms/taskCreationForm'

describe('TaskCreationForm', () => {
  const mockFn = vi.fn()
  it('入力フィールドとボタンをレンダリングする', () => {
    render(<TaskCreationForm onSubmit={mockFn} />)
    expect(screen.getByPlaceholderText('タスクを入力してください')).toBeTruthy()
    expect(screen.getByText('追加')).toBeTruthy()
  })

  it('有効なデータが入力されたときにonSubmitが呼び出される', async () => {
    render(<TaskCreationForm onSubmit={mockFn} />)

    const inputs = screen.getAllByPlaceholderText('タスクを入力してください')
    fireEvent.input(inputs[0], {
      target: { value: 'テストタスク' },
    })
    const forms = screen.getAllByTestId('task-form')
    fireEvent.submit(forms[0])
    await waitFor(() => {
      expect(mockFn).toBeCalled()
    })
  })
})
