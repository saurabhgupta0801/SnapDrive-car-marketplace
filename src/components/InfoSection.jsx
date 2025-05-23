import React from 'react'

function InfoSection() {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-64 sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://hips.hearstapps.com/hmg-prod/images/rt-mercedes-benz-cpo-1-1531414981.jpg?crop=1.00xw:0.755xh;0,0.169xh&resize=640:*"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-gray-100">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Welcome to SnapDrive – Your Trusted Car Marketplace
            </h2>
  
            <p className="mt-4 text-gray-600">
            Discover the easiest way to buy and sell cars online. At SnapDrive, we connect car buyers and sellers across the country with a wide selection of new and pre-owned vehicles from trusted dealers and private sellers. Whether you're looking for your first car, upgrading to your dream ride, or selling your current vehicle, SnapDrive offers a seamless, secure, and transparent experience. Browse, compare, and connect — all in one place.
            </p>
  
            <a
              href="#"
              className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default InfoSection