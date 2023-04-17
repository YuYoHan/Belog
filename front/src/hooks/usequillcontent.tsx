import { useState } from 'react';

type UserInputProps = [string, (e: React.ChangeEvent<HTMLInputElement> & string) => void ,  React.Dispatch<React.SetStateAction<string>>]

const useInput = (initialValue: string) : UserInputProps => {
    const [value, setValue] = useState(initialValue);
    const onChange = (e: React.ChangeEvent<HTMLInputElement> & string) => {
        setValue(e);
    };

    return [value, onChange, setValue];
};
export default useInput;