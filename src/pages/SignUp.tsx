import { useForm, Controller } from 'react-hook-form';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export const SignUp = () => {

    const { handleSubmit, getValues, control } = useForm();

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
                    width: { xs: '90%', sm: '50%' },
                    height: 700,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    py: { xs: 2, md: 3 },
                    px: { xs: 2, md: 3 }
                }}
            >

                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h4' component={'h1'}>
                    Sign Up
                </Typography>

                <Grid container spacing={3} direction='column'>

                    <Grid item>
                        <Controller
                            name='firstName'
                            control={control}
                            defaultValue=''
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    required
                                    label='First Name'
                                    placeholder='First Name'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{
                                required: 'FIRST NAME IS REQUIRED',
                                minLength: { value: 2, message: 'FIRST NAME MUST CONTAIN AT LEAST 2 CHARACTERS' }
                            }}
                        />
                    </Grid>

                    <Grid item>
                        <Controller
                            name='lastName'
                            control={control}
                            defaultValue=''
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    required
                                    label='Last Name'
                                    placeholder='Last Name'
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{
                                required: 'LAST NAME IS REQUIRED',
                                minLength: { value: 2, message: 'LAST NAME MUST CONTAIN AT LEAST 2 CHARACTERS' }
                            }}
                        />
                    </Grid>

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

                    <Grid item>
                        <Controller
                            name='confirmPassword'
                            control={control}
                            defaultValue=''
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    fullWidth
                                    required
                                    label='Confirm Password'
                                    placeholder='Confirm Password'
                                    type={'password'}
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{
                                required: 'PLEASE CONFIRM YOUR PASSWORD',
                                validate: {
                                    matchesPreviousPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || 'PASSWORDS MUST MATCH!';
                                    }
                                }
                            }}
                        />
                    </Grid>

                </Grid>

                <Button
                    fullWidth
                    variant='contained'
                    type='submit'
                    endIcon={<HowToRegOutlinedIcon />}
                >
                    Register
                </Button>

                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Link href='/signin' variant='body2' color={'inherit'}>
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>

            </Paper>

        </Container>
    )
}