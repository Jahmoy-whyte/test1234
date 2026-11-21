import { useNavigate } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

import pc1 from "../assets/images/pc1.png";
import pc2 from "../assets/images/pc2.png";
import pc3 from "../assets/images/pc3.png";

import howItWorks1 from "../assets/images/howItWorks1.png";
import howItWorks2 from "../assets/images/howItWorks2.png";
import howItWorks3 from "../assets/images/howItWorks3.png";

const products = [
  {
    id: 1,
    name: 'Dell Latitude 5420 14" FHD',
    description: "Intel Quad-Core i5-1145G7, 16GB DDR4 RAM, 256GB SSD",
    ram: "16GB RAM",
    storage: "256GB SSD",
    price: 2000,
    image: pc1,
    stock: 2,
  },
  {
    id: 2,
    name: 'Lenovo 15.6" Full HD IdeaPad',
    description: "Intel N150 CPU, 8GB LPDDR5 RAM, 128GB SSD, Windows 11",
    ram: "8GB RAM",
    storage: "128GB SSD",
    price: 2000,
    image: pc2,
    stock: 2,
  },
  {
    id: 3,
    name: 'HP 15.6" FHD',
    description: "Intel i3 8GB 256GB SSD",
    ram: "8GB RAM",
    storage: "256GB SSD",
    price: 2000,
    image: pc3,
    stock: 2,
  },
];

const steps = [
  {
    number: "01",
    title: "Sign up / login",
    description:
      "Create your profile to get started or sign in to your existing profile to continue the experience.",
    image: howItWorks1,
  },
  {
    number: "02",
    title: "Browse our collection",
    description:
      "Browse our wares for the device that personally suits you and is capable of doing your task at full capacity.",
    image: howItWorks2,
  },
  {
    number: "03",
    title: "Pay online to rent",
    description:
      "Pay online with your Credit card or Visa-Debit card for a seamless, hassle-free delivery process that will get you started right away.",
    image: howItWorks3,
  },
];

// Reusable animation settings
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function LandingPage() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header activePage="home" />

      {/* HERO SECTION */}

      <section className="px-6 py-16 text-center md:px-12 md:py-24 lg:px-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2"
        >
          <span className="text-amber-500">✦</span>
          <span className="text-sm text-neutral-600">
            Now with intelligence workflows
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="mb-6 font-serif text-5xl font-normal tracking-tight text-neutral-900 md:text-6xl lg:text-7xl"
        >
          Rent Your Future.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mx-auto mb-10 max-w-xl text-neutral-500"
        >
          Co.Penny offers reliable, budget-friendly Technology optimized for
          students, business owners & gamers to enhance the future.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16 flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => nav("/products")}
            className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:scale-105 hover:bg-neutral-800"
          >
            Rent
          </button>

          <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:scale-105 hover:bg-neutral-800">
            Buy
          </button>

          <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:scale-105 hover:bg-neutral-800">
            Sell
          </button>
        </motion.div>

        {/* PREFERENCES */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <h3 className="mb-6 text-lg font-medium text-neutral-900">
            Select Your Preferences
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:scale-105">
              Laptops
            </button>

            <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:scale-105">
              Tablets
            </button>
          </div>
        </motion.div>
      </section>

      {/* PRODUCTS SECTION */}

      <section className="flex flex-col items-center justify-center px-6 py-16 md:px-12 lg:px-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-10 text-center text-3xl font-semibold text-neutral-900 md:text-4xl"
        >
          Laptops for You!
        </motion.h2>

        <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}

      <section id="how-it-works" className="px-6 py-20 md:px-12 lg:px-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-20 text-center text-3xl font-semibold text-neutral-900 md:text-4xl"
        >
          How It Works
        </motion.h2>

        <div className="mx-auto max-w-5xl space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={index % 2 === 0 ? fadeLeft : fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`flex flex-col items-center gap-8 md:gap-12 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}

              <div className="w-full flex-1">
                <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
                  <motion.img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}

              <div
                className={`flex-1 text-center ${
                  index % 2 === 1 ? "md:text-right" : "md:text-left"
                }`}
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mb-3 text-2xl font-semibold text-neutral-900">
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-500 md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
