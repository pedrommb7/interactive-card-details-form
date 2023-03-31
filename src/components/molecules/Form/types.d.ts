export interface FormProps {
    name: Dispatch<SetStateAction<string>>;
    number: Dispatch<SetStateAction<string>>;
    month: Dispatch<SetStateAction<number>>;
    year: Dispatch<SetStateAction<number>>;
    cvc: Dispatch<SetStateAction<number>>;
    setButtonConfirmState: Dispatch<SetStateAction<boolean>>;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}