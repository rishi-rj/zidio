import React from 'react'
import { Button } from "./ui/button"
import { Search } from "lucide-react"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-blue-600 rounded-sm"></div>
        
        <span className="text-2xl font-bold text-blue-600">ZIDIO</span>
        <span className="text-sm text-gray-500">DEVELOPMENT</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link className="text-gray-600 hover:text-gray-900" to="/">
          Home
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" to="/about">
          About
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" to="/services">
          Services
        </Link>
        <Link className="text-gray-600 hover:text-gray-900" to="/contact">
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Search className="text-gray-400" />
        <Button className="bg-blue-600 text-white">Get A Quote</Button>
      </div>
    </header>
  )
}