import { BriefcaseIcon } from 'lucide-react'
import { experiences } from './data'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function Experiences() {
  return (
    <section className="w-full flex flex-col items-center ">
      <div className="flex mt-24 flex-col lg:flex-row items-center lg:items-start max-lg:gap-8 justify-between w-10/12  gap-12">
        <h2 className="text-orange-400 text-3xl font-bold lg:text-6xl uppercase animated-p">
          Experiencia
        </h2>
        <div className="relative border-l-4 max-w-xl border-orange-500 dark:border-orange-400 ml-3">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full -left-3 ring-8 ring-white dark:ring-orange-900">
                <BriefcaseIcon className="w-3 h-3 text-white" />
              </span>
              <Card className="border-none shadow-lg   transition-all duration-300 hover:shadow-xl bg-white   border-orange-200 dark:border-orange-800 rounded-md">
                <CardHeader className="flex flex-col sm:flex-row justify-between   bg-gradient-to-r from-orange-400 to-orange-600 rounded-md text-white p-3 items-center justify-items-center">
                  <CardTitle className="text-xl font-semibold mb-2 sm:mb-0 space-y-0 p-0">
                    {exp.role}
                  </CardTitle>
                  <div className="flex items-center text-sm mt-0">
                    {exp.year}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2 gap-1">
                    <BriefcaseIcon className="mr-1 h-4 w-4 self-center" />
                    <h4 className="text-xl font-medium text-orange-600 dark:text-orange-400 ">
                      {exp.company}
                    </h4>
                  </div>
                  <p className="text-base font-normal text-gray-600 dark:text-orange-800">
                    {exp.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>{' '}
      </div>
    </section>
  )
}
