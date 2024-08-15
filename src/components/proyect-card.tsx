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
    <div className="mb-8 flex flex-col  relative w-96  rounded-lg bg-[#4c2904]  hover:scale-105 transition-all  ease-in-out">
      <img
        src={project.image}
        width={200}
        height={200}
        alt={project.title}
        className="rounded-t-lg object-top object-cover w-full h-40 "
      />

      <div className="w-full z-10 flex p-4 justify-end  flex-col  ">
        <div className="flex items-center gap-3">
          <a href={project.url}>
            <h6 className="font-semibold text-xl hover:underline cursor-pointer">
              {project.title}
            </h6>
          </a>
          <a href={project.github || '#'}>Github</a>
        </div>

        <p className="mb-4 text-neutral-400 text-sm">{project.description}</p>
        <div className=" flex max-w-80 flex-wrap gap-1 ">
          {project.technologies.map((tech: string) => (
            <span className="lg:mr-2 rounded px-2 py-1 text-sm font-medium text-purple-100  bg-slate-500 bg-opacity-20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
