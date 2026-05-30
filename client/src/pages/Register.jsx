import React, { useState } from "react";
import Header from "../components/Header";
import { toast } from "react-toastify";
import api from "../api/axios.js";
import { useNavigate, Link } from "react-router-dom";
import useAuthStore from "../store/authStore.js";

import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] =
    useState(false);

  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);
      setError("");

      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      login(res.data.User, res.data.token);

      toast.success("Registered Successfully!", {
        autoClose: 2000,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-blue-50 to-purple-100">
      <Header />

      <div className="flex items-center justify-center px-4 py-14">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">
          
         
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold text-gray-800">
              Create Account 🚀
            </h1>

            <p className="text-gray-500 mt-2">
              Start generating professional SOPs
            </p>
          </div>

          
         
          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="Enter your name"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>
            </div>

            
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
              </div>
            </div>

            
           
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Create password"
                  className="w-full pl-11 pr-12 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            
           
            {error && (
              <div className="bg-red-100 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            
           
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-2xl text-white font-semibold transition-all duration-300 ${
                loading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:scale-[1.02]"
              }`}
            >
              {loading
                ? "Creating Account..."
                : "Register"}
            </button>
          </form>

          
         
          <p className="text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;