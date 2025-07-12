import { type ReactElement } from "react"

export interface FeatureProps {
  icon: ReactElement
  title: string
  subtitle: string
}

function Feature({ icon, title, subtitle }: FeatureProps) {
  return (
    <article className="w-full flex flex-col items-center justify-center gap-8 text-gray-500">
      {icon}
      <div className="flex flex-col gap-1 items-center">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm font-light text-center text-pretty">{subtitle}</p>
      </div>
    </article>
  )
}

export default Feature