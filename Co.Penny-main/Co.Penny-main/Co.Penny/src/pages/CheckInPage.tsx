import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import checkoutImage1 from "../assets/images/checkout-image-1.png";
import checkoutImage2 from "../assets/images/checkout-image-2.png";
import checkoutImage3 from "../assets/images/checkout-image-3.png";
import logo from "../assets/images/logo.png";

export default function CheckInPage() {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [deviceType, setDeviceType] = useState("Laptops");

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="checkin" />

      {/* Hero Title */}
      <section className="px-6 py-8 text-center md:px-12 lg:px-20">
        <h1 className="text-xl text-neutral-600">Check in with your device!</h1>
      </section>

      {/* Search Section */}
      <section className="px-6 pb-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative flex flex-col gap-6 md:flex-row md:items-start">
            {/* Form Card */}
            <div className="z-10 w-full rounded-2xl bg-white p-6 shadow-lg md:w-80 md:absolute md:left-0 md:top-8">
              <h2 className="mb-2 text-2xl font-bold text-neutral-900">
                Find laptops near you
              </h2>
              <p className="mb-6 text-sm text-neutral-500">
                Your goals matter. We're here to help you reach them
              </p>

              <div className="space-y-4">
                {/* Location Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Located"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
                  />
                </div>

                {/* Check In / Check Out */}
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Check In"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    className="w-1/2 rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Check Out"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    className="w-1/2 rounded-lg border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-400 focus:outline-none"
                  />
                </div>

                {/* Device Type Dropdown */}
                <div className="relative">
                  <select
                    value={deviceType}
                    onChange={(e) => setDeviceType(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none"
                  >
                    <option value="Laptops">Laptops</option>
                    <option value="Tablets">Tablets</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Check Out Button */}
                <button className="w-full rounded-full bg-neutral-900 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
                  Check Out
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-4 ml-auto w-full overflow-hidden rounded-2xl md:mt-0 md:w-3/4">
              <img
                src={checkoutImage1}
                alt="Laptop on bed"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={checkoutImage2}
              alt="Tablets"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative flex flex-col items-center gap-6 p-8 md:flex-row md:p-12">
              {/* Spacer for image side */}
              <div className="w-full md:w-1/2"></div>

              {/* Coming Soon Card */}
              <div className="w-full rounded-2xl bg-white p-8 shadow-sm md:w-1/2">
                <h2 className="mb-3 text-3xl font-bold text-neutral-900">
                  Coming Soon
                </h2>
                <p className="mb-6 text-neutral-500">
                  Something new is on the way. Get ready!
                </p>
                <button className="w-full rounded-full bg-neutral-900 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={checkoutImage3}
              alt="Ocean beach"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative p-8 md:p-12">
              {/* Content Card */}
              <div className="mx-auto max-w-md rounded-2xl bg-white/95 p-8 text-center shadow-sm backdrop-blur-sm">
                {/* Logo Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#D9D9BF]">
                    <img src={logo} alt="Co.Penny" className="h-8 w-auto" />
                  </div>
                </div>

                <h2 className="mb-4 text-2xl font-bold text-neutral-900">
                  Co.Penny
                </h2>
                <p className="text-sm leading-relaxed text-neutral-600">
                  At Co.Penny, we believe that everyone deserves the tools to
                  learn, grow, and achieve their dreams. Our mission is to make
                  technology more accessible, one laptop at a time. Whether you're
                  studying, building a business, or chasing your next big idea,
                  we're here to help you take that next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
