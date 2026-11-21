import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import SocialButton, { GoogleIcon } from "../components/SocialButton";
import loginImg from "../assets/images/loginImg.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useAuthContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(formData.email, formData.password);
      navigate("/");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to sign in";
      if (errorMessage.includes("invalid-credential")) {
        setError("Invalid email or password");
      } else if (errorMessage.includes("user-not-found")) {
        setError("No account found with this email");
      } else if (errorMessage.includes("wrong-password")) {
        setError("Incorrect password");
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setLoading(true);

    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to sign in with Google";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F0]">
      <Header />

      <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-12 lg:px-20">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-[#C5C5A8]">
          <div className="flex flex-col lg:flex-row">
            {/* Back button - mobile */}
            <Link
              to="/"
              className="absolute left-8 top-24 flex h-8 w-8 items-center justify-center rounded-full text-[#9A9A6D] hover:bg-[#B5B598] lg:left-auto lg:top-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </Link>

            {/* Left side - Form */}
            <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-12">
              <div className="mx-auto w-full max-w-sm">
                <h1 className="mb-2 text-3xl font-bold text-neutral-900">
                  WELCOME BACK
                </h1>
                <p className="mb-8 text-sm text-neutral-600">
                  Welcome back! Please enter your details.
                </p>

                {error && (
                  <div className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="**********"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <div className="flex items-center justify-between">
                    <Checkbox
                      name="rememberMe"
                      label="Remember me"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <Link
                      to="/forgot-password"
                      className="text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      Forgot password
                    </Link>
                  </div>

                  <Button type="submit" variant="coral" fullWidth disabled={loading}>
                    {loading ? "Signing in..." : "Sign in"}
                  </Button>
                </form>

                <div className="mt-4">
                  <SocialButton
                    icon={<GoogleIcon />}
                    onClick={handleGoogleSignIn}
                    fullWidth
                    disabled={loading}
                  >
                    Sign in with Google
                  </SocialButton>
                </div>

                <p className="mt-6 text-center text-sm text-neutral-600">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-[#F87171] hover:underline"
                  >
                    Sign up for free!
                  </Link>
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative hidden h-[600px] w-full lg:block lg:w-1/2">
              <img
                src={loginImg}
                alt="Beach"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
