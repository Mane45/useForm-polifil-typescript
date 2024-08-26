export interface IData {
    id?: number
    title?: string
    category?: string
    description?: string
    image?: string
    price?: number
}
export interface IError {
    [key: string]: string;
}
export interface IOptions {
    required?: string
}
export interface IRules {
    [key: string]: IOptions;
}
export interface IValues {
    [key: string]: string;
}