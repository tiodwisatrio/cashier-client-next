import CartProvider from "@/context/CartContext";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <ToastContainer />
      <Component {...pageProps} />
    </CartProvider>
  );
}
