import classes from "./IconLinkList.module.scss";
import IconLink from "@/UI/links/IconLink/IconLink";
import { useState } from "react";
import Youtube from "@/assets/icons/youtube.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Twitter from "@/assets/icons/twitter.svg";
import Tiktok from "@/assets/icons/tiktok.svg";

interface Props {
  color?: string;
  width?: number;
  links?: {
    href: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    width: number,
  }[]
}

export default function IconLinkList({color = "#000", width = 100, links}: Props) {
  const remWidth = {width: (width / 16) + "rem"};
  const [standardLinks] = useState([
    {href: "https://www.youtube.com/", Icon: Youtube, width: 19},
    {href: "https://www.facebook.com/", Icon: Facebook, width: 10},
    {href: "https://www.tiktok.com/", Icon: Twitter, width: 19},
    {href: "https://x.com/", Icon: Tiktok, width: 19},
  ])

  return (
    <div className={classes["icon-link-list"]} style={remWidth}>
      {(links ? links : standardLinks).map(({href, Icon, width}) => (
        <IconLink 
          key={href}
          Icon={Icon} 
          href={href} 
          color={color} 
          width={width} 
        />
      ))}
    </div>
  )
}
