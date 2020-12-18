// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = useRef(null)
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const value = inputEl.current.value
    onSubmitUsername(value)
  }

  const handleChange = event => {
    event.preventDefault()
    const value = inputEl.current.value.toLowerCase()
    setUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          ref={inputEl}
          id="input"
          type="text"
        />
      </div>
      <button id="submitBtn" type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
