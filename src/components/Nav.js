'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav>
      <Link href="/" className="nav-name">Nikki Mehrjerdian</Link>
      <ul className="nav-links">
        <li><Link href="/" className={pathname === '/' ? 'active' : ''}>Work</Link></li>
        <li><Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
      </ul>
    </nav>
  )
}
