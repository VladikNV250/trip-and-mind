export type formData = {
    name: string, 
    value: string | boolean
};

export type submitProps = {
    event: React.FormEvent<HTMLFormElement>,
    onSuccess: () => void;
    onError: (error: Error) => void;
}

export type ResponseType = {
    status: "none" | "success" | "error",
    message: string | null 
}

export type ValidType = {
    valid: boolean,
    target: null | string;
}
