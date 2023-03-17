import Head from 'next/head';
import { AppBar, Box, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';

const rootStyles = {
  flexGrow: 1,
};

const titleStyles = {
  flexGrow: 1,
  textAlign: 'center',
  color: '#fff',
  textDecoration: 'none',
};

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box sx={rootStyles}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              sx={titleStyles}
              variant="h6"
            >
              JavaScript API Challenge
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      { children }
    </>
  );
}

export default Layout;
