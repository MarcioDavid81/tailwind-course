import { Button } from "./components/Button"

function App() {

  return (
    <div className="bg-dark-background py-4">
      <h1 className='text-primary bg-dark-background font-grafik'>Vite + React</h1>
      <Button>Primary Background</Button>
      <Button variant="">Secondary Background</Button>
      <Button isBold>Bold Text With Primary Background</Button>
      <Button isBold variant="">Bold Text With Secondary Background</Button>
    </div>
  )
}

export default App
