import { ref, watch } from 'vue'

const theme = ref(initTheme())

function initTheme() {
  const saved = localStorage.getItem('theme')
  if (saved) return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(val: string) {
  document.documentElement.setAttribute('data-theme', val)
  localStorage.setItem('theme', val)
}

applyTheme(theme.value)

watch(theme, applyTheme)

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}
