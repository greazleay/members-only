import Button from '@mui/material/Button'
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const NotFound = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                flexWrap: 'wrap',
                width: '100%'
            }}
        >

            <Stack spacing={3}>
                <Stack
                    spacing={2}
                    direction='row'
                    divider={<Divider orientation='vertical' flexItem />}
                >
                    <Typography variant='h4' component={'h1'} fontWeight='bold' color='yellow'>
                        404
                    </Typography>
                    <Typography variant='h4' component={'h1'} fontWeight='bold'>
                        Page Not Found
                    </Typography>
                </Stack>
                <Button
                    href='/'
                    variant='contained'
                    color='secondary'
                    startIcon={<HomeOutlinedIcon />}
                >
                    Go To Homepage
                </Button>
            </Stack>

        </Container>
    )
}