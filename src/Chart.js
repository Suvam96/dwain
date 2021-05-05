import React from 'react'
import PyeChart from './PyeChart'
import { Link } from 'react-router-dom';
const Chart = () => {
    return (
        <div className ="d-flex justify-content-center align-items-center flex-column my-5 py-5">
           <div className="my-5 py-5">
           <Link to="/"><button >Go to page-1</button></Link>
           </div>
           <div>
           <PyeChart/>
           </div>
            
        </div>
    )
}

export default Chart;
