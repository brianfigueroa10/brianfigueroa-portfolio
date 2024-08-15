import { projects } from './data'
import ProjectCard from './proyect-card copy'

export default function Projects() {
  return (
    <div
      className="flex mt-24 flex-col  items-center justify-evenly gap-10"
      id="projects">
      <h2 className="text-orange-400 text-3xl lg:text-6xl uppercase">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-24  ">
        {projects.slice(0, 6).map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <a
        href="/all-projects"
        className="bg-black p-4 py-2 rounded-md text-xl hover:text-orange-200">
        Ver Más ⮕
      </a>
    </div>
  )
}
