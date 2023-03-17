import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.scss'

function App (): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://eslint.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESlint
          </a>
          <span> and </span>
          <a
            className="App-link"
            href="https://typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Typescript
          </a>
        </span>
      </header>
    </div>
  )
}

export default App
