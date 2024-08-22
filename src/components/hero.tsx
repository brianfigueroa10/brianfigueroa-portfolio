import { Github, Linkedin, Mail } from 'lucide-react'
import WhatsappIcon from './icons/whatsapp'

const socialLinks = [
  {
    icon: <Mail />,
    name: 'Email',
    url: ' `mailto:bryan09figueroa@gmail.com`',
  },
  {
    icon: <Github />,
    name: 'GitHub',
    url: 'https://github.com/brianfigueroa10',
  },
  {
    icon: <Linkedin />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/brian-fig/',
  },
  {
    icon: <WhatsappIcon />,
    name: 'WhatsApp',
    url: 'https://wa.link/mpo5aa',
  },
]

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="flex justify-between mx-auto flex-col lg:flex-row items-center w-10/12 mt-24 gap-8">
        <div className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-start">
          <div>
            <h1 className="text-7xl font-bold -tracking-wide uppercase  animated-h2 ">
              Brian
              <span className="ml-3 text-orange-600 dark:text-orange-500">
                Figueroa
              </span>
            </h1>
            <p className="text-3xl mt-5 text-orange-400 font-semibold animated-span">
              Desarrollador Frontend
            </p>
          </div>
          <span className="animated-p">Buenos Aires, Argentina</span>

          <div className="flex gap-6 rounded-lg">
            {socialLinks.map(({ icon, name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center justify-center text-center">
                <span className="w-6 h-6  hover:text-orange-500">{icon}</span>
              </a>
            ))}
          </div>
        </div>
        <img
          src="/perfil.webp"
          alt="photo"
          className="w-11/12 md:w-96 rounded-2xl  shadow-2xl shadow-orange-800/60 animated-img"
        />
      </div>
    </section>
  )
}
