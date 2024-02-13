import React from 'react';
import './Select.scss';
import Select from "react-select";
import {Controller} from "react-hook-form";
interface SelectProps {
    options: [SelectOption]
    label: string
    control : any
    name : string
    className : string
    classNamePrefix : string
    error: object
}

const UIselect: React.FC<SelectProps> = ({control,name,error,options, label, className,classNamePrefix}) => {
    return (
        <div className="select">
            <label>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({field: {onChange, value, ref}}) => (
                    <>
                        <Select
                            ref={ref}
                            options={options}
                            onChange={e => onChange(e.value)}
                            value={options.find(c => c.value === value)}
                            className = {className}
                            classNamePrefix = {classNamePrefix}
                        />
                    </>
                )
                }
            />
            {error && <div>{error.message}</div>}
        </div>

    );
};

export default UIselect;
