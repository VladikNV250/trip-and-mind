import getDataForm from "./getDataForm";
import sendForm from "./sendForm";
import { formData, submitProps, ValidType } from "./types/formTypes";
import validateForm from "./validateForm";

export default async function handleForm({event, onSuccess, onError, translate}: submitProps) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data: formData[] = getDataForm(form);

    const {valid: isValid, target} = validateForm({data, translate});

    if (isValid) {
        await sendForm(data)
            .then(() => {
                onSuccess();
                form.reset();
            })
            .catch((error) => onError(error as Error));
    } else {
        onError(new Error(translate("message-error_in_input") + target))
    }
}