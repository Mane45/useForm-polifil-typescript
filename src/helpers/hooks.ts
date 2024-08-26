import { useEffect, useState } from "react"
import { IData, IError, IOptions, IRules, IValues } from "./types"

export const useHttpGet = (url: string): [loading: boolean, result: IData[] | null] => {
    const [loading, setLoading] = useState<boolean>(true)
    const [result, setResult] = useState<IData[] | null>(null)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then((data: IData[]) => setResult(data))
            .finally(() => setLoading(false))
    }, [])

    return [loading, result]
}

export const useForm = () => {
    const [errors, setErrors] = useState<IError>({})
    const [values, setValues] = useState<IValues>({})
    const rules: IRules = {};

    const handleSubmit = (callback: (event: React.FormEvent<HTMLFormElement>) => void) => {
        return (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const temp:IError= { ...errors }
            for (const key in rules) {
                if (rules[key].required && (!values[key] || !values[key].trim())) {
                    temp[key] = rules[key].required
                } else {
                    delete temp[key]
                }
            }
            setErrors(temp)
            callback(event);
        };
    };
    const register = (key: string, options: IOptions) => {
        rules[key] = options
        return {
            value: values[key] || '',
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, [key]: e.target.value })
        }
    }

    return { handleSubmit, register, errors };
};