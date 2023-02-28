import withRoot from '../../modules/withRoot';
import '../../../assets/css/global.css';
import EventList from '../Events/EventList';

function Landing() {

    return (
        <EventList />
    );
}

export default withRoot(Landing);