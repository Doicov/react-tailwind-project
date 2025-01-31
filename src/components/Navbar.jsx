import {Menu, Users, X } from "lucide-react"
import { useState } from 'react' 
import logo from "../assets/logo.png"
import { navItems, navBarButtons } from "../constants"

const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toogleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen)
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                     <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                     <span className="text-xl tracking-tight">VirtualR</span>
                </div>
                <ul className="hidden lg:flex ml-12 space-x-12">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    {navBarButtons.map((button, index) => (
                        <a key={index} href={button.href} className={button.className}>
                            {button.text}
                        </a>
                    ))}
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toogleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-6 flex flex-col justify-center items-center lg:hidden">

                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-2">
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 py-2">
                        {navBarButtons.map((button, index) => (
                            <a key={index} href={button.href} className={button.className}>
                                {button.text}
                            </a>
                        ))}
                    </div>
                </div>
            )}

        </div>
    </nav>
  )
}

export default Navbar