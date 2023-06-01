import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from '@/pages/Main/Main.tsx'
import './Index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
