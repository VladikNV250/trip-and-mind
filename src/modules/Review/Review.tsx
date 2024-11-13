import BigCard from "@/UI/cards/BigCard/BigCard";
import classes from "./Review.module.scss";
import card01 from "@/assets/review/card01.png";
import Heading from "@/UI/headers/Heading/Heading";
import ButtonOutlined from "@/UI/buttons/ButtonOutlined/ButtonOutlined";
import InButtonLink from "@/UI/links/InButtonLink/InButtonLink";
import { useTranslation } from "react-i18next";

export default function Review() {
    const { t } = useTranslation();

  return (
    <section className={classes.review}>
        <div className={classes.container}>
            <div className={classes.content}>
                <Heading level="h2" className={classes["review-title"]}>
                    {t("review-title")}
                </Heading>
                <Heading level="h4" className={classes["review-subtitle"]}>
                    {t("review-subtitle")}
                </Heading>
                <InButtonLink href="/reviews">
                    <ButtonOutlined>
                        {t("review-read-reviews")}
                    </ButtonOutlined>
                </InButtonLink>
            </div>
            <BigCard
                image={card01}
                title={t("review-card-title")}
                subtitle={t("review-card-subtitle")}
                text={t("review-card-text")}
                link="/reviews"
            />
        </div>
    </section>
  )
}
