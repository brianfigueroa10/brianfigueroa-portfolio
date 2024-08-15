import { projects } from '../components/data'
import ProjectCard from '../components/proyect-card copy'

export default function AllProjects() {
  return (
    <div
      className="flex mt-24 flex-col  items-center justify-evenly gap-10"
      id="projects">
      <h2 className="text-orange-400 text-3xl lg:text-6xl uppercase">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24  ">
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
