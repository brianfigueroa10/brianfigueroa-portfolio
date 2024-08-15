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

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative flex flex-col mt-6 text-white bg-black/80 shadow-2xl shadow-neutral-500/20 bg-clip-border rounded-xl w-96">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img src={project.image} className="object-cover h-full" />
        <div className="bottom-1 left-16 flex gap-6 z-50 absolute">
          <a
            href={project.url}
            className="inline-block bg-orange-200 rounded px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Sitio Web
          </a>
          <a
            href={project.github || '#'}
            className="inline-block bg-black rounded px-3 py-1 text-sm font-semibold text-orange-200 mr-2 mb-2 ">
            Github
          </a>
        </div>
      </div>
      <div className="p-6 space-y-5">
        <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-orange-200">
          {project.title}
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          {project.description}
        </p>
        <div className=" flex max-w-80 flex-wrap gap-1 ">
          {project.technologies.map((tech: string) => (
            <span className="lg:mr-2 rounded px-2 py-1 text-sm font-medium text-white  bg-slate-500 bg-opacity-20">
              #{tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
