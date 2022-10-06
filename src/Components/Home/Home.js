import React from 'react';
import Lottie from 'lottie-react'
import reader from '../Assets/Reader.json'



const Home = () => {
    return (
        <div>
           <div>
            <p>
                on sale!
            </p>
            <h2 className='fs-1 font-monospace fw-bold'>A reader lives a <br></br> thousand lives  <span className='text-primary'> before he dies</span></h2>
            <p className='fs-4'>
            Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
            </p>
             <div>
                <a className='text-decoration-none btn btn-primary' href='/books' >Visit Store     </a>
             </div>
           </div>
           <div>
            <div>
            <Lottie animationData={reader} loop={true} />
            </div>
           </div>
        </div>
    );
};

export default Home;