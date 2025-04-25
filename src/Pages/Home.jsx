import {Link} from 'react-router-dom';


const Home  = () => {


    return <>
    <h1>Home</h1>
    <Link to="/object-detection"><button>Activate my webcam</button></Link>
    </>
}


export default Home;