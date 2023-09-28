import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Input from "../../UI/Input/Input.tsx";

type Inputs = {
    password: string
    login: string
}

const OrderForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                id="login"
                name="login"
                type="text"
                label="Login"
                register={register("login")}
                error={errors.login}
            />
            <Input
                id="password"
                type="password"
                name="password"
                label="Password"
                register={register("password")}
                error={errors.password}
            />
            <button type="submit">Log in</button>
        </form>
    );
};

export default OrderForm;
