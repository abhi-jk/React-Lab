import React from 'react'

import { useForm } from "react-hook-form"
import './form.css'

const RegistrationForm = () => {



    const {

        register,

        handleSubmit,

        watch,

        formState: { errors },

    } = useForm()



    const onSubmit = (data) => {

        console.log(data)

    }





    return (

        <div className='container'>

            <h1>Registration Form </h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='cont'>

                    <input

                        type="text"

                        name="first_name"

                        placeholder="First Name"

                        {...register("first_name", { required: true })}

                    />

                    {errors.first_name && <span>First Name is Required</span>}

                </div>

                <div className='cont'>

                    <input

                        type="text"

                        placeholder="Last Name"

                        {...register("last_name", { required: true })}

                    />

                    {errors.last_name && <span>Last Name is Required</span>}

                </div>

                <div className='cont'>

                    <input

                        type="email"

                        placeholder="Email"

                        {...register("email", { required: true })}

                    />

                    {errors.email && <span>Email is Required</span>}

                </div>

                <div className='cont'>

                    <input

                        type="number"

                        placeholder="Contact"

                        {...register("contact", { required: true })}

                    />

                    {errors.contact && <span>Contact is Required</span>}

                </div>

                <div className='cont'>

                    <button type="submit">

                        Submit

                    </button>

                </div>

            </form>



        </div>

    )

}



export default RegistrationForm;