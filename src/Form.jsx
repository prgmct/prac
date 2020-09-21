import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="firstname" ref={register({ required: true })} />
            {errors.firstname && 'First name is required'}

            <input name="lastname" ref={register({ required: true })} />
            {errors.lastname && 'Last name is required'}

            <input type="submit" />
        </form>
    );
}