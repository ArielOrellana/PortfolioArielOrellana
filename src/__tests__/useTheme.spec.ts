import { describe, it, expect } from 'vitest'
import { useTheme } from '../composables/useTheme'

describe('useTheme', () => {
  it('returns theme and toggle function', () => {
    const { theme, toggle } = useTheme()
    expect(theme).toBeDefined()
    expect(toggle).toBeInstanceOf(Function)
  })

  it('toggles between dark and light', () => {
    const { theme, toggle } = useTheme()
    const initial = theme.value
    toggle()
    expect(theme.value).toBe(initial === 'dark' ? 'light' : 'dark')
  })
})
