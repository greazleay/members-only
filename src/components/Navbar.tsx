import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import logo from '../assets/images/logo.png';

export const Navbar = () => {

    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const pages = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
    ];

    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

    return (
        <AppBar elevation={0} position='static' color='transparent'>
            <Toolbar>
                <Container maxWidth='xxl' sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>

                    <Box>
                        <IconButton size='medium' edge='start' color='inherit' aria-label='logo'>
                            <img src={logo} alt='logo' style={{ maxWidth: '100%', height: 'auto', paddingTop: '10px' }} />
                        </IconButton>
                    </Box>

                    <List component={'nav'} sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
                        {pages.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <Link href={item.path} color='inherit' underline='none' sx={{ cursor: 'pointer' }}>
                                        {item.title}
                                    </Link>
                                </ListItem>
                            )
                        })}
                    </List>

                    <Box sx={{ py: { xs: '20px', md: '30px' } }}>
                        <Tooltip title='Open settings'>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt='User Image' src='' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign='center' sx={{ fontWeight: 'bold', fontSize: '15px' }}>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                </Container>
            </Toolbar>
        </AppBar>
    )
}