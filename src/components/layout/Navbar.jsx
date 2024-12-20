import { NavLink } from "react-router";
import { House, Menu, Milestone } from 'lucide-react'
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
const navLinks = [
  {
    path: "/",
    label: "Accueil",
    Icon: <House size={20} />
  },
  {
    path: "/about",
    label: "A propos",
    Icon: <Milestone size={20} />
  }
]
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Inverser le boolean pour afficher/cacher le menu
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navRef = useRef();
  useEffect(() => {
    function scrollEvent() {
      if (window.scrollY > 200) {
        navRef.current.style.opacity = "0";
      }else{
        navRef.current.style.opacity = "100%";
      }
    }
    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])
  return (
    <nav ref={navRef} className="bg-primary flex justify-between p-2 sticky top-0 transition-all">
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
              <div className="flex gap-2 items-center">
                {link.Icon}
                <span>
                  {link.label}
                </span>
              </div>
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
