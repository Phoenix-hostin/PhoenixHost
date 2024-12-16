import { Facebook, Twitter, Instagram, GitlabIcon as GitHub } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#0a0b14] text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Phoenix Host</h3>
            <p className="text-gray-400">High-performance game hosting solutions for passionate gamers and communities.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#minecraft-pricing" className="text-gray-400 hover:text-white transition-colors">Minecraft Hosting</a></li>
              <li><a href="#vps-pricing" className="text-gray-400 hover:text-white transition-colors">VPS Hosting</a></li>
              <li><a href="https://discord.com/invite/phoenixhosting" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: support@phoenixhost.com</p>
            <p className="text-gray-400">Discord: Join our server</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><GitHub /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 Phoenix Host. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

