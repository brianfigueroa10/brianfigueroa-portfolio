import { projects } from './data'
import ProjectCard from './proyect-card'

export default function Projects() {
  return (
    <section className="w-full flex flex-col items-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 py-28 ">
      <div className=" mx-auto flex flex-col gap-9  w-10/12 justify-between items-center ">
        <h2 className="text-orange-400  text-3xl text-center p-4 font-bold lg:text-6xl uppercase animated-p">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-between gap-8">
          {projects.slice(0, 6).map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <a
          href="/projects"
          className=" p-4 py-2 rounded-md text-xl bg-black text-white w-fit">
          Ver Más ⮕
        </a>
      </div>
    </section>
  )
}
