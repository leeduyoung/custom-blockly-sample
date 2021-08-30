import './App.css'
import React from 'react'
import Page from './views/Page'

function App() {
  const onConvertToPython = () => {
    console.log('say hi')
  }

  return (
    <div className="App">
      <p style={{ color: 'white', textAlign: 'center' }}>lux-blocks TEST</p>
      {/* <button
        style={{
          background: 'tomato',
          height: '36px',
          padding: '0 16px',
          lineHeight: '36px',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '7px',
        }}
        onClick={onConvertToPython}
      >
        COVERT PYTHON
      </button> */}
      <Page />
    </div>
  )
}

export default App
