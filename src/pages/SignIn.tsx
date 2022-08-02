import { useForm, Controller } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const SignIn = () => {

    const { handleSubmit, control } = useForm();

    const onSubmit = (data: any) => console.log(data);

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                flexWrap: 'wrap',
            }}
        >

            <Paper
                component={'form'}
                elevation={3}
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    background: 'inherit',
                    color: 'inherit',
                    width: { xs: '85%', sm: '50%' },
                    height: 500,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    py: { xs: 3, md: 3 },
                    px: { xs: 2, md: 3 }
                }}
            >
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h4' component={'h1'}>
                    Sign in
                </Typography>

                <Grid container spacing={3} direction='column'>

                    <Grid item>
                        <Controller
                            name='email'
                            control={control}
                            defaultValue=''
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    required
                                    label='Email'
                                    placeholder='Email Address'
                                    type='email'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: 'PLEASE ENTER A VALID EMAIL ADDRESS' }}
                        />
                    </Grid>

                    <Grid item>
                        <Controller
                            name='password'
                            control={control}
                            defaultValue=''
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    required
                                    label='Password'
                                    placeholder='Password'
                                    type={'password'}
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{
                                required: 'PASSWORD IS REQUIRED',
                                minLength: { value: 6, message: 'PASSWORD MUST CONTAIN AT LEAST 6 CHARACTERS' }
                            }}
                        />
                    </Grid>

                </Grid>

                <Button
                    fullWidth
                    variant='contained'
                    type='submit'
                    endIcon={<LoginOutlinedIcon />}
                >
                    Sign In
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant='body2' color={'inherit'}>
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href='/signup' variant='body2' color={'inherit'}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>

            </Paper>

        </Container>
    )
}