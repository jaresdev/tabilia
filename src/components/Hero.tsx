import { useState } from "react"

function Hero() {
  const [isGenerating, setIsGenerating] = useState(false)
  
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsGenerating(!isGenerating)
  }

  return(
    <section className="w-full flex-1 max-w-7xl flex flex-col gap-16 items-center justify-center">
      <article className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-5xl">Your smart travel checklist</h1>
        <h2 className="text-2xl">
          Enter your destination and dates — we’ll generate your custom packing and task list
        </h2>
      </article>
      <article className="w-8/12">
        <form className="flex flex-col items-center gap-8 w-full" onSubmit={handleClick}>
          <input 
            id="destination"
            type="text"
            placeholder="Destination"
            className="w-full border border-neutral rounded-2xl p-4 placeholder-neutral
            focus:outline-none focus:ring-1 focus:ring-[#1F89EE]"
          />
          <input 
            id="travel-dates"
            type="date"
            className="w-full border border-neutral rounded-2xl p-4 placeholder-neutral 
            text-neutral focus:outline-none focus:ring-1 focus:ring-[#1F89EE]"
          />
          <button 
            type="submit" 
            className="w-1/3 p-4 rounded-xl text-white font-bold cursor-pointer 
              transition-all duration-300 ease-in-out hover:-traslate-y-0.5 hover:shadow-xl
              hover:shadow-shadow-button-hover"
          >
            {isGenerating ? 'Generating...' : 'Generate'}
          </button>
        </form>
      </article>
    </section>
  )
}

export default Hero