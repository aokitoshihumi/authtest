import { styled } from "@mui/material"
import { SxProps, Theme } from "@mui/material"

export const LoginContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    width: '100vw',
    height: '100vh',
})

export const LoginForm: SxProps<Theme> = {
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    width: {
        xs: '90%',
        sm: '60vw',
        lg: '30vw'
    },
    padding: '20px'
}