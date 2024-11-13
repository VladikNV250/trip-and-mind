import { TFunction } from "i18next";
import { formData, ValidType } from "./types/formTypes";

interface Props {
    data: formData[],
    translate: TFunction<"translation", undefined>,
}

export default function validateForm({data, translate}: Props): ValidType {
    const regExName = /^([a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’-]{2,30})(\s[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'’-]{2,30})*$/ig;
    const regExTel = /^(?:\+380|380|0)\d{9}$/ig;
    const [name, tel] = data;

    const isValidName = regExName.test(name.value as string);
    const isValidTel = regExTel.test(tel.value as string);

    if (!isValidName) return {valid: false, target: translate("message-target-name")};
    else if (!isValidTel) return {valid: false, target: translate("message-target-tel")};

    return {valid: true, target: null};
}