import { formData } from "./types/formTypes";

export default function getDataForm(form: HTMLFormElement): formData[] {
    const { elements } = form
  
    const data: formData[] = Array.from(elements)
      .filter((item) => !!(item as HTMLInputElement).name)
      .map((element) => {
        const { name, type, checked, value} = element as HTMLInputElement;
        const formValue = type === 'checkbox'
          ? checked.toString()
          : value  
        
        return { name, value: formValue };
      })
  
    return data;
}