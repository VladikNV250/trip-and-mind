import { formData } from "./types/formTypes";

export default async function sendForm(data: formData[]) {
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })  
} 