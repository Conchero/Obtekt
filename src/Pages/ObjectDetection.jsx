import WebcamCapture from '../WebcamComponent';
const ObjectDetection  = (props) => {

    const phd = {
        title: "pizza",
        id: "3",

    }


    return <>
    <h1>ObjectDetection</h1>
    <WebcamCapture />

    <div className='bg-slate-800'>
           <h2>Entrie</h2> 
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


    <button onClick={() => props.setCamActivated(false)}>Barrez vous</button>

    </>
}


export default ObjectDetection;


