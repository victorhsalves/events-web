import '../../../assets/css/global.css';
import imagemCardTeste from '../../../assets/images/imagem-card-teste.jpg';
import { Typography, Box, Modal } from '@mui/material';

function EventDetails(
    props: {
        open: boolean,
        imageHeight: {
            toggle: boolean, height: string
        },
        handleClose: () => void;
        handleImageClick: () => void;
    }) {

    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute' as 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                bgcolor: 'background.paper',
                border: '2px solid #555',
                boxShadow: 24,
            }}>
                <div style={
                    {
                        width: '100%',
                        height: props.imageHeight.height,
                        overflow: 'hidden',
                        transition: 'height 0.5s',
                        cursor: 'pointer'
                    }
                }>
                    <img
                        src={imagemCardTeste}
                        style={{ width: '100%', height: 'auto' }}
                        onClick={props.handleImageClick}
                    />
                </div>
                <div style={
                    {
                        width: '100%',
                        height: '300px',
                    }
                }>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </div>
                {/* <Card>
                    <CardMedia
                        component="img"
                        height="300"
                        image={imagemCardTeste}
                        alt="green iguana"
                    />
                    <CardContent sx={{ height: '50%', border: '1px solid black' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card> */}
            </Box>
        </Modal>
    );
}

export { EventDetails };