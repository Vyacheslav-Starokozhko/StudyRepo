import React, {FC} from 'react';


interface InputProps{
    register: object,
    error: object,
    label: string,
    id: string,
    inputProps: React.InputHTMLAttributes<any>,
}

const Input: FC<InputProps> = ({register, error, label, id, ...inputProps}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                {...register}
                id={id}
                {...inputProps}
            />
            {error && <div>{error.message}</div>}
        </>

    );
};

export default Input;
