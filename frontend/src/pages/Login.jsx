import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { toast } from "react-toastify";

import API from "../services/api";
import styles from "../components/Auth/Auth.module.css";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await API.post("/auth/login", form);

     localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));
      toast.success("Login Successful!");

      navigate("/");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.authPage}>
      <div className={styles.authCard}>
        <h1>PromptPerfect AI</h1>

        <p>Welcome Back 👋</p>

        <form onSubmit={handleSubmit}>
          {/* Email */}

          <div className={styles.inputGroup}>
            <label>Email</label>

            <div className={styles.inputWrapper}>
              <FaEnvelope className={styles.inputIcon} />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}

          <div className={styles.inputGroup}>
            <label>Password</label>

            <div className={styles.inputWrapper}>
              <FaLock className={styles.inputIcon} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className={styles.eyeButton}
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}

          <button
            type="submit"
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className={styles.footerLinks}>
          <Link to="/signup">
            Create an Account
          </Link>

          <Link to="/">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;