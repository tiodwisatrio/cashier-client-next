import React from "react";
import { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Fungsi untuk menangani proses login
  async function handleLogin() {
    try {
      // Kirim permintaan login ke server
      const response = await axios.post("/login", {
        username: username,
        password: password,
      });

      // Ambil token JWT dari respons server
      const token = response.data.token;

      // Dekode token untuk mendapatkan informasi pengguna
      const decodedToken = jwt.decode(token);

      // Simpan token dan informasi pengguna ke local storage atau cookie
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(decodedToken));

      // Redirect ke halaman lain setelah login berhasil
      // Ganti '/dashboard' sesuai dengan halaman yang diinginkan
      window.location.href = "/";
    } catch (error) {
      console.error("Error during login:", error.response.data);
      setError("Username atau password salah.");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center flex-col w-full h-full m-auto">
        <h1 className="text-center m-5 text-2xl p-3 font-bold text-[#ff8730]">
          Login
        </h1>
        <form className="flex flex-col justify-center w-80 md:w-96 h-80 p-6 md:p-8 gap-y-6 rounded-lg bg-white shadow-xl mt-3">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-[14px] mb-1 text-left">
              Username
            </label>
            <input
              required
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              autoComplete="off"
              placeholder="username..."
              className="placeholder:text-[13px] text-[13px]  px-2 py-2 rounded-sm text-[#ff8730] border focus:outline-none focus:border-[#ff8730] shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-[14px] mb-1 text-left">
              Password
            </label>
            <input
              required
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // type={showPassword ? "text" : "password"}
              autoComplete="off"
              placeholder="password..."
              className="placeholder:text-[13px] text-[13px] px-2 py-2 rounded-sm text-[#ff8730] border focus:outline-none focus:border-[#ff8730] shadow-sm"
            />
            <div
              className="flex flex-row items-center mt-4 gap-x-1 w-full cursor-pointer"
              // onClick={handleShowPassword}
            >
              <input
                type="checkbox"
                id="showPasswordCheckbox"
                // checked={showPassword}
                // className={`${showPassword ? "bg-teal-500" : "bg-transparent"}`}
              />
              <span className="text-[12px] text-slate-500">show password</span>
            </div>
          </div>
          <button
            // onClichandleLogin
            onClick={handleLogin}
            className="mt-4 bg-[#ff8730] px-3 py-2 text-[14px] text-white font-semibold rounded cursor-pointer hover:bg-[#fa791d] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </>
    // <div>
    //   <h1>Login</h1>
    //   <div>
    //     <input
    //       type="text"
    //       placeholder="Username"
    //       value={username}
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <input
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>
    //   <div>
    //     <button onClick={handleLogin}>Login</button>
    //   </div>
    //   {error && <div>{error}</div>}
    // </div>
  );
}

export const Login2 = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col w-full h-full m-auto">
        <h1 className="text-center m-5 text-2xl p-3 font-bold text-[#ff8730]">
          Login
        </h1>
        <form className="flex flex-col justify-center w-80 md:w-96 h-80 p-6 md:p-8 gap-y-6 rounded-lg bg-white shadow-xl mt-3">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-[14px] mb-1 text-left">
              Username
            </label>
            <input
              required
              name="username"
              // value={username}
              // onChange={(e) => setUsername(e.target.value)}
              type="text"
              autoComplete="off"
              placeholder="username..."
              className="placeholder:text-[13px] text-[13px]  px-2 py-2 rounded-sm text-[#ff8730] border focus:outline-none focus:border-[#ff8730] shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-[14px] mb-1 text-left">
              Password
            </label>
            <input
              required
              name="password"
              // value={password}
              // onChange={(e) => setpassword(e.target.value)}
              // type={showPassword ? "text" : "password"}
              autoComplete="off"
              placeholder="password..."
              className="placeholder:text-[13px] text-[13px] px-2 py-2 rounded-sm text-[#ff8730] border focus:outline-none focus:border-[#ff8730] shadow-sm"
            />
            <div
              className="flex flex-row items-center mt-4 gap-x-1 w-full cursor-pointer"
              // onClick={handleShowPassword}
            >
              <input
                type="checkbox"
                id="showPasswordCheckbox"
                // checked={showPassword}
                // className={`${showPassword ? "bg-teal-500" : "bg-transparent"}`}
              />
              <span className="text-[12px] text-slate-500">show password</span>
            </div>
          </div>
          <button
            // onClick={handleSubmit}
            className="mt-4 bg-[#ff8730] px-3 py-2 text-[14px] text-white font-semibold rounded cursor-pointer hover:bg-[#fa791d] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};
