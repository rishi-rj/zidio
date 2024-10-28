import React from 'react'
import { FiBarChart2, FiShoppingCart, FiDatabase, FiUsers, FiCheck } from 'react-icons/fi'

const services = [
  { icon: FiBarChart2, title: 'Business Growth', description: 'Boost your business with strategies to reach new markets, optimize operations, and increase profits.' },
  { icon: FiShoppingCart, title: 'eCommerce', description: 'Enhance your online presence with user-friendly eCommerce solutions and secure payment gateways.' },
  { icon: FiDatabase, title: 'Secure Database', description: 'Safeguard your data with robust security measures and industry-standard compliance.' },
  { icon: FiUsers, title: 'Audience Growth', description: 'Expand your reach by connecting with your target audience to drive visibility and growth.' },
]


const teamMembers = [
  { name: 'Harsa Dash', role: 'Developer Team Lead', image: 'https://zidio.in/assets/images/team/harash.jpg' },
  { name: 'Pitabas Pradhan', role: 'HR Manager', image: 'https://zidio.in/assets/images/team/final-pitabas.jpg' },
  { name: 'Chandan Mishra', role: 'Data Scientist',image: 'https://zidio.in/assets/images/team/chandan.jpeg' },
  { name: 'Saima Husna Salsabila', role: 'UI Designer',image: 'https://zidio.in/assets/images/team/salama.JPG' },
]

const stats = [
  { value: '1000+', label: 'HAPPY CUSTOMERS' },
  { value: '1200+', label: 'WORKS COMPLETED' },
  { value: '99+', label: 'EXPERT MEMBERS' },
  { value: '100%', label: 'SATISFACTION RATES' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Services Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <service.icon className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <div className="relative">
                <img src="/images/team-working.jpg" alt="Team working" className="rounded-lg shadow-lg" />
                <img src="/images/person-working.jpg" alt="Person working" className="absolute bottom-0 right-0 w-2/3 rounded-lg shadow-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold">1000+</div>
                    <div className="text-sm">Completed Projects</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <div className="text-blue-600 mb-2">Software Development & Consultancy</div>
              <h2 className="text-4xl font-bold mb-4">Who we are and What we do?</h2>
              <p className="text-gray-600 mb-6">
                Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise. Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology. At Zidio, we believe in the power of collaboration, continuous learning, and adapting to the ever-evolving digital landscape. We're not just developers; we're visionaries committed to delivering impactful software solutions that drive success for businesses globally. Stay connected with us for insights into our groundbreaking projects, tech trends, career opportunities, and our journey in shaping the future of technology.
              </p>
              <div className="flex items-center mb-4">
                <FiCheck className="text-blue-600 mr-2" />
                <span>Company and Research</span>
              </div>
              <div className="flex items-center mb-6">
                <FiCheck className="text-blue-600 mr-2" />
                <span>Business and research</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Business Solution</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <blockquote className="italic text-gray-600">
                    "The true sign of intelligence is not knowledge but imagination" - Albert Einstein
                  </blockquote>
                </div>
              </div>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                More About →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-blue-600 mb-2">Dedicated Team</div>
            <h2 className="text-4xl  text-[black] font-bold mb-4">Meet Our Dedicated Member<br />For Any Enquery</h2>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              ALL MEMBER
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <button className="text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
