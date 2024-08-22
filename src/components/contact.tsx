import { Github, Linkedin, Mail } from 'lucide-react'
import WhatsappIcon from './icons/whatsapp'

export default function Contact() {
  return (
    <section className="w-full flex flex-col items-center relative py-36  ">
      <div className="absolute top-0 left-0 w-full h-full z-0 image-efect bg-gradient-to-br from-orange-50 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 py-36" />
      <div
        className="flex  flex-col lg:flex-row items-center justify-around w-11/12 lg:w-full gap-8 z-20"
        id="contact">
        <h2 className="text-orange-400 text-3xl font-bold lg:text-6xl uppercase animated-p">
          Contacto
        </h2>
        <article>
          <div className="flex flex-wrap items-center justify-center  gap-12 rounded-lg animated-img">
            {socialLinks.map(({ icon, name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center text-center gap-2 justify-center ">
                <span className="w-6 h-6">{icon}</span>

                <h4>{name}</h4>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

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
