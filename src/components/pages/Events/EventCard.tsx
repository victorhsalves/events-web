import withRoot from '../../modules/withRoot';
import '../../../assets/css/global.css';
import imagemCardTeste from '../../../assets/images/imagem-card-teste.jpg';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

function EventCard(props: {handleOpen: () => void, handleClose: () => void; }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={props.handleOpen}>
                <CardMedia
                    component="img"
                    height="140"
                    image={imagemCardTeste}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={props.handleOpen}>
                    Share
                </Button>
            </CardActions>
        </Card>
    );
}

export {EventCard};