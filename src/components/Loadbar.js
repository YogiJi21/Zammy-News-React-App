import React from 'react'
import loading from './loading.svg'


const Loadbar = () => {
    return (
        <div className='text-center my-2'>
            <img className='my-3' src={loading} alt="loading" />
        </div>
    )
}
export default Loadbar;
