export interface FormProps {
    setName: Dispatch<SetStateAction<string>>;
    setNumber: Dispatch<SetStateAction<string>>;
    setMonth: Dispatch<SetStateAction<number>>;
    setYear: Dispatch<SetStateAction<number>>;
    setCvc: Dispatch<SetStateAction<number>>;
}