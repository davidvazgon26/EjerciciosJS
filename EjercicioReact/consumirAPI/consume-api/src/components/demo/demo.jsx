import React, {Suspense, lazy} from 'react';
import { Link } from 'react-router-dom'

const LazyLoader = lazy(()=>import('../lazyLoader/LazyLoader'))
// import LazyLoader from '../lazyLoader/LazyLoader';

function Demo(){
    return(
        <div>
           <h2>Hola</h2>
           <Suspense fallback={<h1>Loading...</h1>}>
           <LazyLoader/>
           </Suspense>
            <Link to="/">List</Link> 
        </div>
    )
}

export default Demo