import { createTheme } from '@mui/material'

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
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: 'Oxygen',
                    fontWeight: 'bold',
                }
            }
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontFamily: 'Oxygen',
                    color: 'white',
                    '&.Mui-focused': {
                        'fontFamily': 'Oxygen',
                        'color': '#D8F58C'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    fontFamily: 'Oxygen',
                    color: 'white',
                }
            }
        },
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    '&.Mui-error': {
                        'fontFamily': 'Oxygen',
                        'color': 'white'
                    }
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