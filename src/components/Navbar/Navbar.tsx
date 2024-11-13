import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import logo from "@/assets/logo-white.png";
import ButtonBurger from "@/UI/buttons/ButtonBurger/ButtonBurger";
import { useState } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useTranslation } from "react-i18next";


export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className={classes.navbar}>
        <div className={classes["logo-wrapper"]}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="Trip&Mind" />      
          </Link>
        </div>
        <BurgerMenu isOpen={isOpenMenu}>
          <ul data-burger="list" className={classes["link-list"]}>
              <li><Link className={classes.link} to="/all-tours">{t("route-all-tours")}</Link></li>
              <li><Link className={classes.link} to="/reviews">{t("route-reviews")}</Link></li>
              <li><Link className={classes.link} to="/contacts">{t("route-contacts")}</Link></li>
          </ul>
        </BurgerMenu>
        <ButtonBurger 
          isOpen={isOpenMenu} 
          onClick={() => setIsOpenMenu(!isOpenMenu)} 
        />
    </nav>
  )
}
