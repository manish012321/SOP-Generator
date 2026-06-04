import React from 'react'
import Header from '../components/Header'

const Template = () => {
  return (
    <>
    <Header /> 
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900">
          SOP Templates
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Choose from ready-to-use SOP templates and generate professional documents faster.
        </p>
      </div>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Template Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900">
            Customer Support SOP
          </h3>
          <p className="mt-3 text-gray-600">
            Standard procedure for handling customer inquiries and complaints.
          </p>

          <button className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
            Use Template
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900">
            Employee Onboarding SOP
          </h3>
          <p className="mt-3 text-gray-600">
            Step-by-step guide for welcoming and training new employees.
          </p>

          <button className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
            Use Template
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900">
            Sales Process SOP
          </h3>
          <p className="mt-3 text-gray-600">
            Standard workflow for lead generation and sales conversion.
          </p>

          <button className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
            Use Template
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900">
            Inventory Management SOP
          </h3>
          <p className="mt-3 text-gray-600">
            Procedures for stock tracking and inventory updates.
          </p>

          <button className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
            Use Template
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900">
            Restaurant SOP
          </h3>
          <p className="mt-3 text-gray-600">
            Daily operations and service standards for restaurants.
          </p>

          <button className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
            Use Template
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-900">
            IT Support SOP
          </h3>
          <p className="mt-3 text-gray-600">
            Troubleshooting and support process for technical issues.
          </p>

          <button className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition">
            Use Template
          </button>
        </div>

      </div>
    </div>
  </section>
</>
  )
}

export default Template