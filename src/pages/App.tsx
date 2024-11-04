import { Link, Outlet } from "react-router-dom";
import MyButton from "@/components/MyButton";
import * as style from "./app.module.scss"

export default function App() {
  return (
    <div className={style.main}>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
        <MyButton />
        <Outlet />
    </div>
  )
}
