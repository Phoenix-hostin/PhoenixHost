'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from 'lucide-react'

export function NavigationMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.currentTarget as HTMLAnchorElement
      const targetId = target.getAttribute('href')?.slice(1)
      const targetElement = document.getElementById(targetId || '')
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const scrollLinks = document.querySelectorAll('a[href^="#"]')
    scrollLinks.forEach(link => {
      link.addEventListener('click', handleScroll)
    })

    return () => {
      scrollLinks.forEach(link => {
        link.removeEventListener('click', handleScroll)
      })
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#7c3aed] rounded-md flex items-center justify-center">
              <span className="text-white text-xl font-bold">P</span>
            </div>
            <span className="text-white font-bold text-xl">Phoenix host</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Navigation */}
          <nav className={`${
            mobileMenuOpen ? 'block' : 'hidden'
          } absolute top-16 left-0 right-0 bg-[#1a1c2e] md:bg-transparent md:static md:flex items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0`}>
            <Link href="/" className="block text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="#minecraft-pricing" className="block text-white hover:text-gray-300">
              Minecraft Hosting
            </Link>
            <Link href="#vps-pricing" className="block text-white hover:text-gray-300">
              Other Hosting
            </Link>
            <a href="https://discord.gg/phoenixhosting" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-gray-300">
              Important
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:block bg-[#7c3aed] hover:bg-[#6d28d9] text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

