import classes from "@/modules/Tours/Tours.module.scss";
import BigCard from "@/UI/cards/BigCard/BigCard";
import card01 from "@/assets/tours/card01.png";
import Heading from "@/UI/headers/Heading/Heading";
import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import InButtonLink from "@/UI/links/InButtonLink/InButtonLink";
import { useTranslation } from "react-i18next";

export default function Tours() {
    const { t } = useTranslation();

  return (
    <section className={classes.tours}>
        <div className={classes.container}>
            <BigCard
                image={card01}
                title="10-24"
                subtitle={t("tours-card-subtitle")}
                text={t("tours-card-text")}
                link="/all-tours"
            />
            <div className={classes.content}>
                <Heading level="h2" className={classes["tours-title"]}>
                    {t("tours-title")}
                </Heading>
                <Heading level="h4" className={classes["tours-subtitle"]}>
                    {t("tours-subtitle")}
                </Heading>
                <InButtonLink href="/all-tours">
                    <ButtonOutlined>
                        {t("tours-see_all")}
                    </ButtonOutlined>
                </InButtonLink>
                
            </div>
        </div>
    </section>
  )
}
