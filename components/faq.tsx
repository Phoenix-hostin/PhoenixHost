import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "How do I get started with Phoenix Host?",
    answer: "Getting started is easy! Simply choose a plan that suits your needs, complete the checkout process, and you'll receive instructions to set up your server immediately.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 customer support through our Discord channel. Our team of experts is always ready to assist you with any questions or issues you may have.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "You can upgrade your plan at any time. The process is seamless and ensures minimal downtime for your server.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 24-hour money-back guarantee. If you're not satisfied with our service within the first 24 hours, you can request a full refund.",
  },
]

export function FAQ() {
  return (
    <section className="py-16 bg-[#0a0b14]">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-white mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      className="border border-[#3a3b5a] rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        className="flex justify-between items-center w-full p-4 text-left bg-[#1a1c2e] hover:bg-[#2a2c42] transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white font-semibold">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#7c3aed]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#7c3aed]" />
        )}
      </button>
      {isOpen && (
        <div className="p-4 bg-[#1a1c2e]">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </motion.div>
  )
}

