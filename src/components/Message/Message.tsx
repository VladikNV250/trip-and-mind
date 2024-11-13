import { ResponseType } from "@/modules/Application/api/types/formTypes";
import classes from "./Message.module.scss";

interface Props {
    response: ResponseType
}

export default function Message({response}: Props) {
    const {status, message} = response;
    let classMesage = classes.message;
    if (status === "success") classMesage = classes["message-success"];
    else if (status === "error") classMesage = classes["message-error"];

  return (
    <div className={classMesage}>
        {message}
    </div>
  )
}
