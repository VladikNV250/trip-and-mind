import ConsulForm from "@/components/ConsulForm/ConsulForm";
import classes from "./Application.module.scss";
import Heading from "@/UI/headers/Heading/Heading";
import handleForm from "./api/handleForm";
import { useTranslation } from "react-i18next";

export default function Application() {
  const { t } = useTranslation();

  return (
    <section className={classes.application} id="cons-form">
        <div className={classes.container}>
            <div className={classes["application-content"]}>
                <Heading level="h2" className={classes["application-title"]}>
                  {t("application-title")}
                </Heading>
                <Heading level="h4" className={classes["application-subtitle"]}>
                  {t("application-subtitle")}
                </Heading>
            </div>
            <ConsulForm submit={handleForm} className={classes["application-form"]} />
        </div>
    </section>
  )
}
