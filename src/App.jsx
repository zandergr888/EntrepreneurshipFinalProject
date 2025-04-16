import SpamQuiz from './components/SpamQuiz'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Spam Safety Training for Senior Care Staff</h1>
        <p>Protecting our beloved elderly people by training staff for senior centers</p>
        <div className="subtitle">
          <p>This training will help you:</p>
          <ul>
            <li>Identify common scam tactics targeting our beloved seniors</li>
            <li>Learn to come up with responses to suspicious messages for our beloved seniors</li>
            <li>Protect residents from financial fraud - has happened a lot in the past</li>
          </ul>
        </div>
      </header>
      <main>
        <SpamQuiz />
      </main>
    </div>
  )
}

export default App
