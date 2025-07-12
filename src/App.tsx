import Feature from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center gap-20 mb-30">
        <Hero />
        <Feature />
      </main>
      <Footer />
    </div>
  )
}

export default App
