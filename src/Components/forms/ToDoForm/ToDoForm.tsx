'use client'
import React from "react";
import styles from './todoform.module.scss';
import { useForm, SubmitHandler } from "react-hook-form"

interface ToDoFormProps {

}

interface Inputs {
    title: string
    description: string
}

const ToDoForm: React.FC<ToDoFormProps> = ({}) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log("DATA",data)

    // console.log("Watcher",watch("title"))


    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
                // defaultValue="test"
                {...register("title",{ required: true })}
            />
            {errors.title && <span>This field is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <input
                {...register("description", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.description && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
};

export default ToDoForm;