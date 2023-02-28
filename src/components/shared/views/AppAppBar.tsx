import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../../shared/AppBar';
import Toolbar from '../../shared/Toolbar';
import { UserContext } from '../../../context/UserContext';
import { useContext } from 'react';
import { Button, Skeleton } from '@mui/material';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  const { loadingUser, signed, signOut } = useContext(UserContext);

  async function handleSignOut() {
    signOut();
  }
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'EVENTS'}
          </Link>
          {loadingUser ?
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Skeleton
                sx={{ bgcolor: '#444' }}
                variant="rounded"
                width={150}
                height={40}
              />
            </Box>
            : signed ?
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  variant="text"
                  onClick={handleSignOut}
                  sx={{ ...rightLink, color: 'secondary.main' }}
                >
                  {'Sign Out'}
                </Button>
              </Box>
              :
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  href="/sign-in/"
                  sx={rightLink}
                >
                  {'Sign In'}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  href="/sign-up/"
                  sx={{ ...rightLink, color: 'secondary.main' }}
                >
                  {'Sign Up'}
                </Link>
              </Box>
          }
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;