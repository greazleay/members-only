import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import home from '../assets/images/home_img.png'

export const Home = () => {
    return (
        <Container
            maxWidth='xl'
            component={'main'}
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                minHeight: '100vh',
                flexWrap: 'wrap',
                width: '100%'
            }}
        >
            <Stack spacing={{ xs: 5, md: 10 }} alignItems='center' pb={5}>

                <Typography variant='h4' component={'div'}>
                    Share and Relive Special Moments with Friends
                </Typography>

                <Stack direction={'row'} spacing={3}>
                    <Card raised sx={{ maxWidth: 345, color: 'inherit', background: 'inherit' }}>
                        <CardContent>
                            <Typography gutterBottom variant='h6' component={'div'}>Capture</Typography>
                            <Typography variant='subtitle2' component={'p'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum metus a lacus condimentum, sit amet feugiat mi fermentum.
                                Sed sollicitudin metus turpis, et ultrices dolor ultrices in. Nunc venenatis.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card raised sx={{ maxWidth: 345, color: 'inherit', background: 'inherit' }}>
                        <CardContent>
                            <Typography gutterBottom variant='h6' component={'div'}>Share</Typography>
                            <Typography variant='subtitle2' component={'p'}>
                                In vestibulum, eros pulvinar mollis blandit, mauris leo volutpat neque, ac rutrum ante velit nec est.
                                Fusce suscipit turpis a erat tempus egestas. Nam sagittis eros vel est porta, posuere.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small'>Share</Button>
                            <Button size='small'>Learn More</Button>
                        </CardActions>
                    </Card>
                </Stack>

                <Stack spacing={2} width='100%' alignItems={'center'}>

                    <Stack spacing={1} width='60%'>
                        <Typography variant='caption' component={'span'}>Don't have an account?</Typography>
                        <Button variant='contained' endIcon={<PersonAddOutlinedIcon />}>
                            Sign Up
                        </Button>
                    </Stack>

                    <Stack spacing={1} width='60%'>
                        <Typography variant='caption' component={'span'}>Already have an account?</Typography>
                        <Button variant='contained' color='secondary' endIcon={<LoginOutlinedIcon />}>
                            Sign In
                        </Button>
                    </Stack>
                </Stack>

            </Stack>

            <Box>
                <img src={home} alt='home' style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>

        </Container >
    )
}