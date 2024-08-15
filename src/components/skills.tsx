import AngularIcon from './icons/angular'
import { CssIcon } from './icons/css'
import { GitIcon } from './icons/git'
import { Github2Icon } from './icons/Github2'
import { HtmlIcon } from './icons/html'
import { JavascriptIcon } from './icons/javascript'
import { MongoIcon } from './icons/mongo'
import NextJsIcon from './icons/next'
import NodeIcon from './icons/node'

import { ReactIcon } from './icons/react'
import { SupabaseIcon } from './icons/supabase'
import { TailwindIcon } from './icons/tailwind'
import { TypescriptIcon } from './icons/typescript'
import VueIcon from './icons/vue'

export default function Skills() {
  return (
    <div className="flex mt-24 flex-col lg:flex-row items-center justify-between gap-10 w-full">
      <h2 className="text-orange-400 text-3xl lg:text-6xl uppercase animated-p">
        Skills
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-7 icon-container max-lg:w-11/12 max-w-md animated-img">
        {icons.map((icon, index) => {
          const Icon = icon.component
          return (
            <div className="brightness-75 hover:brightness-100">
              <Icon key={index} />
            </div>
          )
        })}
      </div>
    </div>
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
  { name: 'NodeIcon', component: NodeIcon },
  { name: 'TailwindIcon', component: TailwindIcon },
]
