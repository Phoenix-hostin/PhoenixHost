import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: "game" | "discord"
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <motion.div 
      className="bg-[#1a1c2e] p-4 md:p-6 rounded-lg flex items-center space-x-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {icon === "game" ? (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3f9142] rounded-lg flex items-center justify-center flex-shrink-0">
          <motion.img 
            src="https://i.pinimg.com/474x/9f/ec/7d/9fec7dff793a56ad550d17e1a0c26031.jpg" 
            alt="Minecraft"
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ) : (
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#5865F2] rounded-lg flex items-center justify-center flex-shrink-0">
          <motion.img 
            src="https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg" 
            alt="Discord"
            className="w-6 h-6 md:w-8 md:h-8 object-contain"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      )}
      <div>
        <h3 className="text-white font-semibold text-base md:text-lg">{title}</h3>
        <p className="text-white text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  )
}

