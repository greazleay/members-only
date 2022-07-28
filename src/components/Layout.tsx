import { Outlet } from 'react-router-dom';
import { Navbar } from '@components/Navbar';
import { Footer } from '@components/Footer';

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