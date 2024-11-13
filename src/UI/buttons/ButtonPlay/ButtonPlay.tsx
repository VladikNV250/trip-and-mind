import Play from "@/assets/icons/play.svg";
import classes from "./ButtonPlay.module.scss";

interface Props {
    clickFunction: Function;
}

export default function ButtonPlay({clickFunction}: Props) {
    return (
        <button 
          className={classes.button}
          onClick={() => clickFunction()}
        >
            <Play width={19} height={21} color="white"/>
        </button>
    )
}