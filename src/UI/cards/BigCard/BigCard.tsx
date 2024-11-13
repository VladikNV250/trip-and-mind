import Arrow from "@/assets/icons/arrow-long.svg";
import { Link } from "react-router-dom";
import classes from "./BigCard.module.scss";
import { useRef } from "react";

interface Props {
    image: string,
    text: string | TrustedHTML,
    title: string,
    subtitle: string,
    link: string,
}

export default function BigCard({image, text, title, subtitle, link}: Props) {
    const linkRef = useRef(null);
    const timeout = useRef(null);
    const background = {background: `url(${image})`}

    function clickLink(): void {
        const link = (linkRef.current as HTMLElement);
        const miliseconds = 2000; 
        link.style.animation = miliseconds + "ms cubic-bezier(0.4, 0, 0.2, 1) slide-out";
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            link.style.animation = "";
        }, miliseconds)
    }

    return (
        <div className={classes["big-card"]} style={background}>
            <div className={classes["card-background"]} />
            <div className={classes.upper}>
                <h3 className={classes["upper-title"]}>{title}</h3>
                <h4 className={classes["upper-subtitle"]}>{subtitle}</h4>
            </div>
            <div className={classes.lower}>
                <p className={classes["lower-text"]} dangerouslySetInnerHTML={{ __html: text }} />
                <Link 
                  onClick={() => clickLink()} 
                  ref={linkRef} 
                  to={link} 
                  className={classes["lower-link"]}
                >
                    <Arrow width={40} height={16} color="white" />
                </Link>
            </div>
        </div>
        
    )
}