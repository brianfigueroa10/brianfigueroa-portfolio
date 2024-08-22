interface Project {
  image: string
  title: string
  url: string
  github?: string | null
  description: string
  technologies: string[]
}

interface ProjectCardProps {
  project: Project
}

//export default function ProjectCard({ project }: ProjectCardProps) {
//  return (
//    <div className="mb-8 flex flex-col  relative w-96  rounded-lg bg-[#4c2904]  hover:scale-105 transition-all  ease-in-out">
//      <img
//        src={project.image}
//        width={200}
//        height={200}
//        alt={project.title}
//        className="rounded-t-lg object-top object-cover w-full h-40 "
//      />

//      <div className="w-full z-10 flex p-4 justify-end  flex-col  ">
//        <div className="flex projects-center gap-3">
//          <a href={project.url}>
//            <h6 className="font-semibold text-xl hover:underline cursor-pointer">
//              {project.title}
//            </h6>
//          </a>
//          <a href={project.github || '#'}>Github</a>
//        </div>

//        <p className="mb-4 text-neutral-400 text-sm">{project.description}</p>
//        <div className=" flex max-w-80 flex-wrap gap-1 ">
//          {project.technologies.map((tech: string) => (
//            <span className="lg:mr-2 rounded px-2 py-1 text-sm font-medium text-purple-100  bg-slate-500 bg-opacity-20">
//              {tech}
//            </span>
//          ))}
//        </div>
//      </div>
//    </div>
//  )
//}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon, LucideGithub } from 'lucide-react'

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      key={project.title}
      className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl bg-white   border-orange-200 dark:border-orange-800">
      <CardHeader className="p-0">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent p-4 uppercase">
        {project.title}
      </CardTitle>
      <CardContent className="flex-grow p-4">
        <CardDescription className="text-gray-600 dark:text-orange-800 mb-4">
          {project.description}
        </CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tag => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-orange-100 text-orange-800">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-around p-4 bg-orange-50 ">
        <Button
          asChild
          variant="outline"
          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon className="mr-2 h-4 w-4" />
            Live Demo
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors">
          <a
            href={project.github || '#'}
            target="_blank"
            rel="noopener noreferrer">
            <LucideGithub className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
