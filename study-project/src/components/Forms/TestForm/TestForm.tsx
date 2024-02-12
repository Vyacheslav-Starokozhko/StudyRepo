import React from 'react';
import {SubmitErrorHandler, SubmitHandler, useForm, Controller} from "react-hook-form";
import Select from "react-select";

interface Form {
    name: string;
    age: number;
    country: string;
}

const TestForm = () => {

    const {register, handleSubmit, watch, control, formState: {errors}} = useForm<Form>({
        defaultValues: {}
    })

    const submit: SubmitHandler<Form> = data => {
        console.log(data)
    };

    const error: SubmitErrorHandler<Form> = data => {
        console.log(data)
    };


    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]
    return (
        <form onSubmit={handleSubmit(submit, error)}>
            <input type="text"
                   {...register('name', {required: true})}
                   aria-invalid={!!errors.name}
            />
            <input type="number" {...register('age')}/>
            <Controller
                name='country'
                control={control}
                render={({field: {onChange, value, ref}}) => (
                    <div>
                        <Select
                            ref={ref}
                            options={options}
                            onChange={e => onChange(e.value)}
                            value={options.find(c => c.value === value)}
                        />
                    </div>
                )
                }
            />
            <button>Send</button>
        </form>

    );
};

export default TestForm;
