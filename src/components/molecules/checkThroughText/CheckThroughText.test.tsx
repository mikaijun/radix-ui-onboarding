import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import React from 'react'
import { CheckThroughText } from '@molecules/checkThroughText'

const TEXT_VALUE = 'Sample Task'

const renderComponent = (isLineThrough: boolean, onClick = () => {}) => {
  render(
    <CheckThroughText
      isLineThrough={isLineThrough}
      onClick={onClick}
      value={TEXT_VALUE}
    />
  )
}

describe('CheckThroughText', () => {
  afterEach(() => {
    cleanup()
  })

  it('初期状態ではチェックボックスがオフ、取り消し線がない', () => {
    renderComponent(false)

    const checkbox = screen.getByRole('checkbox', { checked: false })
    expect(checkbox).not.toBeNull()
    const element = screen.getByText(TEXT_VALUE)
    expect(element).not.toBeNull()
    const style = getComputedStyle(element)
    expect(style.textDecoration).not.toContain('line-through')
  })

  it('チェックボックスがオンの時、取り消し線が適用される', () => {
    renderComponent(true)

    const checkbox = screen.getByRole('checkbox', { checked: true })
    expect(checkbox).not.toBeNull()
    const element = screen.getByText(TEXT_VALUE)
    expect(element).not.toBeNull()
    const style = getComputedStyle(element)
    expect(style.textDecoration).toContain('line-through')
  })

  it('チェックボックスをクリックするとonClickが呼ばれる', () => {
    const handleClick = vi.fn()
    renderComponent(false, handleClick)

    const checkbox = screen.getByRole('checkbox')
    fireEvent.click(checkbox)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('テキストをクリックするとonClickが呼ばれる', () => {
    const handleClick = vi.fn()
    renderComponent(false, handleClick)

    const element = screen.getByText(TEXT_VALUE)
    fireEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
