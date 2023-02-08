import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../../shared/Typography';
import TextField from '../../shared/TextField';
// import '../../../assets/css/global.css';
import appFooterFacebook from '../../../assets/images/appFooterFacebook.png';
import appFooterInstagram from '../../../assets/images/appFooterInstagram.png';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="#">
        Events
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  mr: 1,
  '&:hover': {
    opacity: '80%'
  },
};

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
  {
    code: 'pf-BR',
    name: 'Português'
  }
];

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
                <Box component="a" href="#" sx={iconStyle}>
                  <img
                    style={iconStyle}
                    className='Logo'
                    src={appFooterFacebook}
                    alt="Facebook"
                  />
                </Box>
                <Box component="a" href="#" sx={iconStyle}>
                  <img
                    style={iconStyle}
                    src={appFooterInstagram}
                    alt="Instagram"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}