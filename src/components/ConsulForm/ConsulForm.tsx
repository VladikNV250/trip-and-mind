import classes from "./ConsulForm.module.scss";
import Input from "@/UI/inputs/Input/Input";
import ButtonFilled from "@/UI/buttons/ButtonFilled/ButtonFilled";
import { useState } from "react";
import Message from "@/components/Message/Message";
import { ResponseType, submitProps } from "@/modules/Application/api/types/formTypes";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
    id?: string;
    submit: ({event, onSuccess, onError, translate}: submitProps) => void;
}

export default function ConsulForm({submit, className, id}: Props) {
    const [response, setResponse] = useState<ResponseType>({status: "none", message: null});
    const { t } = useTranslation();
    const agreementHref = "https://ombudsman.gov.ua/uk/zahist-personalnih-danih-faq"; 

    function onSuccess() { 
      const message = t("message-success");

      setResponse({status: "success", message}); 
      setTimeout(() => {
        setResponse({status: "none", message});
      }, 2000)
    }
    function onError(error: Error) {
      setResponse({status: "error", message: error.message});
      setTimeout(() => {
        setResponse({status: "none", message: error.message});
      }, 2000)
    }

  return (
    <>
    <Message response={response} />
    <form 
      onSubmit={(event) => submit({event, onSuccess, onError, translate: t})} 
      id={id} 
      className={`${classes.form} ${className}`}
    >
        <Input 
          name="name"
          type="text" 
          placeholder={t("form-input-name__placeholder")}
          className={classes["input-name"]}
          required
        />
        <Input 
          type="tel" 
          name="tel"
          placeholder={t("form-input-tel__placeholder")}
          className={classes["input-tel"]}
          required
        />
        <ButtonFilled className={classes["form-button"]} type="submit" >
            {t("form-submit")}
        </ButtonFilled>
        <p className={classes.agreement}>
            {t("form-agreement")} <a href={agreementHref}>{t("form-agreement-link-text")}</a> 
        </p>
    </form>
    </>
    
  )
}
