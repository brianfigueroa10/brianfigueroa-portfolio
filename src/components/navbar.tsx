const links = [
  { name: 'Sobre Mi', href: '#about' },
  { name: 'Projectos', href: '#projects' },
  { name: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="flex fixed top-0 w-full items-center justify-around left-0 py-4 backdrop-blur-sm bg-black/50 z-50">
      <a href="/">
        <h2 className="font-mono items-center text-center hover:text-orange-200">
          Brian Figueroa
        </h2>
      </a>
      <nav className="flex gap-5 items-center max-sm:hidden justify-center">
        {links.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="text-orange-200 hover:text-orange-400">
            {name}
          </a>
        ))}
      </nav>
    </header>
  )
}
