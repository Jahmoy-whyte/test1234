import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import SocialButton, { GoogleIcon } from "../components/SocialButton";
import signupImg from "../assets/images/signupImg.png";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signup, loginWithGoogle } = useAuthContext();
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const displayName = `${formData.firstName} ${formData.lastName}`.trim() || formData.username;
      await signup(formData.email, formData.password, displayName);
      navigate("/");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to create account";
      if (errorMessage.includes("email-already-in-use")) {
        setError("An account with this email already exists");
      } else if (errorMessage.includes("weak-password")) {
        setError("Password is too weak. Please use a stronger password");
      } else if (errorMessage.includes("invalid-email")) {
        setError("Please enter a valid email address");
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);

    try {
      await loginWithGoogle();
      navigate("/");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to sign up with Google";
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

            {/* Left side - Image */}
            <div className="relative hidden h-[600px] w-full lg:block lg:w-1/2">
              <img
                src={signupImg}
                alt="Forest"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Right side - Form */}
            <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-1/2 lg:px-12">
              <div className="mx-auto w-full max-w-sm">
                <h1 className="mb-2 text-3xl font-bold text-neutral-900">
                  Create Account
                </h1>
                <p className="mb-8 text-sm text-neutral-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-neutral-900 underline hover:no-underline"
                  >
                    Log in
                  </Link>
                </p>

                {error && (
                  <div className="mb-4 rounded-lg bg-red-100 p-3 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />

                  <div className="flex gap-3">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />

                  <Button type="submit" fullWidth disabled={loading}>
                    {loading ? "Creating account..." : "Sign up"}
                  </Button>
                </form>

                <div className="my-6 flex items-center gap-4">
                  <div className="h-px flex-1 bg-neutral-400" />
                  <span className="text-sm text-neutral-500">Or Register with</span>
                  <div className="h-px flex-1 bg-neutral-400" />
                </div>

                <SocialButton
                  icon={<GoogleIcon />}
                  onClick={handleGoogleSignUp}
                  fullWidth
                  disabled={loading}
                >
                  Google
                </SocialButton>

                <p className="mt-6 text-center text-sm text-neutral-600">
                  Get started on your new account!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
