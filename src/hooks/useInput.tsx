import { useState, ChangeEvent } from "react";

interface InputProps {
  initialValue: any;
}

interface UseInputReturn {
  value: any;
  bind: {
    value: any;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  };
  reset: () => void;
}

const useInput = ({
  initialValue,
}: InputProps): [
  UseInputReturn["value"],
  UseInputReturn["bind"],
  UseInputReturn["reset"]
] => {
  const [value, setValue] = useState(initialValue);

  const bind = {
    value,
    onChange: (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, bind, reset];
};

export default useInput;
