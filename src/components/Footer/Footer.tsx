import { useTranslation } from "react-i18next";
import IconLinkList from "../IconLinkList/IconLinkList";
import classes from "./Footer.module.scss";
import logo from "@/assets/logo-black.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.content}>
            <img src={logo} alt="Trip&Mind" className={classes.logo} />
            <div className={classes["link-politics"]}>
              <a href="https://policies.google.com/privacy?hl=uk" className={classes["link"]}>
                {t("politics")}
              </a>
            </div>
            <div className={classes["link-agreement"]}>
              <a href="https://ombudsman.gov.ua/uk/zahist-personalnih-danih-faq" className={classes["link"]}>
                {t("agreement")}
              </a>
            </div>
          </div>
          <div className={classes["link-list--wrapper"]}>
            <IconLinkList
              color="#90A4B2"          
              width={185}
            />
          </div>
        </div>
    </footer>
  )
}
