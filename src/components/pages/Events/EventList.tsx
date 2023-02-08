import * as React from 'react';
import withRoot from '../../modules/withRoot';
import '../../../assets/css/global.css';
import EventCard from './EventCard';
import { Grid } from '@mui/material';

function EventList() {

    return (
        <div style={{width: '100%' , display: 'flex', justifyContent: 'space-around'}}>
            <div style={{width: '80%'}}>
                <Grid
                    container
                    spacing={2}
                    sx={{ marginTop: '15px' }}
                >
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                    <Grid xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                        <EventCard />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default withRoot(EventList);