import {Link} from 'react-router-dom';
import WebcamCapture from '../WebcamComponent';
const ObjectDetection  = () => {

    const phd = {
        title: "pizza",
        id: "3",

    }


    return <>
    <h1>ObjectDetection</h1>
    <WebcamCapture />

    <div className='bg-slate-800'>
           <h2>Entries</h2>
           <div className='bg-red-500'>
            <h3>{phd.title}</h3>
            <h3>{phd.id}</h3>
            </div> 

            <div className='bg-red-500'>
            <h3>{phd.title}</h3>
            <h3>{phd.id}</h3>
            </div> 

            <div className='bg-red-500'>
            <h3>{phd.title}</h3>
            <h3>{phd.id}</h3>
            </div> 

            <div className='bg-red-500'>
            <h3>{phd.title}</h3>
            <h3>{phd.id}</h3>
            </div> 
    </div>

    <Link to="/"><button>Disconnect</button></Link>

    </>
}


export default ObjectDetection;
