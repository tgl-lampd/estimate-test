import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [winHeight, setWinHeight] = useState(window?.innerHeight)
  const [winWidth, setWinWidth] = useState(window?.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWinHeight(window.innerHeight)
      setWinWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWinHeight(window.innerHeight)
        setWinWidth(window.innerWidth)
      })
    }
  }, [])

  return (
    <>
      <div style={{ padding: '1rem', fontWeight: '700', fontSize: 20 }}>
        TGL TEST
      </div>

      <div className='card'>
        <iframe
          src='https://sel.ex-select.com/replus/login'
          title='Login Page'
          width={`${winWidth}px`}
          height={`${winHeight - 200}px`}
          style={{ border: 'none' }}
        />
      </div>
    </>
  )
}

export default App
