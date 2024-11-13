import { useTranslation } from "react-i18next";
import getDataForm from "./getDataForm";
import sendForm from "./sendForm";
import { formData, ValidType } from "./types/formTypes";
import validateForm from "./validateForm";

interface Props {
    event: React.FormEvent<HTMLFormElement>,
    onSuccess: () => void;
    onError: (error: any) => void;
}

export default async function handleForm({event, onSuccess, onError}: Props) {
    event.preventDefault();
    const { t } = useTranslation();
    const form = event.target as HTMLFormElement;
    const data: formData[] = getDataForm(form);

    const {valid: isValid, target} = validateForm(data);

    if (isValid) {
        await sendForm(data)
            .then(() => {
                onSuccess();
                form.reset();
            })
            .catch((error) => onError(error as Error));
    } else {
        onError(new Error(t("message-error_in_input") + target))
    }
}