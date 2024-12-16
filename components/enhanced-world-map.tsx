'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Location {
  name: string
  flag: string
  x: number
  y: number
}

const locations: Location[] = [
  { name: "Germany", flag: "🇩🇪", x: 48, y: 25 },
  { name: "India", flag: "🇮🇳", x: 70, y: 45 },
  { name: "Singapore", flag: "🇸🇬", x: 75, y: 55 }
]

export function EnhancedWorldMap() {
  return (
    <motion.div 
      className="relative w-full h-[500px] overflow-hidden bg-[#0a0b14] rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* World Map SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M78,179 L86,176 L94,178 L101,174 L107,175 L110,180 L116,176 L118,180 L124,183 L128,187 L134,189 L138,194 L144,198 L147,204 L152,206 L158,208 L163,211 L167,215 L171,220 L175,225 L179,231 L184,236 L188,241 L193,246 L198,251 L203,255 L208,259 L213,263 L218,267 L223,271 L228,275 L233,279 L238,283 L243,287 L248,291 L253,295 L258,299 L263,303 L268,307 L273,311 L278,315 L283,319 L288,323 L293,327 L298,331 L303,335 L308,339 L313,343 L318,347 L323,351 L328,355 L333,359 L338,363 L343,367 L348,371 L353,375 L358,379 L363,383 L368,387 L373,391 L378,395 L383,399 L388,403 L393,407 L398,411 L403,415 L408,419 L413,423 L418,427 L423,431 L428,435 L433,439 L438,443 L443,447 L448,451 L453,455 L458,459 L463,463 L468,467 L473,471 L478,475 L483,479 L488,483 L493,487 L498,491 L503,495 L508,499 L513,503 L518,507 L523,511 L528,515 L533,519 L538,523 L543,527 L548,531 L553,535 L558,539 L563,543 L568,547 L573,551 L578,555 L583,559 L588,563 L593,567 L598,571 L603,575 L608,579 L613,583 L618,587 L623,591 L628,595 L633,599 L638,603 L643,607 L648,611 L653,615 L658,619 L663,623 L668,627 L673,631 L678,635 L683,639 L688,643 L693,647 L698,651 L703,655 L708,659 L713,663 L718,667 L723,671 L728,675 L733,679 L738,683 L743,687 L748,691 L753,695 L758,699 L763,703 L768,707 L773,711 L778,715 L783,719 L788,723 L793,727 L798,731 L803,735 L808,739 L813,743 L818,747 L823,751 L828,755 L833,759 L838,763 L843,767 L848,771 L853,775 L858,779 L863,783 L868,787 L873,791 L878,795 L883,799 L888,803 L893,807 L898,811 L903,815 L908,819 L913,823 L918,827 L923,831 L928,835 L933,839 L938,843 L943,847 L948,851 L953,855 L958,859 L963,863 L968,867 L973,871 L978,875 L983,879 L988,883 L993,887 L998,891"
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </svg>

      {/* Animated particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#7c3aed] rounded-full"
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0
          }}
          animate={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      ))}

      {/* Location markers */}
      {locations.map((location) => (
        <motion.div
          key={location.name}
          className="absolute flex items-center gap-2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
          }}
        >
          <span className="text-xl">{location.flag}</span>
          <motion.span 
            className="text-white text-sm font-medium bg-[#1a1c2e] px-2 py-1 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {location.name}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  )
}

