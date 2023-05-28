import { useCallback, useState } from 'react';

type UserInputProps = [string, (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement> & string) => void ,  React.Dispatch<React.SetStateAction<string>>]



const useInput = (initialValue : string) : UserInputProps => {
    
    const [value, setValue] = useState(initialValue);
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement> & React.ChangeEvent<HTMLTextAreaElement> & string) => {
        setValue(e.target.value);
    };

    const reset = useCallback(() => { //initialValue값으로 data초기화
        setValue(initialValue);
      }, [initialValue]);

    // return [value, onChange ,reset];
    return [value, onChange ,reset];
};
export default useInput;


