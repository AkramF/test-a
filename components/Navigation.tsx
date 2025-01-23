"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Instagram, Linkedin, Facebook, Youtube, PinIcon as Pinterest, Mail } from "lucide-react"

const languages = ["DE", "EN", "ES", "FR", "NL"]
const menuItems = [
  { name: "Basalte Home", href: "/" },
  { name: "produits", href: "/produits" },
  { name: "réalisations", href: "/realisations" },
  { name: "notre histoire", href: "/notre-histoire" },
  { name: "emplois", href: "/emplois" },
  { name: "contact", href: "/contact" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Pinterest, href: "#", label: "Pinterest" },
  { icon: Mail, href: "#", label: "Email" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="flex justify-between items-center px-8 py-6">
        <Link href="/" className="text-white flex items-center space-x-2">
          <span className="text-2xl font-light">basalte</span>
          <span className="text-sm font-light hidden md:inline">design for your intelligent home</span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              className="text-white w-8 h-8 flex flex-col justify-center items-center space-y-1.5"
              aria-label="Menu"
            >
              <span className="w-6 h-px bg-white"></span>
              <span className="w-6 h-px bg-white"></span>
              <span className="w-6 h-px bg-white"></span>
            </button>
          </SheetTrigger>
          <SheetContent side="full" className="w-full bg-black/95 border-none p-0">
            <div className="h-full flex">
              <div className="w-32 pt-20 pl-8">
                {languages.map((lang) => (
                  <button key={lang} className="block text-gray-400 hover:text-white transition-colors mb-4 text-sm">
                    {lang}
                  </button>
                ))}
              </div>

              <div className="flex-1 flex flex-col justify-between pt-20 px-8">
                <div>
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-white text-3xl font-light mb-6 hover:text-gray-300 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                <div className="flex space-x-6 mb-8">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="text-white hover:text-gray-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

