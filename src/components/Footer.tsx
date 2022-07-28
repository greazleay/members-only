import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'


export const Footer = () => {
    return (
        <Box component={'footer'} sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', px: 3, py: 2 }}>

            <Box sx={{ py: 2 }}>
                <Typography variant='subtitle2' component={'span'} sx={{ fontFamily: 'inherit' }}>
                    © {new Date().getFullYear()} Pollaroid | Shopping Cart
                </Typography>
            </Box>

            <List sx={{ display: 'flex' }}>
                <ListItem>
                    <Link href='https://github.com/greazleay' target='_blank' color='inherit'>
                        <GitHubIcon />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://www.linkedin.com/in/siezes' target='_blank' color='inherit'>
                        <LinkedInIcon />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href='https://pollaroid.net' target='_blank' color='inherit'>
                        <LanguageIcon />
                    </Link>
                </ListItem>
            </List>

        </Box>
    );
}