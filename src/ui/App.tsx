import { OrbitProgress } from 'react-loading-indicators'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [appReady, setAppReady] = useState(false)

  useEffect(() => {
    window.electronStatus.initialCheck()
    .then((data) => {
      setAppReady(data)
    })
  }, [])

  return (
    <>
      {
        !appReady ? 
          <OrbitProgress dense color="#3186cc" size="medium" text="" textColor="" />
        :
          <h1>Base de datos lista</h1>
      }
      
    </>
  )
}

export default App
