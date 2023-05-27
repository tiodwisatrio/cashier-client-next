import React from "react";
import { useRouter } from "next/router";
import { list_menu } from "./constants";

const Layout = ({ children }) => {
  const router = useRouter();
  const handleChangePage = (path) => {
    router.push(path);
  };

  return (
    <main className="w-full flex flex-row relative min-h-screen ">
      <aside className="sidebar bg-[#ff8730] w-40 flex flex-col items-center justify-center fixed h-full">
        <nav className="bg-white bg-opacity-20 w-[80%] h-[80%] rounded-2xl flex justify-center items-center">
          <ul className="flex flex-col justify-center items-start gap-3 px-5 py-8 h-full cursor-pointer text-sm gap-y-4">
            {list_menu.map((menu, index) => {
              return (
                <li
                  key={index}
                  onClick={() => handleChangePage(menu.path)}
                  className={`list px-2 py-4 ${
                    router.pathname === menu.path ? "active" : ""
                  }`}
                >
                  {menu.icon} {menu.name}
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <section className="content ml-32 flex-1 bg-slate-50">{children}</section>
    </main>
  );
};

export default Layout;
