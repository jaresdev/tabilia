import { ListChecks, Search, Map } from "lucide-react"
import Feature from "./Feature"

function Features() {
  return(
    <section className="w-full flex justify-center bg-slate-50 border-t-gray-200 p-10">
      <article className="max-w-7xl flex flex-col gap-16 items-center justify-center">
        <h3 className="font-bold text-2xl">Know your options</h3>
        <div className="flex gap-40">
          <Feature
            icon={
              <Search className="size-14" />
            }
            title="Smart packing list" 
            subtitle="Never forget what to bring"
          />
          <Feature
            icon={
              <ListChecks className="size-14" />
            }
            title="Task checklist for your trip" 
            subtitle="Know exactly what to do before, during, after"
          />
          <Feature
            icon={
              <Map className="size-14" />
            }
            title="Stress-free preparation" 
            subtitle="Enjoy the trip, we’ll handle the planning"
          />
        </div>
      </article>
    </section>
  )
}

export default Features