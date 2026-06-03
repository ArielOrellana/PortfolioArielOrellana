import { ref, onErrorCaptured } from 'vue'

export function useErrorCapture() {
  const error = ref<string | null>(null)

  onErrorCaptured((err: unknown) => {
    const message = err instanceof Error ? err.message : String(err)
    error.value = message
    console.error('[Component Error]', err)
    return false
  })

  function clear() {
    error.value = null
  }

  return { error, clear }
}
