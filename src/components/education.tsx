import { education } from './data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCapIcon } from 'lucide-react'

export default function Exducacion() {
  return (
    <section className="w-full flex flex-col items-center  py-36 relative  ">
      <div className="absolute top-0 left-0 w-full h-full z-0 image-efect bg-gradient-to-br from-orange-50 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 py-36" />
      <div className="flex  flex-col lg:flex-row items-center lg:items-start max-lg:gap-8 justify-between w-10/12 gap-12 z-10">
        <h2 className="text-orange-400 text-3xl font-bold lg:text-6xl uppercase animated-p">
          Educación
        </h2>
        <div className="relative border-l-4 max-w-xl border-orange-500 dark:border-orange-400 ml-3">
          {education.map(({ institution, area, endDate, startDate }, index) => (
            <div key={index} className="mb-8 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full -left-3 ring-8 ring-white dark:ring-orange-900">
                <GraduationCapIcon className="w-3 h-3 text-white" />
              </span>
              <Card className="border-none shadow-lg   transition-all duration-300 hover:shadow-xl bg-white   border-orange-200 dark:border-orange-800 rounded-md">
                <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-2 bg-gradient-to-r from-orange-400 py-2 px-4 rounded-md to-orange-600 text-white">
                  <CardTitle className="text-xl font-semibold mb-2 sm:mb-0">
                    {institution}
                  </CardTitle>
                  <div className="flex items-center text-sm">
                    <GraduationCapIcon className="mr-1 h-4 w-4" />
                    {startDate} - {endDate}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <h4 className="text-lg font-medium text-orange-600 dark:text-orange-400 mb-2">
                    {area}
                  </h4>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
