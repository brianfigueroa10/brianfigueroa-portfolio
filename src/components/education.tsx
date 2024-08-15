import { education } from './data'

export default function Exducacion() {
  return (
    <div className="flex mt-24 flex-col lg:flex-row items-center lg:items-start max-lg:gap-8 justify-between w-full max-lg:w-11/12">
      <h2 className="text-orange-400 text-3xl lg:text-6xl uppercase animated-p">
        Educación
      </h2>
      <ul>
        {education.map(({ institution, area, endDate, startDate }) => {
          return (
            <li>
              <article className="flex my-6 first:mt-2 justify-between items-start mb-8  flex-col max-w-xl bg-orange-900/10 p-4 rounded-lg animated-img">
                <div>
                  <h3 className="font-bold text-xl text-orange-200">{area}</h3>
                  <p className="font-semibold text-base ">{institution}</p>
                </div>
                <div>
                  <time dateTime={startDate} data-title={startDate}>
                    {startDate}
                  </time>
                  {' - '}
                  <time dateTime={endDate} data-title={endDate}>
                    {endDate}
                  </time>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
