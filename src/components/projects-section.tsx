import { projects } from './data'
import ProjectCard from './proyect-card'
import { Button } from './ui/button'

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center py-36 relative">
      <div className="absolute top-0 left-0 w-full h-full z-0 image-efect bg-gradient-to-br from-orange-50 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 py-36" />
      <div className="mx-auto flex flex-col gap-9 w-10/12 justify-between items-center z-40">
        <h2 className="text-orange-400 z-10 text-3xl text-center p-4 font-bold lg:text-6xl uppercase animated-p">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-8">
          {projects.slice(0, 6).map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <Button
          asChild
          variant="default"
          className="border-orange-500 transition-colors">
          <a href="/projects">Ver Más ⮕</a>
        </Button>
      </div>
    </section>
  )
}
