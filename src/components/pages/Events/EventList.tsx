import * as React from 'react';
import withRoot from '../../modules/withRoot';
import '../../../assets/css/global.css';
import { Grid } from '@mui/material';
import { EventCard } from './EventCard';
import { EventDetails } from './EventDetails';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function EventList() {
    const [open, setOpen] = React.useState(false);
    const [imageHeight, setImageHeight] = React.useState({ toggle: false, height: '300px' });
    
    function handleOpen() {
        return setOpen(true);
    }
    function handleClose() {
        setImageHeight({ toggle: false, height: '300px' })
        return setOpen(false);
    }

    function handleImageCLick() {
        if (!imageHeight.toggle) {
            setImageHeight({ toggle: true, height: '500px' })
        }
        else {
            setImageHeight({ toggle: false, height: '300px' })
        }
    }


    return (
        <>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '80%' }}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ marginTop: '15px' }}
                    >
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                        <Grid item xs={4} sx={{ marginTop: '25px', marginBottom: '25px' }} display="flex" justifyContent="center" alignItems="center">
                            <EventCard handleClose={handleClose} handleOpen={handleOpen} />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <EventDetails
                open={open}
                handleClose={handleClose}
                imageHeight={imageHeight}
                handleImageClick={handleImageCLick}
            />
        </>
    );
}

export default withRoot(EventList);