import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'

interface PlanProps {
  name: string
  price: string
  features: string[]
  type: 'minecraft' | 'vps'
  index: number
}

const Plan = ({ name, price, features, index }: PlanProps) => (
  <motion.div 
    className="bg-gradient-to-br from-[#2a2c42] to-[#1a1c2e] p-6 rounded-lg flex flex-col shadow-lg border border-[#3a3b5a]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-white font-semibold text-xl mb-2">{name}</h3>
    <div className="text-white text-3xl font-bold mb-4">{price}</div>
    <ul className="mb-6 flex-grow">
      {features.map((feature, index) => (
        <motion.li 
          key={index} 
          className="text-gray-300 mb-2 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <svg className="w-4 h-4 mr-2 text-[#7c3aed]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          {feature}
        </motion.li>
      ))}
    </ul>
    <Button 
      className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all duration-300 hover:scale-105"
      onClick={() => window.open('https://discord.com/invite/phoenixhosting', '_blank')}
    >
      Choose Plan
    </Button>
  </motion.div>
)

export function PricingSection() {
  const minecraftPlans = [
    {
      name: "DIRT PLAN",
      price: "₹350 / $4.13 / €3.91",
      features: ["4GB RAM", "100% CPU", "20GB SSD", "Germany Location", "24/7 Online Servers"]
    },
    {
      name: "STONE PLAN",
      price: "₹500 / $5.90 / €5.58",
      features: ["8GB RAM", "200% CPU", "35GB SSD", "Germany Location", "24/7 Online Servers"]
    },
    {
      name: "IRON PLAN",
      price: "₹700 / $8.74 / €8.27",
      features: ["12GB RAM", "300% CPU", "50GB SSD", "Germany Location", "24/7 Online Servers"]
    },
    {
      name: "DIAMOND PLAN",
      price: "₹1000 / $11.81 / €11.17",
      features: ["16GB RAM", "400% CPU", "65GB SSD", "Germany Location", "24/7 Online Servers"]
    },
    {
      name: "NETHERITE PLAN",
      price: "₹1350 / $15.94 / €15.08",
      features: ["24GB RAM", "500% CPU", "80GB SSD", "Germany Location", "24/7 Online Servers"]
    },
    {
      name: "BEDROCK PLAN",
      price: "₹1700 / $20.08 / €19.00",
      features: ["32GB RAM", "600% CPU", "100GB SSD", "Germany Location", "24/7 Online Servers"]
    }
  ]

  const vpsPlans = [
    {
      name: "VPS Sale",
      price: "₹875",
      features: ["8 Cores", "32GB RAM", "300GB SSD", "AMD EPYC Processor", "India Location", "Limited Stock: 3"]
    }
  ]

  return (
    <section className="py-20 bg-[#0a0b14] bg-opacity-50 bg-[url('/noise.png')] bg-repeat">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Hosting Plans
        </motion.h2>
        
        <div id="minecraft-pricing" className="mb-16 pt-16">
          <motion.h3 
            className="text-2xl font-semibold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Minecraft Hosting - AMD RYZEN 9
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {minecraftPlans.map((plan, index) => (
              <Plan key={index} {...plan} type="minecraft" index={index} />
            ))}
          </div>
        </div>

        <div id="vps-pricing" className="pt-16">
          <motion.h3 
            className="text-2xl font-semibold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VPS Hosting
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-8">
            {vpsPlans.map((plan, index) => (
              <Plan key={index} {...plan} type="vps" index={index} />
            ))}
          </div>
          <motion.p
            className="text-white mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            To purchase a VPS plan, please create a ticket.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

