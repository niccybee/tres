import { createApp } from 'vue'

export function withSetup(composable) {
  let result
  const app = createApp({
    setup() {
      result = composable()
      // suppress missing template warning
      return () => {
        return null
      }
    },
  })
  app.mount(document.createElement('div'))
  // return the result and the app instance
  // for testing provide / unmount
  return [result, app]
}
