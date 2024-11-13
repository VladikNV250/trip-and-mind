import { Outlet } from "react-router-dom";
import "./global.scss";
import Footer from "@/components/Footer/Footer";

export default function App() {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
}
