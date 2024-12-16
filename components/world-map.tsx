'use client'

import { Circle } from 'lucide-react'

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

export function WorldMap() {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] mt-8">
      {/* Dots background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(50,1fr)] gap-4 opacity-20">
        {[...Array(250)].map((_, i) => (
          <Circle key={i} className="w-2 h-2 text-gray-600" />
        ))}
      </div>

      {/* Location markers */}
      {locations.map((location) => (
        <div
          key={location.name}
          className="absolute flex items-center gap-2 animate-pulse"
          style={{
            left: `${location.x}%`,
            top: `${location.y}%`,
          }}
        >
          <span className="text-xl">{location.flag}</span>
          <span className="text-white text-sm font-medium bg-[#1a1c2e] px-2 py-1 rounded">
            {location.name}
          </span>
        </div>
      ))}
    </div>
  )
}

