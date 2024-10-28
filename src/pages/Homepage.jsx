import React from 'react'
import { Button } from "../components/ui/button"
import { Briefcase, Users, Headphones } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-400">
      <main className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-white">SOFTWARE DEVELOPMENT & CONSULTANCY</h2>
          <h1 className="text-5xl font-bold text-white leading-tight">
            BUSINESS INNOVATION THROUGH TECHNOLOGY
          </h1>
          <p className="text-white text-lg">
            Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
          </p>
          <div className="flex space-x-4">
            <Button className="bg-blue-600 text-white">Let's Talk</Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Read More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
          <img
            src="/images/placeholder.svg"
            alt="Smiling man"
            className="rounded-full w-full max-w-[500px] h-auto"
          />
          <div className="absolute top-0 right-0 bg-white rounded-full p-4">
            <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center  justify-center">
              <span className="text-white text-2xl font-bold">5+</span>
            </div>
            <span className="text-xs text-center block mt-2">YEARS OF EXPERIENCE</span>
          </div>
        </div>
      </main>
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <Briefcase className="mx-auto text-blue-600" size={48} />
            <h3 className="text-xl font-semibold">3+ Year Experience</h3>
            <p className="text-gray-600">
              Over 3 years of expertise delivering unparalleled solutions and insights for your success
            </p>
          </div>
          <div className="text-center space-y-4">
            <Users className="mx-auto text-blue-600" size={48} />
            <h3 className="text-xl font-semibold">Dedicated Members</h3>
            <p className="text-gray-600">
              Passionate team members dedicated to exceeding expectations and achieving mutual success
            </p>
          </div>
          <div className="text-center space-y-4">
            <Headphones className="mx-auto text-blue-600" size={48} />
            <h3 className="text-xl font-semibold">Valuable Supports</h3>
            <p className="text-gray-600">
              Tailored support and guidance ensuring reliability and innovation every step of the way
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}