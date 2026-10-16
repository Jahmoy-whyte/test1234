import { useNavigate } from "react-router-dom";
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
      "Create your profile to get started or sign in to your existing profile to continue the experience",
    image: howItWorks1,
  },
  {
    number: "02",
    title: "Browser our collection",
    description:
      "Browse our wares for the device that personally suits you and is capable in doing your task at full capacity",
    image: howItWorks2,
  },
  {
    number: "03",
    title: "Pay online to rent",
    description:
      "Pay online with your Credit card or Visa-Debit card for a seamless, hassle free delivery process that will get you started right away",
    image: howItWorks3,
  },
];

export default function LandingPage() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header activePage="home" />

      {/* Hero Section */}
      <section className="px-6 py-16 text-center md:px-12 md:py-24 lg:px-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2">
          <span className="text-amber-500">✦</span>
          <span className="text-sm text-neutral-600">
            Now with intelligence workflows
          </span>
        </div>

        <h1 className="mb-6 font-serif text-5xl font-normal tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
          Rent Your Future.
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-neutral-500">
          Co.Penny offers reliable, budget-friendly Technology optimized for
          students, business owners & gamers to enhance the future
        </p>

        <div className="mb-16 flex flex-wrap justify-center gap-4">
          <button
            className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:bg-neutral-800"
            onClick={() => {
              nav("/products");
            }}
          >
            Rent
          </button>
          <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:bg-neutral-800">
            Buy
          </button>
          <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:bg-neutral-800">
            Sell
          </button>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="mb-6 text-lg font-medium text-neutral-900">
            Select Your Preferences
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:bg-neutral-800">
              Laptops
            </button>
            <button className="rounded-full bg-neutral-900 px-8 py-3 font-medium text-white transition hover:bg-neutral-800">
              Tablets
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="flex flex-col items-center justify-center  px-6 py-16 md:px-12 lg:px-20">
        <h2 className="mb-10 text-3xl font-semibold text-neutral-900 md:text-4xl">
          Laptops for You!
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 md:px-12 lg:px-20">
        <h2 className="mb-20 text-center text-3xl font-semibold text-neutral-900 md:text-4xl">
          How It Works
        </h2>

        <div className="mx-auto max-w-5xl space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-center gap-8 md:gap-12 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full">
                <div className="overflow-hidden rounded-2xl bg-neutral-100">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div
                className={`flex-1 ${index % 2 === 1 ? "md:text-right" : "md:text-left"} text-center`}
              >
                <div
                  className={`mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white`}
                >
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
