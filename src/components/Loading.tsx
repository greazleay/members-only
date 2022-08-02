import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Loading = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Stack spacing={1}>
            <Skeleton variant='text' width={isMobile ? 310 : 710} height={40} />
            <Skeleton variant='circular' width={80} height={80} />
            <Skeleton variant='rectangular' width={isMobile ? 310 : 710} height={isMobile ? 218 : 618} />
        </Stack>
    );
}