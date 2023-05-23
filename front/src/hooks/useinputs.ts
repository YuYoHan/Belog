import { useState, ChangeEvent, SetStateAction, Dispatch } from 'react';

type InputValues = {
  [key: string]: string 
};

type UseInputs = (
  initialValues: InputValues,
) => [InputValues, (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => 
  void, Dispatch<SetStateAction<InputValues>>];

const useInputs: UseInputs = (initialValues) => {
  const [values, setValues] = useState<InputValues>(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  };


  return [values, handleChange, setValues];
};

export default useInputs;