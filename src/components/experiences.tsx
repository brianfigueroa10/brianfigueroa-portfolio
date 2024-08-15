import { experiences } from './data'

export default function Experiences() {
  return (
    <div className="flex mt-24 flex-col lg:flex-row items-center lg:items-start max-lg:gap-8 justify-between w-11/12 lg:w-full">
      <h2 className="text-orange-400 text-3xl lg:text-6xl uppercase animated-p">
        Experiencia
      </h2>
      <div className="flex flex-col items-end">
        {experiences.map(experience => (
          <article className="mb-8 flex flex-col max-w-xl bg-orange-900/10 p-4 rounded-lg animated-img">
            <header className="flex justify-between w-full max-lg:flex-col">
              <div className="mb-2 text-2xl font-bold flex items-center gap-3 text-orange-200">
                {experience.role} -{' '}
                <small className="text-base font-normal text-purple-100">
                  {experience.company}
                </small>
              </div>
              <span className="mb-2 text-base text-neutral-400">
                {experience.year}
              </span>
            </header>
            <aside className="w-full max-w-xl lg:w-3/4 items-start">
              <p className="mb-4 text-neutral-300">{experience.description}</p>
            </aside>
          </article>
        ))}
      </div>
    </div>
  )
}
