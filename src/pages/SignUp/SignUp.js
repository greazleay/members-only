import './style.css';
import React, { } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Convert } from 'mongo-image-converter'
import axios from 'axios';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();
    // const [submitted, setSubmitted] = useState(false);
    // let history = useHistory();

    const onSubmit = async (data) => {
        // const imageString = await Convert(data.img[0]);
        // const parsedData = { ...data, img: imageString };
        // try {
        //     axios.post('https://inv-hub.herokuapp.com/api/products/create', parsedData)
        // } catch (err) {
        //     if (err) return console.log(`${err.name}: ${err.message}`);
        // }
        // setSubmitted(true);
        // setTimeout(() => { history.replace('/products') }, 2000);
        console.log(data, "Filled");
    }

    return (
        <main className="main">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Sign up</h1>
                <fieldset className="fieldset">
                    <input className="input" placeholder="Full Name" {...register("name", { required: "NAME REQUIRED", minLength: 1 })} />
                    <label className="label" htmlFor="name">Name</label>
                    {errors.name && <p>{errors.name.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <input type="email" className="input" placeholder="Emaiil Address" {...register("email", { required: "PLEASE ENTER A VALID EMAIL" })} />
                    <label className="label" htmlFor="email">Email</label>
                    {errors.email && <p>{errors.email.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <input className="input" type="password" placeholder="Enter your Password" {...register("password", { required: "YOU MUST SPECIFY A PASSWORD", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
                    <label className="label" htmlFor="password">Password</label>
                    {errors.password && <p>{errors.password.message}</p>}
                </fieldset>
                <fieldset className="fieldset">
                    <input className="input" type="password" placeholder="Confirm password" {...register("confirmPassword", {
                        required: "PLEASE CONFIRM YOUR PASSWORD",
                        validate: {
                            matchesPreviousPassword: (value) => {
                                const { password } = getValues();
                                return password === value || "PASSWORDS MUST MATCH!";
                            }
                        }
                    })} />
                    <label className="label" htmlFor="password">Confirm Password</label>
                    {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                </fieldset>
                <button className="submitBtn" type="submit">Create</button>
            </form>
        </main>
    )
}

export default SignUp