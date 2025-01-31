import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import React from 'react'
import { TaskItem } from '@organisms/taskItem'

const TEXT_VALUE = 'text value'
const TASK_ID = 1

describe('TaskItem', () => {
  const setup = (isLineThrough = false) => {
    const mockOnToggle = vi.fn()
    const mockOnDelete = vi.fn()

    render(
      <TaskItem
        id={TASK_ID}
        isLineThrough={isLineThrough}
        onDelete={mockOnDelete}
        onToggle={mockOnToggle}
        value={TEXT_VALUE}
      />
    )

    return { mockOnToggle, mockOnDelete }
  }

  afterEach(() => {
    cleanup()
  })

  it('初期状態で斜線がないことを確認', () => {
    setup()

    const element = screen.getByText(TEXT_VALUE)
    const style = getComputedStyle(element)
    expect(style.textDecoration).not.toContain('line-through')
  })

  it('タスクをクリックしたときに完了状態が切り替わることを確認', () => {
    const { mockOnToggle } = setup()

    const element = screen.getByText(TEXT_VALUE)
    fireEvent.click(element)
    expect(mockOnToggle).toHaveBeenCalledWith(TASK_ID)
  })

  it('削除ボタンがクリックされたときにタスクが削除されることを確認', () => {
    const { mockOnDelete } = setup()

    const deleteButton = screen.queryByTestId(`trash-${TASK_ID}`)
    expect(deleteButton).not.toBeNull()
    if (deleteButton) {
      fireEvent.click(deleteButton)
      expect(mockOnDelete).toHaveBeenCalledWith(TASK_ID)
    }
  })
})
