import SpamQuiz from './components/SpamQuiz'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <h1>Spam Safety Training for Senior Care Staff</h1>
        <p>Learn how to protect elderly residents from common scams and fraudulent messages</p>
        <div className="subtitle">
          <p>This training will help you:</p>
          <ul>
            <li>Identify common scam tactics targeting seniors</li>
            <li>Learn appropriate responses to suspicious messages</li>
            <li>Guide residents in safe communication practices</li>
            <li>Protect residents from financial fraud</li>
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
