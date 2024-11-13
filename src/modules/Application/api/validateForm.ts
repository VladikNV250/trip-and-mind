import { useTranslation } from "react-i18next";
import { formData, ValidType } from "./types/formTypes";

export default function validateForm(data: formData[]): ValidType {
    const { t } = useTranslation();
    const regExName = /^([a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’-]{2,30})(\s[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’-]{2,30})*$/ig;
    const regExTel = /^(?:\+380|380|0)\d{9}$/ig;
    const [name, tel] = data;

    const isValidName = regExName.test(name.value as string);
    const isValidTel = regExTel.test(tel.value as string);

    if (!isValidName) return {valid: false, target: t("message-target-name")};
    else if (!isValidTel) return {valid: false, target: t("message-target-tel")};

    return {valid: true, target: null};
}