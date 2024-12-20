import { NavLink } from "react-router";
import { Menu } from 'lucide-react'
import { useState } from "react";
const navLinks = [
  {
    path: "/",
    label: "Accueil"
  },
  {
    path: "/about",
    label: "A propos"
  }
]
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Inverser le boolean pour afficher/cacher le menu
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-primary flex justify-between p-2 relative">
      <ul
        className={
          `bg-neutral-200 flex flex-col absolute top-10 w-full h-screen p-4 transition-all 
          ${isMenuOpen ? '-left-0' : '-left-full'}
          md:relative md:flex-row md:top-0 md:h-auto md:bg-primary md:w-auto md:p-2
          `}>
        {
          navLinks.map((link) => (
            <NavLink
              className={({ isActive }) => isActive ? 'underline' : ""}
              key={link.path}
              to={link.path}
            >
              {link.label}
            </NavLink>
          ))
        }
      </ul>
      <Menu color="white" onClick={handleMenu} className="md:hidden" />
    </nav>
  )
}

// TP 1:
// Implémenter une barre de navigation responsive
