import React from "react";

const Login = () => {
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

export default Login;
