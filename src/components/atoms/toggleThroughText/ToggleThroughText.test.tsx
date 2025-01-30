import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import React from 'react'
import { ToggleThroughText } from '@atoms/toggleThroughText'

const TEXT_VALUE = 'Test Text'

const renderComponent = (isLineThrough: boolean, onClick = () => {}) => {
  render(
    <ToggleThroughText
      isLineThrough={isLineThrough}
      onClick={onClick}
      value="Test Text"
    />
  )
}

describe('ToggleThroughText', () => {
  afterEach(() => {
    cleanup()
  })

  it('テキストが正しくレンダリングされる', () => {
    renderComponent(false)

    const element = screen.getByText(TEXT_VALUE)
    expect(element).not.toBeNull()
    expect(element.textContent).toBe(TEXT_VALUE)
  })

  it('isLineThroughがtrueの場合、取り消し線が適用される', () => {
    renderComponent(true)

    const element = screen.getByText(TEXT_VALUE)
    expect(element).not.toBeNull()
    expect(element.textContent).toBe(TEXT_VALUE)
    const style = getComputedStyle(element)
    expect(style.textDecoration).toContain('line-through')
  })

  it('isLineThroughがfalseの場合、取り消し線が適用されない', () => {
    renderComponent(false)

    const element = screen.getByText(TEXT_VALUE)
    const style = getComputedStyle(element)
    expect(style.textDecoration).not.toContain('line-through')
  })

  it('クリックされたときにonclickが呼び出される', () => {
    const handleClick = vi.fn()
    renderComponent(false, handleClick)

    const element = screen.getByText(TEXT_VALUE)
    fireEvent.click(element)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
