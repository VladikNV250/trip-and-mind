import SmallCard from "@/UI/cards/SmallCard/SmallCard";
import classes from "./CardList.module.scss";
import card01 from "@/assets/hero/card-image-01.png"
import card02 from "@/assets/hero/card-image-02.png"
import card03 from "@/assets/hero/card-image-03.png"
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CardList() {
  const { t } = useTranslation();
  const [cards] = useState([
    {image: card01, text: t("card_list-waterfall"), link: "/all-tours/#waterfall"},
    {image: card02, text: t("card_list-dolomits"), link: "/all-tours/#dolomits"},
    {image: card03, text: t("card_list-norway"), link: "/all-tours/#norway"},
  ])

  const numberFormat = new Intl.NumberFormat("en", {
    minimumIntegerDigits: 2,
  })

  return (
    <div className={classes["card-list"]}>
      {cards.map(({image, text, link}, index) => (
        <SmallCard 
          key={index + 2} 
          image={image} 
          text={text} 
          number={numberFormat.format(index + 2)} 
          link={link}
        />
      ))}
    </div>
  )
}
