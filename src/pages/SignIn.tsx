import '../assets/css/style.css';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/use-auth';
import { useLocation, useNavigate } from 'react-router';
import { LocationState } from '../type';

export const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { isLoading, login } = useAuth();
    let location = useLocation();
    let navigate = useNavigate()
    let from = (location.state as LocationState)?.from?.pathname || "/";

    const onSubmit = async (data: any) => {
        await login(data, () => { navigate(from, { replace: true }) })
    }

    // if (authToken) return navigate(from, { replace: true });
    // if (authToken) return <Navigate to={referrer} replace={true} />

    return (
        <main className="main">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form-title">Sign In</h1>
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
                <button className="submitBtn" type="submit">{isLoading ? 'Please wait..' : 'Sign In'}</button>
            </form>
        </main>
    )
}