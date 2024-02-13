import React, {FC} from 'react';


interface InputProps{
    register: object,
    error: object,
    label: string,
    id: string,
    inputProps: React.InputHTMLAttributes<any>,
    type: React.HTMLInputTypeAttribute
}

const UIinput: FC<InputProps> = ({register, error, label, id,type, ...inputProps}) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                {...register}
                id={id}
                {...inputProps}
                type={type}
            />
            {error && <div>{error.message}</div>}
        </>

    );
};

export default UIinput;
