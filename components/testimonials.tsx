import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Alex",
    role: "Minecraft Server Owner",
    content: "Phoenix Host has been a game-changer for my Minecraft community. The performance is unmatched, and their support team is always there when I need them.",
  },
  {
    name: "Sarah",
    role: "Gaming Enthusiast",
    content: "I've tried several hosting providers, but Phoenix Host stands out. The server uptime is incredible, and I've never experienced lag issues.",
  },
  {
    name: "Mike",
    role: "Twitch Streamer",
    content: "As a streamer, server reliability is crucial. Phoenix Host delivers consistently smooth performance, allowing me to focus on creating content.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-[#0a0b14]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1c2e] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-300 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#7c3aed] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

