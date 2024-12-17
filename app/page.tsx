'use client'

import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/components/navigation-menu"
import { ServiceCard } from "@/components/service-card"
import { EnhancedWorldMap } from "@/components/enhanced-world-map"
import { Cpu, Shield, Gauge, Server } from 'lucide-react'
import { PricingSection } from "@/components/pricing-section"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useEffect } from "react"


export default function Page() {
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
    <div className="min-h-screen bg-[#0a0b14]">
      <NavigationMenu />
      
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(10,11,20,1) 100%), url('https://i.pinimg.com/736x/c8/3e/8c/c83e8cdb08a510522db1dbe43e1c49c5.jpg')`
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 pt-24 md:pt-32 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Minecraft Hosting
            </motion.h1>
            <motion.p 
              className="text-gray-200 text-lg md:text-xl mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Phoenix host offers high-performance Minecraft hosting for smooth, reliable gameplay.
            </motion.p>
            
            <motion.div 
              className="mb-8 md:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-white mb-2">Servers start at</p>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#7c3aed] text-3xl md:text-4xl font-bold">$1.00</span>
                <span className="text-gray-200">per / Month</span>
              </div>
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105">
                SEE MORE
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="absolute bottom-0 md:bottom-12 left-0 right-0 mb-4 md:mb-0">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-2xl mx-auto">
              <ServiceCard 
                title="Minecraft"
                description="Starting at $1.00"
                icon="game"
              />
              <ServiceCard 
                title="Discord Hosting"
                description="Premium hosting solutions"
                icon="discord"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0a0b14]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Cutting-Edge Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover unparalleled server management and security for a superior hosting experience with Phoenix host
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
            {[
              { icon: Cpu, title: "High Performance", description: "Powered by latest gen processors for optimal gameplay" },
              { icon: Shield, title: "DDoS Protection", description: "Enterprise-grade security against attacks" },
              { icon: Gauge, title: "Low Latency", description: "Global network ensures minimal lag" },
              { icon: Server, title: "Instant Setup", description: "Get your server running in minutes" }
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="bg-[#1a1c2e] p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#7c3aed]/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#7c3aed]" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white text-sm md:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Global Network Section */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              Global low latency network
            </h2>
            <p className="text-white">
              Discover our expansive server locations worldwide. Test ping and find the perfect hosting spot for your project.
            </p>
          </motion.div>
          <EnhancedWorldMap />
        </div>
      </section>
      <PricingSection />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
  )
}

