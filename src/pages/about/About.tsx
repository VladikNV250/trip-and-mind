import image from "@/assets/jpg-img.jpg";
import png from "@/assets/png-img.png";
import Cloud from "@/assets/cloud.svg";
import * as style from "@/pages/about/About.module.scss";

export default function About() {
  return (
    <div>
      <img src={image} width={100} height={100} alt="" />
      <img src={png} width={100} height={100} alt="" />
      {/* <img src={image} alt="" /> */}
      {/* <img src={png} alt="" /> */}
      <Cloud className={style.cloud} width={100} height={100} />
    </div>
  )
}
