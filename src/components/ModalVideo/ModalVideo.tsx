import classes from "./ModalVideo.module.scss";

interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalVideo({isOpen, setIsOpen}: Props) {
    const modal = isOpen ? classes["modal-open"] : classes.modal;

  return (
    <div onClick={() => setIsOpen(false)} className={modal}>
        <video 
          onClick={e => e.stopPropagation()} 
          className={classes.video} 
          controls 
        />
    </div>
  )
}
