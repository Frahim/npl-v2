import React from 'react'; 
import Header from '../components/Header';
import Carbody from '../Dashbord/cardbody';

function Index() { 
    return(
        <div className='dashBordWrapper'>            
            <div className='contentWrappper'>
             <Header/>
             <Carbody/> 
            </div>        
           
        </div>

    )
}

export default Index;