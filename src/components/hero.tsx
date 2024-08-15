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

export default function Hero() {
  return (
    <section className="flex justify-between flex-col lg:flex-row items-center w-full mt-24 gap-8">
      <div className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-start">
        <div>
          <h1 className="text-6xl font-bold text-orange-500 animated-h2">
            Brian Figueroa
          </h1>
          <p className="text-3xl mt-5 text-orange-200 animated-span">
            Desarrollador Frontend
          </p>
        </div>
        <span className="animated-p">Buenos Aires, Argentina</span>
        <div className="flex gap-5 rounded-lg">
          {socialLinks.map(({ icon, name, url }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <img
                src={icon}
                alt={name}
                className="w-8 h-8 rounded-full bg-slate-50"
              />
            </a>
          ))}
        </div>
      </div>
      <img
        src="/perfil.webp"
        alt="photo"
        className="w-11/12 md:w-96 rounded-2xl  shadow-2xl shadow-neutral-900 animated-img"
      />
    </section>
  )
}
