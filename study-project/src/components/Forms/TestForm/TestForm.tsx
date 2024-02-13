import React from 'react';
import {SubmitErrorHandler, SubmitHandler, useForm, Controller} from "react-hook-form";
import UIinput from "../../UI/Input/Input";
import UIselect from "../../UI/Select/Select";

interface Form {
    discipline: string;
    type: string;
    theme: string;
    phone: string;
    originality : number;
    pages: number;
    files: [];
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
            <UIselect options={options} label='Discipline' error={errors.discipline} control={control} name='discipline' className="react-select-container" classNamePrefix="react-select"/>
            <UIselect options={options} label='Type of work' error={errors.type} control={control} name='type' className="react-select-container" classNamePrefix="react-select"/>
            <UIinput register={register('theme')} error={errors.theme} label='The theme of the work' id='size'/>
            <UIinput register={register('phone')} error={errors.phone} label='Phone number' id='size'/>
            <UIinput register={register('originality')} error={errors.originality} label='Originality of the work' id='size'/>
            <UIinput register={register('pages')} error={errors.pages} label='Number of pages' id='size'/>
            <UIinput register={register('files')} error={errors.files} label='Files' id='size'/>
            <button>Send</button>
        </form>

    );
};

export default TestForm;
