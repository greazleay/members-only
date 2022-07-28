import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        neutral: Palette['primary'];
    }

    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }

    interface SimplePaletteColorOptions {
        darker?: string;
    }

    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        xxl: true;
    }
}

declare module '@mui/material/Pagination' {
    interface PaginationPropsColorOverrides {
        neutral: true;
    }
}


export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#0971f1',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: 'body2',
                    },
                    style: {
                        fontSize: 11
                    }
                },
                {
                    props: {
                        variant: 'body1',
                    },
                    style: {
                        fontSize: 10
                    }
                }
            ],
            styleOverrides: {
                root: {
                    fontFamily: 'Oxygen'
                }
            }
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    color: 'white'
                }
            }
        },
        MuiRating: {
            styleOverrides: {
                icon: {
                    color: 'yellow'
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: 'white'
                }
            }
        },
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    fontFamily: 'Oxygen',
                    fontWeight: 'bold'
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontFamily: 'Oxygen',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                }
            }
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1900,
            xxl: 2500
        },
    },
})