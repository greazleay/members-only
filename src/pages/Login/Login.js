import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../auth/authContext';
import { useLocation, Redirect } from 'react-router-dom';
import authService from '../../auth/authService';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const location = useLocation();
    const referer = location.state?.from.pathname || 'members-only'

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
        setIsAuthenticated(true)
        authService.login(data)
    }

    if (isAuthenticated) {
        return <Redirect to={referer} />;
      }

    return (
        <main className="main">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Login</h1>
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
                <button className="submitBtn" type="submit">Log In</button>
            </form>
        </main>
    )
}

export default Login