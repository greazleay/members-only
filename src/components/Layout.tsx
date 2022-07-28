import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import Box from '@mui/material/Box';

export const Layout = () => {
    return (
        <Box>
            <Navbar />
            <Outlet />
            <Footer />
        </Box>
    )
}