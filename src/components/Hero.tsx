function Hero() {
  return(
    <section className="w-full flex-1 max-w-7xl flex flex-col gap-16 items-center justify-center">
      <article className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-6xl">Your smart travel checklist</h1>
        <h2 className="text-3xl">
          Enter your destination and dates — we’ll generate your custom packing and task list.
        </h2>
      </article>
      <article className="w-8/12">
        <form className="flex flex-col items-center gap-8 w-full">
          <input 
            type="text"
            placeholder="Destination"
            className="w-full border border-[#D9D9D9] rounded-2xl p-4 placeholder-[#D9D9D9]"
          />
          <input 
            type="date"
            placeholder="Destination"
            className="w-full border border-[#D9D9D9] rounded-2xl p-4 placeholder-[#D9D9D9] text-[#D9D9D9]"
          />
          <button 
            type="submit" 
            className="w-1/3 p-4 rounded-xl text-white font-bold cursor-pointer 
              transition-all duration-300 ease-in-out hover:-traslate-0.5 hover:shadow-xl
              hover:shadow-shadow-button-hover"
          >
            Generate
          </button>
        </form>
      </article>
    </section>
  )
}

export default Hero