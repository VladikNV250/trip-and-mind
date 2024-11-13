import Navbar from "@/components/Navbar/Navbar";
import classes from "./Hero.module.scss";
import IconLinkList from "@/components/IconLinkList/IconLinkList";
import CardList from "@/components/CardList/CardList";
import Heading from "@/UI/headers/Heading/Heading";
import ButtonFilled from "@/UI/buttons/ButtonFilled/ButtonFilled";
import ButtonPlay from "@/UI/buttons/ButtonPlay/ButtonPlay";
import { useState } from "react";
import ModalVideo from "@/components/ModalVideo/ModalVideo";
import InButtonLink from "@/UI/links/InButtonLink/InButtonLink";
import { useTranslation } from "react-i18next";


export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

  return (
    <section className={classes.hero}>
        <ModalVideo isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={classes.container}>
            <Navbar />
            <div className={classes.content__one}>
                <Heading level="h1" className={classes["hero-title"]}>
                    {t("hero-title")}
                </Heading>
                <Heading level="h3" className={classes["hero-subtitle"]}>
                    {t("hero-subtitle")}
                </Heading>
                <div className={classes["button-group"]}>
                        <InButtonLink href="#cons-form">
                            <ButtonFilled>
                                {t("hero-leave_application")}
                            </ButtonFilled>
                        </InButtonLink>
                    <div className={classes["button-container"]}>
                        <ButtonPlay clickFunction={() => setIsOpen(true)} />
                        <p className={classes["play-text"]}>
                            {t("hero-video-text")}
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.content__two}>
                <div className={classes["link-container"]}>
                    <p className={classes["links-text"]}>
                        {t("hero-subscribe-to-us")}
                    </p>
                    <IconLinkList 
                      color="#fff"
                      width={205}
                    />
                </div>
                <CardList />
            </div>
        </div>
    </section>
  )
}
