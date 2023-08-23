import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

if (import.meta.env.MODE === 'development') {
  const renderElement = document.getElementById('root')
  ReactDOM.createRoot(renderElement!).render(
    <App />
  )
} else {
  window.DatPlugin = {
    selector: '#root',
    options: {
      initializedOptions: []
    }
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
