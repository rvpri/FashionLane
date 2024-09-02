import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                        FashionLane
                    </Link>
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit" component={Link} to="/cart">
                        Cart
                    </Button>
                    {/* <Button color="inherit" component={Link} to="/register">
                        Register
                    </Button>
                    <Button color="inherit" component={Link} to="/profiles">
                        Profile
                    </Button> */}
                </Stack>
            </Toolbar>
        </AppBar>
    )
}