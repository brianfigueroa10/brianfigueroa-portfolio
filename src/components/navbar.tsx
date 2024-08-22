import { ModeToggle } from './ui/mode-toogle'

const links = [
  { name: 'Sobre Mi', href: '#about' },
  { name: 'Projectos', href: '/projects' },
  { name: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="flex fixed top-0 w-full items-center justify-around left-0 py-4 backdrop-blur-sm bg-orange/50 z-50">
      <a href="/">
        <h2 className="font-mono items-center text-center uppercase hover:text-orange-900">
          Brian Figueroa
        </h2>
      </a>
      <nav className="flex gap-5 items-center max-sm:hidden justify-center">
        {links.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            className="text-foreground hover:text-orange-950 dark:hover:text-orange-400 font-semibold">
            {name}
          </a>
        ))}
      </nav>
      <ModeToggle />
    </header>
  )
}
