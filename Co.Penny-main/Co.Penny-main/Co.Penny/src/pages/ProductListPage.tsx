import { useState } from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";

import pc1 from "../assets/images/pc1.png";
import pc2 from "../assets/images/pc2.png";
import pc3 from "../assets/images/pc3.png";

const categories = ["Personal", "School", "Gaming", "Business"];

interface Product {
  id: number;
  name: string;
  description: string;
  ram: string;
  storage: string;
  price: number;
  image: string;
  stock: number;
}

// Animation variants

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const zoomIn = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const products: Product[] = [
  {
    id: 1,
    name: "BLUEING BlueBook154",
    description: "Intel i3 8GB 256GB SSD",
    ram: "8GB RAM",
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
  {
    id: 4,
    name: 'Dell Latitude 5420 14" FHD',
    description: "Intel Quad-Core i5-1145G7, 16GB DDR4 RAM, 256GB SSD",
    ram: "16GB RAM",
    storage: "256GB SSD",
    price: 2000,
    image: pc1,
    stock: 2,
  },
  {
    id: 5,
    name: "MSI Cyborg",
    description:
      "Intel Core 7-240H, NVIDIA Geforce RTX 5060, 16GB DDR5, 1TB NVMe SSD",
    ram: "16GB RAM",
    storage: "1TB",
    price: 5000,
    image: pc2,
    stock: 0,
  },
  {
    id: 6,
    name: "Alienware 16 Aurora",
    description:
      "NVIDIA RTX 5060, Intel Core 7 240H, 2560x1600 Display, 120Hz, 16:10, 16GB DDR5 RAM",
    ram: "16GB RAM",
    storage: "256GB SSD",
    price: 5000,
    image: pc3,
    stock: 0,
  },
  {
    id: 7,
    name: "MSI Thin 15",
    description:
      "Intel Core i7-13620H, NVIDIA Geforce RTX 4050, 16GB DDR4, 512GB NVMe SSD",
    ram: "16GB RAM",
    storage: "512GB SSD",
    price: 5000,
    image: pc1,
    stock: 0,
  },
  {
    id: 8,
    name: "FUNYET Laptop",
    description:
      "Lap Top PC Windows 11 Pro, 16GB RAM 1TB SSD, Intel N150 Processor(up to 3.6GHz)",
    ram: "16GB RAM",
    storage: "1TB SSD",
    price: 2000,
    image: pc2,
    stock: 0,
  },
  {
    id: 9,
    name: "ASUS ROG Strix G16",
    description: "Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD",
    ram: "16GB RAM",
    storage: "1TB SSD",
    price: 5000,
    image: pc3,
    stock: 0,
  },
];

// Product Card

function ProductCard({ product }: { product: Product }) {
  const isOutOfStock = product.stock === 0;

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl bg-white p-4 transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Product Image */}

      <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-xl bg-neutral-100">
        <motion.img
          src={product.image}
          alt={product.name}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full object-contain p-4"
        />

        {isOutOfStock ? (
          <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/50">
            <span className="text-base font-medium text-white">
              Out of stock
            </span>
          </div>
        ) : (
          <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-[#121212] px-3 py-1 text-xs font-medium text-[#FFD100]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00873E]"></span>
            In Stock ({product.stock})
          </span>
        )}
      </div>

      {/* Product Details */}

      <h3 className="mb-1 text-base font-semibold text-neutral-900">
        {product.name}
      </h3>

      <p className="mb-3 line-clamp-2 text-sm text-neutral-500">
        {product.description}
      </p>

      {/* Specifications */}

      <div className="mb-4 flex gap-2">
        <span className="rounded bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
          {product.ram}
        </span>

        <span className="rounded bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600">
          {product.storage}
        </span>
      </div>

      {/* Price and Rent Button */}

      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-bold text-neutral-900">
            ${product.price.toLocaleString()}
          </span>

          <span className="text-sm text-neutral-500"> JMD/day</span>
        </div>

        <motion.button
          disabled={isOutOfStock}
          whileHover={!isOutOfStock ? { scale: 1.06 } : {}}
          whileTap={!isOutOfStock ? { scale: 0.95 } : {}}
          className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
            isOutOfStock
              ? "cursor-not-allowed bg-neutral-200 text-neutral-400"
              : "bg-[#121212] text-white hover:bg-neutral-800"
          }`}
        >
          Rent
          <svg
            className={`h-4 w-4 ${
              isOutOfStock ? "text-neutral-400" : "text-amber-300"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
}

// Main Product Page

export default function ProductListPage() {
  const [, setActiveCategory] = useState("Personal");

  return (
    <div className="min-h-screen overflow-hidden bg-white">
      <Header activePage="products" />

      {/* TITLE SECTION */}

      <section className="px-6 py-12 text-center md:px-12 lg:px-20">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-3 font-serif text-5xl font-normal tracking-tight text-neutral-900 md:text-6xl"
        >
          Product List.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-sm text-neutral-400"
        >
          Choose your device and get started on the journey
        </motion.p>
      </section>

      {/* CATEGORY FILTERS */}

      <motion.section
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-3 px-6 pb-10"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            variants={fadeUp}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(category)}
            className="rounded-full bg-neutral-900 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {category}
          </motion.button>
        ))}
      </motion.section>

      {/* PRODUCTS GRID */}

      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={fadeUp}
                transition={{
                  duration: 0.7,
                  delay: (index % 3) * 0.15,
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PAGINATION */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center justify-center gap-3 pb-10"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-400 transition hover:border-neutral-400 hover:text-neutral-600"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-sm font-medium text-white">
          1
        </span>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-400 transition hover:border-neutral-400 hover:text-neutral-600"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </motion.section>

      {/* QUOTE SECTION */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-6 pb-16 text-center md:px-12 lg:px-20"
      >
        <p className="text-sm italic text-neutral-400">
          Every laptop has a purpose. Make yours a tool for success, knowledge,
          and a better future.
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}
