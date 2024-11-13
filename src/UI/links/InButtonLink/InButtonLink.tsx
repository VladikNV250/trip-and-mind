import { Link } from "react-router-dom";
import classes from "./InButtonLink.module.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children?: React.ReactNode;
    href: string;
    otherProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

export default function InButtonLink({children, href, ...otherProps}: Props) {
  return (
    <a className={classes.link} href={href} {...otherProps}>
        {children}
    </a>
  )
}
