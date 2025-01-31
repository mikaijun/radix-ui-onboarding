import {
  render,
  fireEvent,
  screen,
  waitFor,
  cleanup,
} from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import React from 'react'
import { TaskList } from '@pages/taskList/TaskList'

describe('TaskList', () => {
  afterEach(() => {
    cleanup()
  })

  it('タスクリストをレンダリングする', () => {
    render(<TaskList />)
    expect(screen.getByText('TODO リスト')).toBeTruthy()
    expect(screen.getByText('Test Task 1')).toBeTruthy()
    expect(screen.getByText('Test Task 2')).toBeTruthy()
  })

  it('タスクを追加するとき、タスクが表示される', async () => {
    render(<TaskList />)

    const inputField = screen.getByPlaceholderText('タスクを入力してください')
    const addButton = screen.getByText('追加')

    fireEvent.input(inputField, { target: { value: 'New Task' } })

    fireEvent.click(addButton)

    await waitFor(() => {
      expect(screen.getByText('New Task')).toBeTruthy()
    })
  })

  it('タスクを完了状態に切り替える', async () => {
    render(<TaskList />)
    const taskItem = screen.getByText('Test Task 1')
    fireEvent.click(taskItem)
    await waitFor(() => {
      const style = getComputedStyle(taskItem)
      expect(style.textDecoration).toContain('line-through')
    })
  })

  it('タスクを削除するとき、タスクがリストから消える', async () => {
    render(<TaskList />)
    // NOTE: trash-1の1はTaskList.mock.tsで定義されてるid
    const deleteButton = screen.queryByTestId('trash-1')
    expect(deleteButton).not.toBeNull()
    if (deleteButton) {
      fireEvent.click(deleteButton)
      await waitFor(() => {
        expect(screen.queryByText('Test Task 1')).toBeNull()
      })
    }
  })
})
