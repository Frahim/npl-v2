import React from 'react'; 
import Header from '../components/Header';
import Navigation from '../components/Navigation';

function NotFoundPage() { 
    return(
        <>
        <Navigation />
             <div className='notFwrapper'>
                 <div className='innerwrwp'>
                 <h1>404</h1>
             <h3>If you think what you're looking for should be here, please contact the site owner.</h3>
                 </div>             
             </div>
        </>
        

    )
}

export default NotFoundPage;