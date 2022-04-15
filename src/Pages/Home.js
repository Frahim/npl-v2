import React from 'react'; 
import Header from '../components/Header';
import Carbody from '../Dashbord/cardbody';
import Navigation from '../components/Navigation';

function Index() { 
    return(
        <>
        <Navigation />
        <div className='dashBordWrapper'>            
            <div className='contentWrappper'>
             <Header/>
             <Carbody/> 
            </div> 
        </div>
        </>
        

    )
}

export default Index;