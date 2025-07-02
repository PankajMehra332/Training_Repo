import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }
  try{
    const { worker } = await import('./mocks/browser')
    await worker.start()
    console.log('MSW started successfully')
  } catch(error){
    console.error('Failed to start MSW:', error)
  } 
}
enableMocking().then(()=>{
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
})