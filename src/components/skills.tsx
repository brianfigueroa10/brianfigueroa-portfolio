import AngularIcon from './icons/angular'
import { CssIcon } from './icons/css'
import { GitIcon } from './icons/git'
import { Github2Icon } from './icons/Github2'
import { HtmlIcon } from './icons/html'
import { JavascriptIcon } from './icons/javascript'
import { MongoIcon } from './icons/mongo'
import NextJsIcon from './icons/next'
import NodejsIcon from './icons/node'

import { ReactIcon } from './icons/react'
import { SupabaseIcon } from './icons/supabase'
import { TailwindIcon } from './icons/tailwind'
import { TypescriptIcon } from './icons/typescript'
import VueIcon from './icons/vue'

export default function Skills() {
  return (
    <section className="w-full flex flex-col items-center my-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start max-lg:gap-8 justify-between w-10/12  gap-12">
        <h2 className="text-orange-400 text-3xl font-bold lg:text-6xl uppercase animated-p">
          Skills
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-7 icon-container max-lg:w-11/12 max-w-md animated-img">
          {icons.map((icon, index) => {
            const Icon = icon.component
            return (
              <div className="">
                <Icon key={index} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const icons = [
  { name: 'HtmlIcon', component: HtmlIcon },
  { name: 'CssIcon', component: CssIcon },
  { name: 'JavascriptIcon', component: JavascriptIcon },
  { name: 'TypescriptIcon', component: TypescriptIcon },
  { name: 'ReactIcon', component: ReactIcon },
  { name: 'NextJsIcon', component: NextJsIcon },
  { name: 'AngularIcon', component: AngularIcon },
  { name: 'VueIcon', component: VueIcon },
  { name: 'GitIcon', component: GitIcon },
  { name: 'Github2Icon', component: Github2Icon },
  { name: 'MongoIcon', component: MongoIcon },
  { name: 'SupabaseIcon', component: SupabaseIcon },
  { name: 'NodeIcon', component: NodejsIcon },
  { name: 'TailwindIcon', component: TailwindIcon },
]
