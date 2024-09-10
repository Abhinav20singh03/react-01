import './App.css'
import Card from './components/card'

function App() {


  return (
    <div className="flex gap-4">
    <Card
      name="Laptop"
      description="A high-end gaming laptop with a powerful GPU."
      image="https://images.unsplash.com/photo-1522199755839-a2bacb67c546"
    />
    <Card
      name="Smartphone"
      description="A flagship smartphone with an excellent camera."
      image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    />
    <Card
      name="Headphones"
      description="Noise-cancelling headphones for a premium audio experience."
      image="https://images.unsplash.com/photo-1542751110-97427bbecf20"
    />
  </div>
  )
}

export default App
