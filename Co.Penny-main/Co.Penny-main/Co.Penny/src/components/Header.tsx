import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import jamaicaFlag from "../assets/images/flag-for-jamaica.png";

interface HeaderProps {
  activePage?: "products" | "checkin" | "home";
}

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
      <Link to="/" className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9D9BF]">
          <img src={logo} alt="Co.Penny" className="h-7 w-auto" />
        </div>
        <span className="text-lg font-semibold text-neutral-900">Co.Penny</span>
        <img src={jamaicaFlag} alt="Jamaica" className="h-5 w-auto" />
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <Link
          to="/products"
          className={`text-sm transition ${
            activePage === "products"
              ? "font-medium text-neutral-900"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          Products
        </Link>
        <Link
          to="/checkin"
          className={`text-sm transition ${
            activePage === "checkin"
              ? "font-medium text-neutral-900"
              : "text-neutral-600 hover:text-neutral-900"
          }`}
        >
          Check In
        </Link>
        <a
          href="#"
          className="text-sm text-neutral-600 transition hover:text-neutral-900"
        >
          About us
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/login"
          className="hidden text-sm text-neutral-600 transition hover:text-neutral-900 md:block"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
