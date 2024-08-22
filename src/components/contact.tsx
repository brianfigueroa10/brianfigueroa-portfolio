export default function Contact() {
  return (
    <section className="w-full flex flex-col items-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 py-28 ">
      <div
        className="flex  flex-col lg:flex-row items-center justify-around w-11/12 lg:w-full gap-8"
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
                className="flex items-center gap-4 ">
                <span></span>
                <img
                  src={icon}
                  alt={name}
                  className="w-8 h-8 rounded-full bg-transparent "
                />
                <span>{name}</span>
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
    icon: '/email.svg',
    name: 'Email',
    url: ' `mailto:bryan09figueroa@gmail.com`',
  },
  {
    icon: '/github.svg',
    name: 'GitHub',
    url: 'https://github.com/brianfigueroa10',
  },
  {
    icon: '/linkedin.svg',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/brian-fig/',
  },
  {
    icon: '/whatsapp.svg',
    name: 'WhatsApp',
    url: 'https://wa.link/mpo5aa',
  },
]
