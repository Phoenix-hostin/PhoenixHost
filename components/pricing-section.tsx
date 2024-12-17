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
    className="bg-[#1a1c2e] p-4 md:p-6 rounded-lg flex flex-col"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
  >
    <h3 className="text-white font-semibold text-lg md:text-xl mb-2">{name}</h3>
    <div className="text-[#7c3aed] text-2xl md:text-3xl font-bold mb-4">{price}<span className="text-sm text-white opacity-70">/mo</span></div>
    <ul className="mb-6 flex-grow">
      {features.map((feature, index) => (
        <motion.li 
          key={index} 
          className="text-white text-sm md:text-base mb-2 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <svg className="w-4 h-4 mr-2 text-[#7c3aed] flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M5 13l4 4L19 7"></path>
          </svg>
          <span>{feature}</span>
        </motion.li>
      ))}
    </ul>
    <Button className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white transition-all duration-300 hover:scale-105">
      Choose Plan
    </Button>
  </motion.div>
)

export function PricingSection() {
  const minecraftPlans = [
    {
      name: "Starter",
      price: "$1.99",
      features: ["1 GB RAM", "10 Player Slots", "Basic Support", "1 MySQL Database"]
    },
    {
      name: "Pro",
      price: "$4.99",
      features: ["4 GB RAM", "50 Player Slots", "24/7 Support", "Unlimited MySQL Databases"]
    },
    {
      name: "Elite",
      price: "$9.99",
      features: ["8 GB RAM", "100 Player Slots", "Priority Support", "Dedicated IP"]
    }
  ]

  const vpsPlans = [
    {
      name: "Basic VPS",
      price: "$5.99",
      features: ["1 vCPU", "2 GB RAM", "20 GB SSD", "1 TB Bandwidth"]
    },
    {
      name: "Standard VPS",
      price: "$10.99",
      features: ["2 vCPU", "4 GB RAM", "50 GB SSD", "2 TB Bandwidth"]
    },
    {
      name: "Premium VPS",
      price: "$19.99",
      features: ["4 vCPU", "8 GB RAM", "100 GB SSD", "5 TB Bandwidth"]
    }
  ]

  return (
    <section className="py-16 md:py-20 bg-[#0a0b14]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Hosting Plans
        </motion.h2>
        
        <div id="minecraft-pricing" className="mb-16 pt-8 md:pt-16">
          <motion.h3 
            className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Minecraft Hosting
          </motion.h3>
          <div className="grid gap-6 md:gap-8">
            {minecraftPlans.map((plan, index) => (
              <Plan key={index} {...plan} type="minecraft" index={index} />
            ))}
          </div>
        </div>

        <div id="vps-pricing" className="pt-8 md:pt-16">
          <motion.h3 
            className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VPS Hosting
          </motion.h3>
          <div className="grid gap-6 md:gap-8">
            {vpsPlans.map((plan, index) => (
              <Plan key={index} {...plan} type="vps" index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

