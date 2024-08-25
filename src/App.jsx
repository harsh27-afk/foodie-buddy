import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='app'>
        <Header/>
        <Body/>
      </div>
      
    </>
  )
}

export default App
