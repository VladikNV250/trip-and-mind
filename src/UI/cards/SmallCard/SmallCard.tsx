import Arrow from "@/assets/icons/arrow.svg";
import { Link } from "react-router-dom";
import classes from "./SmallCard.module.scss";
import { useRef } from "react";

interface Props {
    image: string;
    text: string;
    number: string;
    link: string;
}

export default function SmallCard({image, text, number, link}: Props) {
    const linkRef = useRef(null);
    const timeout = useRef(null);
    const background = {background: `linear-gradient(359deg, rgba(0, 0, 0, 0.83) 0%, rgba(0, 0, 0, 0) 50%), url(${image})`}

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
        <div className={classes["small-card"]} style={background}>
            <div className={classes.upper}>
                <p className={classes["upper-text"]}>{number}</p>
            </div>
            <div className={classes.lower}>
                <p className={classes["lower-text"]}>
                    {text}
                </p>
                <Link 
                  onClick={() => clickLink()}
                  ref={linkRef}
                  to={link} 
                  className={classes["lower-link"]}
                >
                    <Arrow width={30} height={16} color="white" />
                </Link>
            </div>
        </div>
    )
}